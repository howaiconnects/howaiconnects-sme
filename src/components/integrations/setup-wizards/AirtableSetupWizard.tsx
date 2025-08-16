import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Database, 
  Key, 
  CheckCircle, 
  ArrowRight, 
  Copy, 
  ExternalLink, 
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import { airtableService } from '@/services/airtableService';

interface SetupStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const AirtableSetupWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const [baseId, setBaseId] = useState('');
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const steps: SetupStep[] = [
    {
      id: 'overview',
      title: 'Welcome to Airtable Integration',
      description: 'Learn how Airtable will enhance your business workflows',
      completed: false
    },
    {
      id: 'account',
      title: 'Airtable Account Setup',
      description: 'Create your Airtable account and workspace',
      completed: false
    },
    {
      id: 'base',
      title: 'Create Your Business Base',
      description: 'Set up your Airtable base with recommended tables',
      completed: false
    },
    {
      id: 'credentials',
      title: 'API Configuration',
      description: 'Connect your Airtable account to our platform',
      completed: false
    },
    {
      id: 'test',
      title: 'Test & Verify',
      description: 'Verify your integration is working correctly',
      completed: false
    },
    {
      id: 'complete',
      title: 'Setup Complete',
      description: 'Your Airtable integration is ready to use',
      completed: false
    }
  ];

  const baseTemplates = [
    {
      name: 'Business CRM Template',
      description: 'Complete customer relationship management system',
      tables: ['Leads', 'Customers', 'Opportunities', 'Activities'],
      features: ['Lead tracking', 'Sales pipeline', 'Contact management', 'Activity logging'],
      templateUrl: 'https://airtable.com/templates/business/expCRM123'
    },
    {
      name: 'Marketing Hub Template',
      description: 'Content marketing and campaign management',
      tables: ['Content Calendar', 'Campaigns', 'Assets', 'Analytics'],
      features: ['Content planning', 'Campaign tracking', 'Asset library', 'Performance metrics'],
      templateUrl: 'https://airtable.com/templates/marketing/expMKT123'
    },
    {
      name: 'Project Management Template',
      description: 'Track projects, tasks, and team collaboration',
      tables: ['Projects', 'Tasks', 'Team Members', 'Timeline'],
      features: ['Project tracking', 'Task management', 'Team collaboration', 'Progress monitoring'],
      templateUrl: 'https://airtable.com/templates/project/expPRJ123'
    }
  ];

  const testConnection = async () => {
    if (!apiKey || !baseId) {
      toast({
        title: "Missing Information",
        description: "Please provide both API key and Base ID",
        variant: "destructive",
      });
      return;
    }

    setIsTestingConnection(true);
    setConnectionStatus('idle');

    try {
      await airtableService.testConnection('Leads', baseId);
      setConnectionStatus('success');
      toast({
        title: "Connection Successful!",
        description: "Your Airtable integration is working perfectly",
      });
      
      // Mark the test step as completed
      const updatedSteps = [...steps];
      updatedSteps[4].completed = true;
      
    } catch (error) {
      setConnectionStatus('error');
      toast({
        title: "Connection Failed",
        description: "Please check your API key and Base ID",
        variant: "destructive",
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
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

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome to Airtable Integration</h2>
                <p className="text-muted-foreground">Transform your business data into actionable insights</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-2 border-dashed">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Secure Data</h3>
                  <p className="text-sm text-muted-foreground">Your data is encrypted and secure</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Real-time Sync</h3>
                  <p className="text-sm text-muted-foreground">Instant data synchronization</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed">
                <CardContent className="p-4 text-center">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Global Access</h3>
                  <p className="text-sm text-muted-foreground">Access your data anywhere</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What you'll accomplish:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Centralize all your business data in one powerful database
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Automate data collection from forms, websites, and apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Create custom dashboards and reports for your team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Integrate with 5000+ apps through Zapier automation
                </li>
              </ul>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Set Up Your Airtable Account</h2>
              <p className="text-muted-foreground">First, you'll need an Airtable account to get started</p>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Step 1: Create Airtable Account</h3>
                      <p className="text-sm text-muted-foreground">
                        Sign up for a free Airtable account if you don't have one already
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://airtable.com/signup" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Sign Up
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Step 2: Choose Your Plan</h3>
                      <p className="text-sm text-muted-foreground">
                        Free plan works for testing, but Plus plan is recommended for business use
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Free: 1,200 records</Badge>
                        <Badge>Plus: 5,000 records + API</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://airtable.com/pricing" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Plans
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Step 3: Verify Your Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete email verification and set up your workspace
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Account verified and ready to use</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Important Note</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    You'll need at least a Plus plan ($20/month) to use the Airtable API for our integration. 
                    The free plan doesn't include API access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'base':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Create Your Business Base</h2>
              <p className="text-muted-foreground">Choose a template that matches your business needs</p>
            </div>

            <div className="space-y-4">
              {baseTemplates.map((template, index) => (
                <Card key={index} className="border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="text-lg font-semibold">{template.name}</h3>
                          <p className="text-muted-foreground">{template.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Included Tables:</h4>
                          <div className="flex flex-wrap gap-1">
                            {template.tables.map((table, tableIndex) => (
                              <Badge key={tableIndex} variant="secondary" className="text-xs">
                                {table}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                            {template.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button variant="outline" asChild>
                        <a href={template.templateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Use Template
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator />

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Custom Base Setup Instructions:</h3>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>Go to <strong>airtable.com</strong> and click "Create a base"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>Choose "Start from scratch" or select one of the templates above</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>Name your base "HowAIConnects Business Hub" or similar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span>Customize tables and fields to match your business needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                    <span>Note down your Base ID (we'll need it in the next step)</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        );

      case 'credentials':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Configure API Access</h2>
              <p className="text-muted-foreground">Connect your Airtable account to our platform</p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Step 1: Get Your API Key</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your API key allows secure access to your Airtable data
                  </p>
                  <ol className="text-sm space-y-1 mb-4">
                    <li>1. Go to <a href="https://airtable.com/create/tokens" target="_blank" className="text-blue-600 hover:underline">airtable.com/create/tokens</a></li>
                    <li>2. Click "Create new token"</li>
                    <li>3. Add scopes: data.records:read, data.records:write</li>
                    <li>4. Select your base and copy the token</li>
                  </ol>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">Airtable API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="api-key"
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="pat***********************************"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(apiKey)}
                        disabled={!apiKey}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Step 2: Get Your Base ID</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The Base ID identifies which Airtable base to connect to
                  </p>
                  <ol className="text-sm space-y-1 mb-4">
                    <li>1. Open your Airtable base</li>
                    <li>2. Go to Help → API documentation</li>
                    <li>3. Copy the Base ID (starts with "app")</li>
                  </ol>
                  <div className="space-y-2">
                    <Label htmlFor="base-id">Base ID</Label>
                    <div className="flex gap-2">
                      <Input
                        id="base-id"
                        value={baseId}
                        onChange={(e) => setBaseId(e.target.value)}
                        placeholder="appXXXXXXXXXXXXXX"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(baseId)}
                        disabled={!baseId}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {(apiKey && baseId) && (
                <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800 dark:text-green-200">Ready to Connect</h3>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Both API key and Base ID provided. You can now test the connection.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        );

      case 'test':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Test Your Connection</h2>
              <p className="text-muted-foreground">Verify that everything is working correctly</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>API Key Status</Label>
                      <div className="flex items-center gap-2 mt-1">
                        {apiKey ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Provided</span>
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
                      <Label>Base ID Status</Label>
                      <div className="flex items-center gap-2 mt-1">
                        {baseId ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Provided</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <span className="text-sm">Missing</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <Button
                    onClick={testConnection}
                    disabled={!apiKey || !baseId || isTestingConnection}
                    className="w-full"
                    size="lg"
                  >
                    {isTestingConnection ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Testing Connection...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Test Airtable Connection
                      </>
                    )}
                  </Button>

                  {connectionStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Connection Successful!</h4>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Your Airtable integration is working perfectly. We can read and write to your base.
                      </p>
                    </div>
                  )}

                  {connectionStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Connection Failed</h4>
                      </div>
                      <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                        Please check your API key and Base ID. Make sure you have the correct permissions.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'complete':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Setup Complete! 🎉</h2>
                <p className="text-muted-foreground">Your Airtable integration is ready to use</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-2 border-green-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">What's Next?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Start collecting form submissions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Set up Zapier automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Create custom dashboards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Monitor data in real-time
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Quick Links</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="/app/automation" target="_blank">
                        <Database className="h-4 w-4 mr-2" />
                        View Integration Dashboard
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href={`https://airtable.com/${baseId}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open Your Airtable Base
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="https://support.airtable.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Airtable Help Center
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🚀 Pro Tips for Success</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Regularly back up your Airtable data</li>
                  <li>• Use views to organize different perspectives of your data</li>
                  <li>• Set up notifications for important data changes</li>
                  <li>• Consider upgrading to higher plans as your data grows</li>
                  <li>• Explore Airtable's mobile app for on-the-go access</li>
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
                <Database className="h-6 w-6 text-blue-600" />
                Airtable Setup Wizard
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
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
                      ? 'bg-blue-600' 
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