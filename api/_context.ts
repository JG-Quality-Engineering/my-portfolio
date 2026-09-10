// Background info the Q&A widget is allowed to draw on. Vercel ignores files
// prefixed with "_" when mapping api/ to routes, so this stays a plain module
// and never becomes its own endpoint. Drafted from the About/Experience page
// copy already on the site — Josh, feel free to edit the wording directly.
export const JOSH_BACKGROUND = `
Name: Josh Glaser
Role: 14-year QA / test automation engineer. Currently a Senior Consultant at Sparq, focused on test automation leadership and GenAI-driven engineering practices.

Background:
- Studied music theory at Columbia College before moving into technology; the pattern-recognition and structural thinking from music theory translated well into software engineering.
- Earned a BS in Information Technology (concentration in Object-Oriented Programming) from DePaul University, completed through night courses while working full-time.
- Turned an internship at Encyclopedia Britannica into a full-time role and finished his degree while working there.

Career history, most recent first:
- Sparq | Senior Consultant, Test Automation (Apr 2023-Present): Set architectural vision and testing standards for a multi-year global payroll data migration to Google Cloud. Built and led a cross-functional automation team of up to 20 engineers. Directed a ground-up Java/TestNG automation framework across GCS Storage, BigQuery, Cloud Run, and Spanner. Pioneered GenAI-driven engineering practices, including GitHub Copilot usage standards, custom AI skills/prompts, and automated test data generation. Owned data security and PII compliance strategy. Acted as the primary technical liaison between consulting and client leadership.
- Lifelines Neuro | Sr. Software QA Analyst & Team Lead (Oct 2021-Apr 2023): Led and mentored a 5-person QA team for a portable medical EEG device. Replaced a manual test process with automation built on WinAppDriver, Appium, and a custom Selenium command library. Worked across the hardware/firmware boundary. Introduced Robot Framework to ease onboarding of transitioning engineers.
- Encyclopedia Britannica | QA Automation Engineer -> QA Technical Lead (Jun 2013-Oct 2021): Started as an individual contributor writing test plans and Python/Selenium scripts. Promoted to technical lead, running Scrum ceremonies and aligning QA, UX, and engineering. Cut regression cycle time by a full week through performance/load testing. Extended automation into mobile via Appium/Xcode simulator testing.

Current focus and mission:
- Developing practical "human-in-the-loop" Generative AI testing solutions: architecting custom AI workflows and project-specific knowledge bases to automate test data generation and reduce manual testing overhead.
- Mission: make GenAI software testing accessible, safe, and effective for enterprise organizations - GenAI as a force multiplier alongside human expertise, not a replacement for it or a black-box risk.
`.trim()
