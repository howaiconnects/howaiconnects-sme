# Railway.com Deployment Checklist

## Pre-Deployment Setup
- [ ] Railway account created
- [ ] GitHub repository connected to Railway
- [ ] Environment variables prepared

## Deployment Configuration
- [x] `railway.toml` configuration file created
- [x] `package.json` scripts updated for Railway
- [x] Build and preview commands tested locally
- [ ] Environment variables set in Railway dashboard

## Environment Variables Required

### Essential Variables
- [ ] `PORT` (automatically set by Railway)
- [ ] `NODE_ENV=production`

### EmailJS Configuration
- [ ] `VITE_EMAILJS_SERVICE_ID`
- [ ] `VITE_EMAILJS_CONTACT_TEMPLATE_ID`
- [ ] `VITE_EMAILJS_BOOKING_TEMPLATE_ID`
- [ ] `VITE_EMAILJS_PUBLIC_KEY`

### Optional Integrations
- [ ] `VITE_SMTP_HOST`
- [ ] `VITE_SMTP_PORT`
- [ ] `VITE_SMTP_SECURE`
- [ ] `VITE_SMTP_USER`
- [ ] `VITE_SMTP_PASSWORD`
- [ ] `VITE_ADMIN_PASSWORD_HASH`
- [ ] `VITE_ZAPIER_CONTACT_WEBHOOK`
- [ ] `VITE_ZAPIER_BOOKING_WEBHOOK`
- [ ] `VITE_N8N_CONTACT_WEBHOOK`
- [ ] `VITE_N8N_BOOKING_WEBHOOK`
- [ ] `VITE_ZENDESK_WIDGET_KEY`

## Deployment Steps
1. [ ] Connect Railway to GitHub repository
2. [ ] Configure environment variables in Railway dashboard
3. [ ] Deploy and test the application
4. [ ] Set up custom domain (optional)
5. [ ] Configure DNS settings (if using custom domain)

## Post-Deployment Testing
- [ ] Application loads correctly
- [ ] All routes are accessible
- [ ] Authentication works (if applicable)
- [ ] Contact forms submit successfully
- [ ] External integrations function properly
- [ ] Mobile responsiveness verified

## Domain Configuration (Optional)
- [ ] Custom domain added in Railway
- [ ] DNS CNAME record configured
- [ ] SSL certificate automatically provisioned
- [ ] Domain propagation verified

## Monitoring and Maintenance
- [ ] Railway monitoring dashboard reviewed
- [ ] Application logs monitored
- [ ] Performance metrics checked
- [ ] Error tracking set up (if needed)

## Troubleshooting Resources
- Railway documentation: https://docs.railway.app
- Project README.md
- RAILWAY_DEPLOYMENT_GUIDE.md

## Support Contacts
- Railway Community Discord
- Project maintainers via GitHub issues