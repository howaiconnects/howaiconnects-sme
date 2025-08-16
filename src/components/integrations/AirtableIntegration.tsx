/**
 * Airtable Integration Component
 * Comprehensive interface for managing Airtable data and operations
 */

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Database, 
  Plus, 
  Search, 
  RefreshCw, 
  Download, 
  Upload, 
  Settings,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";
import { airtableService, AirtableRecord } from '@/services/airtableService';

export const AirtableIntegration: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState<AirtableRecord[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'error'>('unknown');
  const [analytics, setAnalytics] = useState<any>(null);
  const [selectedTable, setSelectedTable] = useState('Leads');
  
  // Form state for creating new records
  const [newRecord, setNewRecord] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    source: 'Website'
  });

  // Available tables
  const tables = [
    { id: 'Leads', name: 'Leads', description: 'Customer leads and prospects' },
    { id: 'User Activity', name: 'User Activity', description: 'User interaction logs' },
    { id: 'Automation Logs', name: 'Automation Logs', description: 'Workflow execution history' },
    { id: 'Content', name: 'Content', description: 'Content management' },
    { id: 'Analytics', name: 'Analytics', description: 'Performance metrics' }
  ];

  useEffect(() => {
    testConnection();
    loadAnalytics();
  }, []);

  const testConnection = async () => {
    try {
      setIsLoading(true);
      await airtableService.testConnection();
      setConnectionStatus('connected');
      toast({
        title: "Connection Successful",
        description: "Successfully connected to Airtable",
      });
    } catch (error) {
      console.error('Connection test failed:', error);
      setConnectionStatus('error');
      toast({
        title: "Connection Failed",
        description: "Could not connect to Airtable. Please check your configuration.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadRecords = async (tableName: string = selectedTable) => {
    try {
      setIsLoading(true);
      const response = await airtableService.getRecords(tableName, {
        maxRecords: 50,
        sort: [{ field: 'Created Date', direction: 'desc' }]
      });
      setRecords(response.records);
      toast({
        title: "Records Loaded",
        description: `Loaded ${response.records.length} records from ${tableName}`,
      });
    } catch (error) {
      console.error('Failed to load records:', error);
      toast({
        title: "Load Failed",
        description: "Could not load records from Airtable",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadAnalytics = async () => {
    try {
      const analyticsData = await airtableService.getAnalyticsData(30);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    }
  };

  const createLead = async () => {
    if (!newRecord.name || !newRecord.email) {
      toast({
        title: "Validation Error",
        description: "Name and email are required",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      await airtableService.createLead(newRecord);
      
      // Reset form
      setNewRecord({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        source: 'Website'
      });

      toast({
        title: "Lead Created",
        description: "Successfully created new lead in Airtable",
      });

      // Reload records if we're viewing leads
      if (selectedTable === 'Leads') {
        loadRecords();
      }
      
      // Reload analytics
      loadAnalytics();
    } catch (error) {
      console.error('Failed to create lead:', error);
      toast({
        title: "Creation Failed",
        description: "Could not create lead in Airtable",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logTestActivity = async () => {
    try {
      setIsLoading(true);
      await airtableService.logActivity({
        action: 'Manual Test',
        details: 'Test activity logged from dashboard',
        page: '/seo/automation'
      });

      toast({
        title: "Activity Logged",
        description: "Test activity recorded in Airtable",
      });

      if (selectedTable === 'User Activity') {
        loadRecords();
      }
    } catch (error) {
      console.error('Failed to log activity:', error);
      toast({
        title: "Logging Failed",
        description: "Could not log activity to Airtable",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatFieldValue = (value: any): string => {
    if (value === null || value === undefined) return '-';
    if (typeof value === 'object') return JSON.stringify(value);
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  };

  return (
    <div className="space-y-6">
      {/* Header with Connection Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-600" />
              <div>
                <CardTitle>Airtable Integration</CardTitle>
                <CardDescription>Manage your business data and automate workflows</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={connectionStatus === 'connected' ? 'default' : 'destructive'}
                className="flex items-center gap-1"
              >
                {connectionStatus === 'connected' ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <AlertCircle className="h-3 w-3" />
                )}
                {connectionStatus === 'connected' ? 'Connected' : 'Not Connected'}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={testConnection}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Test Connection
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Analytics Overview */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                  <p className="text-2xl font-bold">{analytics.totalLeads}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New Leads</p>
                  <p className="text-2xl font-bold">{analytics.newLeads}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold">{analytics.conversionRate.toFixed(1)}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Top Source</p>
                  <p className="text-lg font-bold">
                    {analytics.topSources[0]?.source || 'N/A'}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Tabs */}
      <Tabs defaultValue="records" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="records">Data Records</TabsTrigger>
          <TabsTrigger value="create">Create Lead</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="records" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Browse Records</CardTitle>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                    className="px-3 py-1 border rounded-md text-sm"
                  >
                    {tables.map(table => (
                      <option key={table.id} value={table.id}>
                        {table.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => loadRecords()}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                    Load Records
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {records.length > 0 ? (
                <div className="space-y-3">
                  {records.map((record, index) => (
                    <Card key={record.id || index} className="border">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {Object.entries(record.fields).map(([key, value]) => (
                            <div key={key}>
                              <Label className="text-xs font-medium text-muted-foreground">
                                {key}
                              </Label>
                              <p className="text-sm truncate">
                                {formatFieldValue(value)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Database className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No records found. Click "Load Records" to fetch data.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Lead</CardTitle>
              <CardDescription>Add a new lead to your Airtable database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={newRecord.name}
                    onChange={(e) => setNewRecord({...newRecord, name: e.target.value})}
                    placeholder="Enter full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newRecord.email}
                    onChange={(e) => setNewRecord({...newRecord, email: e.target.value})}
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={newRecord.company}
                    onChange={(e) => setNewRecord({...newRecord, company: e.target.value})}
                    placeholder="Enter company name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={newRecord.phone}
                    onChange={(e) => setNewRecord({...newRecord, phone: e.target.value})}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={newRecord.message}
                  onChange={(e) => setNewRecord({...newRecord, message: e.target.value})}
                  placeholder="Enter message or notes"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="source">Lead Source</Label>
                <select
                  id="source"
                  value={newRecord.source}
                  onChange={(e) => setNewRecord({...newRecord, source: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Website">Website</option>
                  <option value="Contact Form">Contact Form</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>

              <Button
                onClick={createLead}
                disabled={isLoading || !newRecord.name || !newRecord.email}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Lead
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Testing</CardTitle>
              <CardDescription>Test activity logging and view recent automation events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={logTestActivity}
                disabled={isLoading}
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Log Test Activity
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <p>This will create a test activity record in your Airtable "User Activity" table.</p>
                <p>You can then switch to the "User Activity" table in the Data Records tab to see the logged activity.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integration Settings</CardTitle>
              <CardDescription>Configure your Airtable integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Connection Status</Label>
                <div className="flex items-center gap-2">
                  <Badge variant={connectionStatus === 'connected' ? 'default' : 'destructive'}>
                    {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
                  </Badge>
                  {connectionStatus === 'connected' && (
                    <span className="text-sm text-green-600">
                      API credentials are configured and working
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Available Tables</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tables.map(table => (
                    <div key={table.id} className="p-3 border rounded-lg">
                      <p className="font-medium">{table.name}</p>
                      <p className="text-sm text-muted-foreground">{table.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  API credentials are managed through Supabase secrets for security.
                  If you need to update your Airtable API key or base ID, please contact your administrator.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AirtableIntegration;