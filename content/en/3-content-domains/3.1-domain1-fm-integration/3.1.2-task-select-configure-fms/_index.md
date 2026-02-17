---
title: "Task 1.2: Select & Configure FMs"
date: 2025-01-01
weight: 2
---

## Task 1.2: Select and Configure FMs

### Skill 1.2.1: Assess and Choose FMs

**Key Knowledge:**
- Comparing model families: Claude (Anthropic), Llama (Meta), Amazon Titan, Mistral, Cohere
- Performance benchmarks: latency, throughput, quality
- Capability analysis: context window size, multimodal support, language support

| Model | Strengths | Best For |
|-------|-----------|----------|
| Claude 3.5 Sonnet | Reasoning, coding, analysis | Complex tasks, code generation |
| Claude 3 Haiku | Fast, cost-effective | Simple queries, classification |
| Amazon Titan Text | AWS-native, cost-effective | General text tasks |
| Llama 3 | Open-source, customizable | Fine-tuning scenarios |
| Mistral Large | Multilingual, efficient | European language tasks |

### Skill 1.2.2: Dynamic Model Selection Architecture

**Key Knowledge:**
- **AWS Lambda** — Abstraction layer for model invocation
- **Amazon API Gateway** — Unified API endpoint
- **AWS AppConfig** — Dynamic configuration for model selection

### Skill 1.2.3: Resilient AI Systems

**Key Knowledge:**
- **AWS Step Functions** circuit breaker patterns
- **Amazon Bedrock Cross Region Inference**
- Graceful degradation strategies (fallback to simpler model)

{{% notice info %}}
**Cross Region Inference** is an important Bedrock feature that automatically routes requests to another region when the primary region is overloaded. This is frequently tested on the exam.
{{% /notice %}}

### Skill 1.2.4: FM Customization Deployment and Lifecycle Management

**Key Knowledge:**
- **Amazon SageMaker AI** — Deploy domain-specific fine-tuned models
- Parameter Efficient Fine-Tuning (PEFT): LoRA, adapters
- **SageMaker Model Registry** — Versioning and deploying customized models
- Automated deployment pipelines, rollback strategies

### References

- [Amazon Bedrock Cross Region Inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html)
- [AWS Blog - Fine-tuning models in Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/fine-tune-models-in-amazon-bedrock/)
