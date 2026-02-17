---
title: "Task 4.3: Monitoring Systems"
date: 2025-01-01
weight: 3
---

## Task 4.3: Monitoring systems cho GenAI

### Skill 4.3.1: Holistic observability

**Kiến thức cần nắm:**
- Operational metrics, performance tracing
- FM interaction tracing
- Business impact metrics với custom dashboards

**Giải thích chi tiết:**

**Observability Pillars cho GenAI:**

| Pillar | Tools | Metrics |
|--------|-------|---------|
| Metrics | CloudWatch Metrics | Token usage, latency, error rates |
| Logs | CloudWatch Logs | Prompts, responses, errors |
| Traces | X-Ray | End-to-end request flow |
| Dashboards | CloudWatch Dashboards | Business + operational views |

### Skill 4.3.2: GenAI-specific monitoring

**Kiến thức cần nắm:**
- **CloudWatch** cho token usage tracking
- Prompt effectiveness monitoring
- Hallucination rate tracking
- Response quality metrics
- Anomaly detection cho token burst patterns
- **Amazon Bedrock Model Invocation Logs**
- Cost anomaly detection

**Giải thích chi tiết:**

**Bedrock Model Invocation Logging:**
```python
# Enable model invocation logging
bedrock.put_model_invocation_logging_configuration(
    loggingConfig={
        'cloudWatchConfig': {
            'logGroupName': '/aws/bedrock/model-invocations',
            'roleArn': 'arn:aws:iam::role/bedrock-logging-role',
            'largeDataDelivery': {
                's3Config': {
                    'bucketName': 'bedrock-logs-bucket',
                    'keyPrefix': 'invocation-logs/'
                }
            }
        },
        'textDataDeliveryEnabled': True,
        'imageDataDeliveryEnabled': True
    }
)
```

**Key GenAI Metrics:**

| Metric | Mô tả | Alert Threshold |
|--------|--------|----------------|
| Input tokens/request | Avg input token count | > expected baseline |
| Output tokens/request | Avg output token count | > max_tokens setting |
| Latency (TTFT) | Time to first token | > SLA threshold |
| Latency (total) | Total response time | > SLA threshold |
| Error rate | % failed invocations | > 1% |
| Throttle rate | % throttled requests | > 0.5% |
| Cost per request | Avg cost per invocation | > budget threshold |

### Skill 4.3.3: Integrated observability

**Kiến thức cần nắm:**
- Operational metric dashboards
- Business impact visualizations
- Compliance monitoring
- Forensic traceability và audit logging

**Giải thích chi tiết:**

**CloudWatch Dashboard cho GenAI:**
- Token usage trends (daily/weekly)
- Cost breakdown by model
- Latency percentiles (p50, p90, p99)
- Error rate by error type
- Top queries by token consumption

### Skill 4.3.4: Tool performance monitoring

**Kiến thức cần nắm:**
- Call pattern tracking cho agent tools
- Performance metric collection
- Tool calling observability
- Multi-agent coordination tracking

**Giải thích chi tiết:**

**Agent Tool Monitoring:**
- Track tool call frequency
- Measure tool execution time
- Monitor tool success/failure rates
- Identify unused or underperforming tools
- Track multi-agent handoff patterns

### Skill 4.3.5: Vector store monitoring

**Kiến thức cần nắm:**
- Performance monitoring cho vector databases
- Automated index optimization
- Data quality validation

**Giải thích chi tiết:**

**Vector Store Health Metrics:**

| Metric | Mô tả |
|--------|--------|
| Query latency | Time to return search results |
| Index size | Number of vectors stored |
| Recall rate | % relevant results returned |
| Index freshness | Time since last update |
| Storage utilization | Disk/memory usage |

### Skill 4.3.6: FM-specific troubleshooting

**Kiến thức cần nắm:**
- Golden datasets cho hallucination detection
- Output diffing cho response consistency
- Reasoning path tracing
- Specialized observability pipelines

**Giải thích chi tiết:**

**Hallucination Detection Pipeline:**
```
FM Response → Compare against golden dataset
    ↓
Semantic similarity score < threshold?
    ↓ Yes
Flag as potential hallucination → Alert → Human review
```

**Response Consistency Testing:**
- Run same prompt multiple times
- Compare outputs (output diffing)
- Flag inconsistent responses
- Useful cho detecting model drift

### Tài liệu tham khảo

- [Amazon Bedrock Model Invocation Logging](https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html)
- [AWS Blog - Monitoring GenAI Applications](https://aws.amazon.com/blogs/machine-learning/monitor-generative-ai-applications-with-amazon-cloudwatch/)
- [Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)
- [AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)
