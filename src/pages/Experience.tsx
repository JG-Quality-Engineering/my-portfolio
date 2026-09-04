import Card from '../components/Card'
import './Experience.css'

function Experience() {
  return (
    <section className="experience-cards">
      <Card title="Sparq | Senior Consultant, Test Automation" accent="violet">
        <p className="experience-meta">Apr 2023 – Present</p>
        <ul>
          <li>
            Set the architectural vision and testing standards for a
            multi-year, global payroll data migration to Google Cloud, acting
            as the top technical authority on the engagement
          </li>
          <li>
            Built and led a cross-functional automation team of up to 20
            engineers, owning sprint execution, resourcing, and delivery
            cadence
          </li>
          <li>
            Directed the selection and design of a ground-up Java/TestNG
            automation framework across GCS Storage, BigQuery, Cloud Run, and
            Spanner
          </li>
          <li>
            Pioneered GenAI-driven engineering practices — established GitHub
            Copilot usage standards, built custom AI skills and prompts, and
            automated test data generation to cut manual prep time
          </li>
          <li>
            Owned data security and PII compliance strategy for large volumes
            of sensitive data, enforcing encryption and CI/CD security gates
          </li>
          <li>
            Acted as the primary technical liaison between consulting and
            client leadership, translating engineering milestones into
            business risk and roadmap terms
          </li>
        </ul>
      </Card>

      <Card
        title="Lifelines Neuro | Sr. Software QA Analyst & Team Lead"
        accent="amber"
      >
        <p className="experience-meta">Oct 2021 – Apr 2023</p>
        <ul>
          <li>
            Led and mentored a 5-person QA team through fast-paced Agile
            sprints for a portable medical EEG device
          </li>
          <li>
            Replaced a fully manual test process with an automated framework
            built on WinAppDriver, Appium, and a custom Selenium command
            library
          </li>
          <li>
            Worked across the hardware/firmware boundary to validate device
            reliability alongside physical EEG test equipment
          </li>
          <li>
            Introduced Robot Framework for readable, well-documented tests to
            ease onboarding of transitioning engineers
          </li>
        </ul>
      </Card>

      <Card
        title="Encyclopedia Britannica | QA Automation Engineer → QA Technical Lead"
        accent="teal"
      >
        <p className="experience-meta">Jun 2013 – Oct 2021</p>
        <ul>
          <li>
            Started as an individual contributor, writing unit/integration
            test plans and reusable Python/Selenium scripts for consumer
            products
          </li>
          <li>
            Promoted into a technical lead role, running daily Scrum
            ceremonies and aligning QA, UX, and engineering across the
            company's core web products
          </li>
          <li>
            Cut regression cycle time by a full week through targeted
            performance and load testing (HAR-based analysis, DataDog
            monitoring)
          </li>
          <li>
            Extended automation into mobile, standing up Appium/Xcode
            simulator testing and training the team on the new framework
          </li>
        </ul>
      </Card>
    </section>
  )
}

export default Experience
