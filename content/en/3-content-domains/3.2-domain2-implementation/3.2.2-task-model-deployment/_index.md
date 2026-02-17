---
title: "Task 2.2: Model Deployment Strategies"
date: 2025-01-01
weight: 2
---

## Task 2.2: Model Deployment Strategies

### Skill 2.2.1: Deploy FMs Based on Application Needs

**Key Knowledge:**
- Lambda functions for on-demand invocation
- **Amazon Bedrock provisioned throughput** — Guaranteed capacity
- **SageMaker AI endpoints** for hybrid solutions
- When to use on-demand vs provisioned throughput

**Detailed Explanation:**

**Deployment Options Comparison:**

| Option | Use Case | Pros | Cons |
|--------|----------|------|------|
| Bedrock On-Demand | Development, variable traffic | Pay-per-token, no commitment | May be throttled |
| Bedrock Provisioned | Production, stable traffic | Guaranteed throughput | Fixed cost |
| SageMaker Endpoints | Custom models, fine-tuned | Full control | Infrastructure management |
| Lambda + Bedrock | Event-driven, sporadic | Serverless, auto-scale | Cold start latency |

**When to choose Provisioned Throughput:**
- Stable, predictable traffic
- Low and consistent latency requirements
- Large workloads (more cost-effective than on-demand at scale)
- Strict SLA requirements

**When to choose On-Demand:**
- Development and testing
- Uneven traffic, burst patterns
- Multiple models with low usage
- Prototypes and PoCs

### Skill 2.2.2: LLM Deployment Challenges

**Key Knowledge:**
- Container-based deployment patterns (memory, GPU, token processing)
- Specialized model loading strategies
- Differences between LLM deployment and traditional ML deployment

**Detailed Explanation:**

| Challenge | Traditional ML | LLM |
|-----------|---------------|-----|
| Model size | MB - few GB | Tens - hundreds of GB |
| Memory | CPU RAM sufficient | Requires large GPU VRAM |
| Latency | ms-level | Seconds (token generation) |
| Scaling | Request-based | Token throughput-based |
| Cost | Compute-based | Token-based |

### Skill 2.2.3: Optimized Deployment Approaches

**Key Knowledge:**
- Selecting appropriate model sizes (smaller models for specific tasks)
- API-based model cascading for routine queries
- Balancing performance vs resource requirements

{{% notice info %}}
**Model cascading** is a pattern using smaller/cheaper models for simple queries, only escalating to larger/expensive models when needed. Example: use Haiku for classification, Claude Sonnet for complex reasoning.
{{% /notice %}}

**Right-sizing models:**
- **Text classification** → Small models (Haiku, Titan Lite)
- **Summarization** → Medium models (Sonnet, Titan Express)
- **Complex reasoning** → Large models (Opus, Sonnet)
- **Code generation** → Specialized models (Claude, CodeLlama)

### References

- [Amazon Bedrock Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html)
- [AWS Blog - Optimize LLM deployment costs](https://aws.amazon.com/blogs/machine-learning/optimize-generative-ai-costs-on-amazon-bedrock/)
- [SageMaker AI Endpoints](https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html)
