---
title: "4.4 Lab: Agentic AI Workflow"
date: 2025-01-01
weight: 4
---

## Lab 4: Xây dựng Agentic AI Workflow với Bedrock Agents

| Thông tin | Chi tiết |
|-----------|----------|
| Mục tiêu | Tạo Bedrock Agent với action groups và Lambda function |
| Thời gian | ~30 phút |
| Domain liên quan | Domain 2 (Task 2.1) |
| Prerequisites | AWS Account, Bedrock model access, Lambda permissions |

### Mục tiêu

- Tạo Lambda function làm tool cho agent
- Tạo Bedrock Agent với action groups
- Test agent với multi-step tasks

---

### Bước 1: Tạo Lambda Function (Agent Tool)

Tạo Lambda function đóng vai trò "tool" cho agent — ví dụ: tra cứu thông tin sản phẩm.

1. Truy cập [Lambda Console](https://console.aws.amazon.com/lambda/) → **Create function**
2. Cấu hình:
   - Name: `workshop-agent-tool`
   - Runtime: **Python 3.12**
   - Architecture: **x86_64**

3. Thay code bằng:

```python
import json

# Sample product database
PRODUCTS = {
    "bedrock": {
        "name": "Amazon Bedrock",
        "category": "AI/ML",
        "description": "Fully managed service for foundation models",
        "pricing": "Pay per token usage"
    },
    "sagemaker": {
        "name": "Amazon SageMaker",
        "category": "AI/ML",
        "description": "Build, train, and deploy ML models",
        "pricing": "Pay for compute instances"
    },
    "lambda": {
        "name": "AWS Lambda",
        "category": "Compute",
        "description": "Serverless compute service",
        "pricing": "Pay per request and duration"
    }
}

def lambda_handler(event, context):
    agent = event.get('agent', {})
    action_group = event.get('actionGroup', '')
    api_path = event.get('apiPath', '')
    parameters = event.get('parameters', [])

    if api_path == '/getProduct':
        product_id = next(
            (p['value'] for p in parameters if p['name'] == 'productId'), None
        )
        product = PRODUCTS.get(product_id, {})
        body = json.dumps(product) if product else json.dumps({"error": "Product not found"})
    elif api_path == '/listProducts':
        body = json.dumps({"products": list(PRODUCTS.keys())})
    else:
        body = json.dumps({"error": "Unknown API path"})

    return {
        'messageVersion': '1.0',
        'response': {
            'actionGroup': action_group,
            'apiPath': api_path,
            'httpMethod': event.get('httpMethod', 'GET'),
            'httpStatusCode': 200,
            'responseBody': {
                'application/json': {'body': body}
            }
        }
    }
```

4. Click **Deploy**

### Bước 2: Tạo Bedrock Agent

1. Truy cập [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Agents** → **Create agent**
2. Cấu hình:
   - Name: `workshop-product-agent`
   - Model: **Claude 3.5 Sonnet**
   - Instructions:

```
You are a helpful product information assistant. You can look up AWS product details and list available products. When a user asks about a product, use the getProduct tool. When they want to see all products, use listProducts.
```

### Bước 3: Thêm Action Group

1. Trong agent, click **Add action group**
2. Cấu hình:
   - Name: `ProductActions`
   - Action group type: **Define with API schemas**
   - Lambda function: `workshop-agent-tool`
3. API Schema (inline):

```json
{
  "openapi": "3.0.0",
  "info": {"title": "Product API", "version": "1.0.0"},
  "paths": {
    "/listProducts": {
      "get": {
        "summary": "List all available products",
        "operationId": "listProducts",
        "responses": {"200": {"description": "List of products"}}
      }
    },
    "/getProduct": {
      "get": {
        "summary": "Get details of a specific product",
        "operationId": "getProduct",
        "parameters": [{
          "name": "productId",
          "in": "query",
          "required": true,
          "schema": {"type": "string"},
          "description": "The product ID to look up"
        }],
        "responses": {"200": {"description": "Product details"}}
      }
    }
  }
}
```

4. Click **Save and prepare**

### Bước 4: Test Agent

1. Trong agent console, click **Test**
2. Thử các queries:

```
"What products are available?"
"Tell me about Amazon Bedrock"
"Compare Bedrock and SageMaker pricing"
```

3. Quan sát agent trace — xem cách agent quyết định sử dụng tools

{{% notice info %}}
**Agent Trace** cho phép bạn xem reasoning process của agent: cách nó phân tích query, quyết định dùng tool nào, và tổng hợp kết quả. Đây là tính năng quan trọng cho debugging.
{{% /notice %}}

### Verification

- [ ] Lambda function deploy thành công
- [ ] Bedrock Agent được tạo và prepared
- [ ] Agent trả lời câu hỏi bằng cách gọi Lambda tools
- [ ] Agent trace hiển thị reasoning steps
- [ ] Agent xử lý multi-step queries (list → get details)

### Tài liệu tham khảo

- [Amazon Bedrock Agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)
- [AWS Blog - Build Agents with Bedrock](https://aws.amazon.com/blogs/machine-learning/build-agentic-ai-solutions-with-amazon-bedrock/)
