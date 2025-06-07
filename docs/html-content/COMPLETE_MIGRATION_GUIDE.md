# 🚀 Complete Migration Guide: HowAIConnects to Vercel Turborepo

## Overview
This guide provides detailed, step-by-step instructions to migrate your HowAIConnects website to a Vercel Turborepo monorepo structure using the default Next.js 15 template. We will ONLY modify the color theme to match your brand colors while keeping all default components unchanged.

---

## 📋 Pre-Migration Checklist

### Required Files (Already Generated):
- [x] `comprehensive-migration-report-2025-06-05T08-35-03.json` - Complete website data
- [x] `vercel-turborepo-migration-plan.json` - Migration structure
- [x] `airtable-schema.json` - Content management schema
- [x] `VERCEL_TURBOREPO_SETUP.md` - Setup instructions
- [x] `setup-vercel-turborepo.sh` - Automation script

### Brand Assets Needed:
- [ ] Logo files from Dropbox folder
- [ ] March18-ColorPalet.png (color reference)
- [ ] Favicon file
- [ ] Open Graph image for social sharing

### Prerequisites:
- [ ] Node.js 18+ installed
- [ ] pnpm installed (`npm install -g pnpm`)
- [ ] Vercel CLI installed (`npm install -g vercel`)
- [ ] Git installed
- [ ] Vercel account created

---

## 🏗️ Phase 1: Project Setup (30 minutes)

### Step 1.1: Create Turborepo Project
```bash
# Navigate to your development directory
cd ~/Documents/github/

# Run the automated setup script
bash ~/Documents/github/howaiconnects-sme-boost/setup-vercel-turborepo.sh
```

### Step 1.2: Verify Project Structure
After creation, you should have:
```
howaiconnects-vercel/
├── apps/
│   ├── web/              # Main website (Next.js 15)
│   ├── admin/            # Admin dashboard
│   └── docs/             # Documentation
├── packages/
│   ├── ui/               # Shared components
│   ├── config/           # Shared configs
│   └── tsconfig/         # TypeScript configs
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

### Step 1.3: Initial Dependencies
```bash
cd howaiconnects-vercel
pnpm install
```

---

## 🎨 Phase 2: Brand Customization (20 minutes)

### Step 2.1: Update Tailwind Configuration

**IMPORTANT**: We're ONLY changing colors, not modifying any components!

Edit `apps/web/tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override default colors with HowAIConnects brand
        primary: {
          DEFAULT: '#1E3A50',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#35A162',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F39C12',
          foreground: '#FFFFFF',
        },
        background: '#0A1628',
        foreground: '#FFFFFF',
        muted: {
          DEFAULT: '#B8C5D6',
          foreground: '#1E3A50',
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

### Step 2.2: Update Global CSS

Edit `apps/web/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* HowAIConnects Brand Colors */
    --background: 10 22 40; /* #0A1628 in HSL */
    --foreground: 0 0 100; /* #FFFFFF in HSL */
    
    --primary: 209 46 24; /* #1E3A50 in HSL */
    --primary-foreground: 0 0 100;
    
    --secondary: 146 48 35; /* #35A162 in HSL */
    --secondary-foreground: 0 0 100;
    
    --accent: 37 88 50; /* #F39C12 in HSL */
    --accent-foreground: 0 0 100;
    
    --muted: 210 30 78; /* #B8C5D6 in HSL */
    --muted-foreground: 209 46 24;
  }
}

body {
  color: rgb(var(--foreground));
  background: rgb(var(--background));
}
```

### Step 2.3: Add Brand Assets

```bash
# Create brand directory
mkdir -p apps/web/public/brand

# Copy your logo files here:
# - Copy all .png files from your Dropbox folder
# - Rename main logo to: logo-dark.png
# - Create favicon.ico from your logo
```

---

## 📄 Phase 3: Content Migration (1-2 hours)

### Step 3.1: Prepare Content Data

Create `apps/web/lib/content-data.ts`:
```typescript
// This file will hold your migrated content
// We'll populate it from the comprehensive report

export const siteContent = {
  // Content will be extracted from comprehensive-migration-report-*.json
  pages: {},
  components: {},
  seo: {}
};
```

### Step 3.2: Create Content Migration Script

Create `migrate-content.js` in project root:
```javascript
const fs = require('fs');
const path = require('path');

// Load the comprehensive report
const reportPath = '../howaiconnects-sme-boost/comprehensive-migration-report-2025-06-05T08-35-03.json';
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

// Extract content for each page
const pages = report.websiteContent.pages;

// Generate content files for each page
pages.forEach(page => {
  console.log(`Migrating page: ${page.path}`);
  // Content migration logic here
});

console.log('Content migration complete!');
```

### Step 3.3: Update Default Pages with Content

For each page, we'll update ONLY the content, keeping the default structure:

**Example for Home Page** (`apps/web/app/page.tsx`):
```typescript
// Keep the default imports and structure
// Only update the text content and add your logo

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Keep default structure, just update text */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl">
          Transform Your Business with AI Automation & Education
        </p>
        {/* Add your logo */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <img
            src="/brand/logo-dark.png"
            alt="HowAIConnects"
            width={180}
            height={40}
          />
        </div>
      </div>
      
      {/* Rest of default template with your content */}
    </main>
  );
}
```

---

## 🔗 Phase 4: Airtable Integration (45 minutes)

### Step 4.1: Create Airtable Package

```bash
# Create Airtable package
mkdir -p packages/airtable
cd packages/airtable
pnpm init
```

### Step 4.2: Install Airtable Dependencies

```bash
pnpm add airtable
pnpm add -D @types/airtable typescript
```

### Step 4.3: Create Airtable Service

Create `packages/airtable/src/index.ts`:
```typescript
import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY!
}).base(process.env.AIRTABLE_BASE_ID!);

export const airtableService = {
  async getPages() {
    const records = await base('pages').select().all();
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  },
  
  async getContent(pageId: string) {
    const records = await base('contentBlocks')
      .select({
        filterByFormula: `{Used On Pages} = '${pageId}'`
      })
      .all();
    return records.map(record => record.fields);
  }
};
```

### Step 4.4: Create API Routes

Create `apps/web/app/api/content/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { airtableService } from '@howaiconnects/airtable';

export async function GET() {
  try {
    const pages = await airtableService.getPages();
    return NextResponse.json({ pages });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}
```

---

## 🚀 Phase 5: Deployment (30 minutes)

### Step 5.1: Environment Variables

Create `.env.local` in `apps/web/`:
```env
# Airtable Configuration
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://howaiconnects.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Step 5.2: Test Locally

```bash
# From project root
pnpm dev

# Visit:
# - http://localhost:3000 (main site)
# - http://localhost:3001 (admin)
# - http://localhost:3002 (docs)
```

### Step 5.3: Deploy to Vercel

```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: Select your account
# - Link to existing project: N
# - Project name: howaiconnects-turborepo
# - Directory: ./
# - Override settings: N
```

### Step 5.4: Configure Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add all variables from `.env.local`
5. Go to Settings → General
6. Verify build settings:
   - Framework Preset: Next.js
   - Build Command: `turbo run build`
   - Install Command: `pnpm install`

---

## ✅ Phase 6: Post-Migration Checklist

### Verification Steps:
- [ ] All pages load correctly with new colors
- [ ] Logo appears in correct locations
- [ ] Content is displayed properly
- [ ] Airtable integration works
- [ ] Mobile responsive design maintained
- [ ] SEO meta tags present
- [ ] Performance metrics acceptable

### Final Tasks:
- [ ] Update DNS to point to Vercel
- [ ] Set up monitoring and analytics
- [ ] Configure automatic deployments
- [ ] Document any custom changes

---

## 🆘 Troubleshooting

### Common Issues:

1. **Build Errors**
   ```bash
   # Clear cache and rebuild
   pnpm clean
   pnpm install
   pnpm build
   ```

2. **Color Not Applying**
   - Ensure Tailwind config is in the correct location
   - Check that globals.css is imported in layout.tsx
   - Clear browser cache

3. **Airtable Connection Issues**
   - Verify API key and Base ID
   - Check environment variables are loaded
   - Test API routes independently

---

## 📚 Resources

- [Vercel Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Airtable API Reference](https://airtable.com/developers/web/api/introduction)

---

## 🎯 Success Criteria

Your migration is complete when:
1. ✅ Site runs on Vercel with Turborepo structure
2. ✅ All pages display with your brand colors
3. ✅ Default Next.js components unchanged (only colors modified)
4. ✅ Content managed through Airtable
5. ✅ Logo and brand assets properly displayed
6. ✅ Site performs well and is SEO-optimized

---

**Generated on:** ${new Date().toISOString()}
**Next Task:** Execute this migration plan step-by-step
