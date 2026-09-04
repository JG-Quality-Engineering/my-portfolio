import Card from '../components/Card'
import AskWidget from '../components/AskWidget'
import './GenAI.css'

function GenAI() {
  return (
    <section className="genai-page">
      <Card title="Human-in-the-Loop GenAI Testing" accent="violet">
        <p>
          Generative AI is changing how software gets built and tested, but it
          works best as a force multiplier for skilled engineers, not a
          replacement for their judgment. My focus is on practical "human in
          the loop" workflows: using AI to generate test data, surface edge
          cases, and accelerate repetitive QA work, while keeping experienced
          testers in control of what "correct" actually means.
        </p>
        <p>
          The widget below is a small demonstration of that philosophy in
          practice — a Claude-powered assistant grounded in background
          information I've provided about my experience, so you can ask it
          questions directly.
        </p>
      </Card>

      <AskWidget />
    </section>
  )
}

export default GenAI
