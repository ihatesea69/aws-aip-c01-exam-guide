---
title: "Task 1.5: Retrieval Mechanisms (RAG)"
date: 2025-01-01
weight: 5
---

## Task 1.5: Design Retrieval Mechanisms for FM Augmentation

### Skill 1.5.1: Document Segmentation (Chunking)

**Key Knowledge:**
- **Amazon Bedrock** chunking capabilities (fixed-size, hierarchical, semantic)
- Fixed-size chunking with Lambda functions
- Hierarchical chunking based on content structure

{{% notice info %}}
**Chunking strategies** directly impact retrieval quality. Fixed-size chunking is simple but may cut mid-sentence. Semantic chunking preserves context but is more complex. Hierarchical chunking combines both.
{{% /notice %}}

### Skill 1.5.2: Embedding Solutions

**Key Knowledge:**
- **Amazon Titan Embeddings** — Dimensionality and domain fit
- Comparing performance of Bedrock embedding models
- Embedding dimensions: trade-off between accuracy and storage/compute cost

### Skill 1.5.3: Vector Search Solutions

**Key Knowledge:**
- **OpenSearch Service** with vector search capabilities
- **Amazon Aurora** with pgvector extension
- **Amazon Bedrock Knowledge Bases** with managed vector store

### Skill 1.5.4: Advanced Search Architectures

**Key Knowledge:**
- **Hybrid search** — Combining keyword search and vector search
- **Amazon Bedrock reranker models** — Rerank results to improve relevance

{{% notice tip %}}
**Exam Tip:** Hybrid search (keyword + semantic) is often the correct answer when asked about improving search relevance. Reranker models help refine results after retrieval.
{{% /notice %}}

### Skill 1.5.5: Query Handling Systems

**Key Knowledge:**
- **Amazon Bedrock** for query expansion
- Lambda functions for query decomposition
- **Step Functions** for query transformation

### Skill 1.5.6: Consistent Access Mechanisms

**Key Knowledge:**
- Function calling interfaces for vector search
- **Model Context Protocol (MCP)** clients for vector queries
- Standardized API patterns for retrieval augmentation

### References

- [Amazon Bedrock Knowledge Bases Chunking](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-chunking.html)
- [AWS Blog - Hybrid Search with OpenSearch](https://aws.amazon.com/blogs/big-data/build-a-hybrid-search-solution-with-amazon-opensearch-service/)
