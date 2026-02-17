---
title: "Task 1.2: Lựa chọn & Cấu hình FMs"
date: 2025-01-01
weight: 2
---

## Task 1.2: Lựa chọn và cấu hình FMs

### Skill 1.2.1: Đánh giá và lựa chọn FMs

Chọn FM phù hợp nhất với use case và yêu cầu kỹ thuật.

**Kiến thức cần nắm:**
- So sánh các model families: Claude (Anthropic), Llama (Meta), Amazon Titan, Mistral, Cohere
- Performance benchmarks: latency, throughput, quality
- Capability analysis: context window size, multimodal support, language support
- Cost per token comparison

| Model | Strengths | Best For |
|-------|-----------|----------|
| Claude 3.5 Sonnet | Reasoning, coding, analysis | Complex tasks, code generation |
| Claude 3 Haiku | Fast, cost-effective | Simple queries, classification |
| Amazon Titan Text | AWS-native, cost-effective | General text tasks |
| Llama 3 | Open-source, customizable | Fine-tuning scenarios |
| Mistral Large | Multilingual, efficient | European language tasks |

### Skill 1.2.2: Kiến trúc dynamic model selection

Cho phép chuyển đổi model và provider mà không cần thay đổi code.

**Kiến thức cần nắm:**
- **AWS Lambda** — Abstraction layer cho model invocation
- **Amazon API Gateway** — Unified API endpoint
- **AWS AppConfig** — Dynamic configuration cho model selection
- Model routing patterns: static routing, content-based routing

### Skill 1.2.3: Thiết kế hệ thống AI resilient

Đảm bảo hoạt động liên tục khi có service disruptions.

**Kiến thức cần nắm:**
- **AWS Step Functions** circuit breaker patterns
- **Amazon Bedrock Cross Region Inference** — Cho models có limited regional availability
- Cross-Region model deployment
- Graceful degradation strategies (fallback to simpler model)

{{% notice info %}}
**Cross Region Inference** là tính năng quan trọng của Bedrock cho phép tự động route requests sang region khác khi region chính bị quá tải hoặc không available. Đây là kiến thức hay xuất hiện trong đề thi.
{{% /notice %}}

### Skill 1.2.4: FM customization deployment và lifecycle management

**Kiến thức cần nắm:**
- **Amazon SageMaker AI** — Deploy domain-specific fine-tuned models
- Parameter Efficient Fine-Tuning (PEFT): LoRA, adapters
- **SageMaker Model Registry** — Versioning và deploy customized models
- Automated deployment pipelines, rollback strategies
- Model lifecycle management: retire và replace models

### Tài liệu tham khảo

- [Amazon Bedrock Model Evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html)
- [Amazon Bedrock Cross Region Inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html)
- [AWS Blog - Fine-tuning models in Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/fine-tune-models-in-amazon-bedrock/)
