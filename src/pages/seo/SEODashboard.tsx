import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ZapierAirtableIntegration from '@/components/integrations/ZapierAirtableIntegration';
import ZapierCLI from '@/components/zapier/ZapierCLI';
import { 
  Search, 
  FileText, 
  TrendingUp, 
  Settings, 
  Brain, 
  Target,
  BarChart3,
  Zap,
  Database,
  Globe
} from 'lucide-react';

const SEODashboard = () => {
  const aiAgentStatus = [
    { name: 'Keyword Research Agent', status: 'active', lastRun: '2 mins ago' },
    { name: 'Content Generation Agent', status: 'idle', lastRun: '15 mins ago' },
    { name: 'SEO Optimization Agent', status: 'processing', lastRun: 'Now' },
    { name: 'Publishing Agent', status: 'scheduled', lastRun: '1 hour ago' },
  ];

  const contentPipeline = [
    { stage: 'Ideation', count: 25, status: 'pending' },
    { stage: 'Drafting', count: 8, status: 'processing' },
    { stage: 'SEO Review', count: 12, status: 'reviewing' },
    { stage: 'Ready to Publish', count: 5, status: 'ready' },
    { stage: 'Published', count: 142, status: 'complete' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>SEO AI Dashboard | HowAIConnects</title>
        <meta name="description" content="AI-powered SEO content management system with autonomous agents for keyword research, content generation, and optimization." />
      </Helmet>

      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-brand-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">SEO AI Command Center</h1>
                  <p className="text-sm text-gray-600">Autonomous Content Lifecycle Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configure Agents
              </Button>
              <Button className="bg-gradient-to-r from-brand-primary to-brand-accent">
                <Zap className="h-4 w-4 mr-2" />
                Start New Campaign
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* AI Agent Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {aiAgentStatus.map((agent, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
                  <Badge 
                    variant={agent.status === 'active' ? 'default' : 
                            agent.status === 'processing' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {agent.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600">Last run: {agent.lastRun}</p>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      agent.status === 'active' ? 'bg-green-500' :
                      agent.status === 'processing' ? 'bg-blue-500 animate-pulse' :
                      agent.status === 'scheduled' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}
                    style={{ width: agent.status === 'processing' ? '60%' : '100%' }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="pipeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white shadow-sm">
            <TabsTrigger value="pipeline" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Content Pipeline</span>
            </TabsTrigger>
            <TabsTrigger value="keywords" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Keyword Research</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>SEO Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="automation" className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Automation</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span>Data Sources</span>
            </TabsTrigger>
            <TabsTrigger value="ai-models" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>AI Models</span>
            </TabsTrigger>
          </TabsList>

          {/* Content Pipeline Tab */}
          <TabsContent value="pipeline" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {contentPipeline.map((stage, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{stage.stage}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-brand-primary mb-2">{stage.count}</div>
                    <Badge variant="outline" className="text-xs">
                      {stage.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Content Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">AI Strategy Guide for Small Businesses</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Published</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Machine Learning ROI Calculator</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">SEO Review</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">Automation Trends 2024</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Drafting</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Keyword Research Tab */}
          <TabsContent value="keywords" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Keyword Opportunities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-primary mb-2">1,247</div>
                  <p className="text-sm text-gray-600">New keywords discovered this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Ranking Improvements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">+23%</div>
                  <p className="text-sm text-gray-600">Average position improvement</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>Content Clusters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-primary mb-2">87</div>
                  <p className="text-sm text-gray-600">Active topic clusters</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs content placeholders */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>SEO Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced SEO analytics and performance monitoring coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <Tabs defaultValue="integration" className="w-full">
              <TabsList>
                <TabsTrigger value="integration">Zapier + Airtable</TabsTrigger>
                <TabsTrigger value="cli">Zapier CLI</TabsTrigger>
              </TabsList>
              <TabsContent value="integration">
                <ZapierAirtableIntegration />
              </TabsContent>
              <TabsContent value="cli">
                <ZapierCLI />
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Airtable, Google Search Console, and API integrations coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-models">
            <Card>
              <CardHeader>
                <CardTitle>AI Model Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Azure AI Foundry and Latitude.so integration coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SEODashboard;
