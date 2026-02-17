---
title: "Task 4.1: Cost Optimization"
date: 2025-01-01
weight: 1
---

## Task 4.1: Cost optimization và resource efficiency

{{% notice tip %}}
**Exam Tip:** Token optimization là chủ đề quan trọng. Nhớ rằng chi phí GenAI tính theo tokens (input + output). Giảm tokens = giảm chi phí.
{{% /notice %}}

### Skill 4.1.1: Token efficiency

**Kiến thức cần nắm:**
- Token estimation và tracking
- Context window optimization — chỉ đưa context cần thiết
- Response size controls (max_tokens)
- Prompt compression và context pruning

**Giải thích chi tiết:**

**Token Cost Structure:**
```
Total Cost = (Input Tokens × Input Price) + (Output Tokens × Output Price)
```

**Optimization Techniques:**

| Technique | Mô tả | Tiết kiệm |
|-----------|--------|-----------|
| Prompt compression | Loại bỏ text thừa trong prompt | 20-40% input tokens |
| Context pruning | Chỉ include relevant context trong RAG | 30-50% input tokens |
| Response limiting | Set max_tokens phù hợp | Control output cost |
| System prompt caching | Cache system prompts dài | Giảm repeated input cost |
| Summarization | Summarize long documents trước khi đưa vào context | 50-70% input tokens |

**Ví dụ Context Pruning cho RAG:**
```python
# Thay vì đưa toàn bộ 10 retrieved chunks
# Chỉ đưa top-3 relevant chunks
retrieved_docs = knowledge_base.retrieve(
    query=user_query,
    retrievalConfiguration={
        'vectorSearchConfiguration': {
            'numberOfResults': 3  # Limit to top 3
        }
    }
)
```

### Skill 4.1.2: Cost-effective model selection

**Kiến thức cần nắm:**
- Cost-capability tradeoff evaluation
- Tiered FM usage: model nhỏ cho queries đơn giản, model lớn cho complex tasks
- Price-to-performance ratio measurement

**Giải thích chi tiết:**

**Model Tiering Strategy:**

| Tier | Model | Use Case | Cost |
|------|-------|----------|------|
| Tier 1 (Simple) | Haiku, Titan Lite | Classification, extraction | Thấp nhất |
| Tier 2 (Standard) | Sonnet, Titan Express | Summarization, Q&A | Trung bình |
| Tier 3 (Complex) | Opus, large models | Complex reasoning, analysis | Cao nhất |

**Decision Framework:**
1. Bắt đầu với model nhỏ nhất
2. Evaluate quality trên test dataset
3. Chỉ upgrade lên model lớn hơn nếu quality không đạt
4. Monitor cost-per-quality-point

### Skill 4.1.3: High-performance FM systems

**Kiến thức cần nắm:**
- Batching strategies cho throughput
- Capacity planning
- Utilization monitoring
- Auto-scaling configurations
- **Provisioned throughput** optimization trong Bedrock

**Giải thích chi tiết:**

**Provisioned Throughput trong Bedrock:**
- Mua capacity units (model units) trước
- Guaranteed throughput, không bị throttle
- Cost-effective cho stable, high-volume workloads
- Commitment periods: 1 month hoặc 6 months

**Batch Inference:**
- Gom nhiều requests thành batch
- Process offline (không real-time)
- Giảm cost per request
- Suitable cho: document processing, data enrichment

### Skill 4.1.4: Intelligent caching

**Kiến thức cần nắm:**
- **Semantic caching** — Cache responses cho similar queries
- Result fingerprinting
- Edge caching với CloudFront
- Deterministic request hashing
- **Prompt caching** — Bedrock prompt caching feature

**Giải thích chi tiết:**

**Caching Strategies:**

| Strategy | Implementation | Best For |
|----------|---------------|----------|
| Exact match cache | DynamoDB/ElastiCache | Identical queries |
| Semantic cache | Vector similarity search | Similar queries |
| Prompt caching | Bedrock native feature | Repeated system prompts |
| Edge caching | CloudFront | Static/semi-static responses |

**Semantic Caching Flow:**
```
User Query → Embed query → Search cache (vector similarity)
    ↓
Cache hit (similarity > threshold) → Return cached response
    ↓
Cache miss → Call FM → Store response in cache → Return
```

{{% notice info %}}
**Prompt Caching** trong Bedrock cho phép cache phần system prompt hoặc context dài. Khi nhiều requests share cùng system prompt, chỉ cần gửi 1 lần và cache lại, giảm đáng kể input token cost.
{{% /notice %}}

### Tài liệu tham khảo

- [Amazon Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/)
- [AWS Blog - Optimize GenAI costs](https://aws.amazon.com/blogs/machine-learning/optimize-generative-ai-costs-on-amazon-bedrock/)
- [Amazon Bedrock Prompt Caching](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html)
- [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)
