---
title: "4.2 Lab: Build RAG Pipeline"
date: 2025-01-01
weight: 2
---

## Lab 2: Build RAG Pipeline with Amazon Bedrock Knowledge Bases

| Info | Details |
|------|---------|
| Objective | Create Knowledge Base, upload documents, query with RAG |
| Duration | ~30 minutes |
| Related Domain | Domain 1 (Task 1.4, 1.5) |
| Prerequisites | AWS Account, Bedrock model access, S3 bucket |

### Objectives

- Create S3 bucket and upload documents
- Create Amazon Bedrock Knowledge Base
- Sync data source
- Query Knowledge Base with RAG

---

### Step 1: Create S3 Bucket and Upload Documents

```bash
# Create S3 bucket
aws s3 mb s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text) --region us-east-1

# Create sample documents
echo "Amazon Bedrock is a fully managed service that offers a choice of high-performing foundation models from leading AI companies. It provides a single API to access models from Anthropic, Meta, Amazon, Cohere, and Mistral. Bedrock supports features like Knowledge Bases for RAG, Guardrails for content safety, and Agents for autonomous workflows." > bedrock-overview.txt

echo "Retrieval Augmented Generation (RAG) is a technique that enhances LLM responses by retrieving relevant information from external data sources. RAG reduces hallucination by grounding responses in factual data. Amazon Bedrock Knowledge Bases provides a managed RAG solution with automatic chunking, embedding, and vector storage." > rag-overview.txt

# Upload documents
aws s3 cp bedrock-overview.txt s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text)/
aws s3 cp rag-overview.txt s3://workshop-rag-kb-$(aws sts get-caller-identity --query Account --output text)/
```

### Step 2: Create Knowledge Base via Console

1. Navigate to [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/) → **Knowledge bases**
2. Click **Create knowledge base**
3. Configure:
   - Name: `workshop-knowledge-base`
   - IAM role: Create new role
4. Data source:
   - Type: **Amazon S3**
   - S3 URI: `s3://workshop-rag-kb-<account-id>/`
5. Embedding model: **Amazon Titan Embeddings V2**
6. Vector store: **Quick create a new vector store** (OpenSearch Serverless)
7. Click **Create knowledge base**

{{% notice info %}}
Knowledge Base will automatically: chunk documents → generate embeddings → store in vector database. The sync process may take a few minutes.
{{% /notice %}}

### Step 3: Sync Data Source

1. After Knowledge Base is created, select the data source
2. Click **Sync** to index documents
3. Wait for status to change to **Available**

### Step 4: Query Knowledge Base

Via Console:
1. Select Knowledge Base → **Test**
2. Select model: **Claude 3.5 Sonnet**
3. Enter query: "What is RAG and how does Bedrock support it?"
4. Observe response with source citations

Via Python SDK:

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

- [ ] S3 bucket contains documents
- [ ] Knowledge Base status is Available
- [ ] Data source sync successful
- [ ] Query returns response with source citations
- [ ] Response contains information from uploaded documents

{{% notice tip %}}
**Exam Tip:** Understand the flow: Documents → Chunking → Embeddings → Vector Store → Query → Retrieve → Augment Prompt → Generate Response. This is the core RAG pipeline.
{{% /notice %}}

### References

- [Amazon Bedrock Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)
- [AWS Blog - Build RAG with Bedrock Knowledge Bases](https://aws.amazon.com/blogs/machine-learning/build-a-robust-rag-solution-with-amazon-bedrock-knowledge-bases/)
