import type { ReactNode } from 'react'
import './Card.css'

type CardProps = {
  title: string
  accent: 'teal' | 'amber' | 'violet'
  children: ReactNode
}

function Card({ title, accent, children }: CardProps) {
  return (
    <article className={`card card--${accent}`}>
      <h2>{title}</h2>
      {children}
    </article>
  )
}

export default Card
