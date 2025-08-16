/**
 * SEO Hook
 * Custom hook for managing SEO data and analytics
 */

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pageSEOConfigs } from '@/components/SEOHead';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  schema?: object;
  canonical?: string;
}

export const useSEO = (customSEO?: Partial<SEOData>) => {
  const location = useLocation();
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    // Get page key from pathname
    const pageKey = location.pathname.slice(1) || 'home';
    const configKey = pageKey.replace(/\//g, '-') as keyof typeof pageSEOConfigs;
    
    // Get page-specific config
    const pageConfig = pageSEOConfigs[configKey];
    
    if (pageConfig) {
      setSeoData({
        title: pageConfig.title,
        description: pageConfig.description,
        keywords: pageConfig.keywords,
        schema: pageConfig.schema,
        ...customSEO
      });
    } else {
      // Fallback for pages without specific config
      setSeoData({
        title: "HowAIConnects - AI Business Automation Platform",
        description: "Transform your business with AI automation solutions and custom web applications.",
        keywords: ["AI automation", "business automation", "AI consulting"],
        ...customSEO
      });
    }

    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageConfig?.title || customSEO?.title,
        page_location: window.location.href,
        content_group1: 'AI Platform'
      });
    }
  }, [location.pathname, customSEO]);

  return seoData;
};

export default useSEO;