#!/bin/bash

# Railway Build Script
# This script ensures the build process works correctly on Railway

echo "🚀 Starting Railway build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building application..."
npm run build

# Verify build output
if [ -d "dist" ]; then
  echo "✅ Build completed successfully!"
  echo "📁 Build output directory created: dist/"
  
  # List build files
  echo "📄 Build files:"
  ls -la dist/
else
  echo "❌ Build failed - dist directory not found"
  exit 1
fi

echo "🎉 Railway build completed successfully!"