# Website Export Instructions

## Using HTTrack (Recommended)

HTTrack is a free utility that allows you to download a complete website for offline viewing.

### Installation
- **Windows**: Download and install from [HTTrack Website](https://www.httrack.com/page/2/)
- **Mac**: Install via Homebrew with `brew install httrack`
- **Linux**: Use `sudo apt-get install httrack` or `sudo yum install httrack`

### Usage
1. Run the following command in your terminal or command prompt:
   ```
   httrack "https://your-website-url.com" -O "./website-backup" -r3 -%v -%p -s0 -%H
   ```
2. Replace "https://your-website-url.com" with your actual website URL
3. The website will be downloaded to the "website-backup" folder

### Automation Script
We've provided a Node.js script to help automate this process:
```
node src/utils/export-website.js https://your-website-url.com
```

## Alternative Methods

### Using wget (Linux/Mac)
```
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://your-website-url.com
```

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
```
node src/utils/export-website.js --extract-content https://your-website-url.com
```

This will create a file called website-content.json in the root directory.

For more detailed instructions, refer to the `src/utils/httrack-export.js` file.
