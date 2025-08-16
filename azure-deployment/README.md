# Latitude.so Azure Container Apps Deployment Guide

This guide provides step-by-step instructions for deploying Latitude.so on Azure Container Apps with serverless scaling capabilities.

## Prerequisites

- Azure CLI installed and configured
- Docker installed (for custom builds)
- Azure subscription with Container Apps enabled
- Domain name for your Latitude instance (optional but recommended)

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                Azure Container Apps                     │
├─────────────────┬─────────────────┬─────────────────────┤
│  Latitude Web   │ Latitude Gateway│   Latitude Worker   │
│   (Frontend)    │    (API)        │   (Background)      │
│   Port: 3000    │   Port: 8080    │                     │
└─────────────────┴─────────────────┴─────────────────────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │
    ┌──────────────────────┴──────────────────────┐
    │              Supporting Services            │
    ├────────────────┬────────────────┬───────────┤
    │   PostgreSQL   │     Redis      │  Storage  │
    │   (Database)   │    (Cache)     │  Account  │
    └────────────────┴────────────────┴───────────┘
```

## Quick Deployment (5 Minutes)

### Step 1: Clone and Setup
```bash
# Navigate to your project directory
cd your-project

# Make the setup script executable
chmod +x azure-deployment/setup-azure-resources.sh

# Run the automated setup
./azure-deployment/setup-azure-resources.sh
```

### Step 2: Update API Keys
```bash
# Update with your actual API keys
az containerapp env secret set \
  --name latitude-env \
  --resource-group howaiconnects-rg \
  --secrets \
    openai-api-key="your-openai-api-key" \
    azure-openai-key="your-azure-openai-key" \
    azure-openai-endpoint="https://your-resource.openai.azure.com"
```

### Step 3: Deploy Container App
```bash
az containerapp create \
  --resource-group howaiconnects-rg \
  --environment latitude-env \
  --name latitude-stack \
  --yaml azure-deployment/latitude-containerapp.yaml
```

### Step 4: Get Your Endpoint
```bash
# Get the FQDN of your deployed app
az containerapp show \
  --name latitude-stack \
  --resource-group howaiconnects-rg \
  --query properties.configuration.ingress.fqdn \
  --output tsv
```

## Manual Step-by-Step Deployment

### 1. Create Resource Group
```bash
az group create \
  --name howaiconnects-rg \
  --location eastus2
```

### 2. Create Container Apps Environment
```bash
az containerapp env create \
  --name latitude-env \
  --resource-group howaiconnects-rg \
  --location eastus2
```

### 3. Create PostgreSQL Database
```bash
# Create PostgreSQL server
az postgres flexible-server create \
  --resource-group howaiconnects-rg \
  --name latitude-postgres \
  --location eastus2 \
  --admin-user latitudeadmin \
  --admin-password "YourSecurePassword123!" \
  --sku-name Standard_B1ms \
  --tier Burstable \
  --public-access Enabled \
  --storage-size 32

# Create database
az postgres flexible-server db create \
  --resource-group howaiconnects-rg \
  --server-name latitude-postgres \
  --database-name latitude
```

### 4. Create Redis Cache
```bash
az redis create \
  --resource-group howaiconnects-rg \
  --name latitude-redis \
  --location eastus2 \
  --sku Basic \
  --vm-size c0
```

### 5. Configure Secrets
```bash
# Get connection strings
POSTGRES_CONN=$(az postgres flexible-server show-connection-string \
  --server-name latitude-postgres \
  --admin-user latitudeadmin \
  --admin-password "YourSecurePassword123!" \
  --database-name latitude \
  --query "connectionStrings.psql" -o tsv)

REDIS_KEY=$(az redis list-keys \
  --name latitude-redis \
  --resource-group howaiconnects-rg \
  --query primaryKey -o tsv)

REDIS_HOSTNAME=$(az redis show \
  --name latitude-redis \
  --resource-group howaiconnects-rg \
  --query hostName -o tsv)

# Set secrets
az containerapp env secret set \
  --name latitude-env \
  --resource-group howaiconnects-rg \
  --secrets \
    postgres-connection-string="$POSTGRES_CONN" \
    redis-connection-string="redis://:${REDIS_KEY}@${REDIS_HOSTNAME}:6380" \
    auth-secret="$(openssl rand -base64 32)" \
    openai-api-key="your-openai-key" \
    azure-openai-key="your-azure-openai-key" \
    azure-openai-endpoint="your-azure-endpoint"
```

### 6. Deploy Container App
```bash
az containerapp create \
  --resource-group howaiconnects-rg \
  --environment latitude-env \
  --yaml azure-deployment/latitude-containerapp.yaml
```

## Integration with Your App

Update your app's environment variables to use the deployed Latitude instance:

```env
# Add to your .env
LATITUDE_CUSTOM_ENDPOINT=https://your-latitude-app.azurecontainerapps.io
LATITUDE_API_KEY=your-latitude-api-key
LATITUDE_PROJECT_ID=your-project-id
```

## Scaling & Performance

### Auto-scaling Configuration
- **Min Replicas**: 0 (scales to zero when not in use)
- **Max Replicas**: 10 (adjust based on expected load)
- **Scale Trigger**: HTTP requests (10 concurrent requests per replica)

### Cost Optimization
- Containers scale to zero when idle = $0 cost during downtime
- Only pay for actual compute time used
- Managed PostgreSQL and Redis have separate pricing

### Monitoring
```bash
# View app logs
az containerapp logs show \
  --name latitude-stack \
  --resource-group howaiconnects-rg \
  --follow

# Monitor scaling events
az monitor metrics list \
  --resource /subscriptions/{subscription}/resourceGroups/howaiconnects-rg/providers/Microsoft.App/containerApps/latitude-stack \
  --metric Replicas
```

## Custom Domain & SSL

### 1. Add Custom Domain
```bash
az containerapp hostname add \
  --hostname latitude.yourdomain.com \
  --name latitude-stack \
  --resource-group howaiconnects-rg
```

### 2. Configure DNS
Point your domain's CNAME to the Container App FQDN:
```
latitude.yourdomain.com CNAME your-app.azurecontainerapps.io
```

### 3. Enable HTTPS
Container Apps automatically provision SSL certificates for custom domains.

## Troubleshooting

### Common Issues

1. **App won't start**: Check logs for database connection issues
2. **Scale to zero not working**: Verify no persistent connections
3. **High cold start times**: Consider min replicas = 1 for production

### Debug Commands
```bash
# Check app status
az containerapp show --name latitude-stack --resource-group howaiconnects-rg

# View environment variables
az containerapp env secret list --name latitude-env --resource-group howaiconnects-rg

# Check revision status
az containerapp revision list --name latitude-stack --resource-group howaiconnects-rg
```

## Estimated Costs

- **Container Apps**: ~$30-100/month (depending on usage)
- **PostgreSQL**: ~$25-50/month (Basic tier)
- **Redis**: ~$15-30/month (Basic C0)
- **Storage**: ~$5-10/month
- **Total**: ~$75-190/month

Scale-to-zero capability significantly reduces costs during low usage periods.

## Next Steps

1. Configure your domain and SSL
2. Set up monitoring and alerts
3. Configure backup strategies for PostgreSQL
4. Implement CI/CD for automated deployments
5. Test the integration with your main application

Your Latitude.so instance will be available at the Container App URL and ready to handle AI prompt orchestration with serverless scaling!