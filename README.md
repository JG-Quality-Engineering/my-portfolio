# Josh Glaser — Portfolio

Personal portfolio site showcasing my background in software test engineering and my current focus on practical, "human-in-the-loop" Generative AI testing solutions.

**Live site:** [josh-glaser-portfolio.vercel.app](https://josh-glaser-portfolio.vercel.app)

## About This Project

Built from scratch with React, TypeScript, and Vite. The site covers:

- **About** — background and professional trajectory
- **Experience** — work history, pulled from my resume
- **GenAI** — mission statement on AI-augmented QA, plus a Claude-powered Q&A widget grounded in my background that visitors can ask questions to directly

A few other things built into the site:

- A per-page photo displayed beside the content on wide screens (swaps based on which tab is active)
- Global contact links (resume PDF, LinkedIn, copy-email, mailto) available from every page
- Custom favicon and social link-preview image (Open Graph/Twitter card)

## Tech Stack

- [React](https://react.dev/) 19 + TypeScript
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- Deployed on [Vercel](https://vercel.com/), with an Edge Function (`api/ask.ts`) proxying the GenAI Q&A widget to the [Claude API](https://www.anthropic.com/) (`claude-haiku-4-5`), grounded in background info via a system prompt so answers stay scoped to my experience
- Rate limiting (5 questions per IP address per 12 hours) enforced server-side via [Upstash Redis](https://upstash.com/)

## Running Locally

```bash
git clone https://github.com/JG-Quality-Engineering/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

`npm run dev` runs the Vite frontend only — it won't serve the `/api/ask` function, so the Q&A widget will fail to reach it. To test the full app locally (including the widget), install the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel dev` instead, with a `.env.local` containing `ANTHROPIC_API_KEY`, `UPSTASH_REDIS_REST_URL`, and `UPSTASH_REDIS_REST_TOKEN`.

## Connect

- LinkedIn: [linkedin.com/in/joshglaser1](https://www.linkedin.com/in/joshglaser1)
- Email: josh-glaser@outlook.com
- Resume: available for download on the live site
