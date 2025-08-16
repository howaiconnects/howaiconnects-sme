#!/bin/bash

# Azure Container Apps Setup Script for Latitude.so
# Run this script to create all necessary Azure resources

set -e

# Configuration variables - EDIT THESE
RESOURCE_GROUP="howaiconnects-rg"
LOCATION="eastus2"
CONTAINER_ENV="latitude-env"
APP_NAME="latitude-stack"
POSTGRES_SERVER="latitude-postgres"
REDIS_NAME="latitude-redis"
STORAGE_ACCOUNT="latitudestorage$(date +%s)"

echo "🚀 Starting Azure Container Apps setup for Latitude.so..."

# Login to Azure (if not already logged in)
echo "📋 Ensuring Azure CLI login..."
az account show || az login

# Create Resource Group
echo "📦 Creating resource group..."
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION

# Create Container Apps environment
echo "🏗️ Creating Container Apps environment..."
az containerapp env create \
  --name $CONTAINER_ENV \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION

# Create Azure Database for PostgreSQL
echo "🗄️ Creating PostgreSQL database..."
az postgres flexible-server create \
  --resource-group $RESOURCE_GROUP \
  --name $POSTGRES_SERVER \
  --location $LOCATION \
  --admin-user latitudeadmin \
  --admin-password "LatitudeSecure123!" \
  --sku-name Standard_B1ms \
  --tier Burstable \
  --public-access Enabled \
  --storage-size 32

# Create database for Latitude
az postgres flexible-server db create \
  --resource-group $RESOURCE_GROUP \
  --server-name $POSTGRES_SERVER \
  --database-name latitude

# Create Azure Cache for Redis
echo "📊 Creating Redis cache..."
az redis create \
  --resource-group $RESOURCE_GROUP \
  --name $REDIS_NAME \
  --location $LOCATION \
  --sku Basic \
  --vm-size c0

# Create Storage Account for file uploads
echo "💾 Creating storage account..."
az storage account create \
  --name $STORAGE_ACCOUNT \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --sku Standard_LRS

# Get connection strings
echo "🔗 Retrieving connection strings..."
POSTGRES_CONN=$(az postgres flexible-server show-connection-string \
  --server-name $POSTGRES_SERVER \
  --admin-user latitudeadmin \
  --admin-password "LatitudeSecure123!" \
  --database-name latitude \
  --query "connectionStrings.psql" -o tsv)

REDIS_KEY=$(az redis list-keys \
  --name $REDIS_NAME \
  --resource-group $RESOURCE_GROUP \
  --query primaryKey -o tsv)

REDIS_HOSTNAME=$(az redis show \
  --name $REDIS_NAME \
  --resource-group $RESOURCE_GROUP \
  --query hostName -o tsv)

REDIS_CONN="redis://:${REDIS_KEY}@${REDIS_HOSTNAME}:6380"

# Create secrets for Container App
echo "🔐 Creating Container App secrets..."
az containerapp env secret set \
  --name $CONTAINER_ENV \
  --resource-group $RESOURCE_GROUP \
  --secrets \
    postgres-connection-string="$POSTGRES_CONN" \
    redis-connection-string="$REDIS_CONN" \
    auth-secret="$(openssl rand -base64 32)" \
    openai-api-key="your-openai-key-here" \
    azure-openai-key="your-azure-openai-key-here" \
    azure-openai-endpoint="your-azure-openai-endpoint-here"

echo "✅ Azure resources created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update the secrets with your actual API keys:"
echo "   az containerapp env secret set --name $CONTAINER_ENV --resource-group $RESOURCE_GROUP --secrets openai-api-key='your-actual-key'"
echo ""
echo "2. Deploy the Container App:"
echo "   az containerapp create --resource-group $RESOURCE_GROUP --environment $CONTAINER_ENV --yaml azure-deployment/latitude-containerapp.yaml"
echo ""
echo "3. Configure your domain and SSL certificates"
echo ""
echo "📊 Resource details:"
echo "Resource Group: $RESOURCE_GROUP"
echo "Container Environment: $CONTAINER_ENV"
echo "PostgreSQL Server: $POSTGRES_SERVER"
echo "Redis Cache: $REDIS_NAME"
echo "Storage Account: $STORAGE_ACCOUNT"