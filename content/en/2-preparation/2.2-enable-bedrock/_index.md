---
title: "2.2 Enable Amazon Bedrock"
date: 2025-01-01
weight: 2
---

## Enable Amazon Bedrock Model Access

Amazon Bedrock requires you to enable access for each model before use. In this section, we will enable the models needed for the hands-on labs.

### Step 1: Access Amazon Bedrock Console

1. Sign in to [AWS Console](https://console.aws.amazon.com/)
2. Switch to region **US East (N. Virginia) - us-east-1**
3. Search for and navigate to **Amazon Bedrock**

### Step 2: Request Model Access

1. In the left menu, select **Bedrock configurations** → **Model access**
2. Click **Modify model access**
3. Enable the following models (required for labs):

| Model | Provider | Purpose |
|-------|----------|---------|
| Claude 3.5 Sonnet | Anthropic | Text generation, chat |
| Claude 3 Haiku | Anthropic | Lightweight text tasks |
| Amazon Titan Text Express | Amazon | Text generation |
| Amazon Titan Embeddings V2 | Amazon | Vector embeddings for RAG |

4. Click **Next** → Review → **Submit**

{{% notice info %}}
Some models (like Claude) require you to accept an End User License Agreement (EULA) before use. The approval process typically takes a few minutes.
{{% /notice %}}

### Step 3: Verify Model Access

Check that models are enabled:

```bash
aws bedrock list-foundation-models \
  --region us-east-1 \
  --query "modelSummaries[?modelId=='anthropic.claude-3-5-sonnet-20241022-v2:0'].{ModelId:modelId,Status:modelLifecycle.status}" \
  --output table
```

Or quick test with Bedrock Playground:

1. In Bedrock Console, select **Playgrounds** → **Chat**
2. Select model **Claude 3.5 Sonnet**
3. Enter test prompt: "Hello, what is Amazon Bedrock?"
4. If you receive a response, the model is ready

{{% notice warning %}}
**Cost:** Each model invocation incurs charges based on token usage. Monitor costs in AWS Cost Explorer and remember to cleanup after completing the workshop.
{{% /notice %}}

### References

- [Amazon Bedrock Model Access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html)
- [Amazon Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/)
- [Amazon Bedrock Supported Regions](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html)
- [AWS Blog - Getting Started with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/getting-started-with-amazon-bedrock/)
