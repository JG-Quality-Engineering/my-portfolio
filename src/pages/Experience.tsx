import Card from '../components/Card'
import './Experience.css'

function Experience() {
  return (
    <section className="experience-cards">
      <Card title="Sparq | Senior Consultant, Test Automation" accent="violet">
        <p className="experience-meta">Apr 2023 – Present</p>
        <ul>
          <li>
            Set the test architecture and standards for a multi-year payroll 
            migration to Google Cloud: hundreds of thousands of data records 
            from 40+ vendor sources aggregated and transformed, including pay, 
            hours, taxes, benefits, bonuses, and PII demographics. 
            Final technical decision-maker on the engagement.
          </li>
          <li>
            Built and led an automation team of up to 20 engineers. 
            Ran sprints, staffing, and the release schedule.
          </li>
          <li>
            Led the choice and design of a Java/TestNG framework, built from scratch, 
            covering validation of Cloud Storage, BigQuery, Cloud Run, and Spanner data.
          </li>
          <li>
            Wrote the team's GitHub Copilot standards, built custom AI skills and prompts, 
            and automated test data generation, cutting manual prep from days to minutes.
          </li>
          <li>
            Owned security and PII compliance for [ADD VOLUME] of sensitive data, 
            including encryption and CI/CD security gates.
          </li>
          <li>
            Main technical contact for client leadership. Explained engineering progress 
            in terms of business risk and roadmap impact. Resposible for introducing 
            AI-assisted coding and PR reviews to the project and training other teams on its proper use.
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
            Led and mentored a 5-person QA team testing a portable 
            medical EEG device in two-week Agile sprints.
          </li>
          <li>
            Replaced a fully manual EEG data recording software test process with 
            automation built on WinAppDriver, Appium, and a custom Selenium command library. 
            Testing of the software improved from at least a full day each cycle to a few minute execution.
          </li>
          <li>
            Tested device reliability across hardware and firmware using physical EEG test equipment. 
            Several critical bugs were identified, including one where a change in patient WiFi connectivity
            would end their remote monoitoring session without warning.
          </li>
          <li>
            Introduced Robot Framework so tests doubled as readable documentation, which made 
            onboarding easier for new or transitioning test engineers by providing clear, maintainable test cases.
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
            Started as an individual contributor writing unit and integration test 
            plans and reusable Python/Selenium scripts for school.eb.com and library.eb.com 
            (today combined into education.eb.com).
          </li>
          <li>
            Promoted to technical lead in 2015. Ran daily Scrum and kept QA, 
            UX, and Development aligned across all Britannica institutional products.
          </li>
          <li>
            Cut the regression cycle from 5 days to 2 by designing automated
            performance and load testing tools that incorporated HAR analysis & Datadog monitoring.
          </li>
          <li>
            Brought automation to mobile by setting up Appium and Xcode 
            simulator testing, then trained the team on the new framework.
          </li>
        </ul>
      </Card>
    </section>
  )
}

export default Experience
