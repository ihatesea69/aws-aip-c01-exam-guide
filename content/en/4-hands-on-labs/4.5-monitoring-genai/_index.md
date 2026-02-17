---
title: "4.5 Lab: Monitoring GenAI"
date: 2025-01-01
weight: 5
---

## Lab 5: Monitoring GenAI Applications with CloudWatch

| Info | Details |
|------|---------|
| Objective | Enable model invocation logging, create CloudWatch dashboard |
| Duration | ~15 minutes |
| Related Domain | Domain 4 (Task 4.3) |
| Prerequisites | AWS Account, Bedrock model access, completed Lab 1 |

### Objectives

- Enable Bedrock model invocation logging
- View logs in CloudWatch
- Create CloudWatch dashboard for GenAI metrics

---

### Step 1: Enable Model Invocation Logging

1. Navigate to [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Settings**
2. Under **Model invocation logging**, click **Configure**
3. Configure:
   - Log destination: **CloudWatch Logs**
   - Log group: `/aws/bedrock/model-invocations`
   - Enable: **Text data**, **Image data** (if needed)
4. Click **Save**

### Step 2: Generate Sample Invocations

Run a few invocations to generate log data:

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

### Step 3: View Logs in CloudWatch

1. Navigate to [CloudWatch Console](https://console.aws.amazon.com/cloudwatch/) → **Logs** → **Log groups**
2. Select `/aws/bedrock/model-invocations`
3. View log entries — each entry contains:
   - Model ID
   - Input/output tokens
   - Request/response content
   - Latency

Use CloudWatch Logs Insights:

```sql
fields @timestamp, modelId, inputTokenCount, outputTokenCount
| sort @timestamp desc
| limit 20
```

### Step 4: Create CloudWatch Dashboard

1. Navigate to **CloudWatch** → **Dashboards** → **Create dashboard**
2. Name: `GenAI-Monitoring`
3. Add widgets:

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
- [ ] Log entries appear in CloudWatch Logs
- [ ] Logs Insights query returns results
- [ ] Dashboard displays metrics

{{% notice tip %}}
**Exam Tip:** Bedrock Model Invocation Logs are the primary way to monitor GenAI applications. Combine with CloudWatch Logs Insights to analyze patterns, token usage, and latency.
{{% /notice %}}

### References

- [Amazon Bedrock Model Invocation Logging](https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html)
- [Amazon CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
