/**
 * Latitude.so Integration Service
 * Handles prompt management, versioning, and AI model orchestration
 */

import { latitudeConfig } from '@/config/seoConfig';

export interface LatitudePromptRequest {
  promptId: string;
  version?: string;
  variables?: Record<string, any>;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface LatitudePromptResponse {
  id: string;
  content: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  model: string;
  finishReason: string;
}

export interface LatitudePrompt {
  id: string;
  name: string;
  description: string;
  version: string;
  template: string;
  variables: string[];
  model: string;
  settings: {
    temperature: number;
    maxTokens: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
  };
}

class LatitudeService {
  private apiKey: string;
  private baseUrl: string;
  private projectId: string;
  private isCustomEndpoint: boolean;

  constructor(customEndpoint?: string) {
    this.apiKey = latitudeConfig.apiKey;
    this.baseUrl = customEndpoint || latitudeConfig.baseUrl;
    this.projectId = latitudeConfig.projectId;
    this.isCustomEndpoint = !!customEndpoint;
  }

  // Configure for Azure Container Apps deployment
  static createAzureInstance(containerAppUrl: string, apiKey: string, projectId: string): LatitudeService {
    const instance = new LatitudeService(containerAppUrl);
    instance.apiKey = apiKey;
    instance.projectId = projectId;
    return instance;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const config: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'X-Project-ID': this.projectId,
          ...options.headers,
        },
        ...options,
      };

      console.log(`Making Latitude.so request to: ${url}`);
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`Latitude.so API error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Latitude.so request failed:', error);
      throw error;
    }
  }

  // Execute a prompt with variables
  async executePrompt(request: LatitudePromptRequest): Promise<LatitudePromptResponse> {
    return this.makeRequest<LatitudePromptResponse>('/prompts/run', {
      method: 'POST',
      body: JSON.stringify({
        prompt_id: request.promptId,
        version: request.version || 'latest',
        variables: request.variables || {},
        model: request.model,
        temperature: request.temperature,
        max_tokens: request.maxTokens,
      }),
    });
  }

  // Get all prompts in the project
  async getPrompts(): Promise<LatitudePrompt[]> {
    return this.makeRequest<LatitudePrompt[]>('/prompts');
  }

  // Get a specific prompt by ID
  async getPrompt(promptId: string, version?: string): Promise<LatitudePrompt> {
    const endpoint = version 
      ? `/prompts/${promptId}/versions/${version}`
      : `/prompts/${promptId}`;
    return this.makeRequest<LatitudePrompt>(endpoint);
  }

  // Create a new prompt
  async createPrompt(prompt: Omit<LatitudePrompt, 'id'>): Promise<LatitudePrompt> {
    return this.makeRequest<LatitudePrompt>('/prompts', {
      method: 'POST',
      body: JSON.stringify(prompt),
    });
  }

  // Update an existing prompt
  async updatePrompt(promptId: string, prompt: Partial<LatitudePrompt>): Promise<LatitudePrompt> {
    return this.makeRequest<LatitudePrompt>(`/prompts/${promptId}`, {
      method: 'PUT',
      body: JSON.stringify(prompt),
    });
  }

  // Get prompt execution history
  async getPromptHistory(promptId: string, limit: number = 50): Promise<LatitudePromptResponse[]> {
    return this.makeRequest<LatitudePromptResponse[]>(`/prompts/${promptId}/history?limit=${limit}`);
  }

  // Batch execute multiple prompts
  async batchExecutePrompts(requests: LatitudePromptRequest[]): Promise<LatitudePromptResponse[]> {
    return this.makeRequest<LatitudePromptResponse[]>('/prompts/batch', {
      method: 'POST',
      body: JSON.stringify({ requests }),
    });
  }

  // Get project analytics
  async getAnalytics(startDate: string, endDate: string) {
    return this.makeRequest(`/analytics?start_date=${startDate}&end_date=${endDate}`);
  }

  // SEO-specific prompt execution methods
  async generateKeywordResearch(variables: {
    topic: string;
    industry: string;
    targetAudience: string;
    competitors?: string[];
  }): Promise<LatitudePromptResponse> {
    return this.executePrompt({
      promptId: latitudeConfig.promptVersions.keywordResearch,
      variables,
    });
  }

  async generateContent(variables: {
    keywords: string[];
    title: string;
    outline: string;
    wordCount: number;
    tone: string;
    targetAudience: string;
  }): Promise<LatitudePromptResponse> {
    return this.executePrompt({
      promptId: latitudeConfig.promptVersions.contentGeneration,
      variables,
    });
  }

  async optimizeForSEO(variables: {
    content: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    targetUrl: string;
    metaDescription?: string;
  }): Promise<LatitudePromptResponse> {
    return this.executePrompt({
      promptId: latitudeConfig.promptVersions.seoOptimization,
      variables,
    });
  }

  async analyzeCompetitors(variables: {
    competitors: string[];
    targetKeywords: string[];
    industry: string;
  }): Promise<LatitudePromptResponse> {
    return this.executePrompt({
      promptId: latitudeConfig.promptVersions.competitorAnalysis,
      variables,
    });
  }

  async rewriteContent(variables: {
    originalContent: string;
    improvementGoals: string[];
    targetKeywords: string[];
    tone: string;
  }): Promise<LatitudePromptResponse> {
    return this.executePrompt({
      promptId: latitudeConfig.promptVersions.contentRewriting,
      variables,
    });
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.makeRequest('/health');
  }

  // Test connection with a simple prompt
  async testConnection(): Promise<boolean> {
    try {
      await this.healthCheck();
      return true;
    } catch (error) {
      console.error('Latitude.so connection test failed:', error);
      return false;
    }
  }
}

export const latitudeService = new LatitudeService();
export default LatitudeService;