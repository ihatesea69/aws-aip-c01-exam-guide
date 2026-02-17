# AWS Certified Generative AI Developer - Professional (AIP-C01) Exam Guide

A comprehensive bilingual (Vietnamese/English) study guide and hands-on workshop for the AWS Certified Generative AI Developer - Professional (AIP-C01) certification exam. Built with Hugo and deployed on GitHub Pages.

## Overview

The AIP-C01 exam validates a candidate's ability to integrate foundation models into applications and business workflows using AWS technologies. This guide provides detailed coverage of all five content domains, practical hands-on labs, and curated study resources.

### Exam Information

| Field | Detail |
|-------|--------|
| Exam Code | AIP-C01 |
| Level | Professional |
| Duration | 180 minutes |
| Questions | 85 (65 scored + 20 unscored) |
| Passing Score | 750/1000 |
| Cost | 300 USD |

### Content Domains

| Domain | Weight | Focus |
|--------|--------|-------|
| Domain 1 | 31% | Foundation Model Integration, Data Management, and Compliance |
| Domain 2 | 26% | Implementation and Integration |
| Domain 3 | 20% | AI Safety, Security, and Governance |
| Domain 4 | 12% | Operational Efficiency and Optimization |
| Domain 5 | 11% | Testing, Validation, and Troubleshooting |

## Features

- Bilingual content in Vietnamese and English
- Detailed coverage of all 20 exam tasks and 100+ skills
- 5 hands-on labs using Amazon Bedrock, Knowledge Bases, Guardrails, Agents, and CloudWatch
- AWS service reference tables organized by domain
- Exam tips and study strategies per domain
- Curated links to AWS official documentation and blog posts
- Property-based content validation tests

## Hands-on Labs

1. Invoke Foundation Models via Amazon Bedrock (Console, CLI, SDK)
2. Build a RAG Pipeline with Bedrock Knowledge Bases
3. Implement Amazon Bedrock Guardrails (content filters, PII, denied topics)
4. Agentic AI Workflow with Bedrock Agents and Lambda
5. Monitor GenAI Applications with CloudWatch

## Content Structure

```
content/
  vi/                                  # Vietnamese
    1-introduction/                    # Exam overview, target candidate, domains
    2-preparation/                     # AWS account setup, Bedrock access
    3-content-domains/                 # 5 domains, 20 tasks as sub-pages
      3.1-domain1-fm-integration/      # 6 task sub-pages
      3.2-domain2-implementation/      # 5 task sub-pages
      3.3-domain3-safety-security/     # 4 task sub-pages
      3.4-domain4-optimization/        # 3 task sub-pages
      3.5-domain5-testing/             # 2 task sub-pages
    4-hands-on-labs/                   # 5 practical labs
    5-references/                      # In-scope/out-of-scope services, study resources
    6-cleanup/                         # Lab resource cleanup
    7-summary/                         # Exam strategy and recap
  en/                                  # English (mirrors vi/)
```

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Static Site Generator | Hugo 0.139.4+ (Extended) |
| Theme | hugo-theme-learn |
| Testing | Vitest + fast-check (property-based) |
| Deployment | GitHub Pages via GitHub Actions |
| Languages | Vietnamese, English |

## Prerequisites

- Git
- Hugo Extended 0.139.4+
- Node.js 18+ (for tests)
- AWS account with Bedrock access (for labs)

## Local Development

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/ihatesea69/aws-aip-c01-exam-guide.git
cd aws-aip-c01-exam-guide

# Start dev server
hugo server -D

# Run content validation tests
npm install
npm test
```

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to the main branch.

### Quick Setup with GitHub CLI

```bash
# Authenticate
gh auth login

# Create repository and push
gh repo create aws-aip-c01-exam-guide \
  --description "Bilingual study guide for AWS Certified Generative AI Developer - Professional (AIP-C01) with hands-on labs" \
  --public \
  --source=. \
  --remote=origin \
  --push

# Enable GitHub Pages with Actions
gh api repos/:owner/aws-aip-c01-exam-guide/pages \
  --method POST \
  --field build_type="workflow" 2>/dev/null || true
```

After pushing, update `config.toml` with your actual GitHub username in the `baseURL` field, or let the workflow handle it automatically via `configure-pages`.

### Manual Setup

1. Create a GitHub repository
2. Push code to the main branch
3. Go to Settings > Pages > Source: GitHub Actions
4. Wait for the workflow to complete

## Testing

Property-based tests validate content structure:

```bash
npm test
```

Tests cover:
- Bilingual file parity (every Vietnamese page has an English counterpart)
- Hugo front matter completeness (title, date, weight)
- Chapter page structure (children shortcode)
- Directory naming conventions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Maintain bilingual parity (update both vi/ and en/)
4. Ensure tests pass (`npm test`)
5. Submit a pull request

## License

MIT

## Disclaimer

This is an unofficial study guide. AWS, Amazon Bedrock, and related service names are trademarks of Amazon Web Services, Inc. This guide is not affiliated with or endorsed by AWS.

---

Resources: [AWS Certification](https://aws.amazon.com/certification/) | [AWS Skill Builder](https://skillbuilder.aws/) | [AIP-C01 Exam Guide](https://aws.amazon.com/certification/certified-generative-ai-developer-professional/)
