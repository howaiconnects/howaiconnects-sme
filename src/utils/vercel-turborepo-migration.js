import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export class VercelTurborepoMigration {
  constructor(comprehensiveReportPath, targetDirectory) {
    this.reportPath = comprehensiveReportPath;
    this.targetDir = targetDirectory || 'howaiconnects-vercel-turborepo';
    this.report = null;
    
    // Brand colors from your palette
    this.brandColors = {
      primary: '#1E3A50',      // Dark blue
      secondary: '#35A162',    // Green
      accent: '#F39C12',       // Orange
      background: '#0A1628',   // Dark background
      text: '#FFFFFF',         // White text
      textSecondary: '#B8C5D6' // Light blue-gray
    };
  }

  async migrate() {
    console.log('🚀 Starting Vercel Turborepo Migration...\n');

    try {
      // Step 1: Load comprehensive report
      this.loadReport();

      // Step 2: Create migration plan
      await this.createMigrationPlan();

      // Step 3: Generate setup instructions
      await this.generateSetupInstructions();

      console.log('\n✅ Migration plan created successfully!');
      console.log(`📁 Check the generated files for detailed instructions`);
      
      return { success: true };

    } catch (error) {
      console.error('❌ Error creating migration plan:', error);
      return { success: false, error: error.message };
    }
  }

  loadReport() {
    console.log('📖 Loading comprehensive report...');
    const reportContent = fs.readFileSync(this.reportPath, 'utf8');
    this.report = JSON.parse(reportContent);
    console.log('✅ Report loaded successfully');
  }

  async createMigrationPlan() {
    console.log('\n📋 Creating Vercel Turborepo migration plan...');

    const migrationPlan = {
      projectName: 'HowAIConnects Vercel Turborepo',
      template: 'Vercel Turborepo Starter',
      structure: {
        apps: {
          web: 'Main Next.js 15 website',
          admin: 'Admin dashboard for content management',
          docs: 'Documentation site'
        },
        packages: {
          ui: 'Shared UI components library',
          shared: 'Business logic and utilities',
          config: 'Shared configurations (ESLint, TypeScript)',
          types: 'TypeScript type definitions',
          airtable: 'Airtable integration package'
        }
      },
      setupSteps: [
        {
          step: 1,
          title: 'Clone Vercel Turborepo Template',
          command: 'npx create-turbo@latest howaiconnects-vercel --example with-tailwind',
          description: 'Creates a new Turborepo project with Tailwind CSS'
        },
        {
          step: 2,
          title: 'Install Dependencies',
          commands: [
            'cd howaiconnects-vercel',
            'pnpm install',
            'pnpm add -D @vercel/style-guide prettier-plugin-tailwindcss'
          ]
        },
        {
          step: 3,
          title: 'Configure Vercel Project',
          actions: [
            'Link to Vercel: vercel link',
            'Set up environment variables in Vercel dashboard',
            'Configure build settings for monorepo'
          ]
        }
      ],
      brandingUpdates: {
        colors: this.brandColors,
        files: [
          'apps/web/tailwind.config.ts',
          'apps/web/app/globals.css',
          'packages/ui/tailwind.config.ts'
        ],
        logos: [
          'Copy logo files to apps/web/public/brand/',
          'Update favicon in apps/web/app/favicon.ico',
          'Add Open Graph images'
        ]
      },
      contentMigration: {
        pages: this.extractPageList(),
        components: this.extractComponentList(),
        strategy: 'Gradual migration using Vercel\'s default components'
      },
      airtableIntegration: {
        package: 'packages/airtable',
        apiRoutes: [
          'apps/web/app/api/airtable/content/route.ts',
          'apps/web/app/api/airtable/sync/route.ts'
        ],
        tables: Object.keys(this.report.airtableIntegration?.schema?.tables || {})
      },
      deployment: {
        platform: 'Vercel',
        buildCommand: 'turbo run build',
        outputDirectory: 'apps/web/.next',
        installCommand: 'pnpm install',
        rootDirectory: './'
      }
    };

    const planPath = 'vercel-turborepo-migration-plan.json';
    fs.writeFileSync(planPath, JSON.stringify(migrationPlan, null, 2));
    console.log(`✅ Migration plan saved to: ${planPath}`);

    return migrationPlan;
  }

  async generateSetupInstructions() {
    console.log('\n📝 Generating setup instructions...');

    const instructions = `# Vercel Turborepo Migration Instructions

## 🚀 Quick Start

### 1. Create Vercel Turborepo Project

\`\`\`bash
# Create new Turborepo project with Vercel's template
npx create-turbo@latest howaiconnects-vercel --example with-tailwind

# Navigate to project
cd howaiconnects-vercel

# Install dependencies
pnpm install
\`\`\`

### 2. Project Structure

Your Turborepo will have this structure:
\`\`\`
howaiconnects-vercel/
├── apps/
│   ├── web/              # Main Next.js 15 website
│   ├── admin/            # Admin dashboard
│   └── docs/             # Documentation
├── packages/
│   ├── ui/               # Shared components
│   ├── shared/           # Business logic
│   ├── config/           # Configurations
│   ├── types/            # TypeScript types
│   └── airtable/         # Airtable integration
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
\`\`\`

### 3. Update Brand Colors

#### Update \`apps/web/tailwind.config.ts\`:
\`\`\`typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '${this.brandColors.primary}',
          foreground: '${this.brandColors.text}',
        },
        secondary: {
          DEFAULT: '${this.brandColors.secondary}',
          foreground: '${this.brandColors.text}',
        },
        accent: {
          DEFAULT: '${this.brandColors.accent}',
          foreground: '${this.brandColors.text}',
        },
        background: '${this.brandColors.background}',
        foreground: '${this.brandColors.text}',
      },
    },
  },
  plugins: [],
};

export default config;
\`\`\`

### 4. Add Brand Assets

1. Create brand directory:
   \`\`\`bash
   mkdir -p apps/web/public/brand
   \`\`\`

2. Copy your logo files:
   - logo-dark.png
   - logo-light.png
   - favicon.ico
   - og-image.png

### 5. Environment Variables

Create \`.env.local\` in \`apps/web/\`:
\`\`\`env
# Airtable
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id

# Site
NEXT_PUBLIC_SITE_URL=https://howaiconnects.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
\`\`\`

### 6. Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Select "howaiconnects-vercel" as root directory
# - Use detected settings for Turborepo
\`\`\`

### 7. Vercel Configuration

In your Vercel dashboard:

1. **Build Settings:**
   - Framework Preset: Next.js
   - Build Command: \`turbo run build\`
   - Output Directory: \`apps/web/.next\`
   - Install Command: \`pnpm install\`

2. **Environment Variables:**
   Add all variables from \`.env.local\`

3. **Monorepo Settings:**
   - Root Directory: \`./\`
   - Include all apps and packages

### 8. Content Migration

1. **Pages to migrate:**
${this.extractPageList().map(page => `   - ${page}`).join('\n')}

2. **Use Vercel's default components and only customize:**
   - Colors (already configured)
   - Logo placement
   - Content text

3. **Keep original Vercel template structure**

### 9. Airtable Integration

Create \`packages/airtable/index.ts\`:
\`\`\`typescript
import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID!);

export async function getContent(tableName: string) {
  const records = await base(tableName).select().all();
  return records.map(record => ({
    id: record.id,
    ...record.fields
  }));
}
\`\`\`

### 10. Next Steps

1. Start development server:
   \`\`\`bash
   pnpm dev
   \`\`\`

2. Visit:
   - Web app: http://localhost:3000
   - Admin: http://localhost:3001
   - Docs: http://localhost:3002

3. Begin migrating content while keeping Vercel's template structure

## 📚 Resources

- [Vercel Turborepo Guide](https://vercel.com/docs/monorepos/turborepo)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Vercel Templates](https://vercel.com/templates)

## 🎨 Important Notes

- **DO NOT** modify Vercel's default components
- Only update colors and add your logo
- Use the existing template structure
- Content goes into the default components

Generated on: ${new Date().toISOString()}
`;

    const instructionsPath = 'VERCEL_TURBOREPO_SETUP.md';
    fs.writeFileSync(instructionsPath, instructions);
    console.log(`✅ Setup instructions saved to: ${instructionsPath}`);

    // Also create a quick start script
    const quickStartScript = `#!/bin/bash
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
`;

    const scriptPath = 'setup-vercel-turborepo.sh';
    fs.writeFileSync(scriptPath, quickStartScript);
    fs.chmodSync(scriptPath, '755');
    console.log(`✅ Quick start script saved to: ${scriptPath}`);
  }

  extractPageList() {
    if (!this.report.websiteContent?.pages) return [];
    return this.report.websiteContent.pages.map(page => page.path || page.title);
  }

  extractComponentList() {
    if (!this.report.websiteContent?.components) return [];
    return Object.keys(this.report.websiteContent.components);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const reportPath = process.argv[2] || 'comprehensive-migration-report-2025-06-05T08-35-03.json';
  
  const migrator = new VercelTurborepoMigration(reportPath);
  migrator.migrate();
}
