import Card from '../components/Card'
import AskWidget from '../components/AskWidget'
import './GenAI.css'

function GenAI() {
  return (
    <section className="genai-page">
      <Card title="Human-in-the-Loop GenAI Testing" accent="violet">
        <p>
          AI is good at volume. It can generate test data, find edge cases, 
          and take on the repetitive parts of QA faster than any person. 
          Deciding what "correct" actually means for a product still takes 
          an experienced tester, so the workflows I build leave that call with people.
        </p>
        <p>
          The assistant below is a small example. It runs on Claude and answers from 
          notes I wrote about my own experience, so you can ask it questions directly. 
          I've engineered the prompt to only respond to questions about my background
          and professional experience, most of which I've added to its context.
          There may be aspects of my experience it's unaware of, but it shouldn't invent
          skills I don't have or roles I've never filled. Just keep in mind that the
          answers are AI-generated and can be wrong.
        </p>
        <p>
          Go ahead, try to break it!
          If you do, send me an email and I'll buy you a coffee.
        </p>
      </Card>

      <AskWidget />
    </section>
  )
}

export default GenAI
