import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying HowAIConnects SME Boost Export Files...\n');

const exportFiles = [
  // Content Exports (3 formats)
  { name: 'content-export-structured.json', type: 'Structured JSON Export', purpose: 'Programmatic analysis with complete metadata' },
  { name: 'content-export-llm-optimized.md', type: 'LLM-Optimized Markdown', purpose: 'Claude Opus 4 analysis and processing' },
  { name: 'content-export-visual-reference.html', type: 'Visual HTML Reference', purpose: 'Component boundaries and visual structure' },
  
  // Migration Planning
  { name: 'migration-plan-detailed.json', type: 'Migration Plan JSON', purpose: 'Next.js 15 + Turborepo migration strategy' },
  { name: 'migration-plan.md', type: 'Migration Plan Markdown', purpose: 'Human-readable migration documentation' },
  
  // Supporting Files
  { name: 'airtable-schema.json', type: 'Airtable Schema', purpose: 'Content management system design' },
  { name: 'executive-summary.json', type: 'Executive Summary', purpose: 'High-level project overview' },
  { name: 'sitemap.xml', type: 'XML Sitemap', purpose: 'Website structure for SEO' },
  
  // Chat History (3 formats)
  { name: 'chat-history.json', type: 'Chat History JSON', purpose: 'Structured conversation data' },
  { name: 'chat-history.md', type: 'Chat History Markdown', purpose: 'Readable conversation flow' },
  { name: 'chat-history.xml', type: 'Chat History XML', purpose: 'XML format for data exchange' }
];

console.log('📊 Export Status:\n');

let allExportsSuccessful = true;
const exportSummary = [];

exportFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file.name);
  const exists = fs.existsSync(filePath);
  
  if (exists) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${file.name}`);
    console.log(`   Type: ${file.type}`);
    console.log(`   Purpose: ${file.purpose}`);
    console.log(`   Size: ${sizeKB} KB`);
    console.log(`   Modified: ${stats.mtime.toLocaleString()}\n`);
    
    exportSummary.push({
      file: file.name,
      status: 'success',
      size: `${sizeKB} KB`,
      modified: stats.mtime.toISOString()
    });
  } else {
    console.log(`❌ ${file.name} - NOT FOUND\n`);
    allExportsSuccessful = false;
    exportSummary.push({
      file: file.name,
      status: 'missing'
    });
  }
});

console.log('\n' + '='.repeat(60) + '\n');

if (allExportsSuccessful) {
  console.log('✅ ALL EXPORTS SUCCESSFUL! 🎉\n');
  console.log('📦 Your website content has been successfully exported in all 3 formats:');
  console.log('   1. JSON - For programmatic analysis and migration');
  console.log('   2. Markdown - Optimized for Claude Opus 4 and LLM processing');
  console.log('   3. HTML - With visual component boundaries marked\n');
  
  console.log('🚀 Next Steps:');
  console.log('   1. These files are ready for import into Replit.com or any AI agent builder');
  console.log('   2. Use content-export-llm-optimized.md for Claude Opus 4 analysis');
  console.log('   3. Follow migration-plan.md for Next.js 15 + Turborepo migration');
  console.log('   4. Import airtable-schema.json to set up your content management\n');
  
  console.log('📁 All export files are in your project root directory');
  console.log('   Path: ' + process.cwd());
} else {
  console.log('⚠️  Some exports are missing. Please run the export command again.');
}

// Save verification report
fs.writeFileSync('export-verification-report.json', JSON.stringify({
  timestamp: new Date().toISOString(),
  projectName: 'HowAIConnects SME Boost',
  exportStatus: allExportsSuccessful ? 'complete' : 'incomplete',
  files: exportSummary,
  nextSteps: [
    'Import files to Replit.com or AI agent builders',
    'Analyze with Claude Opus 4 using the markdown export',
    'Begin Next.js 15 migration using the migration plan',
    'Set up Airtable using the schema file'
  ]
}, null, 2));

console.log('\n📄 Verification report saved to: export-verification-report.json');
