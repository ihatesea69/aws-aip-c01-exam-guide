---
title: "Dọn dẹp tài nguyên"
date: 2025-01-01
weight: 6
chapter: true
pre: "<b>6. </b>"
---

### Dọn dẹp tài nguyên

# Clean Up

{{% notice warning %}}
**Quan trọng:** Hãy xóa tất cả tài nguyên đã tạo trong hands-on labs để tránh phát sinh chi phí ngoài ý muốn.
{{% /notice %}}

Xóa các tài nguyên theo thứ tự ngược lại (tài nguyên tạo sau xóa trước):

### 1. Lab 5 - Monitoring

- Xóa CloudWatch Dashboard: **CloudWatch** → **Dashboards** → Chọn `GenAI-Monitoring` → **Delete**
- Xóa Log Group: **CloudWatch** → **Log groups** → Chọn `/aws/bedrock/model-invocations` → **Delete**
- Disable model invocation logging: **Bedrock** → **Settings** → **Model invocation logging** → **Disable**

### 2. Lab 4 - Agentic Workflow

- Xóa Bedrock Agent: **Bedrock** → **Agents** → Chọn `workshop-product-agent` → **Delete**
- Xóa Lambda Function: **Lambda** → **Functions** → Chọn `workshop-agent-tool` → **Delete**
- Xóa IAM roles được tạo cho Agent và Lambda

### 3. Lab 3 - Guardrails

- Xóa Guardrail: **Bedrock** → **Guardrails** → Chọn `workshop-guardrail` → **Delete**

### 4. Lab 2 - RAG Pipeline

- Xóa Knowledge Base: **Bedrock** → **Knowledge bases** → Chọn `workshop-knowledge-base` → **Delete**
  - Chọn xóa cả vector store (OpenSearch Serverless collection)
- Xóa S3 bucket:

```bash
# Xóa tất cả objects trong bucket
aws s3 rm s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text) --recursive

# Xóa bucket
aws s3 rb s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text)
```

- Xóa IAM roles được tạo cho Knowledge Base

### 5. Lab 1 - Invoke FM

- Xóa file output: `del output.json invoke_bedrock.py bedrock-overview.txt rag-overview.txt`
- Không cần xóa gì trên AWS (on-demand invocation không tạo persistent resources)

### 6. Kiểm tra chi phí

1. Truy cập [AWS Cost Explorer](https://console.aws.amazon.com/cost-management/home)
2. Kiểm tra chi phí phát sinh từ Bedrock, OpenSearch Serverless, Lambda, S3
3. Đảm bảo không còn resources đang chạy

{{% notice tip %}}
Sử dụng **AWS Cost Explorer** hoặc **Billing Dashboard** để verify rằng không còn chi phí phát sinh sau khi cleanup.
{{% /notice %}}

{{% children %}}
