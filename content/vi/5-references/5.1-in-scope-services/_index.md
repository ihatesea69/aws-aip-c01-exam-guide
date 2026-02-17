---
title: "5.1 AWS Services In-Scope"
date: 2025-01-01
weight: 1
---

## AWS Services In-Scope cho kỳ thi AIP-C01

Danh sách các AWS services và features nằm trong phạm vi kỳ thi. Danh sách này không đầy đủ và có thể thay đổi.

### Analytics

| Service | Ghi chú |
|---------|---------|
| Amazon Athena | Query data trong S3 |
| Amazon EMR | Big data processing |
| AWS Glue | Data integration, ETL, Data Quality |
| Amazon Kinesis | Real-time data streaming |
| Amazon OpenSearch Service | Search, vector search |
| Amazon QuickSight | Business intelligence |
| Amazon MSK | Managed Kafka |

### Application Integration

| Service | Ghi chú |
|---------|---------|
| Amazon AppFlow | SaaS data integration |
| AWS AppConfig | Dynamic configuration |
| Amazon EventBridge | Event-driven architecture |
| Amazon SNS | Pub/sub messaging |
| Amazon SQS | Message queuing |
| AWS Step Functions | Workflow orchestration |

### Compute

| Service | Ghi chú |
|---------|---------|
| AWS App Runner | Container deployment |
| Amazon EC2 | Virtual servers |
| AWS Lambda | Serverless compute |
| AWS Lambda@Edge | Edge computing |
| AWS Outposts | On-premises AWS |
| AWS Wavelength | Edge deployments |

### Containers

| Service | Ghi chú |
|---------|---------|
| Amazon ECR | Container registry |
| Amazon ECS | Container orchestration |
| Amazon EKS | Kubernetes |
| AWS Fargate | Serverless containers |

### Database

| Service | Ghi chú |
|---------|---------|
| Amazon Aurora | Relational DB (pgvector) |
| Amazon DocumentDB | Document DB |
| Amazon DynamoDB | NoSQL, key-value |
| Amazon DynamoDB Streams | Change data capture |
| Amazon ElastiCache | In-memory caching |
| Amazon Neptune | Graph database |
| Amazon RDS | Relational databases |

### Machine Learning (Quan trọng nhất)

| Service | Ghi chú |
|---------|---------|
| Amazon Augmented AI | Human review workflows |
| **Amazon Bedrock** | **FM access, Knowledge Bases, Agents, Guardrails** |
| **Amazon Bedrock AgentCore** | **Agent infrastructure** |
| **Amazon Bedrock Knowledge Bases** | **Managed RAG** |
| **Amazon Bedrock Prompt Management** | **Prompt versioning** |
| **Amazon Bedrock Prompt Flows** | **Prompt chaining** |
| Amazon Comprehend | NLP, PII detection |
| Amazon Kendra | Enterprise search |
| Amazon Lex | Chatbots |
| **Amazon Q Business** | **Enterprise AI assistant** |
| Amazon Q Business Apps | Business applications |
| **Amazon Q Developer** | **Developer AI assistant** |
| Amazon Rekognition | Image/video analysis |
| **Amazon SageMaker AI** | **ML platform** |
| Amazon SageMaker Clarify | Bias detection |
| Amazon SageMaker Data Wrangler | Data preparation |
| Amazon SageMaker Ground Truth | Data labeling |
| Amazon SageMaker JumpStart | Pre-trained models |
| Amazon SageMaker Model Monitor | Model monitoring |
| Amazon SageMaker Model Registry | Model versioning |
| Amazon SageMaker Neo | Model optimization |
| Amazon SageMaker Processing | Data processing |
| Amazon SageMaker Unified Studio | Unified ML workspace |
| Amazon Textract | Document extraction |
| **Amazon Titan** | **Amazon's FM family** |
| Amazon Transcribe | Speech-to-text |

### Security, Identity, and Compliance

| Service | Ghi chú |
|---------|---------|
| Amazon Cognito | User authentication |
| AWS Encryption SDK | Data encryption |
| IAM | Access management |
| IAM Access Analyzer | Permission analysis |
| IAM Identity Center | SSO |
| AWS KMS | Key management |
| Amazon Macie | Sensitive data discovery |
| AWS Secrets Manager | Secrets management |
| AWS WAF | Web application firewall |

### Networking and Content Delivery

| Service | Ghi chú |
|---------|---------|
| Amazon API Gateway | API management |
| AWS AppSync | GraphQL APIs |
| Amazon CloudFront | CDN |
| Elastic Load Balancing | Load balancing |
| AWS Global Accelerator | Global networking |
| AWS PrivateLink | Private connectivity |
| Amazon Route 53 | DNS |
| Amazon VPC | Virtual networking |

### Management and Governance

| Service | Ghi chú |
|---------|---------|
| AWS Auto Scaling | Capacity management |
| AWS CloudTrail | Audit logging |
| Amazon CloudWatch | Monitoring |
| Amazon CloudWatch Logs | Log management |
| AWS Cost Explorer | Cost analysis |
| AWS Well-Architected Tool | Architecture review |

### Developer Tools

| Service | Ghi chú |
|---------|---------|
| AWS Amplify | Frontend development |
| AWS CDK | Infrastructure as code |
| AWS CloudFormation | IaC templates |
| AWS CodePipeline | CI/CD |
| AWS CodeBuild | Build service |
| AWS X-Ray | Distributed tracing |

### Storage

| Service | Ghi chú |
|---------|---------|
| Amazon EBS | Block storage |
| Amazon EFS | File storage |
| Amazon S3 | Object storage |
| Amazon S3 Lifecycle policies | Data lifecycle |

{{% notice tip %}}
**Mẹo ôn thi:** Tập trung vào các services được in đậm — đây là services xuất hiện nhiều nhất trong đề thi. Amazon Bedrock và các sub-services của nó là trọng tâm chính.
{{% /notice %}}
