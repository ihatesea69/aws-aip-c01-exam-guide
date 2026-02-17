---
title: "Clean Up Resources"
date: 2025-01-01
weight: 6
chapter: true
pre: "<b>6. </b>"
---

### Clean Up Resources

# Clean Up

{{% notice warning %}}
**Important:** Delete all resources created during the hands-on labs to avoid unexpected charges.
{{% /notice %}}

Delete resources in reverse order (resources created last should be deleted first):

### 1. Lab 5 - Monitoring

- Delete CloudWatch Dashboard: **CloudWatch** → **Dashboards** → Select `GenAI-Monitoring` → **Delete**
- Delete Log Group: **CloudWatch** → **Log groups** → Select `/aws/bedrock/model-invocations` → **Delete**
- Disable model invocation logging: **Bedrock** → **Settings** → **Model invocation logging** → **Disable**

### 2. Lab 4 - Agentic Workflow

- Delete Bedrock Agent: **Bedrock** → **Agents** → Select `workshop-product-agent` → **Delete**
- Delete Lambda Function: **Lambda** → **Functions** → Select `workshop-agent-tool` → **Delete**
- Delete IAM roles created for Agent and Lambda

### 3. Lab 3 - Guardrails

- Delete Guardrail: **Bedrock** → **Guardrails** → Select `workshop-guardrail` → **Delete**

### 4. Lab 2 - RAG Pipeline

- Delete Knowledge Base: **Bedrock** → **Knowledge bases** → Select `workshop-knowledge-base` → **Delete**
  - Choose to also delete the vector store (OpenSearch Serverless collection)
- Delete S3 bucket:

```bash
# Delete all objects in bucket
aws s3 rm s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text) --recursive

# Delete bucket
aws s3 rb s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text)
```

- Delete IAM roles created for Knowledge Base

### 5. Lab 1 - Invoke FM

- Delete output files: `rm output.json invoke_bedrock.py bedrock-overview.txt rag-overview.txt`
- No AWS resources to delete (on-demand invocation doesn't create persistent resources)

### 6. Verify Costs

1. Navigate to [AWS Cost Explorer](https://console.aws.amazon.com/cost-management/home)
2. Check charges from Bedrock, OpenSearch Serverless, Lambda, S3
3. Ensure no resources are still running

{{% notice tip %}}
Use **AWS Cost Explorer** or **Billing Dashboard** to verify no charges are incurring after cleanup.
{{% /notice %}}

{{% children %}}
