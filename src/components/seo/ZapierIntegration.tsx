import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { zapierService } from '@/services/zapierService';
import { 
  Zap, 
  Plus, 
  Settings, 
  Play, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ExternalLink,
  Trash2
} from 'lucide-react';

interface WebhookConfig {
  id: string;
  name: string;
  url: string;
  triggerType: string;
  isActive: boolean;
  lastTriggered?: string;
  description: string;
}

const ZapierIntegration = () => {
  const { toast } = useToast();
  const [webhooks, setWebhooks] = useState<WebhookConfig[]>([
    {
      id: '1',
      name: 'Content Published Notification',
      url: 'https://hooks.zapier.com/hooks/catch/[YOUR-ZAP-ID]/content-published/',
      triggerType: 'contentPublished',
      isActive: true,
      lastTriggered: '2 hours ago',
      description: 'Notify team when new content is published'
    },
    {
      id: '2',
      name: 'SEO Score Alert',
      url: 'https://hooks.zapier.com/hooks/catch/[YOUR-ZAP-ID]/seo-alert/',
      triggerType: 'seoAudit',
      isActive: false,
      description: 'Alert when SEO score drops below threshold'
    }
  ]);

  const [newWebhook, setNewWebhook] = useState({
    name: '',
    url: '',
    triggerType: 'contentPublished',
    description: ''
  });

  const [testingWebhook, setTestingWebhook] = useState<string | null>(null);

  const webhookTemplates = zapierService.getWebhookTemplates();

  const handleAddWebhook = () => {
    if (!newWebhook.name || !newWebhook.url) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!zapierService.validateWebhookUrl(newWebhook.url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    const webhook: WebhookConfig = {
      id: Date.now().toString(),
      ...newWebhook,
      isActive: true,
    };

    setWebhooks([...webhooks, webhook]);
    setNewWebhook({ name: '', url: '', triggerType: 'contentPublished', description: '' });

    toast({
      title: "Success",
      description: "Webhook added successfully",
    });
  };

  const handleTestWebhook = async (webhook: WebhookConfig) => {
    setTestingWebhook(webhook.id);
    
    try {
      const template = webhookTemplates[webhook.triggerType as keyof typeof webhookTemplates];
      const result = await zapierService.triggerWebhook(webhook.url, template.sampleData);
      
      if (result.success) {
        toast({
          title: "Test Successful",
          description: "Webhook triggered successfully! Check your Zap history.",
        });
        
        // Update last triggered time
        setWebhooks(prev => prev.map(w => 
          w.id === webhook.id 
            ? { ...w, lastTriggered: 'Just now' }
            : w
        ));
      } else {
        toast({
          title: "Test Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "An error occurred while testing the webhook",
        variant: "destructive",
      });
    } finally {
      setTestingWebhook(null);
    }
  };

  const handleToggleWebhook = (id: string) => {
    setWebhooks(prev => prev.map(webhook => 
      webhook.id === id 
        ? { ...webhook, isActive: !webhook.isActive }
        : webhook
    ));
  };

  const handleDeleteWebhook = (id: string) => {
    setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
    toast({
      title: "Webhook Deleted",
      description: "Webhook has been removed from your integrations",
    });
  };

  const copyWebhookTemplate = (triggerType: string) => {
    const template = webhookTemplates[triggerType as keyof typeof webhookTemplates];
    navigator.clipboard.writeText(JSON.stringify(template.sampleData, null, 2));
    toast({
      title: "Template Copied",
      description: "Sample data copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="webhooks" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="webhooks">Active Webhooks</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="setup">Setup Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="webhooks" className="space-y-6">
          {/* Add New Webhook */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add New Webhook</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="webhook-name">Webhook Name</Label>
                  <Input
                    id="webhook-name"
                    placeholder="e.g., Content Published Alert"
                    value={newWebhook.name}
                    onChange={(e) => setNewWebhook(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trigger-type">Trigger Type</Label>
                  <select
                    id="trigger-type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    value={newWebhook.triggerType}
                    onChange={(e) => setNewWebhook(prev => ({ ...prev, triggerType: e.target.value }))}
                  >
                    <option value="contentPublished">Content Published</option>
                    <option value="keywordResearch">Keyword Research</option>
                    <option value="seoAudit">SEO Audit</option>
                    <option value="rankingAlert">Ranking Alert</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Zapier Webhook URL</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://hooks.zapier.com/hooks/catch/[YOUR-ZAP-ID]/[YOUR-ENDPOINT]/"
                  value={newWebhook.url}
                  onChange={(e) => setNewWebhook(prev => ({ ...prev, url: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-description">Description</Label>
                <Textarea
                  id="webhook-description"
                  placeholder="Describe what this webhook does..."
                  value={newWebhook.description}
                  onChange={(e) => setNewWebhook(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
              <Button onClick={handleAddWebhook} className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                Add Webhook
              </Button>
            </CardContent>
          </Card>

          {/* Active Webhooks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {webhooks.map((webhook) => (
              <Card key={webhook.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>
                      <p className="text-sm text-gray-600">{webhook.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={webhook.isActive}
                        onCheckedChange={() => handleToggleWebhook(webhook.id)}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteWebhook(webhook.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={webhook.isActive ? "default" : "secondary"}>
                      {webhook.isActive ? "Active" : "Inactive"}
                    </Badge>
                    <Badge variant="outline">{webhook.triggerType}</Badge>
                  </div>
                  
                  <div className="text-xs text-gray-500 break-all">
                    {webhook.url}
                  </div>
                  
                  {webhook.lastTriggered && (
                    <div className="text-xs text-gray-600">
                      Last triggered: {webhook.lastTriggered}
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTestWebhook(webhook)}
                      disabled={testingWebhook === webhook.id || !webhook.isActive}
                    >
                      {testingWebhook === webhook.id ? (
                        <div className="animate-spin h-4 w-4 border-b-2 border-current rounded-full mr-2" />
                      ) : (
                        <Play className="h-4 w-4 mr-2" />
                      )}
                      Test
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(webhook.url)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy URL
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {webhooks.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <Zap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Webhooks Configured</h3>
                <p className="text-gray-600">Add your first Zapier webhook to start automating your SEO workflows.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(webhookTemplates).map(([key, template]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{template.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyWebhookTemplate(key)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-gray-50 p-3 rounded-md overflow-x-auto">
                    {JSON.stringify(template.sampleData, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="setup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Zapier Setup Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Create a Zapier Account</h4>
                    <p className="text-sm text-gray-600">Sign up at zapier.com if you don't have an account yet.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Create a New Zap</h4>
                    <p className="text-sm text-gray-600">Click "Create Zap" and choose "Webhooks by Zapier" as your trigger.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Set Trigger Event</h4>
                    <p className="text-sm text-gray-600">Select "Catch Hook" as the trigger event type.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Copy Webhook URL</h4>
                    <p className="text-sm text-gray-600">Copy the webhook URL provided by Zapier and paste it into the form above.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h4 className="font-medium">Configure Action</h4>
                    <p className="text-sm text-gray-600">Choose what happens when the webhook is triggered (send email, update spreadsheet, etc.).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <h4 className="font-medium">Test Your Zap</h4>
                    <p className="text-sm text-gray-600">Use the "Test" button above to verify your webhook is working correctly.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <h4 className="font-medium text-blue-900">Pro Tips</h4>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use filters in Zapier to only trigger on specific conditions</li>
                  <li>• Set up multiple actions for comprehensive automation</li>
                  <li>• Use the Templates tab to understand the data structure</li>
                  <li>• Test webhooks regularly to ensure they're working</li>
                </ul>
              </div>
              
              <Button className="w-full" asChild>
                <a href="https://zapier.com/app/zaps" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Zapier Dashboard
                </a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ZapierIntegration;