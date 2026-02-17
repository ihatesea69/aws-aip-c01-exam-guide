---
title: "2.2 Enable Amazon Bedrock"
date: 2025-01-01
weight: 2
---

## Enable Amazon Bedrock Model Access

Amazon Bedrock yêu cầu bạn phải enable access cho từng model trước khi sử dụng. Trong phần này, chúng ta sẽ enable các models cần thiết cho hands-on labs.

### Bước 1: Truy cập Amazon Bedrock Console

1. Đăng nhập vào [AWS Console](https://console.aws.amazon.com/)
2. Chuyển sang region **US East (N. Virginia) - us-east-1**
3. Tìm và truy cập **Amazon Bedrock** trong thanh tìm kiếm

### Bước 2: Request Model Access

1. Trong menu bên trái, chọn **Bedrock configurations** → **Model access**
2. Click **Modify model access**
3. Enable các models sau (cần thiết cho labs):

| Model | Provider | Mục đích |
|-------|----------|----------|
| Claude 3.5 Sonnet | Anthropic | Text generation, chat |
| Claude 3 Haiku | Anthropic | Lightweight text tasks |
| Amazon Titan Text Express | Amazon | Text generation |
| Amazon Titan Embeddings V2 | Amazon | Vector embeddings cho RAG |

4. Click **Next** → Review → **Submit**

{{% notice info %}}
Một số models (như Claude) yêu cầu bạn chấp nhận End User License Agreement (EULA) trước khi sử dụng. Quá trình approval thường mất vài phút.
{{% /notice %}}

### Bước 3: Verify Model Access

Kiểm tra model đã được enable:

```bash
aws bedrock list-foundation-models \
  --region us-east-1 \
  --query "modelSummaries[?modelId=='anthropic.claude-3-5-sonnet-20241022-v2:0'].{ModelId:modelId,Status:modelLifecycle.status}" \
  --output table
```

Hoặc test nhanh với Bedrock Playground:

1. Trong Bedrock Console, chọn **Playgrounds** → **Chat**
2. Chọn model **Claude 3.5 Sonnet**
3. Nhập prompt test: "Hello, what is Amazon Bedrock?"
4. Nếu nhận được response, model đã sẵn sàng

{{% notice warning %}}
**Chi phí:** Mỗi lần invoke model sẽ tính phí theo token usage. Hãy theo dõi chi phí trong AWS Cost Explorer và nhớ cleanup sau khi hoàn thành workshop.
{{% /notice %}}

### Tài liệu tham khảo

- [Amazon Bedrock Model Access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html)
- [Amazon Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/)
- [Amazon Bedrock Supported Regions](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html)
- [AWS Blog - Getting Started with Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/getting-started-with-amazon-bedrock/)
