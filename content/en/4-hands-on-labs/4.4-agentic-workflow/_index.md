---
title: "4.4 Lab: Agentic AI Workflow"
date: 2025-01-01
weight: 4
---

## Lab 4: Build Agentic AI Workflow with Bedrock Agents

| Info | Details |
|------|---------|
| Objective | Create Bedrock Agent with action groups and Lambda function |
| Duration | ~30 minutes |
| Related Domain | Domain 2 (Task 2.1) |
| Prerequisites | AWS Account, Bedrock model access, Lambda permissions |

### Objectives

- Create Lambda function as agent tool
- Create Bedrock Agent with action groups
- Test agent with multi-step tasks

---

### Step 1: Create Lambda Function (Agent Tool)

Create a Lambda function as a "tool" for the agent — e.g., product information lookup.

1. Navigate to [Lambda Console](https://console.aws.amazon.com/lambda/) → **Create function**
2. Configure:
   - Name: `workshop-agent-tool`
   - Runtime: **Python 3.12**
   - Architecture: **x86_64**

3. Replace code with:

```python
import json

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

### Step 2: Create Bedrock Agent

1. Navigate to [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Agents** → **Create agent**
2. Configure:
   - Name: `workshop-product-agent`
   - Model: **Claude 3.5 Sonnet**
   - Instructions:

```
You are a helpful product information assistant. You can look up AWS product details and list available products. When a user asks about a product, use the getProduct tool. When they want to see all products, use listProducts.
```

### Step 3: Add Action Group

1. In the agent, click **Add action group**
2. Configure:
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

### Step 4: Test Agent

1. In agent console, click **Test**
2. Try these queries:

```
"What products are available?"
"Tell me about Amazon Bedrock"
"Compare Bedrock and SageMaker pricing"
```

3. Observe agent trace — see how the agent decides which tools to use

{{% notice info %}}
**Agent Trace** lets you see the agent's reasoning process: how it analyzes the query, decides which tool to use, and synthesizes results. This is an important feature for debugging.
{{% /notice %}}

### Verification

- [ ] Lambda function deployed successfully
- [ ] Bedrock Agent created and prepared
- [ ] Agent answers questions by calling Lambda tools
- [ ] Agent trace shows reasoning steps
- [ ] Agent handles multi-step queries (list → get details)

### References

- [Amazon Bedrock Agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)
- [AWS Blog - Build Agents with Bedrock](https://aws.amazon.com/blogs/machine-learning/build-agentic-ai-solutions-with-amazon-bedrock/)
