import { Base, Table, Record, Field, SyncConfig } from './types';
import { AirtableClient } from './client';
import { SyncEngine } from './sync';
import { DataTransformer } from './transformer';
import { CacheManager } from './cache';
import { ErrorHandler } from './error';
import { Logger } from './logger';

export class AirtableSDK {
  private client: AirtableClient;
  private syncEngine: SyncEngine;
  private transformer: DataTransformer;
  private cache: CacheManager;
  private errorHandler: ErrorHandler;
  private logger: Logger;

  constructor(config: {
    apiKey: string;
    baseId?: string;
    cacheConfig?: {
      enabled: boolean;
      ttl: number;
    };
    syncConfig?: {
      enabled: boolean;
      interval: number;
    };
    logLevel?: 'debug' | 'info' | 'warn' | 'error';
  }) {
    this.logger = new Logger(config.logLevel || 'info');
    this.errorHandler = new ErrorHandler(this.logger);
    this.cache = new CacheManager(config.cacheConfig);
    this.client = new AirtableClient(config.apiKey, this.cache, this.errorHandler);
    this.syncEngine = new SyncEngine(this.client, config.syncConfig);
    this.transformer = new DataTransformer();
  }

  // Base Management
  async listBases(): Promise<Base[]> {
    try {
      const bases = await this.client.getBases();
      return bases.map(base => ({
        id: base.id,
        name: base.name,
        tables: base.tables || []
      }));
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to list bases');
      throw error;
    }
  }

  async getBase(baseId: string): Promise<Base> {
    try {
      return await this.client.getBase(baseId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to get base: ${baseId}`);
      throw error;
    }
  }

  // Table Operations
  async listTables(baseId: string): Promise<Table[]> {
    try {
      return await this.client.getTables(baseId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to list tables for base: ${baseId}`);
      throw error;
    }
  }

  async getTable(baseId: string, tableId: string): Promise<Table> {
    try {
      return await this.client.getTable(baseId, tableId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to get table: ${tableId}`);
      throw error;
    }
  }

  // Record Operations
  async listRecords(baseId: string, tableId: string, options?: {
    view?: string;
    fields?: string[];
    sort?: Array<{ field: string; direction: 'asc' | 'desc' }>;
    filter?: string;
    pageSize?: number;
    offset?: string;
  }): Promise<{ records: Record[]; offset?: string }> {
    try {
      return await this.client.getRecords(baseId, tableId, options);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to list records for table: ${tableId}`);
      throw error;
    }
  }

  async createRecord(baseId: string, tableId: string, fields: any): Promise<Record> {
    try {
      return await this.client.createRecord(baseId, tableId, fields);
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to create record');
      throw error;
    }
  }

  async updateRecord(baseId: string, tableId: string, recordId: string, fields: any): Promise<Record> {
    try {
      return await this.client.updateRecord(baseId, tableId, recordId, fields);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to update record: ${recordId}`);
      throw error;
    }
  }

  async deleteRecord(baseId: string, tableId: string, recordId: string): Promise<void> {
    try {
      await this.client.deleteRecord(baseId, tableId, recordId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to delete record: ${recordId}`);
      throw error;
    }
  }

  // Bulk Operations
  async bulkCreate(baseId: string, tableId: string, records: any[]): Promise<Record[]> {
    try {
      return await this.client.bulkCreate(baseId, tableId, records);
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to bulk create records');
      throw error;
    }
  }

  async bulkUpdate(baseId: string, tableId: string, records: Array<{ id: string; fields: any }>): Promise<Record[]> {
    try {
      return await this.client.bulkUpdate(baseId, tableId, records);
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to bulk update records');
      throw error;
    }
  }

  async bulkDelete(baseId: string, tableId: string, recordIds: string[]): Promise<void> {
    try {
      await this.client.bulkDelete(baseId, tableId, recordIds);
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to bulk delete records');
      throw error;
    }
  }

  // Field Management
  async listFields(baseId: string, tableId: string): Promise<Field[]> {
    try {
      return await this.client.getFields(baseId, tableId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to list fields for table: ${tableId}`);
      throw error;
    }
  }

  async createField(baseId: string, tableId: string, field: Omit<Field, 'id'>): Promise<Field> {
    try {
      return await this.client.createField(baseId, tableId, field);
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to create field');
      throw error;
    }
  }

  async updateField(baseId: string, tableId: string, fieldId: string, updates: Partial<Field>): Promise<Field> {
    try {
      return await this.client.updateField(baseId, tableId, fieldId, updates);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to update field: ${fieldId}`);
      throw error;
    }
  }

  // Sync Operations
  async configureSyncRule(config: SyncConfig): Promise<void> {
    try {
      await this.syncEngine.configureSync(config);
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to configure sync rule');
      throw error;
    }
  }

  async startSync(syncId: string): Promise<void> {
    try {
      await this.syncEngine.startSync(syncId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to start sync: ${syncId}`);
      throw error;
    }
  }

  async stopSync(syncId: string): Promise<void> {
    try {
      await this.syncEngine.stopSync(syncId);
    } catch (error) {
      this.errorHandler.handle(error, `Failed to stop sync: ${syncId}`);
      throw error;
    }
  }

  // Data Transformation
  async importData(baseId: string, tableId: string, data: any[], options: {
    format: 'csv' | 'json' | 'excel';
    mapping: Record<string, string>;
    transformations?: Array<{
      field: string;
      operation: 'format' | 'validate' | 'transform';
      config: any;
    }>;
  }): Promise<{ success: boolean; records: Record[]; errors: any[] }> {
    try {
      const transformedData = await this.transformer.transform(data, options.transformations);
      const records = await this.bulkCreate(baseId, tableId, transformedData);
      return { success: true, records, errors: [] };
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to import data');
      throw error;
    }
  }

  async exportData(baseId: string, tableId: string, options: {
    format: 'csv' | 'json' | 'excel';
    fields?: string[];
    filter?: string;
  }): Promise<{ data: any; format: string }> {
    try {
      const { records } = await this.listRecords(baseId, tableId, {
        fields: options.fields,
        filter: options.filter
      });
      const exportedData = await this.transformer.formatForExport(records, options.format);
      return { data: exportedData, format: options.format };
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to export data');
      throw error;
    }
  }

  // Cache Management
  async clearCache(): Promise<void> {
    try {
      await this.cache.clear();
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to clear cache');
      throw error;
    }
  }

  // Utility Methods
  async validateSchema(baseId: string, tableId: string): Promise<{
    valid: boolean;
    errors: any[];
  }> {
    try {
      const fields = await this.listFields(baseId, tableId);
      // Implement schema validation logic
      return { valid: true, errors: [] };
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to validate schema');
      throw error;
    }
  }

  async getMetrics(baseId: string, tableId?: string): Promise<{
    recordCount: number;
    lastModified: Date;
    size: number;
  }> {
    try {
      // Implement metrics collection logic
      return {
        recordCount: 0,
        lastModified: new Date(),
        size: 0
      };
    } catch (error) {
      this.errorHandler.handle(error, 'Failed to get metrics');
      throw error;
    }
  }
}

export * from './types';
