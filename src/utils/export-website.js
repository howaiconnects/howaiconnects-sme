
// Export Website Script
// This script helps export the website using HTTrack or provides instructions for alternatives

const { runHTTrack } = require('./httrack-export');
const fs = require('fs');
const path = require('path');

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

For more detailed instructions, refer to the \`src/utils/httrack-export.js\` file.
`;

  fs.writeFileSync(readmePath, instructions);
  console.log(`Export instructions written to ${readmePath}`);
}

// Main function
function main() {
  // Create export instructions
  createExportInstructions();
  
  // If a URL was provided, run HTTrack
  const url = process.argv[2];
  if (url) {
    try {
      runHTTrack(url);
    } catch (error) {
      console.error('Error running HTTrack:', error.message);
      console.log('Please follow the manual instructions in WEBSITE_EXPORT_INSTRUCTIONS.md');
    }
  } else {
    console.log('No URL provided. Please use the following format:');
    console.log('node src/utils/export-website.js https://your-website-url.com');
    console.log('Alternatively, follow the manual instructions in WEBSITE_EXPORT_INSTRUCTIONS.md');
  }
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main();
}
