
// Enhanced Content Extraction Utility for LLM Analysis and Migration
const fs = require('fs');
const path = require('path');

class ContentExtractor {
  constructor() {
    this.extractedData = {
      metadata: {
        extractionDate: new Date().toISOString(),
        version: '2.0',
        projectType: 'React + Vite + TypeScript',
        targetMigration: 'Next.js 15 + Turborepo'
      },
      businessLogic: {
        serviceDescriptions: [],
        processWorkflows: [],
        valuePropositions: [],
        customerJourneyMaps: []
      },
      technicalArchitecture: {
        componentStructure: {},
        routingConfiguration: {},
        stateManagementPatterns: [],
        integrationPoints: []
      },
      seoMarketingAssets: {
        metaDescriptions: {},
        keywordUsagePatterns: [],
        contentGaps: [],
        conversionFunnelMapping: []
      },
      pages: [],
      components: [],
      assets: [],
      internalLinks: {}
    };
  }

  // Main extraction method
  async extractAll() {
    console.log('🚀 Starting comprehensive content extraction...');
    
    await this.extractPageContent();
    await this.extractComponentStructure();
    await this.extractBusinessLogic();
    await this.extractTechnicalArchitecture();
    await this.extractSEOAssets();
    await this.extractInternalLinking();
    await this.extractAssets();
    
    console.log('✅ Content extraction completed');
    return this.extractedData;
  }

  // Extract page-level content with enhanced metadata
  async extractPageContent() {
    const pages = [
      {
        path: '/',
        file: 'src/pages/Index.tsx',
        title: 'HowAIConnects | AI Automation & Education for Small Businesses',
        type: 'landing',
        businessPurpose: 'primary-conversion',
        seoStrategy: 'brand-awareness-lead-generation'
      },
      {
        path: '/sales-deck',
        file: 'src/pages/SalesDeck.tsx',
        title: 'Business Solutions | HowAIConnects Transformation Suite',
        type: 'sales',
        businessPurpose: 'lead-qualification',
        seoStrategy: 'service-showcase'
      },
      {
        path: '/sales-presentation',
        file: 'src/pages/SalesDeckPresentation.tsx',
        title: 'Business Solutions Presentation | HowAIConnects',
        type: 'presentation',
        businessPurpose: 'sales-support',
        seoStrategy: 'internal-tool'
      },
      {
        path: '/services',
        file: 'src/pages/Services.tsx',
        title: 'AI Services',
        type: 'service-hub',
        businessPurpose: 'service-discovery',
        seoStrategy: 'service-seo'
      },
      {
        path: '/contact',
        file: 'src/pages/Contact.tsx',
        title: 'Contact HowAIConnects',
        type: 'conversion',
        businessPurpose: 'lead-capture',
        seoStrategy: 'local-seo'
      },
      {
        path: '/about',
        file: 'src/pages/About.tsx',
        title: 'About Us',
        type: 'trust-building',
        businessPurpose: 'credibility',
        seoStrategy: 'brand-authority'
      }
    ];

    for (const page of pages) {
      const pageData = await this.extractSinglePage(page);
      this.extractedData.pages.push(pageData);
    }
  }

  async extractSinglePage(pageInfo) {
    const pageData = {
      ...pageInfo,
      sections: [],
      components: [],
      seoElements: {},
      conversionElements: [],
      internalLinks: [],
      businessValue: {},
      technicalImplementation: {}
    };

    // Extract business logic content based on page type
    switch (pageInfo.type) {
      case 'landing':
        pageData.businessValue = {
          primaryValueProposition: 'AI Automation & Education for Small Businesses',
          secondaryValueProps: ['Increase efficiency', 'Reduce costs', 'Scale operations'],
          targetAudience: 'Small and medium-sized businesses',
          conversionGoals: ['Free AI Assessment', 'Course Enrollment', 'Service Inquiry']
        };
        break;
      case 'sales':
        pageData.businessValue = {
          salesProcess: 'B2B consultative selling',
          decisionFactors: ['Cost savings', 'Competitive advantage', 'Technical support'],
          objectionHandling: ['ROI concerns', 'Technical complexity', 'Implementation time'],
          closingMechanisms: ['Free consultation', 'Assessment tools', 'Case studies']
        };
        break;
      case 'service-hub':
        pageData.businessValue = {
          serviceCategories: ['AI Automation Solutions', 'AI Consultation Services'],
          serviceJourney: 'Discovery -> Assessment -> Implementation -> Support',
          crossSellOpportunities: ['Education -> Services', 'Services -> Agency Building'],
          competitiveDifferentiators: ['SME focus', 'No-code solutions', 'Ongoing support']
        };
        break;
    }

    return pageData;
  }

  // Extract component hierarchy and reusability analysis
  async extractComponentStructure() {
    const componentAnalysis = {
      reusableComponents: [
        {
          name: 'SalesDeckHero',
          file: 'src/components/sales/SalesDeckHero.tsx',
          reusabilityScore: 9,
          migrationComplexity: 'low',
          dependencies: ['HeroBackground', 'HeroContent', 'DivisionCarousel'],
          businessPurpose: 'conversion-optimization',
          designPattern: 'hero-section-with-carousel'
        },
        {
          name: 'DeckSection',
          file: 'src/components/sales/deck-section/DeckSection.tsx',
          reusabilityScore: 10,
          migrationComplexity: 'low',
          dependencies: ['BenefitsSection', 'FeaturesList', 'CallToAction'],
          businessPurpose: 'service-presentation',
          designPattern: 'content-showcase-section'
        }
      ],
      sharedUIComponents: [
        'Button', 'Card', 'Tabs', 'Navigation', 'Footer', 'ContactForm'
      ],
      businessSpecificComponents: [
        'Hero', 'ServicesShowcase', 'ProblemSolution', 'SuccessStories'
      ]
    };

    this.extractedData.technicalArchitecture.componentStructure = componentAnalysis;
  }

  // Extract business logic and value propositions
  async extractBusinessLogic() {
    this.extractedData.businessLogic = {
      serviceDescriptions: {
        aiAutomation: {
          title: 'Dedicated AI Services',
          valueProposition: 'Save hundreds of thousands in operational costs',
          targetOutcome: 'Cut operational costs by up to 40%',
          implementationApproach: 'No technical expertise required',
          roi: '300-500% return on investment within first year'
        },
        doneForYouAgency: {
          title: 'Done-for-You AI Agency',
          valueProposition: 'Launch AI agency without startup headaches',
          targetOutcome: 'Generate revenue before investing',
          implementationApproach: 'Complete business-in-a-box solution',
          roi: 'Zero upfront costs, affiliate commission structure'
        },
        webAppDevelopment: {
          title: 'Web App Development',
          valueProposition: 'Convert business challenges into digital solutions',
          targetOutcome: 'Reduce operating costs by up to 60%',
          implementationApproach: 'Custom applications aligned with objectives',
          roi: 'Increase repeat business by 40%'
        }
      },
      processWorkflows: {
        customerJourney: [
          'Awareness (Hero/Landing)',
          'Interest (Services/Features)',
          'Consideration (Case Studies/Benefits)',
          'Intent (Assessment/Consultation)',
          'Evaluation (Presentation/Demo)',
          'Purchase (Contact/Booking)',
          'Retention (Support/Education)'
        ],
        salesProcess: [
          'Lead capture through multiple touchpoints',
          'AI Readiness Assessment',
          'Custom solution presentation',
          'Implementation planning',
          'Ongoing support and optimization'
        ]
      },
      valuePropositions: {
        primary: 'Transform business operations with AI automation',
        supporting: [
          'Cost reduction through automation',
          'Competitive advantage through AI',
          'No technical expertise required',
          'Proven ROI and time savings'
        ]
      }
    };
  }

  // Extract technical architecture patterns
  async extractTechnicalArchitecture() {
    this.extractedData.technicalArchitecture = {
      routingConfiguration: {
        currentPattern: 'React Router v6',
        routeStructure: 'hierarchical',
        dynamicRoutes: ['/courses/:id', '/resources/:category', '/resources/downloads/:id'],
        migrationNotes: 'Convert to Next.js App Router structure'
      },
      stateManagementPatterns: {
        currentApproach: 'React hooks + local state',
        contextUsage: 'AuthContext for authentication',
        formHandling: 'react-hook-form + zod validation',
        migrationStrategy: 'Zustand + React Query for Next.js'
      },
      integrationPoints: {
        email: 'EmailJS for contact forms',
        analytics: 'Zendesk integration ready',
        cms: 'Static content with JSON structure',
        futureIntegrations: ['Airtable CMS', 'Supabase backend', 'Stripe payments']
      }
    };
  }

  // Extract SEO and marketing assets
  async extractSEOAssets() {
    this.extractedData.seoMarketingAssets = {
      metaDescriptions: {
        homepage: 'AI automation services and practical education for small businesses',
        services: 'Comprehensive AI solutions for business automation and growth',
        contact: 'Connect with HowAIConnects for AI automation services and consultation'
      },
      keywordUsagePatterns: {
        primary: ['AI automation', 'small business AI', 'AI consulting'],
        secondary: ['business automation', 'AI services', 'digital transformation'],
        longTail: ['AI readiness assessment', 'done for you AI agency', 'small business AI solutions']
      },
      contentGaps: [
        'Industry-specific case studies',
        'Detailed ROI calculators',
        'Step-by-step implementation guides',
        'Comparison with competitors',
        'Pricing transparency pages'
      ],
      conversionFunnelMapping: {
        awareness: ['Blog posts', 'SEO landing pages', 'Social media'],
        interest: ['Service pages', 'Feature comparisons', 'Benefits sections'],
        consideration: ['Case studies', 'Testimonials', 'Free resources'],
        intent: ['Assessment tools', 'Consultation booking', 'Contact forms'],
        action: ['Pricing pages', 'Onboarding flows', 'Payment processing']
      }
    };
  }

  // Extract internal linking structure
  async extractInternalLinking() {
    this.extractedData.internalLinks = {
      navigationStructure: {
        primary: ['Home', 'Services', 'Resources', 'About', 'Contact'],
        secondary: ['Courses', 'Sales Deck', 'Web Apps'],
        utility: ['Privacy Policy', 'Terms of Service', 'Admin']
      },
      crossLinkingOpportunities: {
        servicesToResources: 'Link AI services to relevant case studies and guides',
        resourcesToServices: 'Link educational content to applicable services',
        salesDeckIntegration: 'Cross-link between sales deck and detailed service pages',
        conversionPathways: 'Create clear paths from education to consultation'
      },
      missingLinks: [
        'Related services suggestions',
        'Next steps CTAs',
        'Educational pathway progression',
        'Cross-promotion between business divisions'
      ]
    };
  }

  // Extract asset inventory
  async extractAssets() {
    this.extractedData.assets = {
      images: [
        {
          path: '/lovable-uploads/6a19eca0-b899-42d6-bcd1-37c87248c21d.png',
          usage: 'AI Services illustration',
          optimization: 'needs-webp-conversion',
          seoValue: 'medium'
        },
        {
          path: '/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png',
          usage: 'AI Agency illustration',
          optimization: 'needs-webp-conversion',
          seoValue: 'medium'
        },
        {
          path: '/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png',
          usage: 'Web App Development illustration',
          optimization: 'needs-webp-conversion',
          seoValue: 'medium'
        }
      ],
      scripts: [
        'src/utils/export-website.js',
        'src/utils/httrack-export.js'
      ],
      configurations: [
        'tailwind.config.ts',
        'vite.config.ts',
        'tsconfig.json'
      ]
    };
  }

  // Export methods for different formats
  exportJSON() {
    const jsonPath = path.join(__dirname, '..', '..', 'content-export-structured.json');
    fs.writeFileSync(jsonPath, JSON.stringify(this.extractedData, null, 2));
    console.log(`📊 Structured JSON export saved to ${jsonPath}`);
    return jsonPath;
  }

  exportMarkdown() {
    const markdownContent = this.generateMarkdownContent();
    const markdownPath = path.join(__dirname, '..', '..', 'content-export-llm-optimized.md');
    fs.writeFileSync(markdownPath, markdownContent);
    console.log(`📝 LLM-optimized Markdown export saved to ${markdownPath}`);
    return markdownPath;
  }

  exportHTML() {
    const htmlContent = this.generateHTMLContent();
    const htmlPath = path.join(__dirname, '..', '..', 'content-export-visual-reference.html');
    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`🌐 Visual HTML export saved to ${htmlPath}`);
    return htmlPath;
  }

  generateMarkdownContent() {
    return `# HowAIConnects - Complete Content Analysis for LLM Processing

## Executive Summary
This document contains a comprehensive analysis of the HowAIConnects website, structured for optimal processing by advanced reasoning LLMs like Claude Opus 4.

## Business Logic Content

### Service Descriptions and Value Propositions
${JSON.stringify(this.extractedData.businessLogic.serviceDescriptions, null, 2)}

### Process Workflows
${JSON.stringify(this.extractedData.businessLogic.processWorkflows, null, 2)}

### Customer Journey Mapping
${JSON.stringify(this.extractedData.businessLogic.valuePropositions, null, 2)}

## Technical Architecture

### Component Structure Analysis
${JSON.stringify(this.extractedData.technicalArchitecture.componentStructure, null, 2)}

### Current vs Target Architecture
- **Current**: React + Vite + TypeScript
- **Target**: Next.js 15 + Turborepo monorepo
- **Migration Complexity**: Low to Medium
- **Key Benefits**: Better SEO, improved performance, enhanced scalability

## SEO & Marketing Assets

### Current SEO Performance
${JSON.stringify(this.extractedData.seoMarketingAssets, null, 2)}

### Content Optimization Opportunities
${this.extractedData.seoMarketingAssets.contentGaps.map(gap => `- ${gap}`).join('\n')}

## Internal Linking Structure

### Current Navigation
${JSON.stringify(this.extractedData.internalLinks.navigationStructure, null, 2)}

### Optimization Opportunities
${this.extractedData.internalLinks.missingLinks.map(link => `- ${link}`).join('\n')}

## Migration Planning

### Phase A: Foundation Setup
1. Create Turborepo structure with Next.js 15
2. Extract reusable components to shared packages
3. Implement new routing structure
4. Set up development environment

### Phase B: Content Migration
1. Migrate pages using extracted content
2. Implement new SEO optimizations
3. Set up Airtable integration
4. Create content management workflows

### Phase C: Enhancement & Optimization
1. Advanced SEO features
2. Performance optimizations
3. Analytics and tracking setup
4. A/B testing infrastructure

## Airtable Integration Schema

### Recommended Tables Structure
1. **Pages Table**: Meta information, routing, status
2. **Content Blocks Table**: Reusable content components
3. **SEO Data Table**: Keywords, meta descriptions, schema markup
4. **Media Assets Table**: Images, videos, documents with optimization data

---

*This analysis was generated for optimal processing by Claude Opus 4 and other advanced reasoning LLMs.*
`;
  }

  generateHTMLContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HowAIConnects - Visual Content Reference</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .component-boundary { border: 2px dashed #007acc; margin: 20px 0; padding: 15px; }
        .page-section { border-left: 4px solid #28a745; padding-left: 20px; margin: 30px 0; }
        .business-logic { background-color: #f8f9fa; padding: 20px; border-radius: 8px; }
        .technical-note { background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .seo-element { background-color: #d1ecf1; padding: 10px; border-radius: 5px; margin: 5px 0; }
        pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>HowAIConnects - Visual Content Structure Reference</h1>
    
    <div class="page-section">
        <h2>Component Hierarchy Visualization</h2>
        ${this.generateComponentVisualization()}
    </div>
    
    <div class="page-section">
        <h2>Business Logic Structure</h2>
        <div class="business-logic">
            ${this.generateBusinessLogicHTML()}
        </div>
    </div>
    
    <div class="page-section">
        <h2>Technical Architecture</h2>
        <div class="technical-note">
            ${this.generateTechnicalArchitectureHTML()}
        </div>
    </div>
    
    <div class="page-section">
        <h2>SEO Elements Mapping</h2>
        ${this.generateSEOElementsHTML()}
    </div>
    
    <div class="page-section">
        <h2>Migration Planning Visualization</h2>
        ${this.generateMigrationPlanHTML()}
    </div>
</body>
</html>`;
  }

  generateComponentVisualization() {
    return `
        <div class="component-boundary">
            <h3>SalesDeckHero Component</h3>
            <p><strong>Purpose:</strong> Primary conversion element</p>
            <p><strong>Dependencies:</strong> HeroBackground, HeroContent, DivisionCarousel</p>
            <p><strong>Migration Complexity:</strong> Low</p>
        </div>
        <div class="component-boundary">
            <h3>DeckSection Component</h3>
            <p><strong>Purpose:</strong> Service presentation</p>
            <p><strong>Dependencies:</strong> BenefitsSection, FeaturesList, CallToAction</p>
            <p><strong>Reusability Score:</strong> 10/10</p>
        </div>
    `;
  }

  generateBusinessLogicHTML() {
    return `
        <h4>Service Value Propositions</h4>
        <ul>
            <li><strong>AI Automation:</strong> Save hundreds of thousands in operational costs</li>
            <li><strong>Done-for-You Agency:</strong> Launch AI agency without startup headaches</li>
            <li><strong>Web App Development:</strong> Convert business challenges into digital solutions</li>
        </ul>
        
        <h4>Customer Journey</h4>
        <ol>
            <li>Awareness (Hero/Landing)</li>
            <li>Interest (Services/Features)</li>
            <li>Consideration (Case Studies/Benefits)</li>
            <li>Intent (Assessment/Consultation)</li>
            <li>Evaluation (Presentation/Demo)</li>
            <li>Purchase (Contact/Booking)</li>
            <li>Retention (Support/Education)</li>
        </ol>
    `;
  }

  generateTechnicalArchitectureHTML() {
    return `
        <h4>Current Architecture</h4>
        <p><strong>Framework:</strong> React + Vite + TypeScript</p>
        <p><strong>Routing:</strong> React Router v6</p>
        <p><strong>State Management:</strong> React hooks + local state</p>
        
        <h4>Target Architecture</h4>
        <p><strong>Framework:</strong> Next.js 15 + Turborepo</p>
        <p><strong>Routing:</strong> App Router with server components</p>
        <p><strong>State Management:</strong> Zustand + React Query</p>
    `;
  }

  generateSEOElementsHTML() {
    return `
        <div class="seo-element">
            <strong>Primary Keywords:</strong> AI automation, small business AI, AI consulting
        </div>
        <div class="seo-element">
            <strong>Content Gaps:</strong> Industry-specific case studies, ROI calculators, implementation guides
        </div>
        <div class="seo-element">
            <strong>Internal Linking Opportunities:</strong> Service cross-promotion, educational pathways, conversion optimization
        </div>
    `;
  }

  generateMigrationPlanHTML() {
    return `
        <h4>Phase A: Foundation Setup (Weeks 3-4)</h4>
        <ul>
            <li>Create Turborepo structure with Next.js 15</li>
            <li>Extract reusable components to shared packages</li>
            <li>Implement new routing structure</li>
        </ul>
        
        <h4>Phase B: Content Migration (Weeks 5-8)</h4>
        <ul>
            <li>Migrate pages using extracted content</li>
            <li>Implement new SEO optimizations</li>
            <li>Set up Airtable integration</li>
        </ul>
        
        <h4>Phase C: Enhancement & Optimization (Weeks 9-12)</h4>
        <ul>
            <li>Advanced SEO features</li>
            <li>Performance optimizations</li>
            <li>A/B testing infrastructure</li>
        </ul>
    `;
  }
}

// Main execution function
async function main() {
  const extractor = new ContentExtractor();
  
  try {
    const extractedData = await extractor.extractAll();
    
    // Generate all three export formats
    const jsonPath = extractor.exportJSON();
    const markdownPath = extractor.exportMarkdown();
    const htmlPath = extractor.exportHTML();
    
    console.log('\n🎉 All export formats generated successfully!');
    console.log(`📊 JSON: ${jsonPath}`);
    console.log(`📝 Markdown: ${markdownPath}`);
    console.log(`🌐 HTML: ${htmlPath}`);
    
    // Generate Airtable schema
    generateAirtableSchema(extractedData);
    
    // Generate migration checklist
    generateMigrationChecklist();
    
    return {
      jsonPath,
      markdownPath,
      htmlPath,
      extractedData
    };
    
  } catch (error) {
    console.error('❌ Error during content extraction:', error.message);
    throw error;
  }
}

// Generate Airtable schema for content management
function generateAirtableSchema(extractedData) {
  const schema = {
    tables: {
      pages: {
        fields: [
          { name: 'Page Title', type: 'Single line text', primary: true },
          { name: 'URL Path', type: 'Single line text' },
          { name: 'Meta Description', type: 'Long text' },
          { name: 'Primary Keywords', type: 'Multiple select' },
          { name: 'Content Status', type: 'Single select', options: ['Draft', 'Review', 'Published', 'Archived'] },
          { name: 'Business Purpose', type: 'Single select', options: ['Conversion', 'Education', 'Trust Building', 'SEO'] },
          { name: 'Last Updated', type: 'Date' },
          { name: 'Performance Score', type: 'Number' }
        ]
      },
      contentBlocks: {
        fields: [
          { name: 'Block Name', type: 'Single line text', primary: true },
          { name: 'Block Type', type: 'Single select', options: ['Hero', 'Features', 'Benefits', 'CTA', 'Testimonial'] },
          { name: 'Content', type: 'Long text' },
          { name: 'Used On Pages', type: 'Link to another record', linkedTable: 'Pages' },
          { name: 'A/B Test Status', type: 'Single select', options: ['Control', 'Variant A', 'Variant B', 'Winner'] },
          { name: 'Conversion Rate', type: 'Percent' }
        ]
      },
      seoData: {
        fields: [
          { name: 'Page', type: 'Link to another record', linkedTable: 'Pages' },
          { name: 'Target Keywords', type: 'Multiple select' },
          { name: 'Meta Title', type: 'Single line text' },
          { name: 'Meta Description', type: 'Long text' },
          { name: 'Schema Markup', type: 'Long text' },
          { name: 'Search Volume', type: 'Number' },
          { name: 'Difficulty Score', type: 'Number' },
          { name: 'Current Ranking', type: 'Number' }
        ]
      },
      mediaAssets: {
        fields: [
          { name: 'Asset Name', type: 'Single line text', primary: true },
          { name: 'File', type: 'Attachment' },
          { name: 'Alt Text', type: 'Single line text' },
          { name: 'Usage Context', type: 'Multiple select' },
          { name: 'Optimization Status', type: 'Single select', options: ['Optimized', 'Needs WebP', 'Needs Compression', 'Needs Alt Text'] },
          { name: 'SEO Value', type: 'Single select', options: ['High', 'Medium', 'Low'] },
          { name: 'Used On Pages', type: 'Link to another record', linkedTable: 'Pages' }
        ]
      }
    },
    workflows: {
      contentCreation: [
        'Content ideation in Airtable',
        'Draft creation with AI assistance',
        'SEO optimization using keyword data',
        'A/B testing setup',
        'Performance monitoring',
        'Iterative improvement'
      ],
      seoOptimization: [
        'Keyword research and planning',
        'Content gap analysis',
        'Meta data optimization',
        'Internal linking strategy',
        'Performance tracking',
        'Continuous improvement'
      ]
    }
  };
  
  const schemaPath = path.join(__dirname, '..', '..', 'airtable-schema.json');
  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
  console.log(`📋 Airtable schema saved to ${schemaPath}`);
}

// Generate detailed migration checklist
function generateMigrationChecklist() {
  const checklist = {
    phase1_contentExtraction: {
      title: 'Week 1-2: Content Extraction & Analysis',
      tasks: [
        { task: 'Run comprehensive content extraction', status: 'pending', priority: 'high' },
        { task: 'Analyze extracted data with Claude Opus 4', status: 'pending', priority: 'high' },
        { task: 'Identify content gaps and optimization opportunities', status: 'pending', priority: 'medium' },
        { task: 'Create content improvement roadmap', status: 'pending', priority: 'medium' },
        { task: 'Design Airtable content management schema', status: 'pending', priority: 'high' }
      ]
    },
    phase2_foundation: {
      title: 'Week 3-4: Foundation Setup',
      tasks: [
        { task: 'Initialize Turborepo with Next.js 15', status: 'pending', priority: 'high' },
        { task: 'Create monorepo structure (apps/packages)', status: 'pending', priority: 'high' },
        { task: 'Set up shared UI component library', status: 'pending', priority: 'high' },
        { task: 'Configure TypeScript and build tools', status: 'pending', priority: 'medium' },
        { task: 'Implement new App Router structure', status: 'pending', priority: 'high' },
        { task: 'Set up development environment', status: 'pending', priority: 'medium' }
      ]
    },
    phase3_migration: {
      title: 'Week 5-8: Core Migration',
      tasks: [
        { task: 'Migrate reusable components to shared packages', status: 'pending', priority: 'high' },
        { task: 'Convert pages to Next.js App Router format', status: 'pending', priority: 'high' },
        { task: 'Implement new SEO optimizations', status: 'pending', priority: 'high' },
        { task: 'Set up Airtable integration', status: 'pending', priority: 'medium' },
        { task: 'Create content management workflows', status: 'pending', priority: 'medium' },
        { task: 'Implement improved internal linking', status: 'pending', priority: 'medium' }
      ]
    },
    phase4_optimization: {
      title: 'Week 9-12: Enhancement & Optimization',
      tasks: [
        { task: 'Implement advanced SEO features (structured data, sitemap)', status: 'pending', priority: 'high' },
        { task: 'Set up performance monitoring and optimization', status: 'pending', priority: 'medium' },
        { task: 'Implement analytics and tracking', status: 'pending', priority: 'medium' },
        { task: 'Create A/B testing infrastructure', status: 'pending', priority: 'low' },
        { task: 'Content strategy automation setup', status: 'pending', priority: 'low' },
        { task: 'Final testing and refinement', status: 'pending', priority: 'high' }
      ]
    }
  };
  
  const checklistPath = path.join(__dirname, '..', '..', 'migration-checklist.json');
  fs.writeFileSync(checklistPath, JSON.stringify(checklist, null, 2));
  console.log(`✅ Migration checklist saved to ${checklistPath}`);
}

// Export for use in other scripts
module.exports = {
  ContentExtractor,
  main,
  generateAirtableSchema,
  generateMigrationChecklist
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
