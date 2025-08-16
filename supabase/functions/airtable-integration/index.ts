/**
 * Airtable Integration Edge Function
 * Handles all Airtable operations with proper authentication and error handling
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AirtableRecord {
  id?: string;
  fields: Record<string, any>;
  createdTime?: string;
}

interface AirtableResponse {
  records: AirtableRecord[];
  offset?: string;
}

interface AirtableConfig {
  baseId: string;
  tableName: string;
  apiKey: string;
}

class AirtableService {
  private apiKey: string;
  private baseUrl: string = 'https://api.airtable.com/v0';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async makeRequest<T>(
    method: string,
    endpoint: string,
    data?: any
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    };

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      config.body = JSON.stringify(data);
    }

    console.log(`Making Airtable request: ${method} ${url}`);
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable API error:', response.status, errorText);
      throw new Error(`Airtable API error: ${response.status} - ${errorText}`);
    }

    return await response.json();
  }

  // Get records from a table
  async getRecords(
    baseId: string, 
    tableName: string, 
    options: {
      maxRecords?: number;
      pageSize?: number;
      sort?: Array<{ field: string; direction: 'asc' | 'desc' }>;
      filterByFormula?: string;
      view?: string;
      fields?: string[];
      offset?: string;
    } = {}
  ): Promise<AirtableResponse> {
    const params = new URLSearchParams();
    
    if (options.maxRecords) params.append('maxRecords', options.maxRecords.toString());
    if (options.pageSize) params.append('pageSize', options.pageSize.toString());
    if (options.view) params.append('view', options.view);
    if (options.filterByFormula) params.append('filterByFormula', options.filterByFormula);
    if (options.offset) params.append('offset', options.offset);
    
    if (options.fields) {
      options.fields.forEach(field => params.append('fields[]', field));
    }
    
    if (options.sort) {
      options.sort.forEach((sortItem, index) => {
        params.append(`sort[${index}][field]`, sortItem.field);
        params.append(`sort[${index}][direction]`, sortItem.direction);
      });
    }

    const queryString = params.toString();
    const endpoint = `/${baseId}/${encodeURIComponent(tableName)}${queryString ? `?${queryString}` : ''}`;
    
    return this.makeRequest<AirtableResponse>('GET', endpoint);
  }

  // Create a new record
  async createRecord(
    baseId: string, 
    tableName: string, 
    fields: Record<string, any>
  ): Promise<AirtableRecord> {
    const endpoint = `/${baseId}/${encodeURIComponent(tableName)}`;
    const data = { fields };
    
    const response = await this.makeRequest<{ records: AirtableRecord[] }>('POST', endpoint, { records: [data] });
    return response.records[0];
  }

  // Create multiple records
  async createRecords(
    baseId: string, 
    tableName: string, 
    records: Array<{ fields: Record<string, any> }>
  ): Promise<AirtableRecord[]> {
    const endpoint = `/${baseId}/${encodeURIComponent(tableName)}`;
    
    // Airtable limits to 10 records per request
    const chunks = [];
    for (let i = 0; i < records.length; i += 10) {
      chunks.push(records.slice(i, i + 10));
    }

    const results: AirtableRecord[] = [];
    for (const chunk of chunks) {
      const response = await this.makeRequest<{ records: AirtableRecord[] }>('POST', endpoint, { records: chunk });
      results.push(...response.records);
    }

    return results;
  }

  // Update a record
  async updateRecord(
    baseId: string, 
    tableName: string, 
    recordId: string, 
    fields: Record<string, any>
  ): Promise<AirtableRecord> {
    const endpoint = `/${baseId}/${encodeURIComponent(tableName)}/${recordId}`;
    const data = { fields };
    
    return this.makeRequest<AirtableRecord>('PATCH', endpoint, data);
  }

  // Delete a record
  async deleteRecord(
    baseId: string, 
    tableName: string, 
    recordId: string
  ): Promise<{ deleted: boolean; id: string }> {
    const endpoint = `/${baseId}/${encodeURIComponent(tableName)}/${recordId}`;
    
    return this.makeRequest<{ deleted: boolean; id: string }>('DELETE', endpoint);
  }

  // Get base schema
  async getBaseSchema(baseId: string): Promise<any> {
    const endpoint = `/meta/bases/${baseId}/tables`;
    
    return this.makeRequest<any>('GET', endpoint);
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get Airtable credentials from Supabase secrets
    const airtableApiKey = Deno.env.get('AIRTABLE_API_KEY');
    const defaultBaseId = Deno.env.get('AIRTABLE_BASE_ID');

    if (!airtableApiKey) {
      throw new Error('Airtable API key not configured');
    }

    const airtableService = new AirtableService(airtableApiKey);
    
    const { action, baseId, tableName, recordId, fields, records, options } = await req.json();

    let result;

    switch (action) {
      case 'getRecords':
        result = await airtableService.getRecords(
          baseId || defaultBaseId!, 
          tableName, 
          options || {}
        );
        break;

      case 'createRecord':
        if (!fields) {
          throw new Error('Fields are required for creating a record');
        }
        result = await airtableService.createRecord(
          baseId || defaultBaseId!, 
          tableName, 
          fields
        );
        break;

      case 'createRecords':
        if (!records || !Array.isArray(records)) {
          throw new Error('Records array is required for creating multiple records');
        }
        result = await airtableService.createRecords(
          baseId || defaultBaseId!, 
          tableName, 
          records
        );
        break;

      case 'updateRecord':
        if (!recordId || !fields) {
          throw new Error('Record ID and fields are required for updating a record');
        }
        result = await airtableService.updateRecord(
          baseId || defaultBaseId!, 
          tableName, 
          recordId, 
          fields
        );
        break;

      case 'deleteRecord':
        if (!recordId) {
          throw new Error('Record ID is required for deleting a record');
        }
        result = await airtableService.deleteRecord(
          baseId || defaultBaseId!, 
          tableName, 
          recordId
        );
        break;

      case 'getSchema':
        result = await airtableService.getBaseSchema(baseId || defaultBaseId!);
        break;

      case 'testConnection':
        // Simple test to verify API key and base access
        result = await airtableService.getRecords(
          baseId || defaultBaseId!, 
          tableName || 'Content', 
          { maxRecords: 1 }
        );
        result = { status: 'success', message: 'Connection test successful' };
        break;

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Airtable integration error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Unknown error occurred',
        details: error.stack 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});