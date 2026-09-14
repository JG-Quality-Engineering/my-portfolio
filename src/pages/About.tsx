import Card from '../components/Card'
import './About.css'

function About() {
  return (
    <section className="about-cards">
      <Card title="Background" accent="teal">
        <p>
          Rooted in the southwest suburbs of Chicago, my path into technology began
          through an unexpected lens: studying music theory at Columbia College.
          The discipline of pattern recognition and structural composition
          eventually led me to DePaul University, where I earned a BS in
          Information Technology with a concentration in Object-Oriented Programming.
          While completing my studies, I turned an internship at Encyclopedia Britannica
          into a full-time role, finishing my degree through night courses.
        </p>
      </Card>

      <Card title="Scaling Leadership & Enterprise Quality" accent="amber">
        <p>
          My trajectory in the industry accelerated within my first year at Britannica,
          earning a rapid promotion into team leadership. Over the following
          decade, my scope continuously expanded from hands-on test automation to
          directing cross-functional QA, product, and engineering efforts. That
          momentum carried into senior leadership roles at Lifelines Neuro and
          Sparq, where I built enterprise level automation frameworks, mentored
          junior engineers, and directed large, high-performing QA teams. Across massive cloud
          data migrations, medical device integrations, and complex automation
          frameworks, my focus has remained on bridging high-level strategic
          roadmap execution with technical precision.
        </p>
      </Card>

      <Card title="Current Phase & Mission: Accessible GenAI Testing" accent="violet">
        <p>
          Today, my work centers on the frontier of modern quality assurance:
          developing practical "human-in-the-loop" Generative AI testing
          solutions. By designing custom AI workflows and project-specific
          knowledge bases, I enable teams to automate time-intensive tasks and
          drastically reduce manual testing overhead.
        </p>
        <p>
          My mission is to make GenAI software testing accessible, safe, and
          highly effective for enterprise organizations. Generative AI should not
          be a mysterious black box or a threat to quality; when properly
          integrated alongside human expertise, it elevates engineering velocity,
          sharpens test accuracy, and unlocks unprecedented scale.
        </p>
      </Card>
    </section>
  )
}

export default About
