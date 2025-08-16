/**
 * Airtable Service
 * Frontend service for interacting with Airtable through our edge function
 */

import { supabase } from '@/integrations/supabase/client';
import { AirtableResource, ResourceItem } from "@/types/resources";

export interface AirtableRecord {
  id?: string;
  fields: Record<string, any>;
  createdTime?: string;
}

export interface AirtableRecordInput {
  fields: Record<string, any>;
}

export interface AirtableGetOptions {
  maxRecords?: number;
  pageSize?: number;
  sort?: Array<{ field: string; direction: 'asc' | 'desc' }>;
  filterByFormula?: string;
  view?: string;
  fields?: string[];
  offset?: string;
}

export interface AirtableResponse {
  records: AirtableRecord[];
  offset?: string;
}

class AirtableServiceClass {
  
  private async callEdgeFunction(action: string, payload: any = {}) {
    try {
      const { data, error } = await supabase.functions.invoke('airtable-integration', {
        body: {
          action,
          ...payload
        }
      });

      if (error) {
        console.error('Airtable edge function error:', error);
        throw new Error(error.message || 'Failed to call Airtable service');
      }

      if (!data.success) {
        throw new Error(data.error || 'Airtable operation failed');
      }

      return data.data;
    } catch (error) {
      console.error('Airtable service error:', error);
      throw error;
    }
  }

  /**
   * Get records from an Airtable table
   */
  async getRecords(
    tableName: string,
    options: AirtableGetOptions = {},
    baseId?: string
  ): Promise<AirtableResponse> {
    return this.callEdgeFunction('getRecords', {
      tableName,
      options,
      baseId
    });
  }

  /**
   * Create a single record in Airtable
   */
  async createRecord(
    tableName: string,
    fields: Record<string, any>,
    baseId?: string
  ): Promise<AirtableRecord> {
    return this.callEdgeFunction('createRecord', {
      tableName,
      fields,
      baseId
    });
  }

  /**
   * Create multiple records in Airtable (batch operation)
   */
  async createRecords(
    tableName: string,
    records: AirtableRecordInput[],
    baseId?: string
  ): Promise<AirtableRecord[]> {
    return this.callEdgeFunction('createRecords', {
      tableName,
      records,
      baseId
    });
  }

  /**
   * Update a record in Airtable
   */
  async updateRecord(
    tableName: string,
    recordId: string,
    fields: Record<string, any>,
    baseId?: string
  ): Promise<AirtableRecord> {
    return this.callEdgeFunction('updateRecord', {
      tableName,
      recordId,
      fields,
      baseId
    });
  }

  /**
   * Delete a record from Airtable
   */
  async deleteRecord(
    tableName: string,
    recordId: string,
    baseId?: string
  ): Promise<{ deleted: boolean; id: string }> {
    return this.callEdgeFunction('deleteRecord', {
      tableName,
      recordId,
      baseId
    });
  }

  /**
   * Get base schema information
   */
  async getBaseSchema(baseId?: string): Promise<any> {
    return this.callEdgeFunction('getSchema', { baseId });
  }

  /**
   * Test connection to Airtable
   */
  async testConnection(tableName: string = 'Content', baseId?: string): Promise<any> {
    return this.callEdgeFunction('testConnection', {
      tableName,
      baseId
    });
  }

  // Business-specific helper methods

  /**
   * Create a lead record from contact form submission
   */
  async createLead(leadData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message?: string;
    source?: string;
    status?: string;
  }): Promise<AirtableRecord> {
    const fields = {
      'Name': leadData.name,
      'Email': leadData.email,
      'Company': leadData.company || '',
      'Phone': leadData.phone || '',
      'Message': leadData.message || '',
      'Source': leadData.source || 'Website',
      'Status': leadData.status || 'New',
      'Created Date': new Date().toISOString().split('T')[0],
      'Lead Score': this.calculateLeadScore(leadData)
    };

    return this.createRecord('Leads', fields);
  }

  /**
   * Log user activity for analytics
   */
  async logActivity(activityData: {
    userId?: string;
    action: string;
    details: string;
    page?: string;
    timestamp?: string;
  }): Promise<AirtableRecord> {
    const fields = {
      'User ID': activityData.userId || 'Anonymous',
      'Action': activityData.action,
      'Details': activityData.details,
      'Page': activityData.page || '',
      'Timestamp': activityData.timestamp || new Date().toISOString(),
      'Date': new Date().toISOString().split('T')[0]
    };

    return this.createRecord('User Activity', fields);
  }

  /**
   * Store automation workflow result
   */
  async logAutomationResult(workflowData: {
    workflowName: string;
    status: 'success' | 'error' | 'warning';
    details: string;
    executionTime?: number;
    triggeredBy?: string;
  }): Promise<AirtableRecord> {
    const fields = {
      'Workflow Name': workflowData.workflowName,
      'Status': workflowData.status,
      'Details': workflowData.details,
      'Execution Time (ms)': workflowData.executionTime || 0,
      'Triggered By': workflowData.triggeredBy || 'System',
      'Timestamp': new Date().toISOString(),
      'Date': new Date().toISOString().split('T')[0]
    };

    return this.createRecord('Automation Logs', fields);
  }

  /**
   * Get recent leads with filtering options
   */
  async getRecentLeads(limit: number = 10, status?: string): Promise<AirtableRecord[]> {
    const options: AirtableGetOptions = {
      maxRecords: limit,
      sort: [{ field: 'Created Date', direction: 'desc' }]
    };

    if (status) {
      options.filterByFormula = `{Status} = '${status}'`;
    }

    const response = await this.getRecords('Leads', options);
    return response.records;
  }

  /**
   * Get analytics data for dashboard
   */
  async getAnalyticsData(days: number = 30): Promise<{
    totalLeads: number;
    newLeads: number;
    conversionRate: number;
    topSources: Array<{ source: string; count: number }>;
  }> {
    const dateFilter = new Date();
    dateFilter.setDate(dateFilter.getDate() - days);
    const filterDate = dateFilter.toISOString().split('T')[0];

    const options: AirtableGetOptions = {
      filterByFormula: `IS_AFTER({Created Date}, '${filterDate}')`,
      fields: ['Status', 'Source', 'Created Date', 'Lead Score']
    };

    const response = await this.getRecords('Leads', options);
    const leads = response.records;

    const totalLeads = leads.length;
    const newLeads = leads.filter(lead => 
      lead.fields['Status'] === 'New'
    ).length;

    const convertedLeads = leads.filter(lead => 
      lead.fields['Status'] === 'Converted' || lead.fields['Status'] === 'Closed Won'
    ).length;

    const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0;

    // Count sources
    const sourceCount: Record<string, number> = {};
    leads.forEach(lead => {
      const source = lead.fields['Source'] as string || 'Unknown';
      sourceCount[source] = (sourceCount[source] || 0) + 1;
    });

    const topSources = Object.entries(sourceCount)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalLeads,
      newLeads,
      conversionRate,
      topSources
    };
  }

  /**
   * Calculate lead score based on provided data
   */
  private calculateLeadScore(leadData: {
    company?: string;
    phone?: string;
    message?: string;
  }): number {
    let score = 0;
    
    // Base score
    score += 10;
    
    // Company provided
    if (leadData.company) score += 20;
    
    // Phone provided
    if (leadData.phone) score += 15;
    
    // Message length (engagement indicator)
    if (leadData.message) {
      if (leadData.message.length > 100) score += 25;
      else if (leadData.message.length > 50) score += 15;
      else score += 5;
    }

    return Math.min(score, 100); // Cap at 100
  }

  // Legacy methods for backward compatibility
  
  // Convert Airtable resource format to our app's format
  private formatResource(airtableResource: AirtableResource): ResourceItem {
    const { id, fields } = airtableResource;
    
    return {
      id,
      title: fields.resourceName,
      description: fields.shortDescription,
      type: fields.resourceType.toLowerCase(),
      image: fields.featuredImage?.[0]?.url || "/placeholder.svg",
      downloadUrl: `/resources/downloads/${fields.urlSlug}`,
      fileSize: fields.fileSize || "Unknown",
      fileType: fields.fileType || "PDF"
    };
  }

  async fetchResources(): Promise<ResourceItem[]> {
    try {
      const response = await this.getRecords('Resources');
      return response.records.map((record: any) => this.formatResource(record));
    } catch (error) {
      console.error("Error fetching resources from Airtable:", error);
      throw error;
    }
  }

  async fetchResourceBySlug(slug: string): Promise<ResourceItem | null> {
    try {
      const response = await this.getRecords('Resources', {
        filterByFormula: `{urlSlug} = "${slug}"`
      });
      
      if (response.records.length === 0) {
        return null;
      }
      
      return this.formatResource(response.records[0] as any);
    } catch (error) {
      console.error(`Error fetching resource with slug ${slug}:`, error);
      throw error;
    }
  }
}

// Export singleton instance
export const airtableService = new AirtableServiceClass();

// Legacy exports for backward compatibility
export const fetchResources = () => airtableService.fetchResources();
export const fetchResourceBySlug = (slug: string) => airtableService.fetchResourceBySlug(slug);

export default airtableService;