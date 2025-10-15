#!/bin/bash

# Set environment variables for all Vercel environments
echo "Setting up environment variables for all environments..."

# Project ID
echo "ihhaqh4s" | npx vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID

# Dataset
echo "production" | npx vercel env add NEXT_PUBLIC_SANITY_DATASET

# API Version
echo "2025-09-25" | npx vercel env add NEXT_PUBLIC_SANITY_API_VERSION

# Studio URL (optional)
echo "" | npx vercel env add NEXT_PUBLIC_SANITY_STUDIO_URL

# Read Token
echo "skd5mOSfEIBA3IdGmiiDp00cSuWLXQTp1xMw048oC5NHYIyjioiONX3EGHRUS0lJ6a9gM6ZvwWrgEayBXTDr09N3PfpkimZKcUKSn9m54U5XGxZPwL3IoYFEngrbYPxmWuFFW2rk9sgaD1tKUkqjghhYVq9yrqEB5MsqKVdjmGM03ScqY6RR" | npx vercel env add SANITY_API_READ_TOKEN

echo "Environment variables setup complete!"