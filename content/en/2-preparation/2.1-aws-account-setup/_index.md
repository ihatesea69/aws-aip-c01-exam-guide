---
title: "2.1 AWS Account Setup"
date: 2025-01-01
weight: 1
---

## AWS Account Setup

### Create an AWS Account

If you don't have an AWS Account:

1. Go to [https://aws.amazon.com/free/](https://aws.amazon.com/free/)
2. Click **Create an AWS Account**
3. Fill in email, account name
4. Complete verification and add payment method

### Create an IAM User with Administrator Access

{{% notice warning %}}
**Important:** Do not use the root account for labs. Create an IAM user with Administrator access.
{{% /notice %}}

1. Sign in to [AWS Console](https://console.aws.amazon.com/) with root account
2. Navigate to **IAM** → **Users** → **Create user**
3. Enter username, e.g.: `workshop-admin`
4. Select **Provide user access to the AWS Management Console**
5. Under **Set permissions**, select **Attach policies directly**
6. Search and select **AdministratorAccess** policy
7. Click **Create user**
8. Save the login credentials

### Install AWS CLI

For CLI-based labs:

```bash
# Check if AWS CLI is installed
aws --version

# If not, install following the guide:
# https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
```

Configure AWS CLI:

```bash
aws configure
# AWS Access Key ID: [Enter Access Key]
# AWS Secret Access Key: [Enter Secret Key]
# Default region name: us-east-1
# Default output format: json
```

{{% notice tip %}}
We recommend using the **us-east-1** (N. Virginia) region as it has the most comprehensive model availability on Amazon Bedrock.
{{% /notice %}}

### Install Python and Boto3

Some labs use the Python SDK:

```bash
# Check Python
python --version

# Install boto3
pip install boto3
```

### References

- [Creating an AWS Account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)
- [Creating IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
- [Installing AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
