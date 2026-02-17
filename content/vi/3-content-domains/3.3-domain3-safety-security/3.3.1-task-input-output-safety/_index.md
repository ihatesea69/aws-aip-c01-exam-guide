---
title: "Task 3.1: Input & Output Safety Controls"
date: 2025-01-01
weight: 1
---

## Task 3.1: Triển khai input và output safety controls

### Skill 3.1.1: Content safety cho inputs

**Kiến thức cần nắm:**
- **Amazon Bedrock Guardrails** — Content filtering cho harmful inputs
- Step Functions và Lambda cho custom moderation workflows
- Real-time validation mechanisms

**Giải thích chi tiết:**

**Amazon Bedrock Guardrails** cung cấp nhiều lớp bảo vệ:

| Filter Type | Mô tả | Ví dụ |
|-------------|--------|-------|
| Content filters | Lọc nội dung harmful (hate, violence, sexual) | Block prompts chứa nội dung bạo lực |
| Denied topics | Chặn topics cụ thể | Không cho phép hỏi về financial advice |
| Word filters | Block từ/cụm từ cụ thể | Chặn profanity, competitor names |
| PII filters | Detect và redact PII | Mask email, phone numbers |
| Contextual grounding | Kiểm tra factual accuracy | Verify response dựa trên source documents |

**Cấu hình Guardrails:**
```python
import boto3

client = boto3.client('bedrock')

response = client.create_guardrail(
    name='content-safety-guardrail',
    description='Filter harmful content',
    contentPolicyConfig={
        'filtersConfig': [
            {
                'type': 'SEXUAL',
                'inputStrength': 'HIGH',
                'outputStrength': 'HIGH'
            },
            {
                'type': 'VIOLENCE',
                'inputStrength': 'HIGH',
                'outputStrength': 'HIGH'
            },
            {
                'type': 'HATE',
                'inputStrength': 'HIGH',
                'outputStrength': 'HIGH'
            }
        ]
    }
)
```

### Skill 3.1.2: Content safety cho outputs

**Kiến thức cần nắm:**
- Bedrock Guardrails cho response filtering
- FM evaluations cho content moderation và toxicity detection
- Text-to-SQL transformations cho deterministic results

**Giải thích chi tiết:**

**Output Safety Layers:**
1. **Guardrails output filters** — Tự động scan và filter responses
2. **Post-processing Lambda** — Custom validation logic
3. **Structured outputs** — JSON Schema enforcement giảm free-form hallucination
4. **Text-to-SQL** — Chuyển natural language thành SQL queries cho deterministic results

### Skill 3.1.3: Giảm hallucination

**Kiến thức cần nắm:**
- **Amazon Bedrock Knowledge Bases** cho grounding responses (fact checking)
- Confidence scoring và semantic similarity search
- **JSON Schema** cho structured outputs

{{% notice tip %}}
**Exam Tip:** Khi gặp câu hỏi về giảm hallucination, câu trả lời thường liên quan đến RAG/Knowledge Bases (grounding), Guardrails, hoặc structured outputs. Đây là pattern rất phổ biến trong đề thi.
{{% /notice %}}

**Strategies giảm hallucination:**

| Strategy | Implementation | Hiệu quả |
|----------|---------------|-----------|
| RAG/Grounding | Knowledge Bases | Cao — cung cấp factual context |
| Structured outputs | JSON Schema | Trung bình — giới hạn format |
| Contextual grounding | Guardrails | Cao — verify against sources |
| Temperature thấp | Model parameters | Trung bình — giảm creativity |
| Chain-of-thought | Prompt engineering | Trung bình — improve reasoning |

### Skill 3.1.4: Defense-in-depth safety

**Kiến thức cần nắm:**
- **Amazon Comprehend** cho pre-processing filters
- **Amazon Bedrock** cho model-based guardrails
- Lambda cho post-processing validation
- API Gateway cho API response filtering

**Defense-in-depth architecture:**
```
User Input
    ↓
[Layer 1: API Gateway] — Rate limiting, WAF rules
    ↓
[Layer 2: Pre-processing] — Comprehend PII detection, input sanitization
    ↓
[Layer 3: Guardrails] — Bedrock Guardrails (content filters, denied topics)
    ↓
[Layer 4: FM Invocation] — Model generates response
    ↓
[Layer 5: Output Guardrails] — Response filtering, PII redaction
    ↓
[Layer 6: Post-processing] — Lambda custom validation
    ↓
Safe Response to User
```

### Skill 3.1.5: Advanced threat detection

**Kiến thức cần nắm:**
- Prompt injection detection mechanisms
- Jailbreak detection
- Input sanitization và content filters
- Safety classifiers
- Automated adversarial testing workflows

**Giải thích chi tiết:**

**Prompt Injection Types:**

| Type | Mô tả | Mitigation |
|------|--------|------------|
| Direct injection | User trực tiếp inject malicious instructions | Input validation, Guardrails |
| Indirect injection | Malicious content trong retrieved documents | Source validation, output filtering |
| Jailbreak | Bypass safety controls qua creative prompting | Safety classifiers, Guardrails |

**Mitigation strategies:**
- Guardrails với custom denied topics
- Input sanitization trước khi gửi tới FM
- Separate system prompts từ user inputs
- Monitor và log tất cả interactions

### Tài liệu tham khảo

- [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [AWS Blog - Responsible AI with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/implement-responsible-ai-with-amazon-bedrock-guardrails/)
- [AWS Blog - Prevent prompt injection](https://aws.amazon.com/blogs/machine-learning/protect-your-generative-ai-workloads-from-prompt-injections/)
