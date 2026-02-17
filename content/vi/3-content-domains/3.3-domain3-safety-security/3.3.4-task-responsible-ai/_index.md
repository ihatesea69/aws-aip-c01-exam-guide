---
title: "Task 3.4: Responsible AI Principles"
date: 2025-01-01
weight: 4
---

## Task 3.4: Responsible AI principles

### Skill 3.4.1: Transparent AI systems

**Kiến thức cần nắm:**
- Reasoning displays cho user-facing explanations
- CloudWatch cho confidence metrics
- Evidence presentation cho source attribution
- **Amazon Bedrock agent tracing** cho reasoning traces

**Giải thích chi tiết:**

**Transparency trong GenAI:**

| Aspect | Implementation | Mục đích |
|--------|---------------|----------|
| Source attribution | RAG citations | User biết thông tin từ đâu |
| Confidence scores | Model probability outputs | Đánh giá độ tin cậy |
| Reasoning traces | Bedrock agent tracing | Debug và audit agent decisions |
| Explanations | Chain-of-thought prompting | User hiểu logic của AI |

**Bedrock Agent Tracing:**
- Hiển thị từng bước reasoning của agent
- Cho thấy tools nào được gọi và tại sao
- Useful cho debugging và audit
- Enable qua `enableTrace: true` trong API call

### Skill 3.4.2: Fairness evaluations

**Kiến thức cần nắm:**
- Predefined fairness metrics trong CloudWatch
- Bedrock Prompt Management cho systematic A/B testing
- **LLM-as-a-judge** solutions cho automated model evaluations

**Giải thích chi tiết:**

**Fairness Testing Approaches:**

1. **A/B Testing với Prompt Management:**
   - Tạo multiple prompt variants
   - Test với diverse demographic inputs
   - So sánh response quality across groups

2. **LLM-as-a-Judge:**
   - Sử dụng một FM để evaluate output của FM khác
   - Amazon Bedrock Model Evaluations hỗ trợ built-in
   - Metrics: relevance, coherence, harmfulness, fairness

3. **SageMaker Clarify:**
   - Bias detection trong training data
   - Model explainability (SHAP values)
   - Fairness metrics across protected attributes

{{% notice tip %}}
**Exam Tip:** LLM-as-a-Judge là approach mới và quan trọng. Amazon Bedrock hỗ trợ automated model evaluations sử dụng technique này. Hiểu cách setup và interpret results.
{{% /notice %}}

### Skill 3.4.3: Policy-compliant AI systems

**Kiến thức cần nắm:**
- Bedrock Guardrails based on policy requirements
- Model cards cho FM limitations documentation
- Lambda cho automated compliance checks

**Giải thích chi tiết:**

**Compliance Checklist cho GenAI:**

| Requirement | Implementation |
|-------------|---------------|
| Content safety | Bedrock Guardrails |
| PII protection | Guardrails PII filters + Comprehend |
| Audit trail | CloudTrail + CloudWatch Logs |
| Access control | IAM + VPC endpoints |
| Model documentation | SageMaker Model Cards |
| Bias monitoring | SageMaker Clarify + A/B testing |
| Data retention | S3 Lifecycle policies |
| Incident response | CloudWatch Alarms + SNS + Lambda |

**Automated Compliance Checks:**
```python
# Lambda function cho automated compliance
def check_compliance(event, context):
    # Check 1: Guardrails enabled?
    guardrails = bedrock.list_guardrails()
    
    # Check 2: Model invocation logging enabled?
    logging_config = bedrock.get_model_invocation_logging_configuration()
    
    # Check 3: VPC endpoints configured?
    vpc_endpoints = ec2.describe_vpc_endpoints(
        Filters=[{'Name': 'service-name', 'Values': ['*bedrock*']}]
    )
    
    # Report findings
    return {
        'guardrails_enabled': len(guardrails['guardrails']) > 0,
        'logging_enabled': logging_config.get('loggingConfig') is not None,
        'vpc_endpoints': len(vpc_endpoints['VpcEndpoints']) > 0
    }
```

### Tài liệu tham khảo

- [AWS Responsible AI](https://aws.amazon.com/ai/responsible-ai/)
- [Amazon Bedrock Model Evaluations](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html)
- [SageMaker Clarify](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html)
- [AWS Blog - LLM-as-a-Judge](https://aws.amazon.com/blogs/machine-learning/llm-as-a-judge-for-evaluating-generative-ai-applications/)
