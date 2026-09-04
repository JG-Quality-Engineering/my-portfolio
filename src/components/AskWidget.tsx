import { useState, type FormEvent } from 'react'
import './AskWidget.css'

const MAX_QUESTIONS = 3
const SESSION_STORAGE_KEY = 'genai-widget-questions-asked'

type QaPair = {
  question: string
  answer: string
}

// Stub for the real call — step 3 will add a serverless function and step 4
// will swap this out for a fetch() to it. Keeping the UI/state work here
// separate means we can build and test this component before the backend
// exists at all.
async function fetchAnswer(question: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return `(stub response) You asked: "${question}"`
}

function AskWidget() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<QaPair[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [questionsAsked, setQuestionsAsked] = useState(() => {
    const stored = sessionStorage.getItem(SESSION_STORAGE_KEY)
    return stored ? Number(stored) : 0
  })

  const limitReached = questionsAsked >= MAX_QUESTIONS
  const questionsRemaining = MAX_QUESTIONS - questionsAsked

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!question.trim() || limitReached || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const answer = await fetchAnswer(question)
      setMessages((prev) => [...prev, { question, answer }])
      setQuestion('')

      const nextCount = questionsAsked + 1
      setQuestionsAsked(nextCount)
      sessionStorage.setItem(SESSION_STORAGE_KEY, String(nextCount))
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="ask-widget">
      <h2>Ask about Josh</h2>

      {messages.length > 0 && (
        <div className="ask-widget__messages">
          {messages.map((pair, index) => (
            <div className="ask-widget__pair" key={index}>
              <p className="ask-widget__question">{pair.question}</p>
              <p className="ask-widget__answer">{pair.answer}</p>
            </div>
          ))}
        </div>
      )}

      {error && <p className="ask-widget__error">{error}</p>}

      {limitReached ? (
        <p className="ask-widget__limit">
          You've used all {MAX_QUESTIONS} questions for this session.
        </p>
      ) : (
        <>
          <form className="ask-widget__form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question about Josh's experience..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !question.trim()}>
              {isLoading ? 'Asking...' : 'Ask'}
            </button>
          </form>
          <p className="ask-widget__count">
            {questionsRemaining} question{questionsRemaining === 1 ? '' : 's'}{' '}
            remaining this session.
          </p>
        </>
      )}
    </div>
  )
}

export default AskWidget
