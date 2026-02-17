---
title: "Task 3.3: AI Governance & Compliance"
date: 2025-01-01
weight: 3
---

## Task 3.3: AI governance và compliance

### Skill 3.3.1: Compliance frameworks

**Kiến thức cần nắm:**
- **SageMaker AI** cho programmatic model cards
- **AWS Glue** cho data lineage tracking
- Metadata tagging cho data source attribution
- CloudWatch Logs cho decision logs

**Giải thích chi tiết:**

**Model Cards** là tài liệu mô tả:
- Model purpose và intended use cases
- Training data và methodology
- Performance metrics và limitations
- Ethical considerations và bias evaluations

**SageMaker Model Cards:**
```python
import boto3

sm_client = boto3.client('sagemaker')

response = sm_client.create_model_card(
    ModelCardName='genai-chatbot-model-card',
    Content=json.dumps({
        "model_overview": {
            "model_description": "Customer support chatbot using Claude 3",
            "model_creator": "ML Team",
            "problem_type": "Text Generation"
        },
        "intended_uses": {
            "purpose_of_model": "Answer customer queries",
            "intended_users": ["Customer support team"],
            "out_of_scope_uses": ["Medical advice", "Legal advice"]
        }
    }),
    ModelCardStatus='Draft'
)
```

### Skill 3.3.2: Data source tracking

**Kiến thức cần nắm:**
- **AWS Glue Data Catalog** cho data source registration
- Metadata tagging cho source attribution trong FM-generated content
- **CloudTrail** cho audit logging

**Giải thích chi tiết:**

**Data Lineage cho GenAI:**
```
Source Documents (S3)
    ↓ [Glue Catalog tracks source]
Embedding Pipeline (Bedrock/Lambda)
    ↓ [Metadata tags preserved]
Vector Store (OpenSearch)
    ↓ [Source attribution in metadata]
RAG Response (Bedrock)
    ↓ [Citations include source docs]
User Response
```

**CloudTrail logging cho Bedrock:**
- Logs tất cả API calls (InvokeModel, CreateGuardrail, etc.)
- Tracks who invoked which model, when
- Essential cho audit và compliance

### Skill 3.3.3: Organizational governance

**Kiến thức cần nắm:**
- Governance frameworks aligned với organizational policies
- Regulatory requirements compliance
- Responsible AI principles enforcement

**Giải thích chi tiết:**

**AI Governance Framework:**

| Component | Implementation |
|-----------|---------------|
| Policy definition | Organizational AI usage policies |
| Access control | IAM, SCPs, resource policies |
| Monitoring | CloudWatch, CloudTrail |
| Compliance checks | Lambda automated checks |
| Reporting | CloudWatch dashboards, model cards |
| Review process | Human review workflows |

### Skill 3.3.4: Continuous monitoring và governance controls

**Kiến thức cần nắm:**
- Automated detection cho misuse, drift, policy violations
- Bias drift monitoring
- Automated alerting và remediation workflows
- Token-level redaction
- Response logging và AI output policy filters

**Giải thích chi tiết:**

**Monitoring Pipeline:**
```
Model Invocations → CloudWatch Logs
    ↓
CloudWatch Metrics (token usage, error rates)
    ↓
CloudWatch Alarms (anomaly detection)
    ↓
SNS → Lambda (automated remediation)
```

**Drift Detection:**
- Monitor response quality over time
- Compare against golden datasets
- Alert khi quality drops below threshold
- Automated rollback nếu cần

### Tài liệu tham khảo

- [Amazon SageMaker Model Cards](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html)
- [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html)
- [AWS Blog - AI Governance](https://aws.amazon.com/blogs/machine-learning/implement-ai-governance-with-aws/)
- [AWS CloudTrail for Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html)
