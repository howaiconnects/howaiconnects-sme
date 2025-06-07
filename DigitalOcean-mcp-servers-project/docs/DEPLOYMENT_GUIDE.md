# MCP Servers Deployment Guide

This guide explains how to deploy your MCP servers to a cloud VPS and connect them to your Replit project.

## Table of Contents

1. [Overview](#overview)
2. [VPS Setup](#vps-setup)
3. [Environment Configuration](#environment-configuration)
4. [Docker Deployment](#docker-deployment)
5. [Replit Integration](#replit-integration)
6. [Security Best Practices](#security-best-practices)
7. [Monitoring & Maintenance](#monitoring--maintenance)

## Overview

This project structure supports hosting multiple MCP servers on a single VPS with proper environment separation and configuration management. The servers can be accessed from your Replit project via secure API endpoints.

### Architecture

```
Cloud VPS (DigitalOcean/AWS/etc.)
├── Docker Containers
│   ├── MCP Server 1 (Neon Database)
│   ├── MCP Server 2 (GitHub)
│   ├── MCP Server 3 (Airtable)
│   └── MCP Server N (Custom)
├── Nginx Reverse Proxy
├── SSL/TLS Certificates
└── Monitoring Stack
```

## VPS Setup

### 1. Choose a VPS Provider

Recommended providers:
- **DigitalOcean**: Easy setup, good documentation
- **AWS EC2**: Scalable, enterprise-grade
- **Linode**: Developer-friendly
- **Vultr**: Cost-effective

### 2. Server Requirements

**Minimum Specifications:**
- 2 CPU cores
- 4GB RAM
- 50GB SSD storage
- Ubuntu 22.04 LTS

**Recommended Specifications:**
- 4 CPU cores
- 8GB RAM
- 100GB SSD storage
- Ubuntu 22.04 LTS

### 3. Initial Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Install Nginx
sudo apt install nginx -y

# Install Certbot for SSL
sudo apt install certbot python3-certbot-nginx -y

# Create project directory
mkdir -p /opt/mcp-servers
cd /opt/mcp-servers
```

## Environment Configuration

### 1. Clone Your Project

```bash
git clone https://github.com/yourusername/mcp-servers-project.git /opt/mcp-servers
cd /opt/mcp-servers
```

### 2. Configure Environment Variables

Copy the appropriate environment template:

```bash
# For production deployment
cp config/environments/.env.production .env

# Edit the environment variables
nano .env
```

**Critical Variables to Change:**

```bash
# Database Configuration
DB_HOST=your-production-db-host.com
DB_USERNAME=your_db_username
DB_PASSWORD=your_secure_db_password
DB_NAME=your_db_name

# Authentication Secrets
JWT_SECRET=your-super-secure-jwt-secret-32-chars-minimum
SESSION_SECRET=your-super-secure-session-secret-32-chars
ENCRYPTION_KEY=your-32-character-encryption-key-here

# Domain Configuration
FRONTEND_URL=https://your-domain.com
ADMIN_URL=https://admin.your-domain.com
```

### 3. Set Up SSL Certificates

```bash
# Replace your-domain.com with your actual domain
sudo certbot --nginx -d your-domain.com -d admin.your-domain.com
```

## Docker Deployment

### 1. Build and Deploy

```bash
# Build all services
docker compose -f docker-compose.prod.yml build

# Start services
docker compose -f docker-compose.prod.yml up -d

# Check status
docker compose -f docker-compose.prod.yml ps
```

### 2. Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/mcp-servers
```

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # MCP Server endpoints
    location /api/mcp/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Health check endpoint
    location /health {
        proxy_pass http://localhost:3000/health;
        access_log off;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/mcp-servers /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Replit Integration

### 1. Environment Variables in Replit

In your Replit project, add these environment variables in the Secrets tab:

```bash
# MCP Server Configuration
MCP_SERVER_BASE_URL=https://your-domain.com/api/mcp
MCP_API_KEY=your-secure-api-key

# Individual MCP Server Endpoints
NEON_MCP_URL=https://your-domain.com/api/mcp/neon
GITHUB_MCP_URL=https://your-domain.com/api/mcp/github
AIRTABLE_MCP_URL=https://your-domain.com/api/mcp/airtable
```

### 2. Replit Configuration File

Create `.replit` file in your Replit project:

```toml
[nix]
channel = "stable-22_11"

[deployment]
run = ["sh", "-c", "npm start"]

[[ports]]
localPort = 3000
externalPort = 80
```

### 3. MCP Client Configuration

Create `mcp-config.json` in your Replit project:

```json
{
  "mcpServers": {
    "neon": {
      "command": "npx",
      "args": ["-y", "@neondatabase/mcp-server-neon"],
      "env": {
        "NEON_API_KEY": "your-neon-api-key"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-github-token"
      }
    },
    "airtable": {
      "command": "npx",
      "args": ["-y", "airtable-mcp-server"],
      "env": {
        "AIRTABLE_API_KEY": "your-airtable-api-key"
      }
    }
  }
}
```

## Security Best Practices

### 1. Firewall Configuration

```bash
# Configure UFW firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 2. API Key Management

- Use strong, unique API keys for each service
- Rotate keys regularly
- Store keys in environment variables, never in code
- Use different keys for development, staging, and production

### 3. Database Security

- Use SSL connections for all database connections
- Implement connection pooling
- Regular backups with encryption
- Monitor for suspicious activity

### 4. Container Security

```bash
# Run containers as non-root user
# Scan images for vulnerabilities
docker scout cves

# Update base images regularly
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

## Monitoring & Maintenance

### 1. Health Checks

Set up automated health checks:

```bash
# Add to crontab
*/5 * * * * curl -f https://your-domain.com/health || echo "Health check failed" | mail -s "MCP Server Alert" admin@your-domain.com
```

### 2. Log Management

```bash
# View logs
docker compose -f docker-compose.prod.yml logs -f

# Log rotation
sudo nano /etc/logrotate.d/docker-containers
```

### 3. Backup Strategy

```bash
# Database backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
docker exec postgres_container pg_dump -U username dbname > backup_$DATE.sql
aws s3 cp backup_$DATE.sql s3://your-backup-bucket/
```

### 4. Updates and Maintenance

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Docker images
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d

# Clean up old images
docker system prune -f
```

## Troubleshooting

### Common Issues

1. **Connection Refused**
   - Check if services are running: `docker compose ps`
   - Verify firewall settings: `sudo ufw status`
   - Check Nginx configuration: `sudo nginx -t`

2. **SSL Certificate Issues**
   - Renew certificates: `sudo certbot renew`
   - Check certificate status: `sudo certbot certificates`

3. **High Memory Usage**
   - Monitor with: `docker stats`
   - Adjust container limits in docker-compose.yml

4. **Database Connection Issues**
   - Check database logs: `docker compose logs postgres`
   - Verify connection strings in .env file

### Support

For additional support:
- Check the project documentation in `/docs`
- Review server logs: `docker compose logs`
- Monitor system resources: `htop`, `df -h`
- Contact your VPS provider for infrastructure issues

## Next Steps

1. Set up monitoring with Prometheus/Grafana
2. Implement automated backups
3. Configure CI/CD pipeline
4. Set up staging environment
5. Implement blue-green deployments

---

**Note**: Replace all placeholder values (your-domain.com, API keys, etc.) with your actual configuration values before deployment.
