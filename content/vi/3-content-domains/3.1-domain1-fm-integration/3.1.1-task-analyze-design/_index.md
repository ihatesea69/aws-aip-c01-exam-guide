---
title: "Task 1.1: Phân tích & Thiết kế GenAI"
date: 2025-01-01
weight: 1
---

## Task 1.1: Phân tích yêu cầu và thiết kế giải pháp GenAI

### Skill 1.1.1: Thiết kế kiến trúc toàn diện

Tạo thiết kế kiến trúc phù hợp với nhu cầu kinh doanh và ràng buộc kỹ thuật cụ thể.

**Kiến thức cần nắm:**
- Lựa chọn FM phù hợp cho từng use case (text generation, summarization, code generation, image generation)
- Integration patterns: synchronous vs asynchronous invocation
- Deployment strategies: on-demand vs provisioned throughput

**AWS Services liên quan:**
- **Amazon Bedrock** — Managed service để truy cập FMs từ nhiều providers (Anthropic, Meta, Amazon, Cohere, Mistral)
- **Amazon SageMaker AI** — Deploy custom models hoặc fine-tuned models
- **AWS Lambda** — Serverless compute cho FM invocation

{{% notice tip %}}
**Exam Tip:** Khi gặp câu hỏi về lựa chọn giữa Bedrock và SageMaker, nhớ rằng Bedrock là managed service (không cần quản lý infrastructure), còn SageMaker cho phép customization sâu hơn (fine-tuning, custom containers).
{{% /notice %}}

### Skill 1.1.2: Phát triển proof-of-concept

Xây dựng PoC để validate tính khả thi, đặc điểm hiệu suất, và giá trị kinh doanh trước khi triển khai full-scale.

**Kiến thức cần nắm:**
- Sử dụng Amazon Bedrock Playground để test nhanh các models
- So sánh output quality giữa các models
- Đánh giá latency, cost, và accuracy

### Skill 1.1.3: Tạo components chuẩn hóa

Đảm bảo triển khai nhất quán qua nhiều deployment scenarios.

**Kiến thức cần nắm:**
- **AWS Well-Architected Framework** — Generative AI Lens
- Standardized templates cho Bedrock API calls
- Reusable components cho prompt management

### Tài liệu tham khảo

- [AWS Well-Architected Generative AI Lens](https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html)
- [AWS Blog - Best practices for Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/best-practices-for-amazon-bedrock/)
