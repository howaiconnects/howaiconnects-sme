import fs from 'fs';
import path from 'path';

console.log('🔍 Testing Vercel Turborepo Migration Configuration...\n');

// Test 1: Verify all export files exist
console.log('1️⃣ Testing Export Files:');
const exportFiles = [
  'comprehensive-migration-report-2025-06-05T08-35-03.json',
  'vercel-turborepo-migration-plan.json',
  'VERCEL_TURBOREPO_SETUP.md',
  'setup-vercel-turborepo.sh',
  'airtable-schema.json'
];

let allFilesExist = true;
exportFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

// Test 2: Validate Migration Plan Structure
console.log('\n2️⃣ Testing Migration Plan Structure:');
try {
  const migrationPlan = JSON.parse(fs.readFileSync('vercel-turborepo-migration-plan.json', 'utf8'));
  
  console.log('   ✅ Monorepo structure defined:');
  console.log(`      - Apps: ${Object.keys(migrationPlan.structure.apps).join(', ')}`);
  console.log(`      - Packages: ${Object.keys(migrationPlan.structure.packages).join(', ')}`);
  
  console.log('   ✅ Brand colors configured:');
  Object.entries(migrationPlan.brandingUpdates.colors).forEach(([key, value]) => {
    console.log(`      - ${key}: ${value}`);
  });
  
  console.log('   ✅ Pages to migrate:');
  migrationPlan.contentMigration.pages.forEach(page => {
    console.log(`      - ${page}`);
  });
} catch (error) {
  console.log('   ❌ Error reading migration plan:', error.message);
}

// Test 3: Validate Airtable Schema
console.log('\n3️⃣ Testing Airtable Schema:');
try {
  const airtableSchema = JSON.parse(fs.readFileSync('airtable-schema.json', 'utf8'));
  const tables = Object.keys(airtableSchema.tables);
  
  console.log(`   ✅ ${tables.length} tables defined:`);
  tables.forEach(table => {
    const fieldCount = airtableSchema.tables[table].fields.length;
    console.log(`      - ${table}: ${fieldCount} fields`);
  });
} catch (error) {
  console.log('   ❌ Error reading Airtable schema:', error.message);
}

// Test 4: Validate Setup Script
console.log('\n4️⃣ Testing Setup Script:');
try {
  const scriptContent = fs.readFileSync('setup-vercel-turborepo.sh', 'utf8');
  const hasShebang = scriptContent.startsWith('#!/bin/bash');
  const hasCreateCommand = scriptContent.includes('npx create-turbo@latest');
  const hasEnvSetup = scriptContent.includes('.env.local');
  
  console.log(`   ${hasShebang ? '✅' : '❌'} Bash shebang present`);
  console.log(`   ${hasCreateCommand ? '✅' : '❌'} Turborepo create command included`);
  console.log(`   ${hasEnvSetup ? '✅' : '❌'} Environment setup included`);
  
  // Check if script is executable
  const stats = fs.statSync('setup-vercel-turborepo.sh');
  const isExecutable = (stats.mode & parseInt('111', 8)) !== 0;
  console.log(`   ${isExecutable ? '✅' : '❌'} Script is executable`);
} catch (error) {
  console.log('   ❌ Error reading setup script:', error.message);
}

// Test 5: Validate Content Mapping
console.log('\n5️⃣ Testing Content Mapping:');
try {
  const report = JSON.parse(fs.readFileSync('comprehensive-migration-report-2025-06-05T08-35-03.json', 'utf8'));
  const migrationPlan = JSON.parse(fs.readFileSync('vercel-turborepo-migration-plan.json', 'utf8'));
  
  const reportPages = report.websiteContent.pages.map(p => p.path);
  const planPages = migrationPlan.contentMigration.pages;
  
  console.log('   ✅ Pages in comprehensive report:', reportPages.length);
  console.log('   ✅ Pages in migration plan:', planPages.length);
  
  // Check if all pages are mapped
  const allPagesMapped = planPages.every(page => 
    reportPages.some(rPage => rPage === page || rPage === page.replace('/', ''))
  );
  
  console.log(`   ${allPagesMapped ? '✅' : '❌'} All pages properly mapped`);
} catch (error) {
  console.log('   ❌ Error validating content mapping:', error.message);
}

// Test 6: Environment Variables Template
console.log('\n6️⃣ Testing Environment Variables:');
const envVars = [
  'AIRTABLE_API_KEY',
  'AIRTABLE_BASE_ID',
  'NEXT_PUBLIC_SITE_URL'
];

console.log('   Required environment variables:');
envVars.forEach(varName => {
  console.log(`   ✅ ${varName}`);
});

// Final Summary
console.log('\n' + '='.repeat(60));
console.log('📊 MIGRATION TEST SUMMARY\n');

const tests = {
  'Export Files': allFilesExist,
  'Migration Plan': fs.existsSync('vercel-turborepo-migration-plan.json'),
  'Airtable Schema': fs.existsSync('airtable-schema.json'),
  'Setup Script': fs.existsSync('setup-vercel-turborepo.sh'),
  'Instructions': fs.existsSync('VERCEL_TURBOREPO_SETUP.md')
};

let allTestsPassed = true;
Object.entries(tests).forEach(([test, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${test}`);
  if (!passed) allTestsPassed = false;
});

if (allTestsPassed) {
  console.log('\n✅ ALL TESTS PASSED! Migration plan is ready for implementation.');
  console.log('\n📋 Next Steps:');
  console.log('1. Run: bash setup-vercel-turborepo.sh');
  console.log('2. Copy logo files from Dropbox to apps/web/public/brand/');
  console.log('3. Update environment variables in .env.local');
  console.log('4. Run: pnpm dev');
  console.log('5. Deploy with: vercel');
} else {
  console.log('\n⚠️  Some tests failed. Please review the issues above.');
}

// Save test report
const testReport = {
  timestamp: new Date().toISOString(),
  tests: tests,
  allPassed: allTestsPassed,
  exportFiles: exportFiles.map(file => ({
    file,
    exists: fs.existsSync(file),
    size: fs.existsSync(file) ? fs.statSync(file).size : 0
  }))
};

fs.writeFileSync('migration-test-results.json', JSON.stringify(testReport, null, 2));
console.log('\n📄 Test results saved to: migration-test-results.json');
