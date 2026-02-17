---
title: "4.2 Lab: Build RAG Pipeline"
date: 2025-01-01
weight: 2
---

## Lab 2: Xây dựng RAG Pipeline với Amazon Bedrock Knowledge Bases

| Thông tin | Chi tiết |
|-----------|----------|
| Mục tiêu | Tạo Knowledge Base, upload documents, query với RAG |
| Thời gian | ~30 phút |
| Domain liên quan | Domain 1 (Task 1.4, 1.5) |
| Prerequisites | AWS Account, Bedrock model access, S3 bucket |

### Mục tiêu

- Tạo S3 bucket và upload documents
- Tạo Amazon Bedrock Knowledge Base
- Sync data source
- Query Knowledge Base với RAG

---

### Bước 1: Tạo S3 Bucket và upload documents

```bash
# Tạo S3 bucket
aws s3 mb s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text) --region us-east-1

# Tạo sample document
echo "Amazon Bedrock is a fully managed service that offers a choice of high-performing foundation models from leading AI companies. It provides a single API to access models from Anthropic, Meta, Amazon, Cohere, and Mistral. Bedrock supports features like Knowledge Bases for RAG, Guardrails for content safety, and Agents for autonomous workflows." > bedrock-overview.txt

echo "Retrieval Augmented Generation (RAG) is a technique that enhances LLM responses by retrieving relevant information from external data sources. RAG reduces hallucination by grounding responses in factual data. Amazon Bedrock Knowledge Bases provides a managed RAG solution with automatic chunking, embedding, and vector storage." > rag-overview.txt

# Upload documents
aws s3 cp bedrock-overview.txt s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text)/
aws s3 cp rag-overview.txt s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text)/
```

### Bước 2: Tạo Knowledge Base qua Console

1. Truy cập [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Knowledge bases**
2. Click **Create knowledge base**
3. Cấu hình:
   - Name: `workshop-knowledge-base`
   - IAM role: Create new role
4. Data source:
   - Type: **Amazon S3**
   - S3 URI: `s3://workshop-rag-kb-<account-id>/`
5. Embedding model: **Amazon Titan Embeddings V2**
6. Vector store: **Quick create a new vector store** (OpenSearch Serverless)
7. Click **Create knowledge base**

{{% notice info %}}
Knowledge Base sẽ tự động: chunking documents → generate embeddings → store trong vector database. Quá trình sync có thể mất vài phút.
{{% /notice %}}

### Bước 3: Sync Data Source

1. Sau khi Knowledge Base được tạo, chọn data source
2. Click **Sync** để index documents
3. Đợi status chuyển sang **Available**

### Bước 4: Query Knowledge Base

Qua Console:
1. Chọn Knowledge Base → **Test**
2. Chọn model: **Claude 3.5 Sonnet**
3. Nhập query: "What is RAG and how does Bedrock support it?"
4. Quan sát response với source citations

Qua Python SDK:

```python
import boto3
import json

client = boto3.client('bedrock-agent-runtime', region_name='us-east-1')

response = client.retrieve_and_generate(
    input={'text': 'What is RAG and how does Bedrock support it?'},
    retrieveAndGenerateConfiguration={
        'type': 'KNOWLEDGE_BASE',
        'knowledgeBaseConfiguration': {
            'knowledgeBaseId': '<YOUR_KB_ID>',
            'modelArn': 'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-5-sonnet-20241022-v2:0'
        }
    }
)

print("Response:", response['output']['text'])
print("\nCitations:")
for citation in response.get('citations', []):
    for ref in citation.get('retrievedReferences', []):
        print(f"  - {ref['location']['s3Location']['uri']}")
```

### Verification

- [ ] S3 bucket chứa documents
- [ ] Knowledge Base status là Available
- [ ] Data source sync thành công
- [ ] Query trả về response với source citations
- [ ] Response chứa thông tin từ uploaded documents

{{% notice tip %}}
**Exam Tip:** Hiểu flow: Documents → Chunking → Embeddings → Vector Store → Query → Retrieve → Augment Prompt → Generate Response. Đây là core RAG pipeline.
{{% /notice %}}

### Tài liệu tham khảo

- [Amazon Bedrock Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)
- [AWS Blog - Build RAG with Bedrock Knowledge Bases](https://aws.amazon.com/blogs/machine-learning/build-a-robust-rag-solution-with-amazon-bedrock-knowledge-bases/)
