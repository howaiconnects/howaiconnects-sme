import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Zap, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  BarChart3,
  Settings,
  Play,
  Copy
} from "lucide-react";

const ZapierAirtableIntegration = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [airtableBaseId, setAirtableBaseId] = useState('');
  const { toast } = useToast();

  const integrationWorkflows = [
    {
      id: 'lead-capture',
      title: 'Lead Capture Automation',
      description: 'Contact form submissions → Airtable CRM → Follow-up sequences',
      steps: [
        'User submits contact form',
        'Zapier receives webhook',
        'Data saved to Airtable CRM',
        'Email sequence triggered',
        'Task created for sales team'
      ],
      status: 'ready',
      zapTrigger: 'Webhook',
      zapActions: ['Airtable Create Record', 'Email by Zapier', 'Slack Notification']
    },
    {
      id: 'seo-reporting',
      title: 'SEO Performance Tracking',
      description: 'SEO metrics → Airtable dashboard → Weekly reports',
      steps: [
        'SEO data collected',
        'Metrics sent via webhook',
        'Airtable dashboard updated',
        'Weekly report generated',
        'Stakeholders notified'
      ],
      status: 'ready',
      zapTrigger: 'Schedule by Zapier',
      zapActions: ['Airtable Update Record', 'Google Sheets', 'Email by Zapier']
    },
    {
      id: 'consultation-booking',
      title: 'Consultation Management',
      description: 'Booking confirmations → Airtable scheduling → Calendar sync',
      steps: [
        'Consultation booked',
        'Client data captured',
        'Airtable record created',
        'Calendar event synced',
        'Confirmation email sent'
      ],
      status: 'development',
      zapTrigger: 'Webhook',
      zapActions: ['Airtable Create Record', 'Google Calendar', 'Email by Zapier']
    },
    {
      id: 'content-pipeline',
      title: 'Content Marketing Pipeline',
      description: 'Blog posts → Airtable content calendar → Social media distribution',
      steps: [
        'Blog post published',
        'Content metadata extracted',
        'Airtable calendar updated',
        'Social posts scheduled',
        'Analytics tracked'
      ],
      status: 'planned',
      zapTrigger: 'RSS by Zapier',
      zapActions: ['Airtable Create Record', 'Buffer', 'Google Analytics']
    }
  ];

  const airtableTables = [
    {
      name: 'Leads & Contacts',
      description: 'Central CRM for all customer interactions',
      fields: ['Name', 'Email', 'Company', 'Status', 'Source', 'Notes', 'Last Contact'],
      integrations: ['Contact Forms', 'Zapier Webhooks', 'Email Marketing']
    },
    {
      name: 'SEO Performance',
      description: 'Track keyword rankings and website metrics',
      fields: ['Date', 'Keywords', 'Rankings', 'Traffic', 'Conversions', 'Competitor Data'],
      integrations: ['SEO Dashboard', 'Google Analytics', 'Search Console']
    },
    {
      name: 'Content Calendar',
      description: 'Plan and track content marketing efforts',
      fields: ['Title', 'Type', 'Status', 'Publish Date', 'Author', 'Performance', 'Social Links'],
      integrations: ['CMS', 'Social Media', 'Analytics']
    },
    {
      name: 'Project Pipeline',
      description: 'Manage client projects and deliverables',
      fields: ['Client', 'Project Type', 'Status', 'Start Date', 'Deadline', 'Team', 'Budget'],
      integrations: ['Project Management', 'Time Tracking', 'Invoicing']
    }
  ];

  const handleTestWebhook = async () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsConnecting(true);
    try {
      const response = await fetch('/api/supabase/functions/v1/zapier-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          webhookUrl,
          data: {
            test: true,
            source: 'HowAIConnects Integration Test',
            timestamp: new Date().toISOString(),
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Test integration between HowAIConnects and Airtable'
          },
          triggerType: 'integration_test'
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Test webhook sent successfully! Check your Zap history.",
        });
      } else {
        throw new Error('Failed to send test webhook');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send test webhook. Please check your URL.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            <Database className="h-5 w-5 text-blue-500" />
            Zapier + Airtable Integration Hub
          </CardTitle>
          <CardDescription>
            Connect your business workflows with powerful automation and data management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center justify-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <div className="text-center">
                <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <p className="font-medium">Zapier</p>
                <p className="text-sm text-muted-foreground">Automation Platform</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-2">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-center">
                <Database className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-medium">Airtable</p>
                <p className="text-sm text-muted-foreground">Database & CRM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="workflows" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="airtable">Airtable Setup</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="workflows" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integration Workflows</CardTitle>
              <CardDescription>
                Pre-built automation workflows connecting your app to Zapier and Airtable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrationWorkflows.map((workflow) => (
                  <Card key={workflow.id} className="border-l-4 border-l-primary">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{workflow.title}</h3>
                          <p className="text-muted-foreground">{workflow.description}</p>
                        </div>
                        <Badge 
                          variant={
                            workflow.status === 'ready' ? 'default' :
                            workflow.status === 'development' ? 'secondary' : 'outline'
                          }
                        >
                          {workflow.status === 'ready' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {workflow.status === 'development' && <Clock className="h-3 w-3 mr-1" />}
                          {workflow.status === 'planned' && <Settings className="h-3 w-3 mr-1" />}
                          {workflow.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Workflow Steps:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-sm">
                            {workflow.steps.map((step, index) => (
                              <li key={index} className="text-muted-foreground">{step}</li>
                            ))}
                          </ol>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Zapier Configuration:</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium">Trigger:</span> {workflow.zapTrigger}
                            </div>
                            <div>
                              <span className="font-medium">Actions:</span>
                              <ul className="list-disc list-inside ml-4 mt-1">
                                {workflow.zapActions.map((action, index) => (
                                  <li key={index} className="text-muted-foreground">{action}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="airtable" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Airtable Database Structure</CardTitle>
              <CardDescription>
                Recommended Airtable base structure for your business operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {airtableTables.map((table, index) => (
                  <Card key={index} className="border">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            {table.name}
                          </h3>
                          <p className="text-muted-foreground">{table.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Fields:</h4>
                          <div className="flex flex-wrap gap-1">
                            {table.fields.map((field, fieldIndex) => (
                              <Badge key={fieldIndex} variant="outline" className="text-xs">
                                {field}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Integrations:</h4>
                          <div className="flex flex-wrap gap-1">
                            {table.integrations.map((integration, intIndex) => (
                              <Badge key={intIndex} variant="secondary" className="text-xs">
                                {integration}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-medium mb-2">Setup Instructions:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Create a new Airtable base for HowAIConnects</li>
                  <li>Set up the tables above with suggested fields</li>
                  <li>Configure field types (Text, Email, Date, etc.)</li>
                  <li>Create views for different workflows (Active Leads, Recent Content, etc.)</li>
                  <li>Generate API key and get Base ID from Airtable</li>
                  <li>Test connections with sample data</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integration Testing</CardTitle>
              <CardDescription>
                Test your Zapier and Airtable integrations before going live
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="webhook-url">Zapier Webhook URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                  />
                  <Button
                    onClick={() => copyToClipboard('https://yourproject.supabase.co/functions/v1/zapier-webhook')}
                    variant="outline"
                    size="sm"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Your webhook endpoint: https://yourproject.supabase.co/functions/v1/zapier-webhook
                </p>
              </div>

              <div>
                <Label htmlFor="airtable-base">Airtable Base ID</Label>
                <Input
                  id="airtable-base"
                  value={airtableBaseId}
                  onChange={(e) => setAirtableBaseId(e.target.value)}
                  placeholder="appXXXXXXXXXXXXXX"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Find this in your Airtable API documentation
                </p>
              </div>

              <Button 
                onClick={handleTestWebhook} 
                disabled={isConnecting}
                className="w-full"
              >
                {isConnecting ? (
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                Test Integration
              </Button>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <h4 className="font-medium mb-2">Testing Checklist:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Set up a test Zap with webhook trigger</li>
                  <li>Configure Airtable action to create records</li>
                  <li>Test with sample contact form data</li>
                  <li>Verify data appears correctly in Airtable</li>
                  <li>Check webhook delivery in Zapier history</li>
                  <li>Test error handling with invalid data</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integration Monitoring</CardTitle>
              <CardDescription>
                Monitor and troubleshoot your Zapier and Airtable integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Key Metrics
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Webhook Success Rate:</span>
                        <Badge variant="default">98.5%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Airtable Records Created:</span>
                        <Badge variant="outline">1,247</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Failed Integrations:</span>
                        <Badge variant="destructive">3</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg Response Time:</span>
                        <Badge variant="secondary">245ms</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Quick Actions
                    </h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        View Zapier History
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Check Airtable Logs
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Test All Webhooks
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Export Integration Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ZapierAirtableIntegration;