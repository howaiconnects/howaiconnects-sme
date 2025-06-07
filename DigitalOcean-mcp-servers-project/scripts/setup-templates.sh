#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting SME Boost Platform template setup...${NC}\n"

# Create necessary directories
echo -e "${BLUE}Creating project structure...${NC}"
mkdir -p templates
mkdir -p apps/{admin,user,landing,api}
mkdir -p packages/{ui,config,utils,airtable-sdk}

# Function to clone repository with error handling
clone_repo() {
    local repo_url=$1
    local target_dir=$2
    local branch=${3:-main}

    echo -e "${BLUE}Cloning ${repo_url} into ${target_dir}...${NC}"
    if git clone --depth 1 --branch $branch $repo_url $target_dir; then
        echo -e "${GREEN}Successfully cloned ${repo_url}${NC}"
    else
        echo -e "${RED}Failed to clone ${repo_url}${NC}"
        return 1
    fi
}

# Clone template repositories
echo -e "\n${BLUE}Cloning template repositories...${NC}"

# Admin Dashboard Template
clone_repo "https://github.com/shadcn-ui/taxonomy.git" "templates/admin-dashboard" || exit 1

# User Dashboard Template
clone_repo "https://github.com/mickasmt/next-saas-stripe-starter.git" "templates/user-dashboard" || exit 1

# Landing Page Template
clone_repo "https://github.com/shadcn-ui/ui.git" "templates/landing-page" || exit 1

# Turbo Repo Template
clone_repo "https://github.com/vercel/turborepo-starter.git" "templates/turborepo" || exit 1

# Copy template files to project structure
echo -e "\n${BLUE}Setting up project structure...${NC}"

# Setup Admin Dashboard
echo "Setting up admin dashboard..."
cp -r templates/admin-dashboard/* apps/admin/
cd apps/admin
sed -i 's/"name": ".*"/"name": "@sme-boost\/admin"/' package.json
cd ../..

# Setup User Dashboard
echo "Setting up user dashboard..."
cp -r templates/user-dashboard/* apps/user/
cd apps/user
sed -i 's/"name": ".*"/"name": "@sme-boost\/user"/' package.json
cd ../..

# Setup Landing Page
echo "Setting up landing page..."
cp -r templates/landing-page/* apps/landing/
cd apps/landing
sed -i 's/"name": ".*"/"name": "@sme-boost\/landing"/' package.json
cd ../..

# Setup shared packages
echo "Setting up shared packages..."

# UI Package
echo "Setting up UI package..."
cp -r templates/admin-dashboard/components/* packages/ui/src/components/

# Utils Package
echo "Setting up utils package..."
cp -r templates/turborepo/packages/utils/* packages/utils/

# Config Package
echo "Setting up config package..."
cp -r templates/turborepo/packages/config/* packages/config/

# Create root package.json
echo "Creating root package.json..."
cat > package.json << EOL
{
  "name": "sme-boost-platform",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "clean": "turbo run clean",
    "type-check": "turbo run type-check"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "@turbo/gen": "^1.10.0"
  },
  "packageManager": "npm@10.0.0"
}
EOL

# Create turbo.json
echo "Creating turbo.json..."
cat > turbo.json << EOL
{
  "\$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "type-check": {}
  }
}
EOL

# Create .env.example
echo "Creating .env.example..."
cat > .env.example << EOL
# Airtable Configuration
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id

# AWS Bedrock Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Redis Configuration
REDIS_URL=redis://localhost:6379

# Application URLs
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
NEXT_PUBLIC_USER_URL=http://localhost:3002
NEXT_PUBLIC_LANDING_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3003
EOL

# Clean up templates
echo -e "\n${BLUE}Cleaning up template repositories...${NC}"
rm -rf templates

# Install dependencies
echo -e "\n${BLUE}Installing dependencies...${NC}"
npm install

echo -e "\n${GREEN}Setup complete! You can now start the development servers:${NC}"
echo -e "${BLUE}npm run dev${NC}"
echo -e "\nThis will start the following servers:"
echo "- Landing Page: http://localhost:3000"
echo "- Admin Dashboard: http://localhost:3001"
echo "- User Dashboard: http://localhost:3002"
echo "- API: http://localhost:3003"
