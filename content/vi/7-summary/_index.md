---
title: "Tổng kết & Chiến lược thi"
date: 2025-01-01
weight: 7
chapter: true
pre: "<b>7. </b>"
---

### Tổng kết

# Tổng kết & Chiến lược thi AIP-C01

Chúc mừng bạn đã hoàn thành workshop! Dưới đây là tổng kết kiến thức và chiến lược để bạn tự tin bước vào phòng thi.

---

## Chiến lược làm bài thi

### Quản lý thời gian

- **85 câu hỏi / 180 phút** = trung bình ~2 phút/câu
- Đọc câu hỏi và loại trừ đáp án sai trước
- Nếu không chắc, đánh dấu (flag) và quay lại sau
- Dành 15-20 phút cuối để review các câu đã flag

### Kỹ thuật trả lời

- Đọc kỹ câu hỏi — chú ý các từ khóa: "MOST cost-effective", "LEAST operational overhead", "BEST practice"
- Loại trừ đáp án rõ ràng sai trước
- Khi có 2 đáp án đều đúng, chọn đáp án phù hợp nhất với yêu cầu cụ thể của câu hỏi
- AWS luôn ưu tiên: managed services > self-managed, serverless > server-based, least privilege

### Ưu tiên theo Domain weighting

| Ưu tiên | Domain | Tỷ trọng | Chiến lược |
|---------|--------|----------|------------|
| 1 | Domain 1: FM Integration | 31% | Ôn kỹ nhất — RAG, vector stores, prompt engineering |
| 2 | Domain 2: Implementation | 26% | Agentic AI, streaming APIs, deployment patterns |
| 3 | Domain 3: Safety & Security | 20% | Guardrails, PII, governance — AWS luôn hỏi security |
| 4 | Domain 4: Optimization | 12% | Token optimization, caching, monitoring |
| 5 | Domain 5: Testing | 11% | Model evaluation, troubleshooting |

{{% notice tip %}}
Domain 1 + Domain 2 = **57%** tổng điểm. Nếu bạn nắm vững 2 domain này, bạn đã có hơn nửa đường đến điểm đạt.
{{% /notice %}}

---

## Tóm tắt kiến thức theo Domain

### Domain 1: FM Integration (31%)
- **Amazon Bedrock** là trung tâm — hiểu rõ APIs, Knowledge Bases, Prompt Management
- **RAG pipeline**: Documents → Chunking → Embeddings → Vector Store → Retrieve → Generate
- **Vector stores**: Bedrock KB (managed), OpenSearch (scalable), Aurora pgvector (SQL)
- **Chunking strategies**: Fixed-size, hierarchical, semantic
- **Hybrid search** = keyword + semantic search
- **Prompt engineering**: System prompts, few-shot, chain-of-thought, Prompt Flows

### Domain 2: Implementation (26%)
- **Agentic AI**: Bedrock Agents, Strands Agents, MCP, action groups
- **Streaming**: `InvokeModelWithResponseStream` cho real-time UX
- **Model cascading**: Model nhỏ cho simple tasks, model lớn cho complex tasks
- **CI/CD**: CodePipeline + CodeBuild cho GenAI deployments
- **Cross Region Inference**: Auto-failover khi region bị quá tải

### Domain 3: Safety & Security (20%)
- **Bedrock Guardrails**: Content filters, denied topics, PII filters, prompt attack detection
- **Defense-in-depth**: Input filter → Guardrails → Output filter
- **PII protection**: Comprehend PII detection, Macie, Guardrails anonymization
- **Governance**: Model cards, CloudTrail audit, data lineage với Glue
- **Responsible AI**: Transparency, fairness, LLM-as-a-Judge

### Domain 4: Optimization (12%)
- **Token optimization**: Prompt compression, context pruning, response limiting
- **Caching**: Semantic caching, prompt caching, edge caching
- **Provisioned throughput** vs on-demand
- **Monitoring**: CloudWatch, Model Invocation Logs, Logs Insights

### Domain 5: Testing (11%)
- **Bedrock Model Evaluations**: Built-in evaluation tools
- **LLM-as-a-Judge**: Dùng LLM đánh giá LLM
- **Troubleshooting**: Context window overflow, embedding drift, prompt regression
- **RAG evaluation**: Retrieval quality + generation quality

---

## Tài liệu ôn thi bổ sung

| Resource | Link |
|----------|------|
| AWS Skill Builder - Exam Prep AIP-C01 | [Enroll](https://explore.skillbuilder.aws/learn/course/external/view/elearning/20508/exam-prep-standard-course-aws-certified-generative-ai-developer-professional-aip-c01) |
| Official Practice Exam | [AWS Certification](https://aws.amazon.com/certification/certified-generative-ai-developer-professional/) |
| Amazon Bedrock Workshop | [Workshop Studio](https://catalog.us-east-1.prod.workshops.aws/workshops/a4bdb007-5600-4368-81c5-ff5b4154f518/en-US) |
| AWS Well-Architected GenAI Lens | [Docs](https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html) |

---

## Lời khuyên cuối cùng

1. **Thực hành nhiều** — Hands-on experience với Bedrock là cách tốt nhất để hiểu sâu
2. **Đọc AWS docs** — Đặc biệt là Bedrock User Guide và Best Practices
3. **Làm practice exams** — Quen với format câu hỏi và quản lý thời gian
4. **Tập trung vào managed services** — AWS luôn ưu tiên managed solutions trong đáp án
5. **Hiểu trade-offs** — Cost vs performance, latency vs accuracy, managed vs custom

{{% notice info %}}
Chúc bạn thi đạt kết quả tốt! Nếu cần thêm tài liệu, hãy tham khảo [AWS Certification](https://aws.amazon.com/certification/) và [First Cloud Journey](https://cloudjourney.awsstudygroup.com/).
{{% /notice %}}

{{% children %}}
