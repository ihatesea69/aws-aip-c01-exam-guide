---
title: "Task 2.1: Agentic AI & Tool Integrations"
date: 2025-01-01
weight: 1
---

## Task 2.1: Triển khai Agentic AI solutions và tool integrations

{{% notice tip %}}
**Exam Tip:** Agentic AI là chủ đề mới và quan trọng. Hiểu rõ cách Bedrock Agents hoạt động, Strands Agents, MCP, và multi-agent systems.
{{% /notice %}}

### Skill 2.1.1: Hệ thống tự chủ thông minh

**Kiến thức cần nắm:**
- **Strands Agents** và **AWS Agent Squad** cho multi-agent systems
- **Model Context Protocol (MCP)** cho agent-tool interactions
- Memory management: short-term (conversation) và long-term (persistent)
- State management patterns cho agents

**Giải thích chi tiết:**

Agentic AI là paradigm mới trong GenAI, cho phép FM tự chủ thực hiện các tác vụ phức tạp bằng cách:
1. **Reasoning** — Phân tích vấn đề và lập kế hoạch
2. **Tool Use** — Gọi external tools/APIs để thu thập thông tin hoặc thực hiện hành động
3. **Memory** — Lưu trữ context qua nhiều bước tương tác

**Amazon Bedrock Agents** cung cấp managed service cho agentic workflows:
- Tự động phân tích user request và quyết định tool nào cần gọi
- Hỗ trợ **Action Groups** — định nghĩa các tools agent có thể sử dụng
- Tích hợp với Lambda functions cho custom tool implementations
- Hỗ trợ **Knowledge Bases** cho RAG-based retrieval

**Strands Agents SDK** là open-source framework:
- Lightweight, model-driven approach
- Hỗ trợ multi-agent coordination qua **AWS Agent Squad**
- Native integration với AWS services

### Skill 2.1.2: Advanced problem-solving systems

**Kiến thức cần nắm:**
- **Step Functions** để implement ReAct patterns
- Chain-of-thought reasoning approaches
- Task decomposition strategies

**Giải thích chi tiết:**

**ReAct Pattern** (Reasoning + Acting):
1. Agent nhận input từ user
2. **Thought** — Agent suy nghĩ về bước tiếp theo
3. **Action** — Agent thực hiện action (gọi tool, query database)
4. **Observation** — Agent quan sát kết quả
5. Lặp lại cho đến khi có câu trả lời cuối cùng

```
User: "Tìm doanh thu Q4 2024 và so sánh với Q3"
→ Thought: Cần query database cho Q4 và Q3
→ Action: Call SQL tool cho Q4 data
→ Observation: Q4 revenue = $5.2M
→ Thought: Cần Q3 data để so sánh
→ Action: Call SQL tool cho Q3 data
→ Observation: Q3 revenue = $4.8M
→ Thought: Có đủ data, tính toán comparison
→ Final Answer: "Q4 tăng 8.3% so với Q3..."
```

### Skill 2.1.3: Safeguarded AI workflows

**Kiến thức cần nắm:**
- Step Functions cho stopping conditions
- Lambda functions cho timeout mechanisms
- IAM policies cho resource boundaries
- Circuit breakers cho failure mitigation

**Giải thích chi tiết:**

Khi deploy agents vào production, cần các safeguards:

| Safeguard | Implementation | Mục đích |
|-----------|---------------|----------|
| Stopping conditions | Step Functions | Giới hạn số bước agent thực hiện |
| Timeouts | Lambda timeout settings | Tránh infinite loops |
| Resource boundaries | IAM policies | Giới hạn quyền truy cập |
| Circuit breakers | Step Functions patterns | Xử lý failures gracefully |
| Cost limits | CloudWatch alarms | Tránh chi phí vượt budget |

### Skill 2.1.4: Model coordination systems

**Kiến thức cần nắm:**
- Specialized FMs cho complex tasks
- Custom aggregation logic cho model ensembles
- Model selection frameworks — chọn model phù hợp cho từng subtask

**Giải thích chi tiết:**

**Multi-model orchestration** cho phép sử dụng nhiều FMs cho các subtasks khác nhau:
- **Router model** — Phân loại request và chọn model phù hợp
- **Specialist models** — Mỗi model chuyên về một domain
- **Aggregator** — Tổng hợp kết quả từ nhiều models

Ví dụ: Chatbot hỗ trợ khách hàng:
- Haiku cho intent classification (nhanh, rẻ)
- Claude Sonnet cho complex reasoning
- Titan cho embedding generation

### Skill 2.1.5: Human-in-the-loop systems

**Kiến thức cần nắm:**
- Step Functions cho review và approval processes
- API Gateway cho feedback collection
- Human augmentation patterns

**Giải thích chi tiết:**

**Amazon Augmented AI (A2I)** và Step Functions cho phép:
- Tạo human review workflows khi agent confidence thấp
- Approval gates trước khi thực hiện high-impact actions
- Feedback loops để cải thiện agent performance

### Skill 2.1.6: Tool integrations

**Kiến thức cần nắm:**
- **Strands API** cho custom behaviors
- Standardized function definitions (tool use / function calling)
- Lambda functions cho error handling và parameter validation

**Giải thích chi tiết:**

**Function Calling** (Tool Use) trong Bedrock:
```json
{
  "tools": [{
    "name": "get_weather",
    "description": "Get current weather for a location",
    "input_schema": {
      "type": "object",
      "properties": {
        "location": {"type": "string"}
      },
      "required": ["location"]
    }
  }]
}
```

Agent sẽ tự quyết định khi nào cần gọi tool dựa trên user request.

### Skill 2.1.7: Model extension frameworks (MCP)

**Kiến thức cần nắm:**
- Lambda functions cho stateless MCP servers (lightweight tool access)
- **Amazon ECS** cho MCP servers phức tạp
- MCP client libraries cho consistent access patterns

**Giải thích chi tiết:**

**Model Context Protocol (MCP)** là open standard cho agent-tool communication:
- **MCP Server** — Expose tools, resources, và prompts
- **MCP Client** — Agent sử dụng để kết nối với MCP servers
- Stateless servers (Lambda) cho simple tools
- Stateful servers (ECS) cho complex tools cần maintain state

### Tài liệu tham khảo

- [Amazon Bedrock Agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)
- [AWS Blog - Building Agentic AI](https://aws.amazon.com/blogs/machine-learning/build-agentic-ai-solutions-with-amazon-bedrock/)
- [Strands Agents SDK](https://github.com/strands-agents/sdk-python)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [AWS Blog - Multi-agent collaboration](https://aws.amazon.com/blogs/machine-learning/multi-agent-collaboration-using-amazon-bedrock/)
