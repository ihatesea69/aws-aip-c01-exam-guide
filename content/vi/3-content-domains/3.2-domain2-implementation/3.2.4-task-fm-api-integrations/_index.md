---
title: "Task 2.4: FM API Integrations"
date: 2025-01-01
weight: 4
---

## Task 2.4: FM API integrations

### Skill 2.4.1: Flexible model interaction systems

**Kiến thức cần nắm:**
- Amazon Bedrock APIs cho synchronous requests
- AWS SDKs và **Amazon SQS** cho asynchronous processing
- API Gateway cho custom API clients với request validation

**Giải thích chi tiết:**

**Bedrock API Invocation Patterns:**

| Pattern | API | Use Case |
|---------|-----|----------|
| Synchronous | `InvokeModel` | Real-time responses, chatbots |
| Streaming | `InvokeModelWithResponseStream` | Progressive text display |
| Asynchronous | `StartAsyncInvoke` | Long-running tasks, batch |
| Converse | `Converse` / `ConverseStream` | Multi-turn conversations |

**Synchronous invocation với boto3:**
```python
import boto3
import json

client = boto3.client('bedrock-runtime')

response = client.invoke_model(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    contentType='application/json',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Explain RAG in 3 sentences"}
        ]
    })
)

result = json.loads(response['body'].read())
print(result['content'][0]['text'])
```

**Asynchronous pattern với SQS:**
```
Client → API Gateway → SQS → Lambda → Bedrock
                                  ↓
                          DynamoDB (store result)
                                  ↓
                    Client polls / SNS notification
```

### Skill 2.4.2: Real-time AI interaction (Streaming)

**Kiến thức cần nắm:**
- **Amazon Bedrock streaming APIs** cho incremental response delivery
- WebSockets hoặc server-sent events cho real-time text generation
- API Gateway cho chunked transfer encoding

{{% notice tip %}}
**Exam Tip:** Streaming responses là best practice cho user experience. Bedrock hỗ trợ streaming qua `InvokeModelWithResponseStream` API. Đây là kiến thức thường xuất hiện trong đề thi.
{{% /notice %}}

**Giải thích chi tiết:**

**Streaming với Bedrock:**
```python
response = client.invoke_model_with_response_stream(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    contentType='application/json',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Write a poem about AWS"}
        ]
    })
)

for event in response['body']:
    chunk = json.loads(event['chunk']['bytes'])
    if chunk['type'] == 'content_block_delta':
        print(chunk['delta']['text'], end='', flush=True)
```

**Converse API** (recommended cho multi-turn):
```python
response = client.converse_stream(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    messages=[
        {"role": "user", "content": [{"text": "Hello!"}]}
    ]
)
```

**Ưu điểm Converse API:**
- Unified interface cho tất cả models
- Tự động handle model-specific formatting
- Built-in tool use support
- Simpler error handling

### Skill 2.4.3: Resilient FM systems

**Kiến thức cần nắm:**
- AWS SDK exponential backoff
- API Gateway rate limiting
- Fallback mechanisms cho graceful degradation
- **AWS X-Ray** cho observability across service boundaries

**Giải thích chi tiết:**

**Resilience Patterns:**

| Pattern | Implementation | Khi nào dùng |
|---------|---------------|-------------|
| Retry with backoff | AWS SDK built-in | Transient errors (429, 503) |
| Circuit breaker | Step Functions | Repeated failures |
| Fallback model | Application logic | Primary model unavailable |
| Rate limiting | API Gateway | Protect against burst traffic |
| Cross-region | Bedrock Cross Region Inference | Regional outages |

**Exponential Backoff:**
```python
import boto3
from botocore.config import Config

config = Config(
    retries={
        'max_attempts': 5,
        'mode': 'adaptive'  # Adaptive retry mode
    }
)
client = boto3.client('bedrock-runtime', config=config)
```

**Fallback Pattern:**
```
Primary Model (Claude Sonnet) → Timeout/Error
    ↓
Fallback Model (Claude Haiku) → Response
    ↓ (if also fails)
Cached Response / Error Message
```

### Skill 2.4.4: Intelligent model routing

**Kiến thức cần nắm:**
- Static routing configurations
- Step Functions cho dynamic content-based routing
- Intelligent routing dựa trên metrics
- API Gateway với request transformations

**Giải thích chi tiết:**

**Routing Strategies:**

1. **Static Routing** — Map request types to specific models
   - `/api/classify` → Haiku
   - `/api/generate` → Sonnet
   - `/api/analyze` → Opus

2. **Dynamic Content-Based Routing:**
   ```
   Request → Classifier (small model)
       ↓
   Simple → Small Model (fast, cheap)
   Medium → Medium Model (balanced)
   Complex → Large Model (powerful, expensive)
   ```

3. **Metric-Based Routing:**
   - Route based on current latency, error rates
   - Load balancing across models/regions
   - Cost-aware routing

### Tài liệu tham khảo

- [Amazon Bedrock API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html)
- [AWS Blog - Streaming with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/stream-large-language-model-responses-in-amazon-bedrock/)
- [Converse API Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html)
- [AWS Blog - Cross Region Inference](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-cross-region-inference/)
