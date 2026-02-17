---
title: "Task 3.1: Input & Output Safety Controls"
date: 2025-01-01
weight: 1
---

## Task 3.1: Implement Input and Output Safety Controls

### Skill 3.1.1: Content Safety for Inputs

**Key Knowledge:**
- **Amazon Bedrock Guardrails** — Content filtering for harmful inputs
- Step Functions and Lambda for custom moderation workflows
- Real-time validation mechanisms

**Detailed Explanation:**

**Amazon Bedrock Guardrails** provides multiple protection layers:

| Filter Type | Description | Example |
|-------------|------------|---------|
| Content filters | Filter harmful content (hate, violence, sexual) | Block prompts containing violent content |
| Denied topics | Block specific topics | Disallow financial advice queries |
| Word filters | Block specific words/phrases | Block profanity, competitor names |
| PII filters | Detect and redact PII | Mask email, phone numbers |
| Contextual grounding | Check factual accuracy | Verify response against source documents |

### Skill 3.1.2: Content Safety for Outputs

**Key Knowledge:**
- Bedrock Guardrails for response filtering
- FM evaluations for content moderation and toxicity detection
- Text-to-SQL transformations for deterministic results

### Skill 3.1.3: Reducing Hallucination

**Key Knowledge:**
- **Amazon Bedrock Knowledge Bases** for grounding responses (fact checking)
- Confidence scoring and semantic similarity search
- **JSON Schema** for structured outputs

{{% notice tip %}}
**Exam Tip:** When encountering questions about reducing hallucination, the answer typically involves RAG/Knowledge Bases (grounding), Guardrails, or structured outputs. This is a very common exam pattern.
{{% /notice %}}

**Hallucination Reduction Strategies:**

| Strategy | Implementation | Effectiveness |
|----------|---------------|--------------|
| RAG/Grounding | Knowledge Bases | High — provides factual context |
| Structured outputs | JSON Schema | Medium — constrains format |
| Contextual grounding | Guardrails | High — verifies against sources |
| Low temperature | Model parameters | Medium — reduces creativity |
| Chain-of-thought | Prompt engineering | Medium — improves reasoning |

### Skill 3.1.4: Defense-in-Depth Safety

**Key Knowledge:**
- **Amazon Comprehend** for pre-processing filters
- **Amazon Bedrock** for model-based guardrails
- Lambda for post-processing validation
- API Gateway for API response filtering

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

### Skill 3.1.5: Advanced Threat Detection

**Key Knowledge:**
- Prompt injection detection mechanisms
- Jailbreak detection
- Input sanitization and content filters
- Safety classifiers
- Automated adversarial testing workflows

**Prompt Injection Types:**

| Type | Description | Mitigation |
|------|------------|------------|
| Direct injection | User directly injects malicious instructions | Input validation, Guardrails |
| Indirect injection | Malicious content in retrieved documents | Source validation, output filtering |
| Jailbreak | Bypass safety controls via creative prompting | Safety classifiers, Guardrails |

### References

- [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [AWS Blog - Responsible AI with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/implement-responsible-ai-with-amazon-bedrock-guardrails/)
- [AWS Blog - Prevent prompt injection](https://aws.amazon.com/blogs/machine-learning/protect-your-generative-ai-workloads-from-prompt-injections/)
