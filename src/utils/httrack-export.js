
// HTTrack Website Copier Script
// This script provides instructions for using HTTrack to create an offline copy of the website

/*
HTTrack Installation & Usage Instructions:

1. Installation:
   - Windows: Download and install from https://www.httrack.com/page/2/
   - Mac: Install via Homebrew with "brew install httrack"
   - Linux: Use "sudo apt-get install httrack" (Ubuntu/Debian) or "sudo yum install httrack" (Fedora/CentOS)

2. Basic Usage Command:
   httrack "https://example.howaiconnects.com" -O "./website-backup" -v

3. Advanced Command with Options:
   httrack "https://example.howaiconnects.com" -O "./website-backup" -%v -%p -s0 -%H

   Options Explained:
   - -O "./website-backup": Output directory
   - -%v: Verbose output
   - -%p: Display progress bar
   - -s0: Follow external links on the original site
   - -%H: Generate HTML index pages

4. For Complete Website Mirror with All Resources:
   httrack "https://example.howaiconnects.com" -O "./website-backup" -r3 -%v -%p -s0 -%H

   Additional Options:
   - -r3: Recursion depth (3 levels deep)

5. To Limit Bandwidth:
   httrack "https://example.howaiconnects.com" -O "./website-backup" -r3 -%v -%p -s0 -%H -c4

   Additional Options:
   - -c4: Limit to 4 connections

6. To Update an Existing Mirror:
   httrack --update

7. To Exclude Certain Files:
   httrack "https://example.howaiconnects.com" -O "./website-backup" -*.pdf -*.zip

Note: Replace "https://example.howaiconnects.com" with your actual domain once the site is deployed.
*/

// Node.js script to run HTTrack (requires HTTrack to be installed)
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create backup directory if it doesn't exist
const backupDir = path.join(__dirname, '..', '..', 'website-backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Function to run HTTrack
function runHTTrack(url) {
  if (!url) {
    console.error('Please provide a URL for the website to backup');
    console.log('Example: node httrack-export.js https://example.howaiconnects.com');
    process.exit(1);
  }
  
  const command = `httrack "${url}" -O "${backupDir}" -r3 -%v -%p -s0 -%H`;
  
  console.log(`Starting website backup of ${url}...`);
  console.log(`Files will be saved to: ${backupDir}`);
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    console.log('Website backup completed successfully!');
  });
}

// If this script is run directly
if (require.main === module) {
  const url = process.argv[2];
  runHTTrack(url);
}

module.exports = { runHTTrack };
