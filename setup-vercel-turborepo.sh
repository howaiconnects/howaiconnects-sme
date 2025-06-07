#!/bin/bash
# Quick Start Script for Vercel Turborepo Migration

echo "🚀 Starting Vercel Turborepo setup..."

# Create project
npx create-turbo@latest howaiconnects-vercel --example with-tailwind

# Navigate to project
cd howaiconnects-vercel

# Install dependencies
pnpm install

# Create brand directory
mkdir -p apps/web/public/brand

# Create env file
cat > apps/web/.env.local << EOL
# Add your environment variables here
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
NEXT_PUBLIC_SITE_URL=https://howaiconnects.com
EOL

echo "✅ Setup complete!"
echo "📁 Project created at: howaiconnects-vercel"
echo ""
echo "Next steps:"
echo "1. cd howaiconnects-vercel"
echo "2. Copy your logo files to apps/web/public/brand/"
echo "3. Update colors in tailwind.config.ts"
echo "4. Run 'pnpm dev' to start development"
echo "5. Deploy with 'vercel'"
