# GitHub Copilot Instructions for HowAIConnects

## Project Overview

HowAIConnects is an AI startup platform that provides AI-powered web applications and intelligent automation solutions. The platform serves as both a marketing website and a comprehensive web application with user authentication, dashboards, and integrations.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: React Context API with hooks
- **UI Framework**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Deployment**: Railway.com
- **Database**: Supabase (PostgreSQL)
- **External Integrations**: Airtable, Zapier, EmailJS

## Architecture Patterns

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── layouts/        # Layout components (PublicLayout, AppLayout, AdminLayout)
│   ├── auth/           # Authentication components
│   ├── integrations/   # Integration-specific components (Airtable, Zapier)
│   └── [feature]/      # Feature-specific components
├── pages/              # Page components (route handlers)
├── services/           # External API services
├── hooks/              # Custom React hooks
├── contexts/           # React Context providers
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── integrations/       # External service clients
```

### Route Structure
- **Public routes**: Marketing pages (`/`, `/about`, `/services`, `/resources`)
- **Auth routes**: Login/signup (`/auth`)
- **App platform**: Protected user features (`/app/*`)
- **Admin routes**: Admin features (`/admin/*`)

## Development Guidelines

### Component Conventions

1. **Functional Components**: Use arrow functions with TypeScript
```tsx
const ComponentName = ({ prop1, prop2 }: Props) => {
  return <div>Component content</div>;
};

export default ComponentName;
```

2. **Props Interface**: Define props interface above component
```tsx
interface ComponentProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}
```

3. **File Naming**: Use PascalCase for components (`UserProfile.tsx`)

4. **shadcn/ui**: Prefer using shadcn/ui components from `@/components/ui/`
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

### Styling Guidelines

1. **Tailwind Classes**: Use Tailwind for styling with the `cn()` utility for conditional classes
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-classes", condition && "conditional-classes")} />
```

2. **Brand Colors**: Use defined brand colors in tailwind.config.ts
```tsx
// Primary brand colors
className="bg-brand-primary text-brand-light"
className="text-brand-secondary"
```

3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
```tsx
className="text-sm md:text-base lg:text-lg"
```

### State Management

1. **React Context**: Use for global state (auth, theme)
```tsx
const { user, login, logout } = useAuth();
```

2. **Local State**: useState for component-specific state
3. **External State**: Custom hooks for API calls

### API Integration Patterns

1. **Service Layer**: Use service classes for external APIs
```tsx
// In services/airtableService.ts
export const airtableService = new AirtableServiceClass();

// In components
import { airtableService } from '@/services/airtableService';
```

2. **Edge Functions**: Use Supabase edge functions for secure API calls
3. **Error Handling**: Always wrap API calls in try-catch blocks

### Authentication

1. **Public Routes**: Use `<PublicRoute>` wrapper
2. **Protected Routes**: Use `<ProtectedRoute>` wrapper  
3. **Role-based Access**: Use `<RoleBasedRoute allowedRoles={['admin']}>` wrapper
4. **Auth Context**: Access user state via `useAuth()` hook

## AI/Automation Features

### Airtable Integration
- CRM functionality for leads and customer data
- Analytics and reporting
- Automation workflow logging
- Content management system

### Zapier Integration
- Webhook endpoints for automation triggers
- Pre-built templates and workflows
- CLI integration tools
- Custom app development

### Key Automation Workflows
1. Lead capture from contact forms → Airtable
2. Email automation via EmailJS
3. Analytics tracking and reporting
4. Content delivery and management

## Component Library Standards

### shadcn/ui Usage
- Import from `@/components/ui/[component]`
- Extend with custom variants using `cva()` when needed
- Follow existing component patterns for consistency

### Custom Components
- Build on top of shadcn/ui primitives
- Use composition over inheritance
- Follow accessibility standards (ARIA labels, keyboard navigation)

## SEO and Meta Management

1. **React Helmet**: Use react-helmet-async for meta tags
```tsx
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Page Title | HowAIConnects</title>
  <meta name="description" content="Page description" />
</Helmet>
```

2. **Structured Data**: Include JSON-LD for rich snippets
3. **Canonical URLs**: Set canonical links for all pages

## Testing and Quality

### ESLint Configuration
- TypeScript ESLint rules enabled
- React hooks rules
- Import/export conventions

### Code Quality Standards
- Use TypeScript strict mode
- Avoid `any` types - use proper TypeScript interfaces
- Follow React best practices (hooks rules, component patterns)
- Use meaningful variable and function names

## Deployment

### Railway.com
- Automatic deployments from main branch
- Environment variables configured in Railway dashboard
- Build command: `npm run build`
- Start command: `npm start`

### Environment Variables
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_AIRTABLE_BASE_ID=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Performance Considerations

1. **Code Splitting**: Use React.lazy() for large components
2. **Image Optimization**: Use proper image formats and sizes
3. **Bundle Analysis**: Monitor bundle size (currently ~1.2MB)
4. **Core Web Vitals**: Optimize for LCP, FID, CLS metrics

## Security Guidelines

1. **Environment Variables**: Never commit secrets to version control
2. **API Security**: Use Supabase Row Level Security (RLS)
3. **Input Validation**: Validate all user inputs
4. **CORS**: Configure proper CORS policies for APIs

## Common Patterns to Follow

### API Calls
```tsx
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const handleSubmit = async (data: FormData) => {
  setLoading(true);
  setError(null);
  
  try {
    await apiService.submitData(data);
    // Handle success
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred');
  } finally {
    setLoading(false);
  }
};
```

### Form Handling
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
});

const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema)
});
```

### Responsive Components
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

## When Adding New Features

1. **Create service first**: Add external API integration in `services/`
2. **Add types**: Define TypeScript interfaces in `types/`
3. **Build components**: Start with UI components, then feature components
4. **Add routes**: Update routing in `App.tsx`
5. **Test integration**: Verify all integrations work end-to-end
6. **Update documentation**: Add any new patterns or conventions

## Integration-Specific Guidelines

### Airtable
- Use `airtableService` for all Airtable operations
- Follow the established schema (Leads, Resources, User Activity, etc.)
- Use edge functions for secure API calls

### Zapier
- Provide webhook endpoints for automation triggers
- Include CLI tools and templates for custom integrations
- Document all available workflows

### Supabase
- Use for authentication and session management
- Edge functions for server-side logic
- Row Level Security for data protection

Remember: This is an AI startup platform focused on automation and intelligence. Prioritize user experience, performance, and seamless integrations when building new features.