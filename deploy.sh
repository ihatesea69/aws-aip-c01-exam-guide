#!/bin/bash
set -e

REPO_NAME="aws-aip-c01-exam-guide"
REPO_DESC="Bilingual study guide for AWS Certified Generative AI Developer - Professional (AIP-C01) with hands-on labs"

# Check prerequisites
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed. Install from https://cli.github.com/"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated. Run: gh auth login"
    exit 1
fi

USERNAME=$(gh api user --jq '.login')
echo "Deploying as: $USERNAME"

# Update config.toml with actual username
sed -i.bak "s|\[username\]|$USERNAME|g" config.toml
rm -f config.toml.bak

# Update package.json with actual username
sed -i.bak "s|\[username\]|$USERNAME|g" package.json
rm -f package.json.bak

# Update README.md with actual username
sed -i.bak "s|\[username\]|$USERNAME|g" README.md
rm -f README.md.bak

# Initialize git if needed
if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "Initial commit: AWS AIP-C01 Exam Guide"
fi

# Create repo and push
gh repo create "$REPO_NAME" \
    --description "$REPO_DESC" \
    --public \
    --source=. \
    --remote=origin \
    --push

# Set topics
gh repo edit "$USERNAME/$REPO_NAME" \
    --add-topic "aws" \
    --add-topic "certification" \
    --add-topic "genai" \
    --add-topic "bedrock" \
    --add-topic "aip-c01" \
    --add-topic "exam-guide" \
    --add-topic "machine-learning" \
    --add-topic "generative-ai" \
    --add-topic "hugo" \
    --add-topic "study-guide"

# Enable GitHub Pages
gh api "repos/$USERNAME/$REPO_NAME/pages" \
    --method POST \
    --field build_type="workflow" 2>/dev/null || echo "Pages may already be enabled"

echo ""
echo "Done."
echo "Repository: https://github.com/$USERNAME/$REPO_NAME"
echo "Site: https://$USERNAME.github.io/$REPO_NAME/"
echo ""
echo "GitHub Actions will build and deploy automatically."
echo "Check progress: https://github.com/$USERNAME/$REPO_NAME/actions"
