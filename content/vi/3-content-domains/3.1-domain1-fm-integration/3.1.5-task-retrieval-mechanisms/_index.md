---
title: "Task 1.5: Retrieval Mechanisms (RAG)"
date: 2025-01-01
weight: 5
---

## Task 1.5: Thiết kế retrieval mechanisms cho FM augmentation

### Skill 1.5.1: Document segmentation (Chunking)

**Kiến thức cần nắm:**
- **Amazon Bedrock** chunking capabilities (fixed-size, hierarchical, semantic)
- Fixed-size chunking với Lambda functions
- Hierarchical chunking dựa trên content structure
- Semantic chunking — chia theo ý nghĩa nội dung

{{% notice info %}}
**Chunking strategies** ảnh hưởng trực tiếp đến chất lượng retrieval. Fixed-size chunking đơn giản nhưng có thể cắt giữa câu. Semantic chunking giữ nguyên context nhưng phức tạp hơn. Hierarchical chunking kết hợp cả hai.
{{% /notice %}}

### Skill 1.5.2: Embedding solutions

**Kiến thức cần nắm:**
- **Amazon Titan Embeddings** — Dimensionality và domain fit
- So sánh performance của các Bedrock embedding models
- Lambda functions để batch generate embeddings
- Embedding dimensions: trade-off giữa accuracy và storage/compute cost

### Skill 1.5.3: Vector search solutions

**Kiến thức cần nắm:**
- **OpenSearch Service** với vector search capabilities
- **Amazon Aurora** với pgvector extension
- **Amazon Bedrock Knowledge Bases** với managed vector store

### Skill 1.5.4: Advanced search architectures

**Kiến thức cần nắm:**
- Semantic search với OpenSearch
- **Hybrid search** — Kết hợp keyword search và vector search
- **Amazon Bedrock reranker models** — Rerank kết quả để cải thiện relevance

{{% notice tip %}}
**Exam Tip:** Hybrid search (kết hợp keyword + semantic) thường là câu trả lời đúng khi đề hỏi về cách cải thiện search relevance. Reranker models giúp refine kết quả sau khi retrieval.
{{% /notice %}}

### Skill 1.5.5: Query handling systems

**Kiến thức cần nắm:**
- **Amazon Bedrock** cho query expansion
- Lambda functions cho query decomposition
- **Step Functions** cho query transformation
- Multi-query strategies

### Skill 1.5.6: Consistent access mechanisms

**Kiến thức cần nắm:**
- Function calling interfaces cho vector search
- **Model Context Protocol (MCP)** clients cho vector queries
- Standardized API patterns cho retrieval augmentation

### Tài liệu tham khảo

- [Amazon Bedrock Knowledge Bases Chunking](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-chunking.html)
- [Amazon Titan Embeddings](https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html)
- [AWS Blog - Hybrid Search with OpenSearch](https://aws.amazon.com/blogs/big-data/build-a-hybrid-search-solution-with-amazon-opensearch-service/)
