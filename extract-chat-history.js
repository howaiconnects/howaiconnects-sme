
// Extract Chat History Script
// Quick utility to extract and format Lovable project chat history

const { extractChatHistory } = require('./src/utils/chat-history-extractor.js');

console.log('💬 Starting chat history extraction...');
console.log('This will export the entire conversation in multiple formats.\n');

extractChatHistory()
  .then((results) => {
    console.log('\n🎉 Chat history extraction complete!');
    console.log('Generated files for backup, documentation, and analysis:');
    console.log('- JSON format for programmatic analysis');
    console.log('- Markdown format for documentation');
    console.log('- XML format for structured data exchange');
    console.log('\nFiles are ready for archival or external analysis!');
  })
  .catch((error) => {
    console.error('❌ Chat history extraction failed:', error.message);
    console.log('Some files may have been partially generated. Check the project root directory.');
  });
