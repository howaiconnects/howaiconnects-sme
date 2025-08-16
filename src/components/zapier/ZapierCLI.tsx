import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Copy, ExternalLink, Terminal, Webhook, Settings, Code } from 'lucide-react';

const ZapierCLI = () => {
  const [appName, setAppName] = useState('howaiconnects-integration');
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Command copied successfully",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const cliCommands = {
    setup: [
      {
        title: "1. Login to Zapier",
        command: "npx zapier login",
        description: "Authenticate with your Zapier account"
      },
      {
        title: "2. Create New App",
        command: `npx zapier init ${appName} --template=trigger`,
        description: "Initialize a new Zapier app with trigger template"
      },
      {
        title: "3. Navigate to App Directory",
        command: `cd ${appName}`,
        description: "Change to your app directory"
      }
    ],
    development: [
      {
        title: "Build App",
        command: "npx zapier build",
        description: "Build your Zapier app for testing"
      },
      {
        title: "Test Locally",
        command: "npx zapier test",
        description: "Run local tests for your app"
      },
      {
        title: "Deploy to Zapier",
        command: "npx zapier push",
        description: "Deploy your app to Zapier platform"
      }
    ],
    management: [
      {
        title: "List Your Apps",
        command: "npx zapier apps",
        description: "View all your Zapier apps"
      },
      {
        title: "View App Logs",
        command: "npx zapier logs",
        description: "Check logs for debugging"
      },
      {
        title: "Promote Version",
        command: "npx zapier promote 1.0.0",
        description: "Promote app version to production"
      }
    ]
  };

  const integrationTemplate = `// Example Zapier App Integration Structure
const App = {
  // App version (required)
  version: require('./package.json').version,
  
  // Platform version (required)
  platformVersion: require('zapier-platform-core').version,

  // Authentication
  authentication: {
    type: 'api_key',
    test: {
      url: '${window.location.origin}/api/auth/test',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer {{bundle.authData.api_key}}'
      }
    },
    fields: [
      {
        key: 'api_key',
        label: 'API Key',
        required: true,
        type: 'string'
      }
    ]
  },

  // Triggers
  triggers: {
    new_contact: {
      key: 'new_contact',
      noun: 'Contact',
      display: {
        label: 'New Contact',
        description: 'Triggers when a new contact form is submitted.'
      },
      operation: {
        inputFields: [],
        perform: require('./triggers/new_contact')
      }
    },
    new_assessment: {
      key: 'new_assessment',
      noun: 'Assessment',
      display: {
        label: 'New Assessment Booking',
        description: 'Triggers when a new assessment is booked.'
      },
      operation: {
        inputFields: [],
        perform: require('./triggers/new_assessment')
      }
    }
  },

  // Actions
  creates: {
    send_email: {
      key: 'send_email',
      noun: 'Email',
      display: {
        label: 'Send Email',
        description: 'Send an email through HowAIConnects.'
      },
      operation: {
        inputFields: [
          {
            key: 'to',
            label: 'To Email',
            type: 'string',
            required: true
          },
          {
            key: 'subject',
            label: 'Subject',
            type: 'string',
            required: true
          },
          {
            key: 'body',
            label: 'Body',
            type: 'text',
            required: true
          }
        ],
        perform: require('./creates/send_email')
      }
    }
  }
};

module.exports = App;`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Zapier CLI Installation & Setup
          </CardTitle>
          <CardDescription>
            Install and configure the Zapier CLI for building your custom app integration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Step 1: Install Zapier CLI Globally</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Install CLI globally</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard('npm install -g zapier-platform-cli')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <code className="block bg-muted p-2 rounded text-sm">
                  npm install -g zapier-platform-cli
                </code>
                <p className="text-sm text-muted-foreground">
                  This installs the Zapier CLI globally so you can use it from any directory.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Test installation</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard('zapier --version')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <code className="block bg-muted p-2 rounded text-sm">
                  zapier --version
                </code>
                <p className="text-sm text-muted-foreground">
                  Should output: zapier-platform-cli/X.Y.Z and node/vX.Y.Z
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Step 2: Authenticate with Zapier</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Login to Zapier</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard('zapier login')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <code className="block bg-muted p-2 rounded text-sm">
                  zapier login
                </code>
                <p className="text-sm text-muted-foreground">
                  This will prompt for your Zapier account credentials and create a .zapierrc file.
                </p>
              </div>
            </div>

            <div>
              <Label htmlFor="app-name">App Name for Your Integration</Label>
              <Input
                id="app-name"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="howaiconnects-integration"
              />
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-medium mb-2">Requirements Checklist:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">✓</Badge>
                  <span>Node.js Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">?</Badge>
                  <span>Zapier CLI Installed Globally</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">?</Badge>
                  <span>Zapier Account Authentication</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="template">Template</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Initial Setup Commands</CardTitle>
              <CardDescription>
                Get started with your Zapier app development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cliCommands.setup.map((cmd, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{cmd.title}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cmd.command)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <code className="block bg-muted p-2 rounded text-sm">
                    {cmd.command}
                  </code>
                  <p className="text-sm text-muted-foreground">{cmd.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="development" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Development Commands</CardTitle>
              <CardDescription>
                Build, test, and deploy your Zapier app
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cliCommands.development.map((cmd, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{cmd.title}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cmd.command)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <code className="block bg-muted p-2 rounded text-sm">
                    {cmd.command}
                  </code>
                  <p className="text-sm text-muted-foreground">{cmd.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Management Commands</CardTitle>
              <CardDescription>
                Manage and monitor your deployed Zapier apps
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cliCommands.management.map((cmd, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{cmd.title}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cmd.command)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <code className="block bg-muted p-2 rounded text-sm">
                    {cmd.command}
                  </code>
                  <p className="text-sm text-muted-foreground">{cmd.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="template" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                App Template Structure
              </CardTitle>
              <CardDescription>
                Example structure for your HowAIConnects Zapier app
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">index.js Template</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(integrationTemplate)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
                  {integrationTemplate}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Webhook className="h-5 w-5" />
            Integration Endpoints
          </CardTitle>
          <CardDescription>
            Your app will connect to these HowAIConnects endpoints
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Contact Form Webhook:</span>
              <code>{window.location.origin}/api/webhooks/contact</code>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Assessment Webhook:</span>
              <code>{window.location.origin}/api/webhooks/assessment</code>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">SEO Webhook:</span>
              <code>{window.location.origin}/api/webhooks/seo</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Run the setup commands in your terminal</li>
            <li>Copy the template code to your app's index.js</li>
            <li>Create trigger and action files in respective folders</li>
            <li>Test your app locally with sample data</li>
            <li>Deploy to Zapier platform for public use</li>
            <li>Submit for approval to Zapier App Directory</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZapierCLI;