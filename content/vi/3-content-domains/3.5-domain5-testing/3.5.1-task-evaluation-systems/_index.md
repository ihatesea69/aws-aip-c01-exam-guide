---
title: "Task 5.1: Evaluation Systems"
date: 2025-01-01
weight: 1
---

## Task 5.1: Evaluation systems cho GenAI

### Skill 5.1.1: Assessment frameworks

**Kiến thức cần nắm:**
- Metrics: relevance, factual accuracy, consistency, fluency
- Khác biệt giữa GenAI evaluation và traditional ML evaluation
- BLEU, ROUGE scores cho text quality

**Giải thích chi tiết:**

**GenAI vs Traditional ML Evaluation:**

| Aspect | Traditional ML | GenAI |
|--------|---------------|-------|
| Metrics | Accuracy, F1, AUC | Relevance, fluency, factuality |
| Ground truth | Clear labels | Subjective, multiple valid answers |
| Evaluation | Automated | Often requires human/LLM judge |
| Consistency | Deterministic | Stochastic (varies per run) |

**Key Evaluation Metrics:**

| Metric | Mô tả | Đo bằng |
|--------|--------|---------|
| Relevance | Response liên quan đến query | LLM-as-Judge, human rating |
| Factual accuracy | Thông tin chính xác | RAG grounding check |
| Consistency | Responses nhất quán | Multiple runs comparison |
| Fluency | Ngôn ngữ tự nhiên, mạch lạc | BLEU, ROUGE, human rating |
| Harmfulness | Nội dung có hại | Safety classifiers |
| Helpfulness | Hữu ích cho user | Human rating |

### Skill 5.1.2: Model evaluation systems

**Kiến thức cần nắm:**
- **Amazon Bedrock Model Evaluations** — Built-in evaluation tools
- A/B testing và canary testing cho FMs
- Multi-model evaluation
- Cost-performance analysis: token efficiency, latency-to-quality ratios

{{% notice tip %}}
**Exam Tip:** Amazon Bedrock Model Evaluations cho phép đánh giá models trên các metrics như accuracy, robustness, toxicity. Đây là công cụ chính cho model evaluation trong kỳ thi.
{{% /notice %}}

**Bedrock Model Evaluations:**
- **Automatic evaluation** — Sử dụng built-in metrics
- **Human evaluation** — Sử dụng human reviewers
- **LLM-as-a-Judge** — Sử dụng LLM khác để đánh giá

**A/B Testing Pattern:**
```
Traffic → Router (50/50 split)
    ├── Model A → Response A → Collect metrics
    └── Model B → Response B → Collect metrics
                                    ↓
                        Compare metrics → Select winner
```

### Skill 5.1.3: User-centered evaluation

**Kiến thức cần nắm:**
- Feedback interfaces
- Rating systems cho model outputs
- Annotation workflows

**Giải thích chi tiết:**

**Feedback Collection:**
- Thumbs up/down cho quick feedback
- Star ratings cho detailed evaluation
- Free-text comments cho qualitative feedback
- **SageMaker Ground Truth** cho structured annotation

### Skill 5.1.4: Quality assurance processes

**Kiến thức cần nắm:**
- Continuous evaluation workflows
- Regression testing cho model outputs
- Automated quality gates cho deployments

**Giải thích chi tiết:**

**Quality Gate Pattern:**
```
New Model/Prompt Version
    ↓
Run evaluation suite (golden dataset)
    ↓
Compare against baseline metrics
    ↓
Pass threshold? → Deploy
    ↓ No
Block deployment → Alert team
```

### Skill 5.1.5: Multi-perspective assessment

**Kiến thức cần nắm:**
- RAG evaluation (retrieval quality + generation quality)
- **LLM-as-a-Judge** techniques
- Human feedback collection interfaces

{{% notice info %}}
**LLM-as-a-Judge** là kỹ thuật sử dụng một LLM mạnh (ví dụ Claude Sonnet) để đánh giá output của LLM khác. Đây là approach scalable hơn human evaluation và thường xuất hiện trong đề thi.
{{% /notice %}}

**RAG Evaluation Dimensions:**

| Dimension | Mô tả | Metric |
|-----------|--------|--------|
| Context relevance | Retrieved docs liên quan đến query | Precision@K |
| Context utilization | Model sử dụng context hiệu quả | Faithfulness score |
| Answer relevance | Response trả lời đúng câu hỏi | Relevance score |
| Answer correctness | Response chính xác factually | Accuracy score |

### Skill 5.1.6: Retrieval quality testing

**Kiến thức cần nắm:**
- Relevance scoring
- Context matching verification
- Retrieval latency measurements

### Skill 5.1.7: Agent performance frameworks

**Kiến thức cần nắm:**
- Task completion rate measurements
- Tool usage effectiveness
- **Amazon Bedrock Agent evaluations**
- Reasoning quality assessment trong multi-step workflows

**Agent Evaluation Metrics:**

| Metric | Mô tả |
|--------|--------|
| Task completion rate | % tasks hoàn thành thành công |
| Steps to completion | Số bước agent cần để hoàn thành |
| Tool selection accuracy | Agent chọn đúng tool |
| Reasoning quality | Logic reasoning chính xác |
| Cost per task | Chi phí tokens cho mỗi task |

### Skill 5.1.8: Reporting systems

**Kiến thức cần nắm:**
- Visualization tools
- Automated reporting mechanisms
- Model comparison visualizations

### Skill 5.1.9: Deployment validation

**Kiến thức cần nắm:**
- Synthetic user workflows
- AI-specific output validation (hallucination rates, semantic drift)
- Automated quality checks cho response consistency

### Tài liệu tham khảo

- [Amazon Bedrock Model Evaluations](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html)
- [AWS Blog - Evaluating LLMs](https://aws.amazon.com/blogs/machine-learning/evaluate-large-language-models-with-amazon-bedrock/)
- [AWS Blog - RAG Evaluation](https://aws.amazon.com/blogs/machine-learning/evaluate-rag-applications-with-amazon-bedrock/)
- [SageMaker Ground Truth](https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html)
