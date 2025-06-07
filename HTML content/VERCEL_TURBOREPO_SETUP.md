# Vercel Turborepo Migration Instructions

## 🚀 Quick Start

### 1. Create Vercel Turborepo Project

```bash
# Create new Turborepo project with Vercel's template
npx create-turbo@latest howaiconnects-vercel --example with-tailwind

# Navigate to project
cd howaiconnects-vercel

# Install dependencies
pnpm install
```

### 2. Project Structure

Your Turborepo will have this structure:
```
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
```

### 3. Update Brand Colors

#### Update `apps/web/tailwind.config.ts`:
```typescript
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
      },
    },
  },
  plugins: [],
};

export default config;
```

### 4. Add Brand Assets

1. Create brand directory:
   ```bash
   mkdir -p apps/web/public/brand
   ```

2. Copy your logo files:
   - logo-dark.png
   - logo-light.png
   - favicon.ico
   - og-image.png

### 5. Environment Variables

Create `.env.local` in `apps/web/`:
```env
# Airtable
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id

# Site
NEXT_PUBLIC_SITE_URL=https://howaiconnects.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
```

### 6. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Select "howaiconnects-vercel" as root directory
# - Use detected settings for Turborepo
```

### 7. Vercel Configuration

In your Vercel dashboard:

1. **Build Settings:**
   - Framework Preset: Next.js
   - Build Command: `turbo run build`
   - Output Directory: `apps/web/.next`
   - Install Command: `pnpm install`

2. **Environment Variables:**
   Add all variables from `.env.local`

3. **Monorepo Settings:**
   - Root Directory: `./`
   - Include all apps and packages

### 8. Content Migration

1. **Pages to migrate:**
   - /
   - /sales-deck
   - /sales-presentation
   - /services
   - /contact
   - /about

2. **Use Vercel's default components and only customize:**
   - Colors (already configured)
   - Logo placement
   - Content text

3. **Keep original Vercel template structure**

### 9. Airtable Integration

Create `packages/airtable/index.ts`:
```typescript
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
```

### 10. Next Steps

1. Start development server:
   ```bash
   pnpm dev
   ```

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

Generated on: 2025-06-05T09:49:29.678Z
