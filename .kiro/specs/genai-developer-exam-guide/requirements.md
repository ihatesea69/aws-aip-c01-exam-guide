# Requirements Document

## Introduction

Viết nội dung chi tiết cho workshop hướng dẫn ôn thi chứng chỉ AWS Certified Generative AI Developer - Professional (AIP-C01). Nội dung được trình bày theo format Hugo bilingual (Tiếng Việt / English) của template First Cloud Journey (FCJ), sử dụng hugo-theme-learn. Workshop bao gồm giới thiệu tổng quan về kỳ thi, phân tích chi tiết 5 Content Domain, chiến lược ôn thi, và tài liệu tham khảo.

## Glossary

- **Workshop**: Trang web Hugo chứa nội dung hướng dẫn theo format FCJ
- **Content Domain**: Một trong 5 lĩnh vực kiến thức được đánh giá trong kỳ thi AIP-C01
- **FM (Foundation Model)**: Mô hình nền tảng AI được huấn luyện trên dữ liệu lớn
- **RAG (Retrieval Augmented Generation)**: Kỹ thuật tăng cường sinh nội dung bằng truy xuất dữ liệu
- **Hugo Front Matter**: Metadata YAML ở đầu mỗi file markdown của Hugo
- **FCJ Format**: Cấu trúc nội dung workshop theo chuẩn First Cloud Journey gồm Introduction, Preparation, Hands-on, Cleanup, Summary
- **Bilingual Content**: Nội dung song ngữ Tiếng Việt và English trong thư mục content/vi và content/en
- **Agentic AI**: Hệ thống AI tự chủ có khả năng lập kế hoạch và thực thi nhiều bước

## Requirements

### Requirement 1

**User Story:** As a workshop reader, I want a clear introduction to the AIP-C01 exam, so that I can understand the exam scope, target audience, and certification value.

#### Acceptance Criteria

1. WHEN a reader navigates to the introduction section, THE Workshop SHALL display an overview of the AIP-C01 exam including exam code, intended audience, and certification purpose.
2. WHEN a reader views the introduction section, THE Workshop SHALL present the target candidate description including required years of experience and recommended AWS knowledge.
3. WHEN a reader views the introduction section, THE Workshop SHALL list the 5 Content Domains with their respective scoring weightings in a table format.
4. WHEN a reader views the introduction section, THE Workshop SHALL describe the tasks that are out of scope for the exam (model development, advanced ML techniques, data engineering).

### Requirement 2

**User Story:** As a workshop reader, I want extremely detailed content for each of the 5 Content Domains, so that I can study each domain's tasks and skills thoroughly.

#### Acceptance Criteria

1. WHEN a reader navigates to Content Domain 1 (Foundation Model Integration, Data Management, and Compliance), THE Workshop SHALL present all 6 tasks (1.1 through 1.6) with their associated skills, each skill explained in detail with real-world context, AWS service usage examples, and architecture patterns.
2. WHEN a reader navigates to Content Domain 2 (Implementation and Integration), THE Workshop SHALL present all 5 tasks (2.1 through 2.5) with their associated skills, each skill explained in detail with real-world context, AWS service usage examples, and architecture patterns.
3. WHEN a reader navigates to Content Domain 3 (AI Safety, Security, and Governance), THE Workshop SHALL present all 4 tasks (3.1 through 3.4) with their associated skills, each skill explained in detail with real-world context, AWS service usage examples, and architecture patterns.
4. WHEN a reader navigates to Content Domain 4 (Operational Efficiency and Optimization), THE Workshop SHALL present all 3 tasks (4.1 through 4.3) with their associated skills, each skill explained in detail with real-world context, AWS service usage examples, and architecture patterns.
5. WHEN a reader navigates to Content Domain 5 (Testing, Validation, and Troubleshooting), THE Workshop SHALL present all 2 tasks (5.1 through 5.2) with their associated skills, each skill explained in detail with real-world context, AWS service usage examples, and architecture patterns.

### Requirement 3

**User Story:** As a workshop reader, I want each Content Domain page to highlight key AWS services relevant to that domain and reference official AWS resources, so that I can deepen my understanding with authoritative sources.

#### Acceptance Criteria

1. WHEN a reader views a Content Domain page, THE Workshop SHALL list the primary AWS services mentioned in that domain's skills with detailed descriptions of their relevance and how they apply to exam scenarios.
2. WHEN a reader views a Content Domain page, THE Workshop SHALL use Hugo notice shortcodes (tip, info, warning) to highlight important exam tips, key concepts, and common exam traps.
3. WHEN a reader views a Content Domain page, THE Workshop SHALL include references to official AWS blog posts, documentation pages, and AWS training resources relevant to that domain's topics.

### Requirement 4

**User Story:** As a workshop reader, I want hands-on lab exercises for each Content Domain, so that I can practice the skills tested in the exam with real AWS services.

#### Acceptance Criteria

1. WHEN a reader navigates to a hands-on lab section, THE Workshop SHALL provide step-by-step lab instructions with specific AWS Console actions, CLI commands, or SDK code snippets that the reader can execute.
2. WHEN a reader views a hands-on lab, THE Workshop SHALL include a clear objective, prerequisites, estimated duration, and expected outcome for each lab exercise.
3. WHEN a reader views a hands-on lab, THE Workshop SHALL provide architecture diagrams or screenshots illustrating the expected state at key steps.
4. WHEN hands-on labs are created, THE Workshop SHALL cover at minimum the following practical scenarios: setting up Amazon Bedrock and invoking an FM, building a RAG pipeline with Knowledge Bases, implementing Bedrock Guardrails, creating an agentic workflow, and monitoring GenAI applications with CloudWatch.
5. WHEN a reader completes a hands-on lab, THE Workshop SHALL provide verification steps so the reader can confirm the lab was completed successfully.

### Requirement 5

**User Story:** As a workshop reader, I want a comprehensive reference section listing in-scope and out-of-scope AWS services, so that I can prioritize my study materials.

#### Acceptance Criteria

1. WHEN a reader navigates to the reference section, THE Workshop SHALL display the complete list of in-scope AWS services organized by category (Analytics, Application Integration, Compute, Containers, etc.).
2. WHEN a reader navigates to the reference section, THE Workshop SHALL display the list of out-of-scope AWS services organized by category.
3. WHEN a reader navigates to the reference section, THE Workshop SHALL list the technologies and concepts that might appear on the exam.
4. WHEN a reader navigates to the reference section, THE Workshop SHALL include a curated list of official AWS blog posts, whitepapers, and documentation links organized by Content Domain for further study.

### Requirement 6

**User Story:** As a workshop reader, I want all content available in both Vietnamese and English, so that I can study in my preferred language.

#### Acceptance Criteria

1. WHEN a reader switches language, THE Workshop SHALL display equivalent content in the selected language with matching structure and navigation.
2. WHEN content is created, THE Workshop SHALL produce matching files in both content/vi and content/en directories with identical Hugo front matter weight values for consistent navigation ordering.

### Requirement 7

**User Story:** As a workshop reader, I want the content to follow the existing Hugo template structure and formatting conventions, so that the workshop renders correctly and consistently.

#### Acceptance Criteria

1. WHEN content files are created, THE Workshop SHALL use Hugo front matter with title, date, weight, and chapter fields consistent with the existing template pattern.
2. WHEN chapter-level pages are created, THE Workshop SHALL include `chapter: true` and `pre: "<b>N. </b>"` in the front matter matching the existing numbering convention.
3. WHEN content files are created, THE Workshop SHALL use Hugo shortcodes (`{{% children %}}`, `{{% notice %}}`) consistent with the existing template usage.
4. WHEN content is structured, THE Workshop SHALL follow the directory naming convention of `N-section-name/` with `_index.md` for chapter pages and `N.N-subsection-name/_index.md` for sub-pages.

### Requirement 8

**User Story:** As a workshop reader, I want a cleanup section with clear instructions, so that I can remove all AWS resources created during the hands-on labs and avoid unexpected charges.

#### Acceptance Criteria

1. WHEN a reader navigates to the cleanup section, THE Workshop SHALL list all AWS resources created during the hands-on labs in reverse order of creation.
2. WHEN a reader views the cleanup section, THE Workshop SHALL provide step-by-step deletion instructions for each resource with AWS Console navigation paths or CLI commands.

### Requirement 9

**User Story:** As a workshop reader, I want an exam strategy and summary section, so that I can prepare effectively for the actual exam day.

#### Acceptance Criteria

1. WHEN a reader navigates to the summary section, THE Workshop SHALL provide exam-taking strategies including time management tips, question approach techniques, and domain prioritization based on weightings.
2. WHEN a reader views the summary section, THE Workshop SHALL include a recap of key concepts from each Content Domain with the most important topics highlighted.
3. WHEN a reader views the summary section, THE Workshop SHALL list additional study resources including AWS Skill Builder courses, practice exams, and official AWS training paths.
