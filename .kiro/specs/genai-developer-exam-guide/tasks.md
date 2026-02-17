# Implementation Plan

- [x] 1. Update landing pages and create Introduction section




  - [x] 1.1 Update root landing pages (`content/vi/_index.md` and `content/en/_index.md`) with AIP-C01 workshop title, description, and overview table


    - Update title, description, duration (~120 minutes), level (Professional), cost info


    - _Requirements: 1.1, 6.1, 6.2, 7.1_


  - [x] 1.2 Create Introduction chapter pages (`content/vi/1-introduction/_index.md` and `content/en/1-introduction/_index.md`)


    - Chapter page with overview of the AIP-C01 exam, learning objectives




    - _Requirements: 1.1, 7.1, 7.2, 7.3_


  - [ ] 1.3 Create Exam Overview sub-pages (`content/vi/1-introduction/1.1-exam-overview/_index.md` and `content/en/1-introduction/1.1-exam-overview/_index.md`)
    - Detailed exam overview: exam code, purpose, certification value, tasks validated by the exam


    - _Requirements: 1.1, 7.1, 7.4_
  - [x] 1.4 Create Target Candidate sub-pages (`content/vi/1-introduction/1.2-target-candidate/_index.md` and `content/en/1-introduction/1.2-target-candidate/_index.md`)




    - Target candidate description, years of experience, recommended AWS knowledge, out-of-scope tasks
    - _Requirements: 1.2, 1.4, 7.1, 7.4_


  - [ ] 1.5 Create Content Domains Overview sub-pages (`content/vi/1-introduction/1.3-content-domains-overview/_index.md` and `content/en/1-introduction/1.3-content-domains-overview/_index.md`)
    - Table with 5 domains and weightings, brief description of each domain
    - _Requirements: 1.3, 7.1, 7.4_

- [ ] 2. Create Preparation section
  - [ ] 2.1 Update Preparation chapter pages (`content/vi/2-preparation/_index.md` and `content/en/2-preparation/_index.md`)
    - Chapter page describing what needs to be prepared
    - _Requirements: 7.1, 7.2, 7.3_




  - [ ] 2.2 Create AWS Account Setup sub-pages (`content/vi/2-preparation/2.1-aws-account-setup/_index.md` and `content/en/2-preparation/2.1-aws-account-setup/_index.md`)
    - AWS account creation, IAM user setup with Administrator access
    - Replace existing 2.1-create-vpc content
    - _Requirements: 4.2, 7.1, 7.4_
  - [ ] 2.3 Create Enable Bedrock sub-pages (`content/vi/2-preparation/2.2-enable-bedrock/_index.md` and `content/en/2-preparation/2.2-enable-bedrock/_index.md`)
    - Step-by-step guide to enable Amazon Bedrock model access in AWS Console
    - Replace existing 2.2-create-ec2 content




    - _Requirements: 4.1, 4.2, 7.1, 7.4_

- [ ] 3. Create Content Domain 1 - FM Integration, Data Management, and Compliance (31%)
  - [ ] 3.1 Create Content Domains chapter page (`content/vi/3-content-domains/_index.md` and `content/en/3-content-domains/_index.md`)
    - Chapter page for all content domains section
    - Replace existing 3-hands-on chapter




    - _Requirements: 7.1, 7.2, 7.3_
  - [ ] 3.2 Create Domain 1 detail pages (`content/vi/3-content-domains/3.1-domain1-fm-integration/_index.md` and `content/en/3-content-domains/3.1-domain1-fm-integration/_index.md`)
    - Detailed coverage of all 6 tasks (1.1-1.6) with skills explained in depth
    - Task 1.1: Analyze requirements and design GenAI solutions (Skills 1.1.1-1.1.3)
    - Task 1.2: Select and configure FMs (Skills 1.2.1-1.2.4)




    - Task 1.3: Implement data validation and processing pipelines (Skills 1.3.1-1.3.4)
    - Task 1.4: Design and implement vector store solutions (Skills 1.4.1-1.4.5)
    - Task 1.5: Design retrieval mechanisms for FM augmentation (Skills 1.5.1-1.5.6)
    - Task 1.6: Implement prompt engineering strategies and governance (Skills 1.6.1-1.6.6)




    - Include AWS services highlights, exam tips (notice shortcodes), references to AWS blogs/docs


    - _Requirements: 2.1, 3.1, 3.2, 3.3, 7.1_

- [ ] 4. Create Content Domain 2 - Implementation and Integration (26%)
  - [x] 4.1 Create Domain 2 detail pages (`content/vi/3-content-domains/3.2-domain2-implementation/_index.md` and `content/en/3-content-domains/3.2-domain2-implementation/_index.md`)


    - Detailed coverage of all 5 tasks (2.1-2.5) with skills explained in depth
    - Task 2.1: Implement agentic AI solutions and tool integrations (Skills 2.1.1-2.1.7)
    - Task 2.2: Implement model deployment strategies (Skills 2.2.1-2.2.3)
    - Task 2.3: Design and implement enterprise integration architectures (Skills 2.3.1-2.3.5)


    - Task 2.4: Implement FM API integrations (Skills 2.4.1-2.4.4)
    - Task 2.5: Implement application integration patterns and development tools (Skills 2.5.1-2.5.6)
    - Include AWS services highlights, exam tips, references to AWS blogs/docs
    - _Requirements: 2.2, 3.1, 3.2, 3.3, 7.1_



- [ ] 5. Create Content Domain 3 - AI Safety, Security, and Governance (20%)
  - [ ] 5.1 Create Domain 3 detail pages (`content/vi/3-content-domains/3.3-domain3-safety-security/_index.md` and `content/en/3-content-domains/3.3-domain3-safety-security/_index.md`)
    - Detailed coverage of all 4 tasks (3.1-3.4) with skills explained in depth


    - Task 3.1: Implement input and output safety controls (Skills 3.1.1-3.1.5)
    - Task 3.2: Implement data security and privacy controls (Skills 3.2.1-3.2.3)
    - Task 3.3: Implement AI governance and compliance mechanisms (Skills 3.3.1-3.3.4)
    - Task 3.4: Implement responsible AI principles (Skills 3.4.1-3.4.3)




    - Include AWS services highlights, exam tips, references to AWS blogs/docs


    - _Requirements: 2.3, 3.1, 3.2, 3.3, 7.1_





- [x] 6. Create Content Domain 4 - Operational Efficiency and Optimization (12%)






  - [ ] 6.1 Create Domain 4 detail pages (`content/vi/3-content-domains/3.4-domain4-optimization/_index.md` and `content/en/3-content-domains/3.4-domain4-optimization/_index.md`)
    - Detailed coverage of all 3 tasks (4.1-4.3) with skills explained in depth




    - Task 4.1: Implement cost optimization and resource efficiency strategies (Skills 4.1.1-4.1.4)
    - Task 4.2: Optimize application performance (Skills 4.2.1-4.2.6)
    - Task 4.3: Implement monitoring systems for GenAI applications (Skills 4.3.1-4.3.6)
    - Include AWS services highlights, exam tips, references to AWS blogs/docs




    - _Requirements: 2.4, 3.1, 3.2, 3.3, 7.1_

- [ ] 7. Create Content Domain 5 - Testing, Validation, and Troubleshooting (11%)
  - [ ] 7.1 Create Domain 5 detail pages (`content/vi/3-content-domains/3.5-domain5-testing/_index.md` and `content/en/3-content-domains/3.5-domain5-testing/_index.md`)
    - Detailed coverage of all 2 tasks (5.1-5.2) with skills explained in depth
    - Task 5.1: Implement evaluation systems for GenAI (Skills 5.1.1-5.1.9)




    - Task 5.2: Troubleshoot GenAI applications (Skills 5.2.1-5.2.5)


    - Include AWS services highlights, exam tips, references to AWS blogs/docs

    - _Requirements: 2.5, 3.1, 3.2, 3.3, 7.1_


- [ ] 8. Create Hands-on Labs section
  - [x] 8.1 Create Hands-on Labs chapter page (`content/vi/4-hands-on-labs/_index.md` and `content/en/4-hands-on-labs/_index.md`)

    - Chapter page introducing the hands-on labs



    - _Requirements: 7.1, 7.2, 7.3_
  - [ ] 8.2 Create Lab 1: Invoke FM via Amazon Bedrock (`content/vi/4-hands-on-labs/4.1-invoke-fm-bedrock/_index.md` and `content/en/4-hands-on-labs/4.1-invoke-fm-bedrock/_index.md`)
    - Objective, prerequisites, duration (~15 min)
    - Step-by-step: navigate to Bedrock console, select model, invoke via console and AWS CLI/SDK
    - Python code snippets using boto3 bedrock-runtime client
    - Verification: confirm model response
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 7.1_
  - [ ] 8.3 Create Lab 2: Build RAG Pipeline with Knowledge Bases (`content/vi/4-hands-on-labs/4.2-build-rag-pipeline/_index.md` and `content/en/4-hands-on-labs/4.2-build-rag-pipeline/_index.md`)
    - Objective, prerequisites, duration (~30 min)
    - Step-by-step: create S3 bucket, upload documents, create Knowledge Base, configure vector store, test retrieval
    - AWS CLI and Console instructions
    - Verification: query Knowledge Base and verify relevant results
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 7.1_
  - [ ] 8.4 Create Lab 3: Implement Bedrock Guardrails (`content/vi/4-hands-on-labs/4.3-implement-guardrails/_index.md` and `content/en/4-hands-on-labs/4.3-implement-guardrails/_index.md`)
    - Objective, prerequisites, duration (~20 min)
    - Step-by-step: create guardrail, configure content filters, denied topics, PII filters, test with sample prompts
    - AWS Console and CLI instructions
    - Verification: test blocked and allowed content
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 7.1_
  - [ ] 8.5 Create Lab 4: Agentic AI Workflow (`content/vi/4-hands-on-labs/4.4-agentic-workflow/_index.md` and `content/en/4-hands-on-labs/4.4-agentic-workflow/_index.md`)
    - Objective, prerequisites, duration (~30 min)
    - Step-by-step: create Bedrock Agent, define action groups, configure Lambda function, test agent
    - Python code snippets, AWS Console instructions
    - Verification: agent completes multi-step task
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 7.1_
  - [ ] 8.6 Create Lab 5: Monitoring GenAI with CloudWatch (`content/vi/4-hands-on-labs/4.5-monitoring-genai/_index.md` and `content/en/4-hands-on-labs/4.5-monitoring-genai/_index.md`)
    - Objective, prerequisites, duration (~15 min)
    - Step-by-step: enable Bedrock model invocation logging, create CloudWatch dashboard, set up alarms for token usage
    - AWS Console and CLI instructions
    - Verification: view logs and metrics in CloudWatch
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 7.1_

- [ ] 9. Create References section
  - [ ] 9.1 Create References chapter page (`content/vi/5-references/_index.md` and `content/en/5-references/_index.md`)
    - Chapter page for references section
    - _Requirements: 7.1, 7.2, 7.3_
  - [ ] 9.2 Create In-scope Services pages (`content/vi/5-references/5.1-in-scope-services/_index.md` and `content/en/5-references/5.1-in-scope-services/_index.md`)
    - Complete list of in-scope AWS services organized by category with tables
    - _Requirements: 5.1, 7.1, 7.4_
  - [ ] 9.3 Create Out-of-scope Services pages (`content/vi/5-references/5.2-out-of-scope-services/_index.md` and `content/en/5-references/5.2-out-of-scope-services/_index.md`)
    - Complete list of out-of-scope AWS services organized by category
    - _Requirements: 5.2, 7.1, 7.4_
  - [ ] 9.4 Create Study Resources pages (`content/vi/5-references/5.3-study-resources/_index.md` and `content/en/5-references/5.3-study-resources/_index.md`)
    - Technologies and concepts list, curated AWS blog posts, whitepapers, Skill Builder courses, practice exams organized by Content Domain
    - _Requirements: 5.3, 5.4, 7.1, 7.4_

- [ ] 10. Create Cleanup section
  - [ ] 10.1 Create Cleanup chapter pages (`content/vi/6-cleanup/_index.md` and `content/en/6-cleanup/_index.md`)
    - List all resources created in labs in reverse order
    - Step-by-step deletion instructions with Console paths and CLI commands
    - Warning notice about cost
    - _Requirements: 8.1, 8.2, 7.1, 7.2, 7.3_

- [ ] 11. Create Summary and Exam Strategy section
  - [ ] 11.1 Create Summary chapter pages (`content/vi/7-summary/_index.md` and `content/en/7-summary/_index.md`)
    - Exam-taking strategies: time management, question approach, domain prioritization by weighting
    - Key concepts recap per Content Domain
    - Additional study resources: AWS Skill Builder, practice exams, training paths
    - References to AWS docs and FCJ
    - _Requirements: 9.1, 9.2, 9.3, 7.1, 7.2, 7.3_

- [ ] 12. Remove old template placeholder content
  - [ ] 12.1 Remove old placeholder directories and files that are no longer needed
    - Remove `content/vi/2-preparation/2.1-create-vpc/` and `content/en/2-preparation/2.1-create-vpc/`
    - Remove `content/vi/2-preparation/2.2-create-ec2/` and `content/en/2-preparation/2.2-create-ec2/`
    - Remove `content/vi/3-hands-on/` and `content/en/3-hands-on/` (replaced by 3-content-domains)
    - Remove `content/vi/4-cleanup/` and `content/en/4-cleanup/` (replaced by 6-cleanup)
    - Remove `content/vi/5-summary/` and `content/en/5-summary/` (replaced by 7-summary)
    - Remove `content/vi/1-introduction/1.1-prerequisites.md` and `content/en/1-introduction/1.1-prerequisites.md` (replaced by sub-pages)
    - _Requirements: 7.4_

- [ ] 13. Set up test infrastructure and write property-based tests
  - [ ] 13.1 Initialize Node.js project and install test dependencies (vitest, fast-check, gray-matter)
    - Create package.json, install vitest, fast-check, gray-matter for front matter parsing
    - _Requirements: 7.1_
  - [ ] 13.2 Write property test: Bilingual file parity
    - **Property 1: Bilingual file parity**
    - **Validates: Requirements 6.1, 6.2**
  - [ ] 13.3 Write property test: Hugo front matter completeness
    - **Property 2: Hugo front matter completeness**
    - **Validates: Requirements 7.1, 7.2**
  - [ ] 13.4 Write property test: Chapter pages contain children shortcode
    - **Property 3: Chapter pages contain children shortcode**
    - **Validates: Requirements 7.3**
  - [ ] 13.5 Write property test: Directory naming convention
    - **Property 4: Directory naming convention**
    - **Validates: Requirements 7.4**

- [ ] 14. Final Checkpoint - Make sure all tests are passing
  - Ensure all tests pass, ask the user if questions arise.
