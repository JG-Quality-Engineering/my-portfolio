import { useEffect, useState, type FormEvent } from 'react'
import './AskWidget.css'

const MAX_QUESTIONS = 5

type QaPair = {
  question: string
  answer: string
}

type AskResponse = {
  answer?: string
  remaining?: number
  error?: string
}

function AskWidget() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<QaPair[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Starts optimistic; corrected below by the mount-time status check, and
  // again by the server's `remaining` value after each real question.
  const [remaining, setRemaining] = useState(MAX_QUESTIONS)
  const [limitReached, setLimitReached] = useState(false)

  // Runs once when the widget first mounts (empty dependency array) to ask
  // the server for this IP's actual current count, so a reload shows the
  // real number instead of always assuming a fresh 5.
  useEffect(() => {
    async function loadStatus() {
      try {
        const response = await fetch('/api/ask')
        const data: AskResponse = await response.json()
        if (typeof data.remaining === 'number') {
          setRemaining(data.remaining)
          setLimitReached(data.remaining <= 0)
        }
      } catch {
        // Leave the optimistic default in place if the status check fails.
      }
    }

    loadStatus()
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!question.trim() || limitReached || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      const data: AskResponse = await response.json()

      if (!response.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        if (response.status === 429) {
          setLimitReached(true)
          setRemaining(0)
        }
        return
      }

      setMessages((prev) => [...prev, { question, answer: data.answer ?? '' }])
      setQuestion('')
      if (typeof data.remaining === 'number') {
        setRemaining(data.remaining)
        setLimitReached(data.remaining <= 0)
      }
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
          You've used all {MAX_QUESTIONS} questions for now. Please try again
          in 12 hours.
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
            {remaining} question{remaining === 1 ? '' : 's'} remaining in this
            12-hour window.
          </p>
        </>
      )}
    </div>
  )
}

export default AskWidget
