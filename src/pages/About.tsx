import Card from '../components/Card'
import './About.css'

function About() {
  return (
    <section className="about-cards">
      <Card title="Background" accent="teal">
        <p>
          I grew up in Chicago's southwest suburbs and came to technology through studying 
          music theory at Columbia College. Much of music is pattern recognition and structure, 
          and since I didn't see many job openings for composers, I found my way to DePaul, 
          where I earned a BS in Information Technology with a concentration in Object-Oriented 
          Programming. Along the way I took an internship at Encyclopedia Britannica, turned it 
          into a full-time job, and finished my degree by taking night courses.
        </p>
      </Card>

      <Card title="From Tester to QA Leader" accent="amber">
        <p>
          Within my first year at Britannica, I was promoted to team lead. Over the next ten years 
          my job grew from writing test automation to running QA, product, and engineering work 
          across teams. At Lifelines Neuro and Sparq, I moved into senior leadership. I built the 
          automation frameworks, mentored junior engineers, and have run QA teams of up to 20 people.
          The work ranged from massive cloud enterprise data migrations to medical device integrations. 
          Through all of it, I've worked in the gap between the roadmap and the technical 
          details that decide whether or not software is ready to ship.
        </p>
      </Card>

      <Card title="My Current Focus" accent="violet">
        <p>
          Today I build human-in-the-loop GenAI testing tools. I design custom AI workflows 
          and project-specific knowledge bases that let teams automate the slow, repetitive parts of 
          testing. I've become an expert at identifying bottleneck tasks, such as creating PII-free 
          test data at UPS, and leveraged the power of AI to free up engineers to focus on the work 
          that requires human judgment. Augmenting my team's workflows with these tools has saved 
          hundreds of man hours for companies and drastically improved our code accuracy and coverage.
        </p>
        <p>
          I want enterprise teams to be able to adopt GenAI testing safely, understand what it's 
          doing, and trust the results. It doesn't have to be a black box or a risk to quality. 
          Paired with experienced testers, it helps teams ship faster, catch more defects, 
          and cover more ground than they could without it.
        </p>
      </Card>
    </section>
  )
}

export default About
