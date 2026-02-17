---
title: "4.5 Lab: Monitoring GenAI"
date: 2025-01-01
weight: 5
---

## Lab 5: Monitoring GenAI Applications với CloudWatch

| Thông tin | Chi tiết |
|-----------|----------|
| Mục tiêu | Enable model invocation logging, tạo CloudWatch dashboard |
| Thời gian | ~15 phút |
| Domain liên quan | Domain 4 (Task 4.3) |
| Prerequisites | AWS Account, Bedrock model access, đã hoàn thành Lab 1 |

### Mục tiêu

- Enable Bedrock model invocation logging
- Xem logs trong CloudWatch
- Tạo CloudWatch dashboard cho GenAI metrics

---

### Bước 1: Enable Model Invocation Logging

1. Truy cập [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Settings**
2. Trong **Model invocation logging**, click **Configure**
3. Cấu hình:
   - Log destination: **CloudWatch Logs**
   - Log group: `/aws/bedrock/model-invocations`
   - Enable: **Text data**, **Image data** (nếu cần)
4. Click **Save**

Hoặc qua CLI:

```bash
aws bedrock put-model-invocation-logging-configuration \
  --logging-config '{
    "cloudWatchConfig": {
      "logGroupName": "/aws/bedrock/model-invocations",
      "roleArn": "<YOUR_LOGGING_ROLE_ARN>",
      "largeDataDeliveryS3Config": {
        "bucketName": "<YOUR_S3_BUCKET>",
        "keyPrefix": "bedrock-logs/"
      }
    },
    "textDataDeliveryEnabled": true,
    "imageDataDeliveryEnabled": false,
    "embeddingDataDeliveryEnabled": false
  }'
```

### Bước 2: Generate Sample Invocations

Chạy vài invocations để tạo log data:

```python
import boto3
import json

client = boto3.client('bedrock-runtime', region_name='us-east-1')

prompts = [
    "What is Amazon Bedrock?",
    "Explain RAG in simple terms.",
    "List 3 benefits of serverless computing.",
    "What is prompt engineering?",
    "How does vector search work?"
]

for prompt in prompts:
    response = client.invoke_model(
        modelId='anthropic.claude-3-5-sonnet-20241022-v2:0',
        contentType='application/json',
        accept='application/json',
        body=json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 128,
            "messages": [{"role": "user", "content": prompt}]
        })
    )
    result = json.loads(response['body'].read())
    print(f"Prompt: {prompt[:40]}... | Tokens: input={result['usage']['input_tokens']}, output={result['usage']['output_tokens']}")
```

### Bước 3: Xem Logs trong CloudWatch

1. Truy cập [CloudWatch Console](https://console.aws.amazon.com/cloudwatch/) → **Logs** → **Log groups**
2. Chọn `/aws/bedrock/model-invocations`
3. Xem log entries — mỗi entry chứa:
   - Model ID
   - Input/output tokens
   - Request/response content
   - Latency

Dùng CloudWatch Logs Insights:

```sql
fields @timestamp, modelId, inputTokenCount, outputTokenCount
| sort @timestamp desc
| limit 20
```

### Bước 4: Tạo CloudWatch Dashboard

1. Truy cập **CloudWatch** → **Dashboards** → **Create dashboard**
2. Name: `GenAI-Monitoring`
3. Thêm widgets:

Widget 1 — Invocation Count:
```sql
fields @timestamp
| stats count() as invocations by bin(1h)
```

Widget 2 — Token Usage:
```sql
fields @timestamp, inputTokenCount, outputTokenCount
| stats sum(inputTokenCount) as totalInput, sum(outputTokenCount) as totalOutput by bin(1h)
```

Widget 3 — Latency:
```sql
fields @timestamp, @duration
| stats avg(@duration) as avgLatency, max(@duration) as maxLatency by bin(1h)
```

### Verification

- [ ] Model invocation logging enabled
- [ ] Log entries xuất hiện trong CloudWatch Logs
- [ ] Logs Insights query trả về kết quả
- [ ] Dashboard hiển thị metrics

{{% notice tip %}}
**Exam Tip:** Bedrock Model Invocation Logs là cách chính để monitor GenAI applications. Kết hợp với CloudWatch Logs Insights để phân tích patterns, token usage, và latency.
{{% /notice %}}

### Tài liệu tham khảo

- [Amazon Bedrock Model Invocation Logging](https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html)
- [Amazon CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
