
// Run comprehensive analysis script
// Last updated: 2025-01-06 - Remote work verification
const { performComprehensiveAnalysis } = require('./src/utils/export-website.js');

console.log('🚀 Starting comprehensive HowAIConnects website analysis...');
console.log('This will generate all export formats for LLM analysis and migration planning.\n');

performComprehensiveAnalysis('https://howaiconnects.com')
  .then((results) => {
    console.log('\n✅ Analysis complete! Generated files:');
    console.log('- Structured JSON for programmatic analysis');
    console.log('- LLM-optimized Markdown for Claude Opus 4');
    console.log('- Visual HTML reference with component boundaries');
    console.log('- Complete Next.js 15 + Turborepo migration plan');
    console.log('- Airtable schema for content management');
    console.log('- Executive summary and implementation roadmap');
    console.log('\nAll files are ready for advanced LLM analysis and migration planning!');
  })
  .catch((error) => {
    console.error('❌ Analysis failed:', error.message);
    console.log('Files may have been partially generated. Check the project root directory.');
  });
