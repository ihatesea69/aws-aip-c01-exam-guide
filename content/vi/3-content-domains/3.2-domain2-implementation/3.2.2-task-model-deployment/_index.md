---
title: "Task 2.2: Model Deployment Strategies"
date: 2025-01-01
weight: 2
---

## Task 2.2: Model deployment strategies

### Skill 2.2.1: Deploy FMs theo application needs

**Kiến thức cần nắm:**
- Lambda functions cho on-demand invocation
- **Amazon Bedrock provisioned throughput** — Guaranteed capacity
- **SageMaker AI endpoints** cho hybrid solutions
- Khi nào dùng on-demand vs provisioned throughput

**Giải thích chi tiết:**

**So sánh deployment options:**

| Option | Use Case | Ưu điểm | Nhược điểm |
|--------|----------|---------|------------|
| Bedrock On-Demand | Development, variable traffic | Pay-per-token, no commitment | Có thể bị throttle |
| Bedrock Provisioned | Production, stable traffic | Guaranteed throughput | Chi phí cố định |
| SageMaker Endpoints | Custom models, fine-tuned | Full control | Quản lý infrastructure |
| Lambda + Bedrock | Event-driven, sporadic | Serverless, auto-scale | Cold start latency |

**Khi nào chọn Provisioned Throughput:**
- Traffic ổn định và dự đoán được
- Yêu cầu latency thấp và consistent
- Workload lớn (cost-effective hơn on-demand ở scale)
- SLA requirements nghiêm ngặt

**Khi nào chọn On-Demand:**
- Development và testing
- Traffic không đều, burst patterns
- Nhiều models khác nhau với usage thấp
- Prototype và PoC

### Skill 2.2.2: LLM deployment challenges

**Kiến thức cần nắm:**
- Container-based deployment patterns (memory, GPU, token processing)
- Specialized model loading strategies
- Khác biệt giữa LLM deployment và traditional ML deployment

**Giải thích chi tiết:**

**Thách thức đặc thù của LLM deployment:**

| Thách thức | Traditional ML | LLM |
|-----------|---------------|-----|
| Model size | MB - vài GB | Hàng chục - hàng trăm GB |
| Memory | CPU RAM đủ | Cần GPU VRAM lớn |
| Latency | ms-level | Seconds (token generation) |
| Scaling | Request-based | Token throughput-based |
| Cost | Compute-based | Token-based |

**Container-based deployment cho SageMaker:**
- Deep Learning Containers (DLCs) optimized cho LLMs
- Model parallelism cho large models
- Quantization techniques (INT8, FP16) để giảm memory footprint
- Model sharding across multiple GPUs

### Skill 2.2.3: Optimized deployment approaches

**Kiến thức cần nắm:**
- Chọn model size phù hợp (smaller models cho specific tasks)
- API-based model cascading cho routine queries
- Balance performance vs resource requirements

{{% notice info %}}
**Model cascading** là pattern sử dụng model nhỏ/rẻ cho queries đơn giản, chỉ escalate lên model lớn/đắt khi cần. Ví dụ: dùng Haiku cho classification, Claude Sonnet cho complex reasoning.
{{% /notice %}}

**Giải thích chi tiết:**

**Model Cascading Pattern:**
```
User Request
    ↓
[Classifier/Router] → Simple query → Small Model (Haiku) → Response
    ↓
Complex query → Large Model (Sonnet/Opus) → Response
```

**Lợi ích:**
- Giảm 60-80% chi phí cho workloads có nhiều simple queries
- Latency thấp hơn cho simple queries
- Chỉ dùng expensive models khi thực sự cần

**Right-sizing models:**
- **Text classification** → Small models (Haiku, Titan Lite)
- **Summarization** → Medium models (Sonnet, Titan Express)
- **Complex reasoning** → Large models (Opus, Sonnet)
- **Code generation** → Specialized models (Claude, CodeLlama)

### Tài liệu tham khảo

- [Amazon Bedrock Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html)
- [AWS Blog - Optimize LLM deployment costs](https://aws.amazon.com/blogs/machine-learning/optimize-generative-ai-costs-on-amazon-bedrock/)
- [SageMaker AI Endpoints](https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html)
