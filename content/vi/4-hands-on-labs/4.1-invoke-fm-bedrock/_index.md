---
title: "4.1 Lab: Invoke FM via Bedrock"
date: 2025-01-01
weight: 1
---

## Lab 1: Invoke Foundation Model qua Amazon Bedrock

| Thông tin | Chi tiết |
|-----------|----------|
| Mục tiêu | Invoke FM qua Bedrock Console, AWS CLI, và Python SDK |
| Thời gian | ~15 phút |
| Domain liên quan | Domain 1 (Task 1.2), Domain 2 (Task 2.4) |
| Prerequisites | AWS Account, Bedrock model access enabled |

### Mục tiêu

Sau lab này, bạn sẽ biết cách:
- Invoke FM qua Amazon Bedrock Console (Playground)
- Invoke FM qua AWS CLI
- Invoke FM qua Python SDK (boto3)
- Sử dụng streaming response

---

### Bước 1: Invoke qua Bedrock Playground

1. Truy cập [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/)
2. Chọn **Playgrounds** → **Chat**
3. Chọn model: **Claude 3.5 Sonnet**
4. Nhập prompt:

```
Giải thích Retrieval Augmented Generation (RAG) trong 3 câu.
```

5. Quan sát response và thử điều chỉnh parameters:
   - **Temperature**: thử 0.1 (deterministic) và 0.9 (creative)
   - **Max tokens**: thử 100 và 500

### Bước 2: Invoke qua AWS CLI

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

type output.json
```

### Bước 3: Invoke qua Python SDK

Tạo file `invoke_bedrock.py`:

```python
import boto3
import json

# Tạo Bedrock Runtime client
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

Chạy:

```bash
python invoke_bedrock.py
```

### Bước 4: Streaming Response

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

- [ ] Bedrock Playground trả về response thành công
- [ ] AWS CLI invoke trả về JSON response trong `output.json`
- [ ] Python script in ra text response
- [ ] Streaming script in ra text từng phần (incremental)

{{% notice tip %}}
**Exam Tip:** Hiểu sự khác biệt giữa `invoke_model` (synchronous) và `invoke_model_with_response_stream` (streaming). Streaming là best practice cho user-facing applications.
{{% /notice %}}

### Tài liệu tham khảo

- [Amazon Bedrock InvokeModel API](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)
- [Amazon Bedrock InvokeModelWithResponseStream API](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html)
- [Boto3 Bedrock Runtime](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock-runtime.html)
