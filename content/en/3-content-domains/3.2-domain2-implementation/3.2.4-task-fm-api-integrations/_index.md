---
title: "Task 2.4: FM API Integrations"
date: 2025-01-01
weight: 4
---

## Task 2.4: FM API Integrations

### Skill 2.4.1: Flexible Model Interaction Systems

**Key Knowledge:**
- Amazon Bedrock APIs for synchronous requests
- AWS SDKs and **Amazon SQS** for asynchronous processing
- API Gateway for custom API clients with request validation

**Detailed Explanation:**

**Bedrock API Invocation Patterns:**

| Pattern | API | Use Case |
|---------|-----|----------|
| Synchronous | `InvokeModel` | Real-time responses, chatbots |
| Streaming | `InvokeModelWithResponseStream` | Progressive text display |
| Asynchronous | `StartAsyncInvoke` | Long-running tasks, batch |
| Converse | `Converse` / `ConverseStream` | Multi-turn conversations |

**Synchronous invocation with boto3:**
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

### Skill 2.4.2: Real-Time AI Interaction (Streaming)

**Key Knowledge:**
- **Amazon Bedrock streaming APIs** for incremental response delivery
- WebSockets or server-sent events for real-time text generation
- API Gateway for chunked transfer encoding

{{% notice tip %}}
**Exam Tip:** Streaming responses are a best practice for user experience. Bedrock supports streaming via the `InvokeModelWithResponseStream` API. This is frequently tested on the exam.
{{% /notice %}}

**Streaming with Bedrock:**
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

**Converse API** (recommended for multi-turn):
- Unified interface for all models
- Automatic model-specific formatting
- Built-in tool use support
- Simpler error handling

### Skill 2.4.3: Resilient FM Systems

**Key Knowledge:**
- AWS SDK exponential backoff
- API Gateway rate limiting
- Fallback mechanisms for graceful degradation
- **AWS X-Ray** for observability across service boundaries

**Resilience Patterns:**

| Pattern | Implementation | When to Use |
|---------|---------------|-------------|
| Retry with backoff | AWS SDK built-in | Transient errors (429, 503) |
| Circuit breaker | Step Functions | Repeated failures |
| Fallback model | Application logic | Primary model unavailable |
| Rate limiting | API Gateway | Protect against burst traffic |
| Cross-region | Bedrock Cross Region Inference | Regional outages |

### Skill 2.4.4: Intelligent Model Routing

**Key Knowledge:**
- Static routing configurations
- Step Functions for dynamic content-based routing
- Intelligent routing based on metrics
- API Gateway with request transformations

### References

- [Amazon Bedrock API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html)
- [AWS Blog - Streaming with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/stream-large-language-model-responses-in-amazon-bedrock/)
- [Converse API Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html)
- [AWS Blog - Cross Region Inference](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-cross-region-inference/)
