/**
 * SEO AI Platform Configuration
 * Centralized configuration for all AI services, APIs, and integrations
 * Note: Environment variables removed - use Supabase secrets for sensitive data
 */

// Latitude.so Configuration
export const latitudeConfig = {
  baseUrl: 'https://gateway.latitude.so/api',
  apiKey: '', // Will be loaded from Supabase secrets
  projectId: '', // Will be loaded from Supabase secrets
  promptVersions: {
    keywordResearch: 'keyword-research-v1',
    contentGeneration: 'content-generation-v1',
    seoOptimization: 'seo-optimization-v1',
    competitorAnalysis: 'competitor-analysis-v1',
    contentRewriting: 'content-rewriting-v1',
  }
};

// Azure AI Foundry Configuration
export const azureAIConfig = {
  deployments: {
    gpt4: 'gpt-4-deployment',
    gpt35: 'gpt-35-turbo',
    embedding: 'text-embedding-ada-002',
    vision: 'gpt-4-vision',
  },
  searchService: {
    indexName: 'seo-content-index'
  }
};

// Airtable Configuration
export const airtableConfig = {
  tables: {
    content: 'Content',
    keywords: 'Keywords',
    campaigns: 'Campaigns',
    competitors: 'Competitors',
    analytics: 'Analytics',
    workflows: 'Workflows'
  }
};

// SEO Tools API Configuration
export const seoToolsConfig = {
  ahrefs: {
    baseUrl: 'https://apiv2.ahrefs.com'
  },
  semrush: {
    baseUrl: 'https://api.semrush.com'
  },
  brightData: {
    endpoint: 'brd.superproxy.io:22225'
  }
};

// Automation Platform Configuration
export const automationConfig = {
  zapier: {
    webhookUrl: ''
  },
  make: {
    webhookUrl: ''
  },
  n8n: {
    webhookUrl: ''
  },
  pipedream: {
    webhookUrl: ''
  }
};

// AI Agent Configuration
export const aiAgentConfig = {
  keywordResearchAgent: {
    name: 'Keyword Research Agent',
    model: 'gpt-4',
    temperature: 0.3,
    maxTokens: 2000,
    systemPrompt: 'You are an expert SEO keyword researcher specializing in AI automation and business technology keywords. Focus on commercial intent and long-tail opportunities.'
  },
  contentGenerationAgent: {
    name: 'Content Generation Agent',
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 4000,
    systemPrompt: 'You are an expert content writer specializing in AI automation, business transformation, and technology solutions. Write engaging, SEO-optimized content that converts.'
  },
  seoOptimizationAgent: {
    name: 'SEO Optimization Agent',
    model: 'gpt-4',
    temperature: 0.2,
    maxTokens: 3000,
    systemPrompt: 'You are an expert SEO optimizer focusing on technical SEO, on-page optimization, and content structure for maximum search visibility.'
  },
  competitorAnalysisAgent: {
    name: 'Competitor Analysis Agent',
    model: 'gpt-4',
    temperature: 0.4,
    maxTokens: 2500,
    systemPrompt: 'You are an expert competitive intelligence analyst specializing in AI automation and business technology markets.'
  }
};

// Content Workflow Configuration
export const workflowConfig = {
  stages: [
    { id: 'ideation', name: 'Ideation', agent: 'keywordResearchAgent' },
    { id: 'research', name: 'Research', agent: 'competitorAnalysisAgent' },
    { id: 'drafting', name: 'Drafting', agent: 'contentGenerationAgent' },
    { id: 'seo-review', name: 'SEO Review', agent: 'seoOptimizationAgent' },
    { id: 'approval', name: 'Human Approval', agent: null },
    { id: 'publishing', name: 'Publishing', agent: 'publishingAgent' },
    { id: 'promotion', name: 'Promotion', agent: 'promotionAgent' },
    { id: 'monitoring', name: 'Performance Monitoring', agent: 'analyticsAgent' }
  ],
  automationTriggers: {
    newKeywordOpportunity: 'trigger-content-creation',
    contentApproved: 'trigger-publishing',
    performanceDrop: 'trigger-optimization',
    competitorNewContent: 'trigger-gap-analysis'
  }
};

// Quality Control Configuration
export const qualityConfig = {
  contentQuality: {
    minWordCount: 800,
    maxWordCount: 3000,
    readabilityScore: 60, // Flesch Reading Ease
    keywordDensity: { min: 0.5, max: 2.5 },
    internalLinks: { min: 2, max: 8 },
    externalLinks: { min: 1, max: 3 }
  },
  seoRequirements: {
    titleLength: { min: 30, max: 60 },
    metaDescriptionLength: { min: 120, max: 160 },
    h1Count: 1,
    h2Count: { min: 3, max: 8 },
    imageAltTags: true,
    schemaMarkup: true
  },
  complianceChecks: {
    factChecking: true,
    plagiarismDetection: true,
    brandVoiceAlignment: true,
    legalCompliance: true
  }
};

// Performance Monitoring Configuration
export const monitoringConfig = {
  metrics: {
    organic_traffic: 'Google Analytics',
    keyword_rankings: 'Ahrefs/SEMrush',
    click_through_rate: 'Google Search Console',
    bounce_rate: 'Google Analytics',
    time_on_page: 'Google Analytics',
    conversion_rate: 'Google Analytics',
    backlinks: 'Ahrefs',
    domain_authority: 'Moz'
  },
  alerts: {
    ranking_drop: { threshold: 5, period: '7d' },
    traffic_drop: { threshold: 20, period: '7d' },
    ctr_drop: { threshold: 10, period: '7d' },
    technical_seo_issues: { threshold: 1, period: '1d' }
  },
  reporting: {
    daily: ['rankings', 'traffic', 'technical_issues'],
    weekly: ['content_performance', 'keyword_opportunities', 'competitor_analysis'],
    monthly: ['roi_analysis', 'strategy_recommendations', 'content_calendar']
  }
};

// Page-specific SEO Configuration
export const pageConfig = {
  home: {
    title: "HowAIConnects - AI Business Automation Platform | Toronto",
    description: "Transform your business with AI automation solutions. Custom web apps, workflow automation, and intelligent business insights. Toronto's leading AI consulting firm.",
    keywords: ["AI automation Toronto", "business automation", "AI consulting", "workflow automation", "custom web applications"],
    schema: {
      "@type": "Organization",
      "name": "HowAIConnects",
      "url": "https://howaiconnects.com",
      "logo": "https://howaiconnects.com/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png",
      "sameAs": [
        "https://linkedin.com/company/howaiconnects",
        "https://twitter.com/howaiconnects"
      ]
    }
  },
  services: {
    title: "AI Automation Services | Custom Solutions for Business Growth",
    description: "Comprehensive AI automation services including workflow automation, marketing automation, and custom AI solutions. Transform your operations with intelligent automation.",
    keywords: ["AI automation services", "workflow automation", "marketing automation", "AI consulting services"],
    schema: {
      "@type": "Service",
      "serviceType": "AI Automation Services",
      "provider": {
        "@type": "Organization",
        "name": "HowAIConnects"
      }
    }
  },
  about: {
    title: "About HowAIConnects | AI Automation Experts in Toronto",
    description: "Learn about HowAIConnects, Toronto's leading AI automation company. Our team specializes in transforming businesses through intelligent automation solutions.",
    keywords: ["HowAIConnects team", "AI automation company Toronto", "AI consulting experts"],
    schema: {
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "HowAIConnects"
      }
    }
  }
};

export default {
  latitude: latitudeConfig,
  azureAI: azureAIConfig,
  airtable: airtableConfig,
  seoTools: seoToolsConfig,
  automation: automationConfig,
  aiAgents: aiAgentConfig,
  workflow: workflowConfig,
  quality: qualityConfig,
  monitoring: monitoringConfig,
  pages: pageConfig
};