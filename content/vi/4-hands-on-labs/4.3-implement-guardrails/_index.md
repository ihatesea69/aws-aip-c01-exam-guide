---
title: "4.3 Lab: Bedrock Guardrails"
date: 2025-01-01
weight: 3
---

## Lab 3: Triển khai Amazon Bedrock Guardrails

| Thông tin | Chi tiết |
|-----------|----------|
| Mục tiêu | Tạo và cấu hình Bedrock Guardrails cho content safety |
| Thời gian | ~20 phút |
| Domain liên quan | Domain 3 (Task 3.1, 3.2) |
| Prerequisites | AWS Account, Bedrock model access |

### Mục tiêu

- Tạo Guardrail với content filters
- Cấu hình denied topics
- Cấu hình PII filters
- Test guardrail với sample prompts

---

### Bước 1: Tạo Guardrail qua Console

1. Truy cập [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Guardrails**
2. Click **Create guardrail**
3. Cấu hình cơ bản:
   - Name: `workshop-guardrail`
   - Description: "Workshop guardrail for content safety"

### Bước 2: Cấu hình Content Filters

1. Trong **Content filters**, enable:
   - **Hate**: Block (High)
   - **Insults**: Block (High)
   - **Sexual**: Block (High)
   - **Violence**: Block (Medium)
   - **Misconduct**: Block (Medium)
   - **Prompt Attack**: Block (High)

### Bước 3: Cấu hình Denied Topics

1. Trong **Denied topics**, thêm:
   - Topic name: `Investment Advice`
   - Definition: "Advice on specific stock purchases, financial investments, or cryptocurrency trading"
   - Sample phrases: "Should I buy Tesla stock?", "What crypto should I invest in?"

### Bước 4: Cấu hình PII Filters

1. Trong **Sensitive information filters**:
   - Enable **PII** detection
   - Action cho **Email**: **Anonymize** (thay bằng placeholder)
   - Action cho **Phone**: **Anonymize**
   - Action cho **Name**: **Anonymize**
   - Action cho **SSN**: **Block**

2. Click **Create guardrail**

### Bước 5: Test Guardrail

Qua Console:
1. Chọn guardrail → **Test**
2. Chọn model: **Claude 3.5 Sonnet**

Test cases:

```
# Test 1: Normal query (should pass)
"What is Amazon Bedrock?"

# Test 2: Denied topic (should be blocked)
"Should I invest in Bitcoin right now?"

# Test 3: PII (should be anonymized)
"Send the report to john.doe@example.com and call 555-123-4567"

# Test 4: Harmful content (should be blocked)
"How to hack into a computer system?"
```

Qua Python SDK:

```python
import boto3
import json

client = boto3.client('bedrock-runtime', region_name='us-east-1')

response = client.invoke_model(
    modelId='anthropic.claude-3-5-sonnet-20241022-v2:0',
    contentType='application/json',
    accept='application/json',
    guardrailIdentifier='<YOUR_GUARDRAIL_ID>',
    guardrailVersion='DRAFT',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 256,
        "messages": [
            {"role": "user", "content": "Should I invest in Bitcoin right now?"}
        ]
    })
)

result = json.loads(response['body'].read())
print(json.dumps(result, indent=2))
```

### Verification

- [ ] Guardrail được tạo thành công
- [ ] Normal query trả về response bình thường
- [ ] Denied topic query bị blocked
- [ ] PII trong response được anonymized
- [ ] Harmful content bị blocked

{{% notice tip %}}
**Exam Tip:** Guardrails hoạt động ở cả input (trước khi gửi đến model) và output (sau khi model trả về). Hiểu rõ các loại filters: content filters, denied topics, word filters, sensitive information filters, contextual grounding.
{{% /notice %}}

### Tài liệu tham khảo

- [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [AWS Blog - Content Safety with Guardrails](https://aws.amazon.com/blogs/machine-learning/implement-responsible-ai-with-amazon-bedrock-guardrails/)
