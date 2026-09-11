// Background info the Q&A widget is allowed to draw on. Vercel ignores files
// prefixed with "_" when mapping api/ to routes, so this stays a plain module
// and never becomes its own endpoint. Sourced from Josh's resume (public/resume.pdf)
// plus the site's own About/Experience copy — Josh, feel free to edit the wording
// directly, or re-paste an updated resume through Claude Code if you revise it.
export const JOSH_BACKGROUND = `
Name: Joshua Glaser
Title: Software Quality Management — Technical QA Leader & Strategy Director

Contact info (share if a visitor asks how to reach Josh):
- Location: Greater Chicago, IL
- Phone: (773) 263-5466
- Email: josh-glaser@outlook.com
- LinkedIn: linkedin.com/in/joshglaser1/

Professional summary:
Technical QA Leader & Strategy Director with over a decade of experience leading high-performing engineering teams (up to 20+ members) and spearheading enterprise-level quality frameworks. Proven expertise in orchestrating complex cloud data migrations, defining robust test automation architectures, and establishing rigorous PII data governance for massive global data streams. A forward-thinking technologist who modernizes engineering cultures by implementing Generative AI workflows, developing AI-assisted coding standards, and aligning technical roadmaps with executive business goals.

Leadership & methodology skills: Agile/Scrum Leadership, Cross-Functional Team Management (20+ members), Strategic Technical Governance & Road-mapping, Executive Stakeholder Alignment, GenAI Strategy & AI-Assisted Engineering, Risk Management & PII Compliance, Resource Allocation & Velocity Optimization, Remote Team Mentorship.

Background:
- Studied music theory at Columbia College before moving into technology; the pattern-recognition and structural thinking from music theory translated well into software engineering.
- Earned a BS in Information Technology (concentration in Object-Oriented Programming Languages) from DePaul University in Chicago, completed through night courses while working full-time.
- Turned an internship at Encyclopedia Britannica into a full-time role and finished his degree while working there.

Career history, most recent first:

Sparq | Senior Consultant, Test Automation (Apr 2023-Present)
Project: UPS Corporate Payroll Integration & Cloud migration via GCS
- Strategic Technical Governance: Defines the architectural vision, technical roadmap, and testing standards for a high-stakes, multi-year migration of all global UPS payroll vendor data in-house.
- High-Scale Engineering Leadership: Directs, mentors, and scales a cross-functional team of 8 to 20 automation and manual test engineers. Oversees sprint execution, resource allocation, and technical delivery within Azure DevOps (ADO) while leading daily Scrum sessions to optimize velocity.
- Framework Architecture & Tool Selection: Owns the selection, design, and structural governance of a ground-up Java/TestNG and Google CLI test automation framework. Oversees complex data validation strategies across Google Cloud Suite (GCS Storage, BigQuery, Cloud Run, and Spanner) to guarantee 100% data fidelity.
- GenAI & Automation Innovation: Defines organizational AI strategy by establishing engineering benchmarks for GitHub Copilot within VS Code. Conceptualized and guided the development of custom AI Skills, Prompts, and automated test data generation systems, cutting down manual cycle prep times across the engineering team.
- Risk Management & PII Compliance: Acts as the ultimate authority on data security testing protocols, ensuring the safe validation and governance of massive volumes of highly sensitive Personally Identifiable Information (PII). Mandated strict encryption standards and automated CI/CD security gates.
- Executive Stakeholder Alignment: Serves as the primary technical and delivery liaison between Sparq consulting and corporate UPS leadership, translating complex technical milestones into high-level business risks, project timelines, and strategic resource forecasts.

Lifelines Neuro | Sr. Software QA Analyst & Team Lead (Oct 2021-Apr 2023)
- Remote Team Leadership: Employed Agile testing methodologies to lead and mentor a team of 5 overseas QA members through complex, fast-paced sprints.
- Technical Innovation: Introduced an automated framework to test a portable medical EEG device desktop application (previously tested 100% manually) using WinAppDriver, Appium, and a Selenium-based command library wrapped in Python scripts.
- Hardware & Firmware Integration: Maintained an extensive stack of specialized EEG test hardware integrated with data collection software to physically test firmware and peripheral device interaction, ensuring device reliability in the field.
- Process Readability: Implemented Robot Framework within automated scripts to provide extensive logging, readability, and framework training for transition engineers.

Encyclopedia Britannica, Inc. | QA Technical Lead / Sr. Automation Engineer (Jun 2013-Oct 2021, promoted continuously from QA Automation Engineer & Product Team Lead)
- Agile & Cross-Functional Direction: Led daily Scrum sessions across QA, UX, and development teams, ensuring clear organizational alignment and smooth pipeline delivery.
- Automation Optimization: Optimized QA testing for all primary institutional web products (including school.eb.com); reduced manual testing reliance and slashed regression cycle completion times by a full week.
- Performance & Load Testing: Developed an automated method for testing web page performance using HAR output, aggregating and analyzing request response times. Conducted back-end script load testing and server monitoring via DataDog.
- Mobile Strategy Infrastructure: Introduced mobile web application automated testing using Appium with native Xcode iOS simulators. Authored best-practice documentation and trained engineering staff on mobile framework integration.
- Baseline Automation Engineering (2013-2014): Constructed unit/integration test plans and wrote reusable Python/Selenium automated test scripts to validate consumer products.

Special projects (at Encyclopedia Britannica):
- GenAI Training Innovation: Developed a method of leveraging GitHub Copilot and the ADO MCP server to train engineer workspaces from app development requirements and create a reusable project knowledge base.
- AI-assisted Coding Breakthrough: Created a suite of Copilot skills, prompts, and constraints that interact with the project knowledge base to generate reliable test automation code. Authored standards and best practices documentation for safe, responsible use of these tools.
- GenAI Tools in Action: Leveraged Copilot to build a test data factory with an intuitive interface, saving hundreds of hours otherwise spent creating data to exercise automated test code.
- Disaster Recovery Content Cloning: Salvaged and cloned thousands of mis-uploaded content packages to the production environment using front-end automation following a major staging environment mishap, saving hundreds of hours of manual labor.
- Automated Data Ingestion System: Devised a front-end script fed by data spreadsheets to mass-submit institutional user information through web forms, granting immediate system access to thousands of incoming student and teacher accounts.
- Archival Compliance Automation: Architected an annual headless browser automation system paired with PDF software to securely retrieve, lock, watermark, and archive every digital article on britannica.com for national library distribution.

Core skills:
- Languages: Python, Java, SQL, XML, CSS, Ruby, C#
- Frameworks & Tools: TestNG, Selenium, Appium, Robot Framework, Rails, Postman, Kleopatra
- Cloud & Databases: Google Cloud Suite (GCS Storage, BigQuery, Cloud Run, Spanner), Azure DevOps (ADO)
- Software & IDEs: VS Code, GitHub Copilot, Jira, Confluence, DataDog, Git, Slack, PyCharm, Apache JMeter, Xcode, CI/CD Pipelines

Education:
- DePaul University, Chicago — Bachelor of Science (BS) in Information Technology, concentration in Object-Oriented Programming Languages

Current focus and mission:
- Developing practical "human-in-the-loop" Generative AI testing solutions: architecting custom AI workflows and project-specific knowledge bases to automate test data generation and reduce manual testing overhead.
- Mission: make GenAI software testing accessible, safe, and effective for enterprise organizations - GenAI as a force multiplier alongside human expertise, not a replacement for it or a black-box risk.
`.trim()
