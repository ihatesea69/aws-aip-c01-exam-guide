---
title: "2.1 Thiết lập AWS Account"
date: 2025-01-01
weight: 1
---

## Thiết lập AWS Account

### Tạo AWS Account

Nếu bạn chưa có AWS Account:

1. Truy cập [https://aws.amazon.com/free/](https://aws.amazon.com/free/)
2. Click **Create an AWS Account**
3. Điền thông tin email, tên account
4. Hoàn tất verification và thêm payment method

### Tạo IAM User với quyền Administrator

{{% notice warning %}}
**Quan trọng:** Không sử dụng root account cho các labs. Hãy tạo IAM user với quyền Administrator.
{{% /notice %}}

1. Đăng nhập vào [AWS Console](https://console.aws.amazon.com/) bằng root account
2. Truy cập **IAM** → **Users** → **Create user**
3. Đặt tên user, ví dụ: `workshop-admin`
4. Chọn **Provide user access to the AWS Management Console**
5. Trong **Set permissions**, chọn **Attach policies directly**
6. Tìm và chọn policy **AdministratorAccess**
7. Click **Create user**
8. Lưu lại thông tin đăng nhập

### Cài đặt AWS CLI

Để thực hành các labs với CLI:

```bash
# Kiểm tra AWS CLI đã cài đặt chưa
aws --version

# Nếu chưa, cài đặt theo hướng dẫn:
# https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
```

Cấu hình AWS CLI:

```bash
aws configure
# AWS Access Key ID: [Nhập Access Key]
# AWS Secret Access Key: [Nhập Secret Key]
# Default region name: us-east-1
# Default output format: json
```

{{% notice tip %}}
Khuyến nghị sử dụng region **us-east-1** (N. Virginia) vì đây là region có đầy đủ nhất các model trên Amazon Bedrock.
{{% /notice %}}

### Cài đặt Python và Boto3

Một số labs sử dụng Python SDK:

```bash
# Kiểm tra Python
python --version

# Cài đặt boto3
pip install boto3
```

### Tài liệu tham khảo

- [Creating an AWS Account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)
- [Creating IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
- [Installing AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
