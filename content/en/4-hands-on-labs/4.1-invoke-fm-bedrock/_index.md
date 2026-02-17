---
title: "4.1 Lab: Invoke FM via Bedrock"
date: 2025-01-01
weight: 1
---

## Lab 1: Invoke Foundation Model via Amazon Bedrock

| Info | Details |
|------|---------|
| Objective | Invoke FM via Bedrock Console, AWS CLI, and Python SDK |
| Duration | ~15 minutes |
| Related Domain | Domain 1 (Task 1.2), Domain 2 (Task 2.4) |
| Prerequisites | AWS Account, Bedrock model access enabled |

### Objectives

After this lab, you will know how to:
- Invoke FM via Amazon Bedrock Console (Playground)
- Invoke FM via AWS CLI
- Invoke FM via Python SDK (boto3)
- Use streaming responses

---

### Step 1: Invoke via Bedrock Playground

1. Navigate to [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/)
2. Select **Playgrounds** → **Chat**
3. Select model: **Claude 3.5 Sonnet**
4. Enter prompt:

```
Explain Retrieval Augmented Generation (RAG) in 3 sentences.
```

5. Observe the response and try adjusting parameters:
   - **Temperature**: try 0.1 (deterministic) and 0.9 (creative)
   - **Max tokens**: try 100 and 500

### Step 2: Invoke via AWS CLI

```bash
aws bedrock-runtime invoke-model \
  --model-id anthropic.claude-3-5-sonnet-20241022-v2:0 \
  --region us-east-1 \
  --content-type application/json \
  --accept application/json \
  --body '{
    "anthropic_version": "bedrock-2023-05-31",
    "max_tokens": 256,
    "messages": [
      {"role": "user", "content": "What is Amazon Bedrock? Answer in 2 sentences."}
    ]
  }' \
  output.json

cat output.json
```

### Step 3: Invoke via Python SDK

Create file `invoke_bedrock.py`:

```python
import boto3
import json

# Create Bedrock Runtime client
client = boto3.client('bedrock-runtime', region_name='us-east-1')

# Invoke model
response = client.invoke_model(
    modelId='anthropic.claude-3-5-sonnet-20241022-v2:0',
    contentType='application/json',
    accept='application/json',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 256,
        "temperature": 0.7,
        "messages": [
            {"role": "user", "content": "Explain RAG in 3 sentences."}
        ]
    })
)

# Parse response
result = json.loads(response['body'].read())
print(result['content'][0]['text'])
```

Run:

```bash
python invoke_bedrock.py
```

### Step 4: Streaming Response

```python
import boto3
import json

client = boto3.client('bedrock-runtime', region_name='us-east-1')

# Invoke with streaming
response = client.invoke_model_with_response_stream(
    modelId='anthropic.claude-3-5-sonnet-20241022-v2:0',
    contentType='application/json',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 512,
        "messages": [
            {"role": "user", "content": "List 5 benefits of using Amazon Bedrock."}
        ]
    })
)

# Stream response
for event in response['body']:
    chunk = json.loads(event['chunk']['bytes'])
    if chunk['type'] == 'content_block_delta':
        print(chunk['delta'].get('text', ''), end='', flush=True)
print()
```

### Verification

- [ ] Bedrock Playground returns a successful response
- [ ] AWS CLI invoke returns JSON response in `output.json`
- [ ] Python script prints text response
- [ ] Streaming script prints text incrementally

{{% notice tip %}}
**Exam Tip:** Understand the difference between `invoke_model` (synchronous) and `invoke_model_with_response_stream` (streaming). Streaming is the best practice for user-facing applications.
{{% /notice %}}

### References

- [Amazon Bedrock InvokeModel API](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)
- [Amazon Bedrock InvokeModelWithResponseStream API](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html)
- [Boto3 Bedrock Runtime](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock-runtime.html)
