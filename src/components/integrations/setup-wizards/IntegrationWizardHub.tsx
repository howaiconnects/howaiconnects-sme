import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Globe,
  Workflow,
  Settings,
  BarChart3,
  Users,
  Bot,
  Shield
} from "lucide-react";
import { AirtableSetupWizard } from './AirtableSetupWizard';
import { ZapierSetupWizard } from './ZapierSetupWizard';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  status: 'not-started' | 'in-progress' | 'completed';
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  benefits: string[];
  prerequisites: string[];
}

export const IntegrationWizardHub: React.FC = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);

  const integrations: Integration[] = [
    {
      id: 'airtable',
      name: 'Airtable Database',
      description: 'Transform your business data into a powerful, organized database with real-time sync and automation.',
      icon: <Database className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      status: 'not-started',
      estimatedTime: '15-20 minutes',
      difficulty: 'beginner',
      benefits: [
        'Centralized data management',
        'Real-time synchronization',
        'Custom views and reports',
        'Team collaboration features'
      ],
      prerequisites: [
        'Airtable account (Plus plan recommended)',
        'Basic understanding of databases',
        'Admin access to configure API keys'
      ]
    },
    {
      id: 'zapier',
      name: 'Zapier Automation',
      description: 'Connect 5000+ apps and automate your workflows with powerful no-code automation.',
      icon: <Zap className="h-8 w-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      status: 'not-started',
      estimatedTime: '20-30 minutes',
      difficulty: 'intermediate',
      benefits: [
        '5000+ app integrations',
        'Automated workflow triggers',
        'No-code automation builder',
        'Error handling and monitoring'
      ],
      prerequisites: [
        'Zapier account (Starter plan recommended)',
        'Basic understanding of workflows',
        'Access to connect your apps'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <div className="h-4 w-4 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-600 bg-green-50 dark:bg-green-950';
      case 'intermediate':
        return 'text-orange-600 bg-orange-50 dark:bg-orange-950';
      case 'advanced':
        return 'text-red-600 bg-red-50 dark:bg-red-950';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-950';
    }
  };

  if (selectedIntegration === 'airtable') {
    return (
      <div className="space-y-4">
        <Button 
          variant="outline" 
          onClick={() => setSelectedIntegration(null)}
          className="mb-4"
        >
          ← Back to Integration Hub
        </Button>
        <AirtableSetupWizard />
      </div>
    );
  }

  if (selectedIntegration === 'zapier') {
    return (
      <div className="space-y-4">
        <Button 
          variant="outline" 
          onClick={() => setSelectedIntegration(null)}
          className="mb-4"
        >
          ← Back to Integration Hub
        </Button>
        <ZapierSetupWizard />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Workflow className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Integration Setup Hub</CardTitle>
              <CardDescription className="text-lg">
                Connect your business tools and automate your workflows with guided setup wizards
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available Integrations</p>
                <p className="text-2xl font-bold">{integrations.length}</p>
              </div>
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Setup Time</p>
                <p className="text-2xl font-bold">30min</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Apps Connected</p>
                <p className="text-2xl font-bold">5000+</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Security Level</p>
                <p className="text-2xl font-bold">SOC 2</p>
              </div>
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="integrations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="integrations">Setup Wizards</TabsTrigger>
          <TabsTrigger value="benefits">Why Integrate?</TabsTrigger>
          <TabsTrigger value="roadmap">Integration Roadmap</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-6">
          <div className="space-y-4">
            {integrations.map((integration) => (
              <Card key={integration.id} className="border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-2xl ${integration.bgColor}`}>
                        <div className={integration.color}>
                          {integration.icon}
                        </div>
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{integration.name}</h3>
                            {getStatusIcon(integration.status)}
                            <Badge 
                              variant="outline" 
                              className={getDifficultyColor(integration.difficulty)}
                            >
                              {integration.difficulty}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{integration.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>⏱️ {integration.estimatedTime}</span>
                            <span>🎯 {integration.difficulty} level</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                            <ul className="space-y-1">
                              {integration.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2 text-sm">Prerequisites:</h4>
                            <ul className="space-y-1">
                              {integration.prerequisites.map((prerequisite, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm">
                                  <div className="h-3 w-3 border border-gray-400 rounded-full" />
                                  {prerequisite}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => setSelectedIntegration(integration.id)}
                      size="lg"
                      className="ml-4"
                    >
                      Start Setup
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  Automation Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Time Savings</h4>
                  <p className="text-sm text-muted-foreground">Save 10-20 hours per week by automating repetitive tasks</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Error Reduction</h4>
                  <p className="text-sm text-muted-foreground">Eliminate manual data entry errors with automated workflows</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Scalability</h4>
                  <p className="text-sm text-muted-foreground">Handle increasing workload without additional resources</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Team Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Better Collaboration</h4>
                  <p className="text-sm text-muted-foreground">Keep everyone in sync with real-time data updates</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Focus on High-Value Work</h4>
                  <p className="text-sm text-muted-foreground">Free up time for strategy and creative work</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Consistent Processes</h4>
                  <p className="text-sm text-muted-foreground">Ensure tasks are completed the same way every time</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  Business Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Revenue Growth</h4>
                  <p className="text-sm text-muted-foreground">Convert more leads with automated follow-up sequences</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Cost Reduction</h4>
                  <p className="text-sm text-muted-foreground">Reduce operational costs through process automation</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Data-Driven Decisions</h4>
                  <p className="text-sm text-muted-foreground">Make better decisions with real-time business insights</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Enterprise Security</h4>
                  <p className="text-sm text-muted-foreground">SOC 2 compliant with bank-level encryption</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Data Privacy</h4>
                  <p className="text-sm text-muted-foreground">GDPR compliant with full control over your data</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Audit Trails</h4>
                  <p className="text-sm text-muted-foreground">Complete logs of all automated actions and changes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Integration Roadmap</CardTitle>
              <CardDescription>
                Follow this recommended sequence for optimal results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Airtable Database Setup</h3>
                    <p className="text-sm text-muted-foreground">
                      Start with Airtable to create your central data hub. This foundation will support all other integrations.
                    </p>
                    <Badge variant="outline" className="text-xs">Foundation • 15-20 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Zapier Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect Zapier to automate data flow between your apps and Airtable database.
                    </p>
                    <Badge variant="outline" className="text-xs">Automation • 20-30 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Advanced Integrations</h3>
                    <p className="text-sm text-muted-foreground">
                      Add specialized tools for AI content generation, SEO tracking, and advanced analytics.
                    </p>
                    <Badge variant="outline" className="text-xs">Coming Soon • Advanced</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">💡 Success Tips</h3>
              <ul className="space-y-1 text-sm">
                <li>• Start with one integration at a time to avoid complexity</li>
                <li>• Test each integration thoroughly before moving to the next</li>
                <li>• Document your workflows for team members</li>
                <li>• Set up monitoring and alerts for critical automations</li>
                <li>• Regular review and optimize your automations quarterly</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};