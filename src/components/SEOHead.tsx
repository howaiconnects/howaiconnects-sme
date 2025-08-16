/**
 * SEO Head Component
 * Comprehensive SEO meta tags and structured data for all pages
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { appConfig, seoConfig, businessConfig } from '@/config/appConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'product';
  schema?: object;
  noindex?: boolean;
  canonical?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  schema,
  noindex = false,
  canonical
}) => {
  const location = useLocation();
  
  // Build final values
  const finalTitle = title 
    ? `${title} | ${appConfig.name}` 
    : seoConfig.defaultTitle;
  
  const finalDescription = description || seoConfig.defaultDescription;
  const finalUrl = url || `${appConfig.url}${location.pathname}`;
  const finalImage = image || `${appConfig.url}${appConfig.logo}`;
  const finalCanonical = canonical || finalUrl;
  
  // Combine keywords
  const allKeywords = [...seoConfig.keywords, ...keywords].join(', ');

  // Build structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": appConfig.name,
    "url": appConfig.url,
    "logo": finalImage,
    "description": appConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.contact.address.street,
      "addressLocality": businessConfig.contact.address.city,
      "addressRegion": businessConfig.contact.address.province,
      "postalCode": businessConfig.contact.address.postalCode,
      "addressCountry": businessConfig.contact.address.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessConfig.contact.phone,
      "contactType": "customer service",
      "email": businessConfig.contact.email
    },
    "sameAs": Object.values(businessConfig.social),
    "foundingDate": businessConfig.founded
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": appConfig.name,
    "url": appConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${appConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const pageSchema = schema || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title || appConfig.name,
    "description": finalDescription,
    "url": finalUrl,
    "mainEntity": organizationSchema
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      pageSchema
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={appConfig.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitter.site} />
      <meta name="twitter:creator" content={seoConfig.twitter.handle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={appConfig.name} />
      <meta name="publisher" content={appConfig.name} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${businessConfig.company}`} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />
      
      {/* Business Tags */}
      <meta name="business:contact_data:street_address" content={businessConfig.contact.address.street} />
      <meta name="business:contact_data:locality" content={businessConfig.contact.address.city} />
      <meta name="business:contact_data:region" content={businessConfig.contact.address.province} />
      <meta name="business:contact_data:postal_code" content={businessConfig.contact.address.postalCode} />
      <meta name="business:contact_data:country_name" content={businessConfig.contact.address.country} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
    </Helmet>
  );
};

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "AI Business Automation Platform | Toronto",
    description: "Transform your business with AI automation solutions. Custom web apps, workflow automation, and intelligent business insights. Toronto's leading AI consulting firm.",
    keywords: ["AI automation Toronto", "business automation", "AI consulting", "workflow automation", "custom web applications"],
    schema: {
      "@type": "Organization",
      "name": "HowAIConnects",
      "url": "https://howaiconnects.com"
    }
  },
  
  services: {
    title: "AI Automation Services | Custom Solutions for Business Growth",
    description: "Comprehensive AI automation services including workflow automation, marketing automation, and custom AI solutions. Transform your operations with intelligent automation.",
    keywords: ["AI automation services", "workflow automation", "marketing automation", "AI consulting services"],
    schema: {
      "@type": "Service",
      "serviceType": "AI Automation Services"
    }
  },
  
  about: {
    title: "About HowAIConnects | AI Automation Experts in Toronto",
    description: "Learn about HowAIConnects, Toronto's leading AI automation company. Our team specializes in transforming businesses through intelligent automation solutions.",
    keywords: ["HowAIConnects team", "AI automation company Toronto", "AI consulting experts"],
    schema: {
      "@type": "AboutPage"
    }
  },
  
  contact: {
    title: "Contact HowAIConnects | Get Your AI Automation Consultation",
    description: "Contact HowAIConnects for a free AI automation consultation. Located in Toronto, serving businesses across Canada with custom AI solutions.",
    keywords: ["contact AI automation", "AI consultation Toronto", "business automation contact"],
    schema: {
      "@type": "ContactPage"
    }
  },
  
  'web-app-development': {
    title: "Custom Web Application Development | AI-Powered Solutions",
    description: "Professional web application development with AI integration. Custom business solutions, responsive design, and modern technology stack.",
    keywords: ["web application development", "custom web apps", "AI web development", "Toronto web developers"],
    schema: {
      "@type": "Service",
      "serviceType": "Web Application Development"
    }
  },
  
  'done-for-you-ai-agency': {
    title: "Done-For-You AI Agency Services | Complete AI Implementation",
    description: "Complete AI agency services with done-for-you implementation. From strategy to deployment, we handle your entire AI transformation journey.",
    keywords: ["AI agency services", "done for you AI", "AI implementation", "AI transformation"],
    schema: {
      "@type": "Service",
      "serviceType": "AI Agency Services"
    }
  }
};

export default SEOHead;