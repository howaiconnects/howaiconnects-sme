/**
 * SEO AI Platform Configuration
 * Centralized configuration for all AI services, APIs, and integrations
 */

// Latitude.so Configuration
export const latitudeConfig = {
  apiKey: import.meta.env.VITE_LATITUDE_API_KEY || '',
  baseUrl: 'https://gateway.latitude.so/api',
  projectId: import.meta.env.VITE_LATITUDE_PROJECT_ID || '',
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
  endpoint: import.meta.env.VITE_AZURE_AI_ENDPOINT || '',
  apiKey: import.meta.env.VITE_AZURE_AI_KEY || '',
  deployments: {
    gpt4: 'gpt-4-deployment',
    gpt35: 'gpt-35-turbo',
    embedding: 'text-embedding-ada-002',
    vision: 'gpt-4-vision',
  },
  searchService: {
    endpoint: import.meta.env.VITE_AZURE_SEARCH_ENDPOINT || '',
    apiKey: import.meta.env.VITE_AZURE_SEARCH_KEY || '',
    indexName: 'seo-content-index'
  }
};

// Airtable Configuration
export const airtableConfig = {
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY || '',
  baseId: import.meta.env.VITE_AIRTABLE_BASE_ID || '',
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
  googleSearchConsole: {
    clientId: import.meta.env.VITE_GSC_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_GSC_CLIENT_SECRET || '',
    redirectUri: import.meta.env.VITE_GSC_REDIRECT_URI || '',
  },
  ahrefs: {
    apiKey: import.meta.env.VITE_AHREFS_API_KEY || '',
    baseUrl: 'https://apiv2.ahrefs.com'
  },
  semrush: {
    apiKey: import.meta.env.VITE_SEMRUSH_API_KEY || '',
    baseUrl: 'https://api.semrush.com'
  },
  brightData: {
    username: import.meta.env.VITE_BRIGHT_DATA_USERNAME || '',
    password: import.meta.env.VITE_BRIGHT_DATA_PASSWORD || '',
    endpoint: 'brd.superproxy.io:22225'
  }
};

// Automation Platform Configuration
export const automationConfig = {
  zapier: {
    webhookUrl: import.meta.env.VITE_ZAPIER_WEBHOOK_URL || '',
    apiKey: import.meta.env.VITE_ZAPIER_API_KEY || ''
  },
  make: {
    webhookUrl: import.meta.env.VITE_MAKE_WEBHOOK_URL || '',
    apiKey: import.meta.env.VITE_MAKE_API_KEY || ''
  },
  n8n: {
    webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL || '',
    apiKey: import.meta.env.VITE_N8N_API_KEY || ''
  },
  pipedream: {
    webhookUrl: import.meta.env.VITE_PIPEDREAM_WEBHOOK_URL || '',
    apiKey: import.meta.env.VITE_PIPEDREAM_API_KEY || ''
  }
};

// AI Agent Configuration
export const aiAgentConfig = {
  keywordResearchAgent: {
    name: 'Keyword Research Agent',
    model: 'gpt-4',
    temperature: 0.3,
    maxTokens: 2000,
    systemPrompt: 'You are an expert SEO keyword researcher...'
  },
  contentGenerationAgent: {
    name: 'Content Generation Agent',
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 4000,
    systemPrompt: 'You are an expert content writer...'
  },
  seoOptimizationAgent: {
    name: 'SEO Optimization Agent',
    model: 'gpt-4',
    temperature: 0.2,
    maxTokens: 3000,
    systemPrompt: 'You are an expert SEO optimizer...'
  },
  competitorAnalysisAgent: {
    name: 'Competitor Analysis Agent',
    model: 'gpt-4',
    temperature: 0.4,
    maxTokens: 2500,
    systemPrompt: 'You are an expert competitive intelligence analyst...'
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

export default {
  latitude: latitudeConfig,
  azureAI: azureAIConfig,
  airtable: airtableConfig,
  seoTools: seoToolsConfig,
  automation: automationConfig,
  aiAgents: aiAgentConfig,
  workflow: workflowConfig,
  quality: qualityConfig,
  monitoring: monitoringConfig
};