---
title: "Task 5.2: Troubleshooting"
date: 2025-01-01
weight: 2
---

## Task 5.2: Troubleshoot GenAI applications

### Skill 5.2.1: Content handling issues

**Kiến thức cần nắm:**
- Context window overflow diagnostics
- Dynamic chunking strategies
- Prompt design optimization
- Truncation-related error analysis

{{% notice warning %}}
**Common Issue:** Context window overflow xảy ra khi input + context vượt quá giới hạn tokens của model. Giải pháp: dynamic chunking, prompt compression, hoặc chọn model có context window lớn hơn.
{{% /notice %}}

**Giải thích chi tiết:**

**Context Window Overflow Troubleshooting:**

| Symptom | Nguyên nhân | Giải pháp |
|---------|------------|-----------|
| `ValidationException` | Input vượt context limit | Giảm input size, chọn model lớn hơn |
| Truncated responses | max_tokens quá thấp | Tăng max_tokens |
| Missing context | RAG trả về quá nhiều chunks | Giảm numberOfResults, improve chunking |
| Irrelevant responses | Context không liên quan | Improve retrieval, better chunking |

**Dynamic Chunking Strategies:**

| Strategy | Mô tả | Best For |
|----------|--------|----------|
| Fixed-size | Chia theo số characters/tokens | Simple documents |
| Semantic | Chia theo meaning boundaries | Complex documents |
| Hierarchical | Parent-child chunks | Structured documents |
| Sliding window | Overlapping chunks | Continuous text |

### Skill 5.2.2: FM integration issues

**Kiến thức cần nắm:**
- Error logging cho API calls
- Request validation
- Response analysis
- Common error codes và troubleshooting steps

**Giải thích chi tiết:**

**Common Bedrock API Errors:**

| Error Code | Mô tả | Giải pháp |
|-----------|--------|-----------|
| `ThrottlingException` | Rate limit exceeded | Implement exponential backoff |
| `ValidationException` | Invalid request format | Check request body format |
| `ModelTimeoutException` | Model took too long | Reduce input size, use streaming |
| `AccessDeniedException` | IAM permission issue | Check IAM policies |
| `ServiceUnavailableException` | Service issue | Retry with backoff, try another region |
| `ModelNotReadyException` | Model not available | Check model access, region availability |

**Debugging Checklist:**
1. Check CloudWatch Logs cho error details
2. Verify IAM permissions
3. Validate request format (JSON structure)
4. Check model availability trong region
5. Monitor throttling metrics
6. Use X-Ray cho end-to-end tracing

### Skill 5.2.3: Prompt engineering problems

**Kiến thức cần nắm:**
- Prompt testing frameworks
- Version comparison
- Systematic refinement process
- Prompt debugging techniques

**Giải thích chi tiết:**

**Prompt Debugging Process:**
1. **Identify issue** — Response không đúng, không đầy đủ, hoặc hallucination
2. **Isolate variable** — System prompt? User input? Context? Parameters?
3. **Test variations** — Thay đổi 1 variable tại 1 thời điểm
4. **Compare versions** — A/B test prompt versions
5. **Document findings** — Track what works và what doesn't

**Common Prompt Issues:**

| Issue | Symptom | Fix |
|-------|---------|-----|
| Ambiguous instructions | Inconsistent outputs | Be more specific |
| Missing context | Hallucination | Add relevant context |
| Conflicting instructions | Confused responses | Simplify, prioritize |
| Too many constraints | Refusal to answer | Relax constraints |
| Wrong format | Unstructured output | Add format examples |

### Skill 5.2.4: Retrieval system issues

**Kiến thức cần nắm:**
- Model response relevance analysis
- Embedding quality diagnostics
- Drift monitoring
- Vectorization issue resolution
- Chunking và preprocessing remediation
- Vector search performance optimization

**Giải thích chi tiết:**

**RAG Troubleshooting Flow:**
```
Poor response quality
    ↓
Is retrieval returning relevant docs?
    ├── No → Fix retrieval
    │   ├── Check embedding quality
    │   ├── Improve chunking strategy
    │   ├── Tune search parameters
    │   └── Add metadata filters
    └── Yes → Fix generation
        ├── Improve prompt template
        ├── Add instructions for using context
        └── Tune model parameters
```

**Embedding Quality Diagnostics:**
- Visualize embeddings (t-SNE, UMAP)
- Check semantic similarity scores
- Compare different embedding models
- Verify embedding dimensions match index

### Skill 5.2.5: Prompt maintenance issues

**Kiến thức cần nắm:**
- Template testing với CloudWatch Logs
- **X-Ray** cho prompt observability pipelines
- Schema validation cho format inconsistencies
- Systematic prompt refinement workflows

**Giải thích chi tiết:**

**Prompt Maintenance Best Practices:**
- Version control cho tất cả prompts
- Automated regression testing khi thay đổi prompts
- Monitor prompt performance metrics over time
- Use Bedrock Prompt Management cho centralized management
- Set up alerts cho quality degradation

### Tài liệu tham khảo

- [AWS Blog - Troubleshooting GenAI](https://aws.amazon.com/blogs/machine-learning/troubleshoot-generative-ai-applications/)
- [Amazon CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
- [AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)
- [Amazon Bedrock Troubleshooting](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting.html)
