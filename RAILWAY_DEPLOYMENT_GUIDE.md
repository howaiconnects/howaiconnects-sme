# Railway.com Deployment Guide

## Overview
This guide walks you through deploying the HowAIConnects platform to Railway.com. Railway is a modern deployment platform that makes it easy to deploy web applications with minimal configuration.

## Prerequisites
1. Railway.com account (free tier available)
2. GitHub repository access
3. Environment variables configured

## Deployment Steps

### 1. Setup Railway Project

1. **Connect Railway to GitHub**
   - Go to [Railway.app](https://railway.app)
   - Click "Start a New Project"
   - Connect your GitHub account
   - Select the `howaiconnects/howaiconnects-sme` repository

2. **Configure the Service**
   - Railway will automatically detect this as a Node.js/Vite project
   - The `railway.toml` configuration will be used automatically

### 2. Environment Variables

Set these environment variables in your Railway service:

**Required Variables:**
```bash
# Port (automatically set by Railway)
PORT=3000

# Node Environment
NODE_ENV=production

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id  
VITE_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Optional Variables** (copy from .env.railway template):
- SMTP Configuration
- Admin Authentication  
- Webhook URLs
- API Base URL

**To set variables in Railway:**
1. Go to your Railway project dashboard
2. Click on your service
3. Go to "Variables" tab
4. Add each environment variable

### 3. Build Configuration

The project is configured with:
- **Build Command**: `npm run build` (automatic)
- **Start Command**: `npm run preview` (configured in railway.toml)
- **Port**: Uses Railway's `$PORT` environment variable
- **Health Check**: Available at `/` endpoint

### 4. Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your service dashboard
   - Click "Settings" → "Domains"
   - Click "Custom Domain"
   - Enter your domain (e.g., `app.howaiconnects.com`)

2. **Configure DNS**
   - Add a CNAME record pointing to your Railway service
   - Railway will provide the CNAME target

### 5. Deployment Process

Railway automatically deploys when you push to your connected GitHub branch:

1. **Automatic Deployments**
   - Push changes to your main/master branch
   - Railway detects changes and rebuilds
   - New deployment is live within minutes

2. **Manual Deployments**
   - Go to Railway dashboard → your service
   - Click "Deploy" button
   - Select specific commit or branch

## Project Structure

This is a React/Vite application with the following key components:

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Route components
│   ├── integrations/  # Supabase & API integrations
│   └── services/      # Business logic
├── public/           # Static assets
├── railway.toml      # Railway configuration
└── package.json      # Dependencies & scripts
```

## Architecture

### Frontend (React/Vite)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: Radix UI + Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Query + Context API

### Backend Services
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Email**: EmailJS + SMTP
- **Automation**: Zapier & n8n webhooks

## Environment-Specific Configuration

### Development
- Uses `npm run dev`
- Hot reload enabled
- Development mode optimizations

### Production (Railway)
- Uses `npm run build && npm run preview`
- Production optimizations enabled
- Static asset serving
- Port binding to Railway's assigned port

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check package.json dependencies
   - Verify environment variables are set
   - Review build logs in Railway dashboard

2. **Runtime Errors**
   - Check application logs in Railway
   - Verify environment variables
   - Test locally with production build

3. **Port Issues**
   - Railway automatically assigns a port
   - Make sure preview command uses `--port $PORT --host 0.0.0.0`

### Monitoring

Railway provides:
- **Deployment Logs**: Real-time build and deployment logs
- **Application Logs**: Runtime application logs  
- **Metrics**: CPU, memory, and network usage
- **Health Checks**: Automated endpoint monitoring

## Scaling

Railway offers automatic scaling:
- **Horizontal Scaling**: Multiple instances
- **Vertical Scaling**: Increase memory/CPU
- **Auto-scaling**: Based on traffic patterns

## Cost Optimization

**Railway Pricing Tiers:**
- **Starter Plan**: $0/month (500 hours execution time)
- **Developer Plan**: $10/month (unlimited execution time)
- **Team Plan**: $20/month (enhanced features)

**Tips to reduce costs:**
- Use starter plan for development/staging
- Optimize build times
- Minimize idle time

## Security

**Best Practices:**
- Store sensitive data in environment variables
- Use HTTPS for all communications (automatic with Railway)
- Keep dependencies updated
- Regular security audits

**Automatic Security Features:**
- HTTPS/TLS termination
- DDoS protection
- Isolated execution environment
- Automatic security updates

## Next Steps

After successful deployment:

1. **Domain Setup**: Configure custom domain
2. **Monitoring**: Set up alerts and monitoring  
3. **CI/CD**: Configure automated testing
4. **Backup**: Set up database backups (if using Railway PostgreSQL)
5. **Performance**: Optimize bundle size and loading times

## Support

- **Railway Documentation**: [docs.railway.app](https://docs.railway.app)
- **Railway Community**: [Discord](https://discord.gg/railway)
- **Project Issues**: Create issues in this GitHub repository

---

This configuration provides a production-ready deployment that can scale with your business needs while maintaining excellent developer experience.