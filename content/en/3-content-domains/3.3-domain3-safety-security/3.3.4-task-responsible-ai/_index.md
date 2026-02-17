---
title: "Task 3.4: Responsible AI Principles"
date: 2025-01-01
weight: 4
---

## Task 3.4: Responsible AI Principles

### Skill 3.4.1: Transparent AI Systems

**Key Knowledge:**
- Reasoning displays for user-facing explanations
- CloudWatch for confidence metrics
- Evidence presentation for source attribution
- **Amazon Bedrock agent tracing** for reasoning traces

**Transparency in GenAI:**

| Aspect | Implementation | Purpose |
|--------|---------------|---------|
| Source attribution | RAG citations | User knows where info comes from |
| Confidence scores | Model probability outputs | Assess reliability |
| Reasoning traces | Bedrock agent tracing | Debug and audit agent decisions |
| Explanations | Chain-of-thought prompting | User understands AI logic |

### Skill 3.4.2: Fairness Evaluations

**Key Knowledge:**
- Predefined fairness metrics in CloudWatch
- Bedrock Prompt Management for systematic A/B testing
- **LLM-as-a-judge** solutions for automated model evaluations

**Fairness Testing Approaches:**

1. **A/B Testing with Prompt Management:**
   - Create multiple prompt variants
   - Test with diverse demographic inputs
   - Compare response quality across groups

2. **LLM-as-a-Judge:**
   - Use one FM to evaluate output of another FM
   - Amazon Bedrock Model Evaluations supports built-in
   - Metrics: relevance, coherence, harmfulness, fairness

3. **SageMaker Clarify:**
   - Bias detection in training data
   - Model explainability (SHAP values)
   - Fairness metrics across protected attributes

{{% notice tip %}}
**Exam Tip:** LLM-as-a-Judge is a new and important approach. Amazon Bedrock supports automated model evaluations using this technique. Understand how to set up and interpret results.
{{% /notice %}}

### Skill 3.4.3: Policy-Compliant AI Systems

**Key Knowledge:**
- Bedrock Guardrails based on policy requirements
- Model cards for FM limitations documentation
- Lambda for automated compliance checks

### References

- [AWS Responsible AI](https://aws.amazon.com/ai/responsible-ai/)
- [Amazon Bedrock Model Evaluations](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html)
- [SageMaker Clarify](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html)
- [AWS Blog - LLM-as-a-Judge](https://aws.amazon.com/blogs/machine-learning/llm-as-a-judge-for-evaluating-generative-ai-applications/)
