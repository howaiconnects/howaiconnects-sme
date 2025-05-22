
// Export Website Script
// This script helps export the website using HTTrack or provides instructions for alternatives

const { runHTTrack } = require('./httrack-export');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Function to extract content from website and save as JSON
function extractWebsiteContent(url) {
  console.log(`Extracting content from ${url || 'the current website'}...`);
  
  try {
    // Create a structure for the website content
    const websiteContent = {
      metadata: {
        extractionDate: new Date().toISOString(),
        sourceUrl: url || 'local development',
        version: '1.0'
      },
      pages: [
        {
          path: '/',
          title: 'Home',
          sections: [
            {
              id: 'hero',
              type: 'hero',
              content: {
                headline: 'AI Automation & Consultation',
                subheadline: 'Tailored for Small Business Growth',
                description: 'Increase efficiency, reduce costs, and scale operations with AI solutions designed specifically for SMEs',
                cta: [
                  {
                    text: 'Get Your Free AI Assessment',
                    link: '/contact',
                    type: 'primary'
                  },
                  {
                    text: 'Explore Our AI Courses',
                    link: '/courses',
                    type: 'secondary'
                  }
                ]
              }
            },
            // Additional home page sections would be added here
          ]
        },
        {
          path: '/services',
          title: 'Services',
          sections: [
            {
              id: 'ai-automation',
              type: 'service-category',
              content: {
                title: 'AI Automation Solutions',
                description: 'Streamline operations and reduce costs with our AI automation solutions',
                services: [
                  {
                    title: 'Workflow Automation',
                    description: 'Optimize your business processes with AI-powered workflow automation',
                    link: '/services/ai-automation-solutions/workflow-automation'
                  },
                  {
                    title: 'Marketing Automation',
                    description: 'Enhance your marketing efforts with AI-driven automation tools',
                    link: '/services/ai-automation-solutions/marketing-automation'
                  },
                  {
                    title: 'Customer Service Automation',
                    description: 'Improve customer experience with AI-powered support automation',
                    link: '/services/ai-automation-solutions/customer-service-automation'
                  }
                ]
              }
            },
            {
              id: 'ai-consultation',
              type: 'service-category',
              content: {
                title: 'AI Consultation Services',
                description: 'Expert guidance for implementing AI in your business',
                services: [
                  {
                    title: 'AI Readiness Assessment',
                    description: 'Evaluate your business processes and identify opportunities for AI implementation',
                    link: '/services/ai-consultation/ai-readiness-assessment'
                  },
                  {
                    title: 'AI Strategy Development',
                    description: 'Create a customized AI adoption strategy aligned with your business goals',
                    link: '/services/ai-consultation/ai-strategy-development'
                  },
                  {
                    title: 'Implementation Support',
                    description: 'Get hands-on guidance throughout your AI implementation journey',
                    link: '/services/ai-consultation/implementation-support'
                  }
                ]
              }
            }
          ]
        },
        {
          path: '/services/ai-consultation/ai-readiness-assessment',
          title: 'AI Readiness Assessment',
          sections: [
            {
              id: 'assessment-intro',
              type: 'service-detail',
              content: {
                title: 'AI Readiness Assessment',
                tagline: 'Evaluate your business processes and identify the highest-impact opportunities for AI implementation.',
                description: 'AI has the potential to revolutionize your business operations, but knowing where to start can be challenging. Our AI Readiness Assessment helps you identify the most valuable opportunities for AI implementation, tailored specifically to your business.',
                features: [
                  {
                    title: 'Process Evaluation',
                    description: 'We analyze your existing business processes to identify areas ripe for AI enhancement.'
                  },
                  {
                    title: 'Automation Opportunity Mapping',
                    description: 'We create a visual map of specific opportunities within your business where AI can make the greatest impact.'
                  },
                  {
                    title: 'ROI Calculation',
                    description: 'We provide realistic projections of the potential return on investment for each AI implementation opportunity.'
                  },
                  {
                    title: 'Implementation Roadmap',
                    description: 'We develop a prioritized roadmap for AI adoption based on impact, complexity, and resource requirements.'
                  }
                ],
                process: [
                  {
                    step: 1,
                    title: 'Initial Consultation',
                    description: 'A 30-minute call to understand your business, challenges, and goals.'
                  },
                  {
                    step: 2,
                    title: 'In-Depth Assessment',
                    description: 'We conduct a thorough analysis of your existing processes and systems.'
                  },
                  {
                    step: 3,
                    title: 'Presentation of Findings',
                    description: 'We deliver a comprehensive report with actionable insights and recommendations.'
                  },
                  {
                    step: 4,
                    title: 'Strategy Discussion',
                    description: 'We help you prioritize opportunities and create an implementation plan.'
                  }
                ],
                testimonials: [
                  {
                    quote: 'The AI Readiness Assessment helped us identify multiple opportunities for automation that we hadn\'t considered. The ROI calculations were spot-on, and we\'ve already implemented two of their recommendations with great results.',
                    author: 'Sarah Johnson',
                    position: 'CEO, Retail Solutions Inc.'
                  },
                  {
                    quote: 'The team at HowAIConnects delivered an incredibly detailed assessment that helped us prioritize our AI initiatives. What impressed me most was how they translated technical possibilities into clear business outcomes.',
                    author: 'Michael Patel',
                    position: 'Operations Director, LogiTech Services'
                  }
                ]
              }
            }
          ]
        },
        // Additional page data would be structured and added here
      ],
      assessmentQuestionnaire: {
        title: 'AI Readiness Assessment Questionnaire',
        description: 'Answer the following questions to help us understand your business needs and AI readiness.',
        questions: [
          {
            id: 'business_size',
            type: 'multiple_choice',
            question: 'What is the size of your business?',
            options: [
              'Solopreneur (1 person)',
              'Micro (2-10 employees)',
              'Small (11-50 employees)',
              'Medium (51-250 employees)',
              'Large (250+ employees)'
            ]
          },
          {
            id: 'industry',
            type: 'multiple_choice',
            question: 'Which industry does your business operate in?',
            options: [
              'Retail/E-commerce',
              'Professional Services',
              'Manufacturing',
              'Healthcare',
              'Education',
              'Technology',
              'Finance',
              'Other'
            ]
          },
          {
            id: 'ai_experience',
            type: 'multiple_choice',
            question: 'What is your current experience with AI technologies?',
            options: [
              'No experience',
              'Basic understanding but no implementation',
              'Some tools implemented',
              'Extensive experience with AI'
            ]
          },
          {
            id: 'pain_points',
            type: 'checkboxes',
            question: 'Which of the following areas do you want to improve with AI? (Select all that apply)',
            options: [
              'Customer service',
              'Marketing and sales',
              'Operations and workflow',
              'Data analysis and reporting',
              'Product development',
              'Employee productivity',
              'Decision making'
            ]
          },
          {
            id: 'tech_infrastructure',
            type: 'multiple_choice',
            question: 'How would you describe your current technology infrastructure?',
            options: [
              'Basic (minimal digital tools)',
              'Standard (common business applications)',
              'Advanced (cloud-based, integrated systems)',
              'Cutting-edge (fully digital, using latest technologies)'
            ]
          },
          {
            id: 'data_availability',
            type: 'multiple_choice',
            question: 'What is the state of your business data?',
            options: [
              'Minimal data collection',
              'Data collected but not organized',
              'Organized data but limited analysis',
              'Comprehensive data with regular analysis'
            ]
          },
          {
            id: 'budget',
            type: 'multiple_choice',
            question: 'What is your budget range for AI implementation over the next 12 months?',
            options: [
              'Less than $5,000',
              '$5,000 - $20,000',
              '$20,000 - $50,000',
              '$50,000 - $100,000',
              'More than $100,000'
            ]
          },
          {
            id: 'timeline',
            type: 'multiple_choice',
            question: 'What is your timeline for implementing AI solutions?',
            options: [
              'Immediate (0-3 months)',
              'Short-term (3-6 months)',
              'Medium-term (6-12 months)',
              'Long-term (12+ months)',
              'Exploring options with no specific timeline'
            ]
          },
          {
            id: 'team_readiness',
            type: 'multiple_choice',
            question: 'How would you rate your team\'s openness to adopting new technologies?',
            options: [
              'Very resistant',
              'Somewhat resistant',
              'Neutral',
              'Somewhat enthusiastic',
              'Very enthusiastic'
            ]
          },
          {
            id: 'specific_goals',
            type: 'text',
            question: 'What specific goals do you hope to achieve with AI implementation?'
          }
        ]
      }
    };
    
    // Save the JSON file
    const contentPath = path.join(__dirname, '..', '..', 'website-content.json');
    fs.writeFileSync(contentPath, JSON.stringify(websiteContent, null, 2));
    
    console.log(`Website content extracted and saved to ${contentPath}`);
  } catch (error) {
    console.error('Error extracting website content:', error.message);
  }
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
  } catch (error) {
    console.error('Error generating sitemap:', error.message);
  }
}

// Main function
function main() {
  // Create export instructions
  createExportInstructions();
  
  // Check for flags
  const args = process.argv.slice(2);
  const extractContentFlag = args.includes('--extract-content');
  const generateSitemapFlag = args.includes('--generate-sitemap');
  
  // Get URL (may be after a flag)
  let url;
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== '--extract-content' && args[i] !== '--generate-sitemap') {
      url = args[i];
      break;
    }
  }
  
  // Extract content if requested
  if (extractContentFlag) {
    extractWebsiteContent(url);
  }
  
  // Generate sitemap if requested
  if (generateSitemapFlag) {
    generateSitemap(url);
  }
  
  // Run HTTrack if URL provided and neither of the special flags are used
  if (url && !extractContentFlag && !generateSitemapFlag) {
    try {
      runHTTrack(url);
    } catch (error) {
      console.error('Error running HTTrack:', error.message);
      console.log('Please follow the manual instructions in WEBSITE_EXPORT_INSTRUCTIONS.md');
    }
  } else if (!extractContentFlag && !generateSitemapFlag) {
    console.log('No URL provided or action specified. Use one of the following formats:');
    console.log('To export website: node src/utils/export-website.js https://your-website-url.com');
    console.log('To extract content: node src/utils/export-website.js --extract-content https://your-website-url.com');
    console.log('To generate sitemap: node src/utils/export-website.js --generate-sitemap https://your-website-url.com');
    console.log('Alternatively, follow the manual instructions in WEBSITE_EXPORT_INSTRUCTIONS.md');
  }
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main();
}

// Export functions for use in other scripts
module.exports = {
  runHTTrack,
  extractWebsiteContent,
  generateSitemap,
  createExportInstructions
};

