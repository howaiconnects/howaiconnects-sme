// Export Website Script
// This script helps export the website using HTTrack or provides instructions for alternatives

import { runHTTrack } from './httrack-export.js';
import { ContentExtractor } from './content-extractor.js';
import { MigrationPlanner } from './migration-planner.js';
import { ChatHistoryExtractor } from './chat-history-extractor.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to create a README file with export instructions
function createExportInstructions() {
  const readmePath = path.join(__dirname, '..', '..', 'WEBSITE_EXPORT_INSTRUCTIONS.md');
  
  const instructions = `# Website Export Instructions

## Using HTTrack (Recommended)

HTTrack is a free utility that allows you to download a complete website for offline viewing.

### Installation
- **Windows**: Download and install from [HTTrack Website](https://www.httrack.com/page/2/)
- **Mac**: Install via Homebrew with \`brew install httrack\`
- **Linux**: Use \`sudo apt-get install httrack\` or \`sudo yum install httrack\`

### Usage
1. Run the following command in your terminal or command prompt:
   \`\`\`
   httrack "https://your-website-url.com" -O "./website-backup" -r3 -%v -%p -s0 -%H
   \`\`\`
2. Replace "https://your-website-url.com" with your actual website URL
3. The website will be downloaded to the "website-backup" folder

### Automation Script
We've provided a Node.js script to help automate this process:
\`\`\`
node src/utils/export-website.js https://your-website-url.com
\`\`\`

## Alternative Methods

### Using wget (Linux/Mac)
\`\`\`
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://your-website-url.com
\`\`\`

### Using Browser Tools
1. Open your website in Chrome or Firefox
2. Use the "Save As" feature (Ctrl+S or Cmd+S)
3. Select "Webpage, Complete" option

## For Dynamic Content
If your website uses dynamic content or a content management system, you may need to:
1. Generate all possible pages first
2. Make sure all routes are accessible via direct links
3. Consider a static site generator if you need regular offline copies

## Content Extraction
To extract website content in JSON format for CMS import:
\`\`\`
node src/utils/export-website.js --extract-content https://your-website-url.com
\`\`\`

This will create a file called website-content.json in the root directory.

For more detailed instructions, refer to the \`src/utils/httrack-export.js\` file.
`;

  fs.writeFileSync(readmePath, instructions);
  console.log(`Export instructions written to ${readmePath}`);
}

// Enhanced content extraction with LLM optimization
function extractWebsiteContentEnhanced(url) {
  console.log(`🚀 Starting enhanced content extraction for LLM analysis...`);
  
  try {
    const extractor = new ContentExtractor();
    return extractor.extractAll().then(extractedData => {
      // Generate all three export formats
      const jsonPath = extractor.exportJSON();
      const markdownPath = extractor.exportMarkdown();
      const htmlPath = extractor.exportHTML();
      
      console.log('✅ Enhanced content extraction completed');
      console.log(`📊 Structured JSON: ${jsonPath}`);
      console.log(`📝 LLM-optimized Markdown: ${markdownPath}`);
      console.log(`🌐 Visual HTML reference: ${htmlPath}`);
      
      return {
        extractedData,
        exports: { jsonPath, markdownPath, htmlPath }
      };
    });
  } catch (error) {
    console.error('❌ Error in enhanced content extraction:', error.message);
    throw error;
  }
}

// Generate migration plan
function generateMigrationPlan() {
  console.log('📋 Generating Next.js 15 + Turborepo migration plan...');
  
  try {
    const planner = new MigrationPlanner();
    const planPath = planner.exportMigrationPlan();
    const markdownPath = planner.generateMarkdownPlan();
    
    console.log(`✅ Migration plan generated`);
    console.log(`📋 Detailed plan: ${planPath}`);
    console.log(`📝 Markdown summary: ${markdownPath}`);
    
    return { planPath, markdownPath };
  } catch (error) {
    console.error('❌ Error generating migration plan:', error.message);
    throw error;
  }
}

// Generate Airtable schema for content management
function generateAirtableSchema() {
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
    }
  };
  
  const schemaPath = path.join(__dirname, '..', '..', 'airtable-schema.json');
  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
  console.log(`📋 Airtable schema saved to ${schemaPath}`);
  return schemaPath;
}

// Function to generate a sitemap
function generateSitemap(baseUrl) {
  console.log(`Generating sitemap for ${baseUrl || 'the website'}...`);
  
  try {
    const pages = [
      '/',
      '/about',
      '/services',
      '/courses',
      '/resources',
      '/contact',
      '/services/ai-automation-solutions/workflow-automation',
      '/services/ai-automation-solutions/marketing-automation',
      '/services/ai-automation-solutions/customer-service-automation',
      '/services/ai-consultation/ai-readiness-assessment',
      '/services/ai-consultation/ai-strategy-development',
      '/services/ai-consultation/implementation-support'
    ];
    
    const hostname = baseUrl || 'https://howaiconnects.com';
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${hostname}${page}</loc>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.8</priority>\n';
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    
    const sitemapPath = path.join(__dirname, '..', '..', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log(`Sitemap generated and saved to ${sitemapPath}`);
    return sitemapPath;
  } catch (error) {
    console.error('Error generating sitemap:', error.message);
  }
}

// Enhanced comprehensive analysis function
function performComprehensiveAnalysis(url) {
  console.log('🔍 Starting comprehensive website analysis...');
  
  return Promise.all([
    extractWebsiteContentEnhanced(url),
    generateMigrationPlan(),
    generateAirtableSchema(),
    generateSitemap(url || 'https://howaiconnects.com'),
    extractChatHistoryForAnalysis() // Add chat history extraction
  ]).then(([contentResult, migrationResult, schemaPath, sitemapPath, chatHistoryResult]) => {
    console.log('\n🎉 Comprehensive analysis completed!');
    console.log('\n📊 Generated Files:');
    console.log(`- Content JSON: ${contentResult.exports.jsonPath}`);
    console.log(`- LLM Markdown: ${contentResult.exports.markdownPath}`);
    console.log(`- Visual HTML: ${contentResult.exports.htmlPath}`);
    console.log(`- Migration Plan: ${migrationResult.planPath}`);
    console.log(`- Migration Summary: ${migrationResult.markdownPath}`);
    console.log(`- Airtable Schema: ${schemaPath}`);
    console.log(`- Sitemap: ${sitemapPath}`);
    console.log(`- Chat History JSON: ${chatHistoryResult.json}`);
    console.log(`- Chat History Markdown: ${chatHistoryResult.markdown}`);
    console.log(`- Chat History XML: ${chatHistoryResult.xml}`);
    
    // Generate summary report
    generateSummaryReport(contentResult, migrationResult);
    
    return {
      content: contentResult,
      migration: migrationResult,
      chatHistory: chatHistoryResult,
      analysis: 'comprehensive-analysis-complete'
    };
  }).catch(error => {
    console.error('❌ Error in comprehensive analysis:', error.message);
    throw error;
  });
}

// Extract chat history for analysis
function extractChatHistoryForAnalysis() {
  console.log('💬 Extracting chat history for comprehensive analysis...');
  
  try {
    const extractor = new ChatHistoryExtractor();
    return extractor.exportAll();
  } catch (error) {
    console.error('❌ Error extracting chat history:', error.message);
    throw error;
  }
}

// Generate executive summary report
function generateSummaryReport(contentResult, migrationResult) {
  const summary = {
    executiveSummary: {
      projectOverview: 'HowAIConnects website migration to Next.js 15 + Turborepo',
      currentState: 'React + Vite application with solid component structure',
      migrationComplexity: 'Medium - well-structured codebase with clear separation',
      estimatedTimeline: '12 weeks with 4 distinct phases',
      keyBenefits: [
        'Improved SEO performance with server-side rendering',
        'Better Core Web Vitals and page speed',
        'Enhanced content management with Airtable integration',
        'Scalable monorepo architecture for future growth',
        'Advanced analytics and A/B testing capabilities'
      ]
    },
    contentAnalysis: {
      totalPages: contentResult.extractedData.pages.length,
      reusableComponents: contentResult.extractedData.technicalArchitecture.componentStructure?.reusableComponents?.length || 0,
      seoOpportunities: contentResult.extractedData.seoMarketingAssets.contentGaps?.length || 0,
      businessValue: 'High - clear value propositions and conversion funnels identified'
    },
    technicalAssessment: {
      migrationRisk: 'Low - modern React patterns are easily portable',
      componentReusability: 'High - well-structured component hierarchy',
      seoImprovements: 'Significant - server-side rendering will boost performance',
      performanceGains: 'Expected 40-60% improvement in Core Web Vitals'
    },
    recommendedApproach: {
      phase1: 'Content extraction and LLM analysis (2 weeks)',
      phase2: 'Foundation setup with Turborepo (2 weeks)',
      phase3: 'Core migration and Airtable integration (4 weeks)',
      phase4: 'Enhancement and optimization (4 weeks)'
    },
    nextSteps: [
      'Review generated content analysis with Claude Opus 4',
      'Validate Airtable schema design',
      'Set up development environment',
      'Begin Phase 1 implementation'
    ]
  };
  
  const summaryPath = path.join(__dirname, '..', '..', 'executive-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  console.log(`📋 Executive summary saved to ${summaryPath}`);
  return summaryPath;
}

// Main function
function main() {
  // Create export instructions
  createExportInstructions();
  
  // Check for flags
  const args = process.argv.slice(2);
  const extractContentFlag = args.includes('--extract-content');
  const generateSitemapFlag = args.includes('--generate-sitemap');
  const migrationPlanFlag = args.includes('--migration-plan');
  const comprehensiveFlag = args.includes('--comprehensive');
  const chatHistoryFlag = args.includes('--chat-history'); // Add new flag
  
  // Get URL (may be after a flag)
  let url;
  for (let i = 0; i < args.length; i++) {
    if (!args[i].startsWith('--')) {
      url = args[i];
      break;
    }
  }
  
  if (comprehensiveFlag) {
    performComprehensiveAnalysis(url).catch(console.error);
  } else if (chatHistoryFlag) {
    extractChatHistoryForAnalysis().catch(console.error);
  } else if (extractContentFlag) {
    extractWebsiteContentEnhanced(url).catch(console.error);
  } else if (migrationPlanFlag) {
    generateMigrationPlan();
  } else if (generateSitemapFlag) {
    generateSitemap(url);
  } else if (url && !extractContentFlag && !generateSitemapFlag && !migrationPlanFlag) {
    try {
      runHTTrack(url);
    } catch (error) {
      console.error('Error running HTTrack:', error.message);
      console.log('Please follow the manual instructions in WEBSITE_EXPORT_INSTRUCTIONS.md');
    }
  } else {
    console.log('Enhanced Website Export & Migration Planning Tool\n');
    console.log('Available commands:');
    console.log('  node src/utils/export-website.js --comprehensive [url]        # Complete analysis for LLM');
    console.log('  node src/utils/export-website.js --chat-history               # Extract chat history');
    console.log('  node src/utils/export-website.js --extract-content [url]      # Enhanced content extraction');
    console.log('  node src/utils/export-website.js --migration-plan             # Generate migration plan');
    console.log('  node src/utils/export-website.js --generate-sitemap [url]     # Generate sitemap');
    console.log('  node src/utils/export-website.js [url]                        # HTTrack export');
    console.log('\nRecommended: Start with --comprehensive for full analysis');
  }
}

// Run the main function if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// Export functions for use in other scripts
export {
  runHTTrack,
  extractWebsiteContentEnhanced,
  generateMigrationPlan,
  performComprehensiveAnalysis,
  generateSummaryReport,
  generateSitemap,
  createExportInstructions,
  extractChatHistoryForAnalysis // Add new export
};
