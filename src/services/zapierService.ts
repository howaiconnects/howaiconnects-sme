interface ZapierWebhookData {
  title?: string;
  content?: string;
  keywords?: string[];
  seoScore?: number;
  status?: string;
  url?: string;
  metadata?: Record<string, any>;
  timestamp?: string;
  source?: string;
}

interface ZapierTriggerResponse {
  success: boolean;
  message: string;
  zapId?: string;
}

export class ZapierService {
  private apiKey: string;
  private baseUrl = 'https://hooks.zapier.com/hooks/catch';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || '';
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Trigger a Zapier webhook with SEO data using Supabase Edge Function
   */
  async triggerWebhook(
    webhookUrl: string, 
    data: ZapierWebhookData,
    options: { timeout?: number; triggerType?: string } = {}
  ): Promise<ZapierTriggerResponse> {
    const { timeout = 10000, triggerType = 'custom' } = options;

    try {
      console.log('Triggering Zapier webhook via Supabase:', webhookUrl, data);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      // Use Supabase Edge Function for better security and monitoring
      const edgeFunctionUrl = '/functions/v1/zapier-webhook';
      
      const response = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          webhookUrl,
          data: {
            ...data,
            timestamp: data.timestamp || new Date().toISOString(),
            source: data.source || 'HowAIConnects SEO Dashboard',
          },
          triggerType,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result = await response.json();

      if (result.success) {
        return {
          success: true,
          message: result.message || 'Webhook triggered successfully',
          zapId: this.extractZapId(webhookUrl),
        };
      } else {
        return {
          success: false,
          message: result.error || 'Webhook trigger failed',
        };
      }
    } catch (error) {
      console.error('Zapier webhook error:', error);
      
      // Fallback to direct webhook call if edge function fails
      try {
        console.log('Falling back to direct webhook call...');
        
        const fallbackResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'HowAIConnects-SEO-Dashboard/1.0',
          },
          body: JSON.stringify({
            ...data,
            timestamp: data.timestamp || new Date().toISOString(),
            source: data.source || 'HowAIConnects SEO Dashboard (Fallback)',
          }),
          mode: 'no-cors',
        });

        return {
          success: true,
          message: 'Webhook triggered successfully (fallback)',
          zapId: this.extractZapId(webhookUrl),
        };
      } catch (fallbackError) {
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Unknown error occurred',
        };
      }
    }
  }

  /**
   * Trigger content published workflow
   */
  async triggerContentPublished(webhookUrl: string, contentData: {
    title: string;
    url: string;
    keywords: string[];
    seoScore: number;
    publishedAt: string;
  }): Promise<ZapierTriggerResponse> {
    return this.triggerWebhook(webhookUrl, {
      ...contentData,
      status: 'published',
      metadata: {
        contentType: 'article',
        action: 'content_published',
      },
    }, { triggerType: 'contentPublished' });
  }

  /**
   * Trigger keyword research workflow
   */
  async triggerKeywordResearch(webhookUrl: string, keywordData: {
    keywords: string[];
    difficulty: number;
    searchVolume: number;
    competition: string;
  }): Promise<ZapierTriggerResponse> {
    return this.triggerWebhook(webhookUrl, {
      keywords: keywordData.keywords,
      metadata: {
        difficulty: keywordData.difficulty,
        searchVolume: keywordData.searchVolume,
        competition: keywordData.competition,
        action: 'keyword_research_completed',
      },
    }, { triggerType: 'keywordResearch' });
  }

  /**
   * Trigger SEO audit workflow
   */
  async triggerSEOAudit(webhookUrl: string, auditData: {
    url: string;
    seoScore: number;
    issues: string[];
    recommendations: string[];
  }): Promise<ZapierTriggerResponse> {
    return this.triggerWebhook(webhookUrl, {
      url: auditData.url,
      seoScore: auditData.seoScore,
      metadata: {
        issues: auditData.issues,
        recommendations: auditData.recommendations,
        action: 'seo_audit_completed',
      },
    }, { triggerType: 'seoAudit' });
  }

  /**
   * Trigger ranking change alert
   */
  async triggerRankingAlert(webhookUrl: string, rankingData: {
    keyword: string;
    oldPosition: number;
    newPosition: number;
    url: string;
    change: number;
  }): Promise<ZapierTriggerResponse> {
    return this.triggerWebhook(webhookUrl, {
      keywords: [rankingData.keyword],
      url: rankingData.url,
      metadata: {
        oldPosition: rankingData.oldPosition,
        newPosition: rankingData.newPosition,
        change: rankingData.change,
        changeType: rankingData.change > 0 ? 'improvement' : 'decline',
        action: 'ranking_change_detected',
      },
    }, { triggerType: 'rankingAlert' });
  }

  /**
   * Batch trigger multiple webhooks
   */
  async batchTrigger(webhookConfigs: Array<{
    webhookUrl: string;
    data: ZapierWebhookData;
  }>): Promise<ZapierTriggerResponse[]> {
    const promises = webhookConfigs.map(config => 
      this.triggerWebhook(config.webhookUrl, config.data)
    );

    return Promise.all(promises);
  }

  /**
   * Validate webhook URL format
   */
  validateWebhookUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname === 'hooks.zapier.com' && 
             parsedUrl.pathname.includes('/hooks/catch/');
    } catch {
      return false;
    }
  }

  /**
   * Extract Zap ID from webhook URL
   */
  private extractZapId(webhookUrl: string): string {
    try {
      const url = new URL(webhookUrl);
      const pathParts = url.pathname.split('/');
      const catchIndex = pathParts.indexOf('catch');
      return catchIndex !== -1 && catchIndex + 1 < pathParts.length 
        ? pathParts[catchIndex + 1] 
        : 'unknown';
    } catch {
      return 'unknown';
    }
  }

  /**
   * Get webhook configuration templates
   */
  getWebhookTemplates() {
    return {
      contentPublished: {
        name: 'Content Published',
        description: 'Trigger when new content is published',
        sampleData: {
          title: 'AI Strategy Guide for Small Businesses',
          url: 'https://howaiconnects.com/blog/ai-strategy-guide',
          keywords: ['AI strategy', 'small business', 'automation'],
          seoScore: 85,
          status: 'published',
        },
      },
      keywordResearch: {
        name: 'Keyword Research Completed',
        description: 'Trigger when keyword research is completed',
        sampleData: {
          keywords: ['AI automation', 'business process optimization'],
          metadata: {
            difficulty: 45,
            searchVolume: 2400,
            competition: 'medium',
          },
        },
      },
      seoAudit: {
        name: 'SEO Audit Completed',
        description: 'Trigger when SEO audit is completed',
        sampleData: {
          url: 'https://howaiconnects.com',
          seoScore: 92,
          metadata: {
            issues: ['Missing alt tags on 2 images'],
            recommendations: ['Add schema markup', 'Optimize page speed'],
          },
        },
      },
      rankingAlert: {
        name: 'Ranking Change Alert',
        description: 'Trigger when keyword rankings change significantly',
        sampleData: {
          keywords: ['AI consultation'],
          url: 'https://howaiconnects.com/services',
          metadata: {
            oldPosition: 15,
            newPosition: 8,
            change: 7,
            changeType: 'improvement',
          },
        },
      },
    };
  }
}

// Export singleton instance
export const zapierService = new ZapierService();