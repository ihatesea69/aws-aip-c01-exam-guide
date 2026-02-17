---
title: "Task 3.2: Data Security & Privacy"
date: 2025-01-01
weight: 2
---

## Task 3.2: Data security và privacy controls

### Skill 3.2.1: Protected AI environments

**Kiến thức cần nắm:**
- **VPC endpoints** cho network isolation
- **IAM policies** cho secure data access
- **AWS Lake Formation** cho granular data access
- CloudWatch cho data access monitoring

**Giải thích chi tiết:**

**Network Security cho GenAI:**

```
┌─────────────────────────────────────┐
│              VPC                     │
│  ┌──────────────────────────────┐   │
│  │      Private Subnet          │   │
│  │  ┌────────┐  ┌────────────┐  │   │
│  │  │ Lambda │  │ SageMaker  │  │   │
│  │  └───┬────┘  └─────┬──────┘  │   │
│  │      │             │         │   │
│  │  ┌───▼─────────────▼──────┐  │   │
│  │  │   VPC Endpoint         │  │   │
│  │  │   (Bedrock Runtime)    │  │   │
│  │  └────────────────────────┘  │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

**VPC Endpoints cho Bedrock:**
- `com.amazonaws.{region}.bedrock-runtime` — Cho model invocation
- `com.amazonaws.{region}.bedrock` — Cho management APIs
- Traffic không đi qua public internet

**IAM Best Practices:**
- Least privilege: chỉ cho phép invoke specific models
- Resource-based policies cho cross-account access
- Service control policies (SCPs) cho organizational controls

### Skill 3.2.2: Privacy-preserving systems

**Kiến thức cần nắm:**
- **Amazon Comprehend** PII detection
- **Amazon Macie** cho sensitive data discovery
- Amazon Bedrock native data privacy features
- Bedrock Guardrails cho PII filtering trong outputs
- **S3 Lifecycle** configurations cho data retention

**Giải thích chi tiết:**

**PII Protection Pipeline:**

| Stage | Service | Action |
|-------|---------|--------|
| Data at rest | Amazon Macie | Scan S3 buckets cho sensitive data |
| Input processing | Comprehend | Detect PII trong user inputs |
| During inference | Bedrock Guardrails | Redact PII trong prompts |
| Output processing | Bedrock Guardrails | Filter PII trong responses |
| Data retention | S3 Lifecycle | Auto-delete logs sau retention period |

{{% notice info %}}
**Amazon Bedrock Guardrails** có thể tự động detect và redact PII trong cả input và output. Đây là cách đơn giản nhất để bảo vệ PII trong GenAI applications.
{{% /notice %}}

**Bedrock Data Privacy:**
- Bedrock không sử dụng customer data để train models
- Data encrypted in transit (TLS 1.2+) và at rest (KMS)
- Opt-in cho model invocation logging
- Data không rời khỏi AWS Region

### Skill 3.2.3: Privacy-focused AI systems

**Kiến thức cần nắm:**
- Data masking techniques
- Anonymization strategies
- Bedrock Guardrails cho PII redaction

**Giải thích chi tiết:**

**Data Masking Strategies:**

| Technique | Mô tả | Use Case |
|-----------|--------|----------|
| Redaction | Xóa hoàn toàn PII | Logs, audit trails |
| Masking | Thay thế bằng placeholder | `[EMAIL]`, `[PHONE]` |
| Tokenization | Thay thế bằng token | Reversible, cho processing |
| Generalization | Giảm specificity | "30-40 tuổi" thay vì "35 tuổi" |

### Tài liệu tham khảo

- [Amazon Bedrock Security](https://docs.aws.amazon.com/bedrock/latest/userguide/security.html)
- [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html)
- [AWS Blog - Data privacy with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/data-privacy-with-amazon-bedrock/)
