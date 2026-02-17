---
title: "Summary & Exam Strategy"
date: 2025-01-01
weight: 7
chapter: true
pre: "<b>7. </b>"
---

### Summary

# Summary & AIP-C01 Exam Strategy

Congratulations on completing the workshop! Below is a knowledge recap and strategies to help you confidently walk into the exam.

---

## Exam-Taking Strategies

### Time Management

- **85 questions / 180 minutes** = average ~2 minutes/question
- Read the question and eliminate wrong answers first
- If unsure, flag the question and come back later
- Reserve 15-20 minutes at the end to review flagged questions

### Answer Techniques

- Read questions carefully — watch for keywords: "MOST cost-effective", "LEAST operational overhead", "BEST practice"
- Eliminate clearly wrong answers first
- When two answers seem correct, choose the one that best fits the specific requirement
- AWS always favors: managed services > self-managed, serverless > server-based, least privilege

### Prioritize by Domain Weighting

| Priority | Domain | Weighting | Strategy |
|----------|--------|-----------|----------|
| 1 | Domain 1: FM Integration | 31% | Study most — RAG, vector stores, prompt engineering |
| 2 | Domain 2: Implementation | 26% | Agentic AI, streaming APIs, deployment patterns |
| 3 | Domain 3: Safety & Security | 20% | Guardrails, PII, governance — AWS always tests security |
| 4 | Domain 4: Optimization | 12% | Token optimization, caching, monitoring |
| 5 | Domain 5: Testing | 11% | Model evaluation, troubleshooting |

{{% notice tip %}}
Domain 1 + Domain 2 = **57%** of total score. If you master these two domains, you're already more than halfway to the passing score.
{{% /notice %}}

---

## Knowledge Recap by Domain

### Domain 1: FM Integration (31%)
- **Amazon Bedrock** is central — understand APIs, Knowledge Bases, Prompt Management
- **RAG pipeline**: Documents → Chunking → Embeddings → Vector Store → Retrieve → Generate
- **Vector stores**: Bedrock KB (managed), OpenSearch (scalable), Aurora pgvector (SQL)
- **Chunking strategies**: Fixed-size, hierarchical, semantic
- **Hybrid search** = keyword + semantic search
- **Prompt engineering**: System prompts, few-shot, chain-of-thought, Prompt Flows

### Domain 2: Implementation (26%)
- **Agentic AI**: Bedrock Agents, Strands Agents, MCP, action groups
- **Streaming**: `InvokeModelWithResponseStream` for real-time UX
- **Model cascading**: Small models for simple tasks, large models for complex tasks
- **CI/CD**: CodePipeline + CodeBuild for GenAI deployments
- **Cross Region Inference**: Auto-failover when region is overloaded

### Domain 3: Safety & Security (20%)
- **Bedrock Guardrails**: Content filters, denied topics, PII filters, prompt attack detection
- **Defense-in-depth**: Input filter → Guardrails → Output filter
- **PII protection**: Comprehend PII detection, Macie, Guardrails anonymization
- **Governance**: Model cards, CloudTrail audit, data lineage with Glue
- **Responsible AI**: Transparency, fairness, LLM-as-a-Judge

### Domain 4: Optimization (12%)
- **Token optimization**: Prompt compression, context pruning, response limiting
- **Caching**: Semantic caching, prompt caching, edge caching
- **Provisioned throughput** vs on-demand
- **Monitoring**: CloudWatch, Model Invocation Logs, Logs Insights

### Domain 5: Testing (11%)
- **Bedrock Model Evaluations**: Built-in evaluation tools
- **LLM-as-a-Judge**: Using LLM to evaluate LLM
- **Troubleshooting**: Context window overflow, embedding drift, prompt regression
- **RAG evaluation**: Retrieval quality + generation quality

---

## Additional Study Resources

| Resource | Link |
|----------|------|
| AWS Skill Builder - Exam Prep AIP-C01 | [Enroll](https://explore.skillbuilder.aws/learn/course/external/view/elearning/20508/exam-prep-standard-course-aws-certified-generative-ai-developer-professional-aip-c01) |
| Official Practice Exam | [AWS Certification](https://aws.amazon.com/certification/certified-generative-ai-developer-professional/) |
| Amazon Bedrock Workshop | [Workshop Studio](https://catalog.us-east-1.prod.workshops.aws/workshops/a4bdb007-5600-4368-81c5-ff5b4154f518/en-US) |
| AWS Well-Architected GenAI Lens | [Docs](https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html) |

---

## Final Advice

1. **Practice a lot** — Hands-on experience with Bedrock is the best way to deeply understand
2. **Read AWS docs** — Especially the Bedrock User Guide and Best Practices
3. **Take practice exams** — Get familiar with question format and time management
4. **Focus on managed services** — AWS always favors managed solutions in answers
5. **Understand trade-offs** — Cost vs performance, latency vs accuracy, managed vs custom

{{% notice info %}}
Good luck on your exam! For additional materials, check [AWS Certification](https://aws.amazon.com/certification/) and [First Cloud Journey](https://cloudjourney.awsstudygroup.com/).
{{% /notice %}}

{{% children %}}
