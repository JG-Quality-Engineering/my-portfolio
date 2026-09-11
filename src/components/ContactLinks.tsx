import { useState } from 'react'
import './ContactLinks.css'

// TODO(Josh): replace with your real values.
// - Drop your resume PDF at public/resume.pdf so this path resolves (same
//   reason genai.jpg had to live in public/ for the favicon/OG tags).
const RESUME_URL = '/resume.pdf'
const LINKEDIN_URL = 'https://www.linkedin.com/in/joshglaser1/'
const EMAIL = 'josh-glaser@outlook.com'

function ContactLinks() {
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API can be blocked (permissions, insecure context) — the
      // mailto/LinkedIn/resume links still work as a fallback either way.
    }
  }

  return (
    <div className="contact-links">
      <a
        className="contact-links__item"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Resume
      </a>
      <a
        className="contact-links__item"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <button className="contact-links__item" type="button" onClick={handleCopyEmail}>
        {copied ? 'Copied!' : 'Copy Email'}
      </button>
      <a className="contact-links__item" href={`mailto:${EMAIL}`}>
        Email Me
      </a>
    </div>
  )
}

export default ContactLinks
