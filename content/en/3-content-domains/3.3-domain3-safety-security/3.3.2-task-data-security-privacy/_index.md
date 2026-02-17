---
title: "Task 3.2: Data Security & Privacy"
date: 2025-01-01
weight: 2
---

## Task 3.2: Data Security and Privacy Controls

### Skill 3.2.1: Protected AI Environments

**Key Knowledge:**
- **VPC endpoints** for network isolation
- **IAM policies** for secure data access
- **AWS Lake Formation** for granular data access
- CloudWatch for data access monitoring

**Detailed Explanation:**

**VPC Endpoints for Bedrock:**
- `com.amazonaws.{region}.bedrock-runtime` — For model invocation
- `com.amazonaws.{region}.bedrock` — For management APIs
- Traffic does not traverse the public internet

**IAM Best Practices:**
- Least privilege: only allow invoking specific models
- Resource-based policies for cross-account access
- Service control policies (SCPs) for organizational controls

### Skill 3.2.2: Privacy-Preserving Systems

**Key Knowledge:**
- **Amazon Comprehend** PII detection
- **Amazon Macie** for sensitive data discovery
- Amazon Bedrock native data privacy features
- Bedrock Guardrails for PII filtering in outputs
- **S3 Lifecycle** configurations for data retention

**PII Protection Pipeline:**

| Stage | Service | Action |
|-------|---------|--------|
| Data at rest | Amazon Macie | Scan S3 buckets for sensitive data |
| Input processing | Comprehend | Detect PII in user inputs |
| During inference | Bedrock Guardrails | Redact PII in prompts |
| Output processing | Bedrock Guardrails | Filter PII in responses |
| Data retention | S3 Lifecycle | Auto-delete logs after retention period |

{{% notice info %}}
**Amazon Bedrock Guardrails** can automatically detect and redact PII in both input and output. This is the simplest way to protect PII in GenAI applications.
{{% /notice %}}

### Skill 3.2.3: Privacy-Focused AI Systems

**Key Knowledge:**
- Data masking techniques
- Anonymization strategies
- Bedrock Guardrails for PII redaction

| Technique | Description | Use Case |
|-----------|------------|----------|
| Redaction | Completely remove PII | Logs, audit trails |
| Masking | Replace with placeholder | `[EMAIL]`, `[PHONE]` |
| Tokenization | Replace with token | Reversible, for processing |
| Generalization | Reduce specificity | "30-40 years old" instead of "35" |

### References

- [Amazon Bedrock Security](https://docs.aws.amazon.com/bedrock/latest/userguide/security.html)
- [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html)
- [AWS Blog - Data privacy with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/data-privacy-with-amazon-bedrock/)
