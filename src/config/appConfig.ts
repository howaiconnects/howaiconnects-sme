/**
 * HowAIConnects Platform Configuration
 * Centralized app configuration for all features and integrations
 */

// App Metadata
export const appConfig = {
  name: "HowAIConnects",
  tagline: "AI-Powered Business Automation Platform",
  description: "Transform your business with intelligent AI automation solutions, custom web applications, and data-driven insights.",
  url: "https://howaiconnects.com",
  logo: "/src/assets/logo-light.png",
  version: "2.0.0",
  support: {
    email: "support@howaiconnects.com",
    phone: "+1 (416) 898-4516"
  }
};

// SEO Configuration
export const seoConfig = {
  defaultTitle: "HowAIConnects - AI Business Automation Platform",
  titleTemplate: "%s | HowAIConnects",
  defaultDescription: "Transform your business with AI automation solutions. Custom web apps, workflow automation, and intelligent business insights for modern enterprises.",
  keywords: [
    "AI automation",
    "business intelligence", 
    "custom web applications",
    "workflow automation",
    "AI consulting",
    "machine learning solutions",
    "Toronto AI company",
    "business transformation"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appConfig.url,
    siteName: appConfig.name,
    title: appConfig.name,
    description: appConfig.description,
    images: [
      {
        url: `${appConfig.url}/src/assets/logo-light.png`,
        width: 1200,
        height: 630,
        alt: "HowAIConnects AI Platform"
      }
    ]
  },
  twitter: {
    handle: "@howaiconnects",
    site: "@howaiconnects",
    cardType: "summary_large_image"
  }
};

// Business Information
export const businessConfig = {
  company: "HowAIConnects Inc.",
  founded: "2024",
  location: {
    city: "Toronto",
    province: "Ontario", 
    country: "Canada",
    timezone: "America/Toronto"
  },
  contact: {
    email: "hello@howaiconnects.com",
    phone: "+1 (416) 898-4516",
    address: {
      street: "123 Business Ave",
      city: "Toronto",
      province: "ON",
      postalCode: "M5V 3A8",
      country: "Canada"
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/howaiconnects",
    twitter: "https://twitter.com/howaiconnects",
    github: "https://github.com/howaiconnects"
  }
};

// Feature Flags
export const featureFlags = {
  enableAnalytics: true,
  enableLiveChat: true,
  enableWebhooks: true,
  enableBetaFeatures: false,
  enableMaintenanceMode: false,
  enableUserRegistration: true,
  enableSocialLogin: false
};

// Navigation Structure
export const navigationConfig = {
  public: [
    { 
      name: "Home", 
      href: "/", 
      description: "AI automation platform homepage"
    },
    { 
      name: "Services", 
      href: "/services",
      description: "AI automation and consulting services",
      children: [
        { name: "Marketing Automation", href: "/services/ai-automation-solutions/marketing-automation" },
        { name: "Workflow Automation", href: "/services/ai-automation-solutions/workflow-automation" },
        { name: "Customer Service AI", href: "/services/ai-automation-solutions/customer-service-automation" },
        { name: "AI Strategy", href: "/services/ai-consultation/ai-strategy-development" },
        { name: "AI Assessment", href: "/services/ai-consultation/ai-readiness-assessment" },
        { name: "Implementation", href: "/services/ai-consultation/implementation-support" }
      ]
    },
    { 
      name: "Solutions", 
      href: "/solutions",
      description: "Business solutions and web applications",
      children: [
        { name: "Web App Development", href: "/web-app-development" },
        { name: "AI Agency Services", href: "/done-for-you-ai-agency" },
        { name: "Path to Canada", href: "/web-apps/path-to-canada" },
        { name: "AI Data Gem", href: "/web-apps/ai-data-gem" }
      ]
    },
    { 
      name: "Resources", 
      href: "/resources",
      description: "Learning resources and tools",
      children: [
        { name: "Blog", href: "/resources/blog" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "AI Tools", href: "/resources/tools" },
        { name: "Templates", href: "/resources/templates" },
        { name: "Training", href: "/courses" }
      ]
    },
    { 
      name: "About", 
      href: "/about", 
      description: "Company information and team"
    },
    { 
      name: "Contact", 
      href: "/contact", 
      description: "Get in touch with our team"
    }
  ],
  app: [
    { name: "Dashboard", href: "/dashboard", icon: "BarChart3" },
    { name: "Analytics", href: "/app", icon: "TrendingUp" },
    { name: "Automation", href: "/app/automation", icon: "Zap" },
    { name: "Navigation", href: "/app/navigation", icon: "Menu" },
    { name: "Settings", href: "/account", icon: "Settings" }
  ],
  admin: [
    { name: "Admin Dashboard", href: "/admin/dashboard", icon: "Shield" },
    { name: "User Management", href: "/admin/settings", icon: "Users" },
    { name: "Email Integration", href: "/admin/email-integration", icon: "Mail" }
  ]
};

// API Configuration
export const apiConfig = {
  baseURL: "https://eicddzwfalnrttrmyppg.supabase.co",
  timeout: 30000,
  retryAttempts: 3,
  endpoints: {
    auth: "/auth/v1",
    api: "/rest/v1",
    storage: "/storage/v1",
    functions: "/functions/v1"
  }
};

// Performance Configuration
export const performanceConfig = {
  lazyLoading: true,
  imageOptimization: true,
  caching: {
    staticAssets: "1y",
    apiResponses: "5m",
    userSessions: "30d"
  },
  analytics: {
    trackPageViews: true,
    trackEvents: true,
    trackErrors: true,
    sampleRate: 100
  }
};

export default {
  app: appConfig,
  seo: seoConfig,
  business: businessConfig,
  features: featureFlags,
  navigation: navigationConfig,
  api: apiConfig,
  performance: performanceConfig
};