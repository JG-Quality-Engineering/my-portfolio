import Anthropic from '@anthropic-ai/sdk'
import { Redis } from '@upstash/redis'
import { JOSH_BACKGROUND } from './_context'

// Edge runtime: standard Request/Response instead of Vercel's req/res types,
// and no persistent server process — a good fit since both the Upstash and
// Anthropic clients talk over plain HTTPS anyway.
export const config = { runtime: 'edge' }

const MAX_QUESTIONS_PER_WINDOW = 5
const WINDOW_SECONDS = 60 * 60 * 12 // 12 hours
const MAX_QUESTION_LENGTH = 500

const redis = Redis.fromEnv()
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a Q&A assistant embedded on Josh Glaser's portfolio website. Visitors ask you questions about Josh's professional background.

Answer ONLY using the background information provided below.

The "Core skills" section lists each skill with the specific role(s) it was used in, in parentheses — e.g. "Jira(EB, LN)" means Jira was used at Encyclopedia Britannica and Lifelines Neuro, and "(all roles)" means every role. Never state or imply a skill was used at a role, or is used currently, unless that role is listed in its parentheses — a skill with no roles listed isn't tied to any specific role Josh has held, so don't guess or infer one.

If a visitor asks whether Josh has experience with a specific tool, technology, or skill that isn't mentioned in the background information, don't just decline — name the specific thing they asked about, note there's no direct reference to it in the background you have for Josh, then pivot positively: learning new technologies quickly has been one of his biggest strengths throughout his career, and he treats unfamiliar tools as a welcome challenge, not a roadblock.

If a question is unrelated to Josh's background entirely (general chat, coding help, unrelated topics), politely explain that you can only answer questions about Josh's background and invite the visitor to ask something else.

Keep answers concise (a few sentences). Respond in plain text only — no Markdown formatting (no asterisks, headers, or bullet lists), since the widget displaying your answer doesn't render it.

Background information about Josh Glaser:
${JOSH_BACKGROUND}`

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || 'unknown'
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  let question: string
  try {
    const body = await request.json()
    question = typeof body.question === 'string' ? body.question.trim() : ''
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400)
  }

  if (!question) {
    return jsonResponse({ error: 'A question is required.' }, 400)
  }
  if (question.length > MAX_QUESTION_LENGTH) {
    return jsonResponse({ error: 'Question is too long.' }, 400)
  }

  const ip = getClientIp(request)
  const count = await redis.incr(`ratelimit:${ip}`)
  if (count === 1) {
    await redis.expire(`ratelimit:${ip}`, WINDOW_SECONDS)
  }

  if (count > MAX_QUESTIONS_PER_WINDOW) {
    return jsonResponse(
      {
        error: "You've reached the question limit for now. Please try again in 12 hours.",
        remaining: 0,
      },
      429,
    )
  }

  const remaining = MAX_QUESTIONS_PER_WINDOW - count

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: question }],
    })

    const answer = message.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')

    return jsonResponse({ answer, remaining }, 200)
  } catch (err) {
    console.error('Anthropic API error:', err)
    return jsonResponse(
      { error: 'Something went wrong reaching the assistant. Please try again.' },
      502,
    )
  }
}
