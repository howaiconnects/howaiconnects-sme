import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Zap, 
  CheckCircle, 
  Copy, 
  ExternalLink, 
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Globe,
  Shield,
  Workflow,
  Play,
  Pause,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

interface SetupStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface ZapTemplate {
  id: string;
  name: string;
  description: string;
  trigger: string;
  actions: string[];
  complexity: 'beginner' | 'intermediate' | 'advanced';
  useCase: string;
  estimatedTime: string;
}

export const ZapierSetupWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const steps: SetupStep[] = [
    {
      id: 'overview',
      title: 'Welcome to Zapier Integration',
      description: 'Learn how Zapier will automate your business workflows',
      completed: false
    },
    {
      id: 'account',
      title: 'Zapier Account Setup',
      description: 'Create your Zapier account and choose a plan',
      completed: false
    },
    {
      id: 'templates',
      title: 'Choose Automation Templates',
      description: 'Select pre-built workflows for your business',
      completed: false
    },
    {
      id: 'webhooks',
      title: 'Configure Webhooks',
      description: 'Set up webhook triggers for your automations',
      completed: false
    },
    {
      id: 'test',
      title: 'Test Your Zaps',
      description: 'Verify your automations are working correctly',
      completed: false
    },
    {
      id: 'complete',
      title: 'Automation Active',
      description: 'Your Zapier automations are now live',
      completed: false
    }
  ];

  const zapTemplates: ZapTemplate[] = [
    {
      id: 'lead-capture',
      name: 'Lead Capture → CRM',
      description: 'Automatically save contact form submissions to your CRM',
      trigger: 'Webhook (Contact Form)',
      actions: ['Create Airtable Record', 'Send Welcome Email', 'Slack Notification'],
      complexity: 'beginner',
      useCase: 'Lead Generation',
      estimatedTime: '10 minutes'
    },
    {
      id: 'seo-reporting',
      name: 'SEO Performance Tracker',
      description: 'Track SEO metrics and send weekly performance reports',
      trigger: 'Schedule (Weekly)',
      actions: ['Fetch SEO Data', 'Update Airtable', 'Generate Report', 'Email Team'],
      complexity: 'intermediate',
      useCase: 'SEO & Analytics',
      estimatedTime: '20 minutes'
    },
    {
      id: 'social-publishing',
      name: 'Content → Social Media',
      description: 'Automatically share new blog posts across social platforms',
      trigger: 'RSS Feed',
      actions: ['Post to Twitter', 'Post to LinkedIn', 'Update Content Calendar'],
      complexity: 'beginner',
      useCase: 'Content Marketing',
      estimatedTime: '15 minutes'
    },
    {
      id: 'booking-automation',
      name: 'Consultation Booking Flow',
      description: 'Handle consultation bookings with confirmations and reminders',
      trigger: 'Webhook (Booking Form)',
      actions: ['Create Calendar Event', 'Send Confirmation', 'Set Reminder', 'Update CRM'],
      complexity: 'intermediate',
      useCase: 'Client Management',
      estimatedTime: '25 minutes'
    },
    {
      id: 'customer-support',
      name: 'Support Ticket Router',
      description: 'Route support requests to the right team members',
      trigger: 'Email Parser',
      actions: ['Create Zendesk Ticket', 'Assign to Team', 'Send Auto-Reply'],
      complexity: 'advanced',
      useCase: 'Customer Support',
      estimatedTime: '30 minutes'
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Metrics Dashboard',
      description: 'Collect data from multiple sources into a unified dashboard',
      trigger: 'Schedule (Daily)',
      actions: ['Google Analytics', 'Airtable Update', 'Slack Summary', 'PDF Report'],
      complexity: 'advanced',
      useCase: 'Business Intelligence',
      estimatedTime: '45 minutes'
    }
  ];

  const testWebhook = async () => {
    if (!webhookUrl) {
      toast({
        title: "Missing Webhook URL",
        description: "Please provide your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsTestingWebhook(true);
    setWebhookStatus('idle');

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          test: true,
          source: 'HowAIConnects Setup Wizard',
          data: {
            name: 'Test User',
            email: 'test@example.com',
            message: 'This is a test webhook from the setup wizard',
            form_type: 'setup_test'
          }
        }),
      });

      setWebhookStatus('success');
      toast({
        title: "Webhook Test Sent",
        description: "Check your Zap history to confirm it was triggered successfully",
      });
      
    } catch (error) {
      setWebhookStatus('error');
      toast({
        title: "Webhook Test Failed",
        description: "Please check your webhook URL and try again",
        variant: "destructive",
      });
    } finally {
      setIsTestingWebhook(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };

  const toggleTemplate = (templateId: string) => {
    setSelectedTemplates(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'beginner': return 'text-green-600 bg-green-50 dark:bg-green-950';
      case 'intermediate': return 'text-orange-600 bg-orange-50 dark:bg-orange-950';
      case 'advanced': return 'text-red-600 bg-red-50 dark:bg-red-950';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-950';
    }
  };

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome to Zapier Automation</h2>
                <p className="text-muted-foreground">Connect 5000+ apps and automate your workflows</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-2 border-dashed">
                <CardContent className="p-4 text-center">
                  <Workflow className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Automated Workflows</h3>
                  <p className="text-sm text-muted-foreground">Save hours with smart automation</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed">
                <CardContent className="p-4 text-center">
                  <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold">5000+ Apps</h3>
                  <p className="text-sm text-muted-foreground">Connect to almost any service</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">SOC 2 compliant and secure</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What you'll automate:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Contact form submissions → CRM entries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  New blog posts → Social media sharing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  SEO data → Performance reports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Bookings → Calendar events + reminders
                </li>
              </ul>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Set Up Your Zapier Account</h2>
              <p className="text-muted-foreground">Get started with the right Zapier plan for your needs</p>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Step 1: Create Zapier Account</h3>
                      <p className="text-sm text-muted-foreground">
                        Sign up for a free Zapier account to get started
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://zapier.com/sign-up" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Sign Up
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Step 2: Choose Your Plan</h3>
                        <p className="text-sm text-muted-foreground">
                          Select the plan that matches your automation needs
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://zapier.com/pricing" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Plans
                        </a>
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Free</h4>
                        <p className="text-xs text-muted-foreground">100 tasks/month</p>
                        <Badge variant="outline" className="mt-1">Good for testing</Badge>
                      </div>
                      <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950">
                        <h4 className="font-medium">Starter ($19.99/mo)</h4>
                        <p className="text-xs text-muted-foreground">750 tasks/month</p>
                        <Badge className="mt-1">Recommended</Badge>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Professional ($49/mo)</h4>
                        <p className="text-xs text-muted-foreground">2,000 tasks/month</p>
                        <Badge variant="outline" className="mt-1">For growth</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Step 3: Verify Your Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete email verification and explore the Zapier dashboard
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Account verified and ready for automation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Plan Recommendation</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    The Starter plan is recommended for most businesses. You can always upgrade as your automation needs grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'templates':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Choose Your Automation Templates</h2>
              <p className="text-muted-foreground">Select pre-built workflows to get started quickly</p>
            </div>

            <div className="space-y-4">
              {zapTemplates.map((template) => (
                <Card 
                  key={template.id} 
                  className={`border-2 cursor-pointer transition-all ${
                    selectedTemplates.includes(template.id) 
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                      : 'border-border hover:border-orange-300'
                  }`}
                  onClick={() => toggleTemplate(template.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{template.name}</h3>
                            <p className="text-muted-foreground">{template.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant="outline" 
                              className={getComplexityColor(template.complexity)}
                            >
                              {template.complexity}
                            </Badge>
                            {selectedTemplates.includes(template.id) && (
                              <CheckCircle className="h-5 w-5 text-orange-600" />
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Trigger:</span>
                            <p className="text-muted-foreground">{template.trigger}</p>
                          </div>
                          <div>
                            <span className="font-medium">Use Case:</span>
                            <p className="text-muted-foreground">{template.useCase}</p>
                          </div>
                          <div>
                            <span className="font-medium">Setup Time:</span>
                            <p className="text-muted-foreground">{template.estimatedTime}</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="font-medium text-sm">Actions:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {template.actions.map((action, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {action}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedTemplates.length > 0 && (
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Selected Templates ({selectedTemplates.length})</h3>
                  <p className="text-sm text-muted-foreground">
                    You've selected {selectedTemplates.length} automation templates. 
                    We'll help you set these up in the following steps.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 'webhooks':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Configure Webhook Triggers</h2>
              <p className="text-muted-foreground">Set up webhook endpoints for your automations</p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Setting Up Your Webhook</h3>
                  
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Step 1: Create a New Zap</h4>
                    <ol className="text-sm space-y-1">
                      <li>1. Go to <a href="https://zapier.com/app/zaps" target="_blank" className="text-blue-600 hover:underline">zapier.com/app/zaps</a></li>
                      <li>2. Click "Create Zap"</li>
                      <li>3. Choose "Webhooks by Zapier" as your trigger</li>
                      <li>4. Select "Catch Hook" as the trigger event</li>
                      <li>5. Copy the webhook URL that Zapier provides</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Your Zapier Webhook URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="webhook-url"
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                        placeholder="https://hooks.zapier.com/hooks/catch/..."
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(webhookUrl)}
                        disabled={!webhookUrl}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Paste the webhook URL from your Zapier trigger setup
                    </p>
                  </div>

                  <Separator />

                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Step 2: Set Up Actions</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Based on your selected templates, configure these actions:
                    </p>
                    <ul className="text-sm space-y-1">
                      {selectedTemplates.length > 0 ? (
                        selectedTemplates.map(templateId => {
                          const template = zapTemplates.find(t => t.id === templateId);
                          return template ? (
                            <li key={templateId} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {template.name}
                            </li>
                          ) : null;
                        })
                      ) : (
                        <li className="text-muted-foreground">No templates selected yet</li>
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'test':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Test Your Automations</h2>
              <p className="text-muted-foreground">Verify that your Zapier integrations are working</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Webhook URL Status</Label>
                      <div className="flex items-center gap-2 mt-1">
                        {webhookUrl ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Configured</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <span className="text-sm">Missing</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label>Selected Templates</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{selectedTemplates.length} templates selected</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <Button
                    onClick={testWebhook}
                    disabled={!webhookUrl || isTestingWebhook}
                    className="w-full"
                    size="lg"
                  >
                    {isTestingWebhook ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Test...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Send Test Webhook
                      </>
                    )}
                  </Button>

                  {webhookStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Test Sent Successfully!</h4>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Check your Zapier Zap history to confirm the webhook was received and processed.
                      </p>
                    </div>
                  )}

                  {webhookStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Test Failed</h4>
                      </div>
                      <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                        Please check your webhook URL and make sure your Zap is turned on.
                      </p>
                    </div>
                  )}

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Next Steps:</h4>
                    <ul className="text-sm space-y-1">
                      <li>1. Check your Zapier dashboard for the test data</li>
                      <li>2. Complete setting up your Zap actions (Airtable, email, etc.)</li>
                      <li>3. Turn on your Zaps to make them live</li>
                      <li>4. Monitor your Zap history for any issues</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'complete':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Automation Setup Complete! ⚡</h2>
                <p className="text-muted-foreground">Your Zapier automations are ready to work for you</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-2 border-orange-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">What's Automated Now</h3>
                  <ul className="space-y-2 text-sm">
                    {selectedTemplates.map(templateId => {
                      const template = zapTemplates.find(t => t.id === templateId);
                      return template ? (
                        <li key={templateId} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {template.name}
                        </li>
                      ) : null;
                    })}
                    {selectedTemplates.length === 0 && (
                      <li className="text-muted-foreground">No templates selected</li>
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="https://zapier.com/app/zaps" target="_blank" rel="noopener noreferrer">
                        <Zap className="h-4 w-4 mr-2" />
                        View Your Zaps
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <Link to="/app/automation">
                        <Settings className="h-4 w-4 mr-2" />
                        Automation Dashboard
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="https://zapier.com/app/history" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zap History & Logs
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🚀 Pro Tips for Automation Success</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Start with simple automations and gradually add complexity</li>
                  <li>• Monitor your Zap history regularly for any failed tasks</li>
                  <li>• Use filters and paths to create more sophisticated workflows</li>
                  <li>• Set up error notifications to catch issues early</li>
                  <li>• Document your automations for team members</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-orange-600" />
                Zapier Setup Wizard
              </CardTitle>
              <CardDescription>
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </CardDescription>
            </div>
            <Badge variant="outline">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </Badge>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-to-r from-orange-600 to-red-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </CardHeader>
      </Card>

      {/* Step Content */}
      <Card>
        <CardContent className="p-8">
          {renderStep()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep 
                      ? 'bg-orange-600' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};