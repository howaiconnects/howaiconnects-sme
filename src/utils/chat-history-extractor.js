
// Chat History Extractor
// Extracts and formats Lovable project chat history into multiple formats

const fs = require('fs');
const path = require('path');

class ChatHistoryExtractor {
  constructor() {
    this.chatHistory = [];
    this.projectName = 'HowAIConnects-Lovable-Project';
    this.exportTimestamp = new Date().toISOString();
  }

  // Extract chat history from Lovable project
  extractChatHistory() {
    console.log('🔍 Extracting chat history from Lovable project...');
    
    // This simulates extracting chat history - in a real implementation,
    // this would interface with Lovable's internal chat storage
    this.chatHistory = this.getMockChatHistory();
    
    console.log(`✅ Extracted ${this.chatHistory.length} chat messages`);
    return this.chatHistory;
  }

  // Mock chat history for demonstration (replace with actual extraction logic)
  getMockChatHistory() {
    return [
      {
        id: 1,
        timestamp: '2025-01-06T10:00:00Z',
        type: 'user',
        content: 'can we create a plan for creating all 3 formats: Structured JSON Export, Markdown Export, HTML Export...',
        codeChanges: []
      },
      {
        id: 2,
        timestamp: '2025-01-06T10:05:00Z',
        type: 'ai',
        content: 'Created a comprehensive plan and new utilities for content extraction...',
        codeChanges: [
          { action: 'created', file: 'src/utils/content-extractor.js' },
          { action: 'created', file: 'src/utils/migration-planner.js' },
          { action: 'edited', file: 'src/utils/export-website.js' }
        ]
      },
      {
        id: 3,
        timestamp: '2025-01-06T10:10:00Z',
        type: 'user',
        content: 'yes please'
      },
      {
        id: 4,
        timestamp: '2025-01-06T10:15:00Z',
        type: 'ai',
        content: 'Running the comprehensive analysis to generate all export files...',
        codeChanges: [
          { action: 'edited', file: 'src/utils/export-website.js' },
          { action: 'created', file: 'run-analysis.js' }
        ]
      }
    ];
  }

  // Export to JSON format
  exportJSON() {
    const jsonData = {
      project: {
        name: this.projectName,
        exportTimestamp: this.exportTimestamp,
        totalMessages: this.chatHistory.length
      },
      conversations: this.chatHistory.map(msg => ({
        id: msg.id,
        timestamp: msg.timestamp,
        type: msg.type,
        content: msg.content,
        codeChanges: msg.codeChanges || [],
        wordCount: msg.content.split(' ').length
      })),
      summary: {
        userMessages: this.chatHistory.filter(msg => msg.type === 'user').length,
        aiMessages: this.chatHistory.filter(msg => msg.type === 'ai').length,
        totalCodeChanges: this.chatHistory.reduce((acc, msg) => acc + (msg.codeChanges?.length || 0), 0)
      }
    };

    const jsonPath = path.join(__dirname, '..', '..', 'chat-history.json');
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
    
    console.log(`📄 JSON chat history exported to ${jsonPath}`);
    return jsonPath;
  }

  // Export to Markdown format
  exportMarkdown() {
    let markdown = `# ${this.projectName} - Chat History\n\n`;
    markdown += `**Export Date:** ${this.exportTimestamp}\n`;
    markdown += `**Total Messages:** ${this.chatHistory.length}\n\n`;
    
    markdown += `## Conversation Summary\n\n`;
    const userMsgCount = this.chatHistory.filter(msg => msg.type === 'user').length;
    const aiMsgCount = this.chatHistory.filter(msg => msg.type === 'ai').length;
    const totalCodeChanges = this.chatHistory.reduce((acc, msg) => acc + (msg.codeChanges?.length || 0), 0);
    
    markdown += `- **User Messages:** ${userMsgCount}\n`;
    markdown += `- **AI Messages:** ${aiMsgCount}\n`;
    markdown += `- **Total Code Changes:** ${totalCodeChanges}\n\n`;
    
    markdown += `## Full Conversation\n\n`;
    
    this.chatHistory.forEach((msg, index) => {
      const timestamp = new Date(msg.timestamp).toLocaleString();
      const speaker = msg.type === 'user' ? '👤 **User**' : '🤖 **AI Assistant**';
      
      markdown += `### Message ${index + 1} - ${speaker}\n`;
      markdown += `*${timestamp}*\n\n`;
      markdown += `${msg.content}\n\n`;
      
      if (msg.codeChanges && msg.codeChanges.length > 0) {
        markdown += `**Code Changes:**\n`;
        msg.codeChanges.forEach(change => {
          markdown += `- ${change.action}: \`${change.file}\`\n`;
        });
        markdown += `\n`;
      }
      
      markdown += `---\n\n`;
    });

    const markdownPath = path.join(__dirname, '..', '..', 'chat-history.md');
    fs.writeFileSync(markdownPath, markdown);
    
    console.log(`📝 Markdown chat history exported to ${markdownPath}`);
    return markdownPath;
  }

  // Export to XML format
  exportXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += `<chatHistory>\n`;
    xml += `  <project>\n`;
    xml += `    <name>${this.projectName}</name>\n`;
    xml += `    <exportTimestamp>${this.exportTimestamp}</exportTimestamp>\n`;
    xml += `    <totalMessages>${this.chatHistory.length}</totalMessages>\n`;
    xml += `  </project>\n`;
    
    xml += `  <conversations>\n`;
    
    this.chatHistory.forEach(msg => {
      xml += `    <message id="${msg.id}">\n`;
      xml += `      <timestamp>${msg.timestamp}</timestamp>\n`;
      xml += `      <type>${msg.type}</type>\n`;
      xml += `      <content><![CDATA[${msg.content}]]></content>\n`;
      
      if (msg.codeChanges && msg.codeChanges.length > 0) {
        xml += `      <codeChanges>\n`;
        msg.codeChanges.forEach(change => {
          xml += `        <change action="${change.action}" file="${change.file}"/>\n`;
        });
        xml += `      </codeChanges>\n`;
      }
      
      xml += `    </message>\n`;
    });
    
    xml += `  </conversations>\n`;
    xml += `</chatHistory>`;

    const xmlPath = path.join(__dirname, '..', '..', 'chat-history.xml');
    fs.writeFileSync(xmlPath, xml);
    
    console.log(`📋 XML chat history exported to ${xmlPath}`);
    return xmlPath;
  }

  // Export all formats
  exportAll() {
    console.log('📚 Exporting chat history in all formats...');
    
    this.extractChatHistory();
    
    const exports = {
      json: this.exportJSON(),
      markdown: this.exportMarkdown(),
      xml: this.exportXML()
    };
    
    console.log('\n✅ Chat history export completed!');
    console.log(`📄 JSON: ${exports.json}`);
    console.log(`📝 Markdown: ${exports.markdown}`);
    console.log(`📋 XML: ${exports.xml}`);
    
    return exports;
  }
}

// Export the class and utility functions
module.exports = {
  ChatHistoryExtractor,
  extractChatHistory: () => {
    const extractor = new ChatHistoryExtractor();
    return extractor.exportAll();
  }
};

// Run if called directly
if (require.main === module) {
  const extractor = new ChatHistoryExtractor();
  extractor.exportAll();
}
