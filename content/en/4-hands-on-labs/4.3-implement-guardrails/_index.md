---
title: "4.3 Lab: Bedrock Guardrails"
date: 2025-01-01
weight: 3
---

## Lab 3: Implement Amazon Bedrock Guardrails

| Info | Details |
|------|---------|
| Objective | Create and configure Bedrock Guardrails for content safety |
| Duration | ~20 minutes |
| Related Domain | Domain 3 (Task 3.1, 3.2) |
| Prerequisites | AWS Account, Bedrock model access |

### Objectives

- Create Guardrail with content filters
- Configure denied topics
- Configure PII filters
- Test guardrail with sample prompts

---

### Step 1: Create Guardrail via Console

1. Navigate to [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Guardrails**
2. Click **Create guardrail**
3. Basic configuration:
   - Name: `workshop-guardrail`
   - Description: "Workshop guardrail for content safety"

### Step 2: Configure Content Filters

1. Under **Content filters**, enable:
   - **Hate**: Block (High)
   - **Insults**: Block (High)
   - **Sexual**: Block (High)
   - **Violence**: Block (Medium)
   - **Misconduct**: Block (Medium)
   - **Prompt Attack**: Block (High)

### Step 3: Configure Denied Topics

1. Under **Denied topics**, add:
   - Topic name: `Investment Advice`
   - Definition: "Advice on specific stock purchases, financial investments, or cryptocurrency trading"
   - Sample phrases: "Should I buy Tesla stock?", "What crypto should I invest in?"

### Step 4: Configure PII Filters

1. Under **Sensitive information filters**:
   - Enable **PII** detection
   - Action for **Email**: **Anonymize** (replace with placeholder)
   - Action for **Phone**: **Anonymize**
   - Action for **Name**: **Anonymize**
   - Action for **SSN**: **Block**

2. Click **Create guardrail**

### Step 5: Test Guardrail

Via Console:
1. Select guardrail → **Test**
2. Select model: **Claude 3.5 Sonnet**

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

Via Python SDK:

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

- [ ] Guardrail created successfully
- [ ] Normal query returns normal response
- [ ] Denied topic query is blocked
- [ ] PII in response is anonymized
- [ ] Harmful content is blocked

{{% notice tip %}}
**Exam Tip:** Guardrails work on both input (before sending to model) and output (after model returns). Understand the filter types: content filters, denied topics, word filters, sensitive information filters, contextual grounding.
{{% /notice %}}

### References

- [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [AWS Blog - Content Safety with Guardrails](https://aws.amazon.com/blogs/machine-learning/implement-responsible-ai-with-amazon-bedrock-guardrails/)
