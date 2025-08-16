import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Database, 
  Bot, 
  BarChart3, 
  Settings, 
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react";
import ZapierAirtableIntegration from "@/components/integrations/ZapierAirtableIntegration";
import { LatitudeIntegration } from "@/components/integrations/LatitudeIntegration";
import { AirtableIntegration } from "@/components/integrations/AirtableIntegration";
import { Link } from "react-router-dom";

const AutomationDashboard = () => {
  const integrationStats = [
    {
      title: "Active Automations",
      value: "12",
      change: "+3 this month",
      icon: Zap,
      color: "text-orange-600"
    },
    {
      title: "Data Records Synced",
      value: "2,847",
      change: "+421 this week",
      icon: Database,
      color: "text-blue-600"
    },
    {
      title: "AI Workflows",
      value: "8",
      change: "+2 this month",
      icon: Bot,
      color: "text-purple-600"
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.5% improvement",
      icon: BarChart3,
      color: "text-green-600"
    }
  ];

  const quickActions = [
    {
      title: "Test Zapier Webhook",
      description: "Send test data to your Zapier workflows",
      action: "Test Now",
      type: "zapier"
    },
    {
      title: "Sync Airtable Data",
      description: "Manually trigger data synchronization",
      action: "Sync Now",
      type: "airtable"
    },
    {
      title: "Run AI Content Workflow",
      description: "Generate content using Latitude.so",
      action: "Generate",
      type: "latitude"
    },
    {
      title: "View Integration Logs",
      description: "Check recent integration activity",
      action: "View Logs",
      type: "monitoring"
    }
  ];

  const recentActivity = [
    {
      type: "success",
      message: "Contact form submitted → Airtable record created",
      timestamp: "2 minutes ago",
      details: "Lead: John Doe (john@example.com)"
    },
    {
      type: "success",
      message: "SEO report generated → Airtable dashboard updated",
      timestamp: "15 minutes ago",
      details: "Keywords tracked: 45, New rankings: 12"
    },
    {
      type: "warning",
      message: "AI content workflow completed with warnings",
      timestamp: "1 hour ago",
      details: "Content generated but SEO optimization had issues"
    },
    {
      type: "success",
      message: "Consultation booking → Calendar sync successful",
      timestamp: "2 hours ago",
      details: "Client: Sarah Johnson, Date: Tomorrow 2:00 PM"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automation Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your business automation workflows and integrations
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/seo">
                <BarChart3 className="h-4 w-4 mr-2" />
                SEO Dashboard
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard">
                <ArrowRight className="h-4 w-4 mr-2" />
                Main Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {integrationStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common automation tasks and integrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Integration Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="airtable">Airtable</TabsTrigger>
            <TabsTrigger value="zapier-airtable">Zapier + Airtable</TabsTrigger>
            <TabsTrigger value="latitude-ai">Latitude.so AI</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Integration Status */}
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Integration Status</CardTitle>
                  <CardDescription>Current status of your automation integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Zapier Integration</p>
                        <p className="text-sm text-muted-foreground">12 active Zaps running</p>
                      </div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Airtable Integration</p>
                        <p className="text-sm text-muted-foreground">4 bases connected</p>
                      </div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium">Latitude.so AI</p>
                        <p className="text-sm text-muted-foreground">8 AI workflows configured</p>
                      </div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity Summary */}
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest automation events and workflows</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.slice(0, 4).map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50">
                        {getActivityIcon(activity.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.message}</p>
                          <p className="text-xs text-muted-foreground">{activity.details}</p>
                          <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="#activity">View All Activity</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="airtable">
            <AirtableIntegration />
          </TabsContent>

          <TabsContent value="zapier-airtable">
            <ZapierAirtableIntegration />
          </TabsContent>

          <TabsContent value="latitude-ai">
            <LatitudeIntegration />
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Detailed log of all automation events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg border hover:shadow-sm transition-shadow">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{activity.message}</p>
                          <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{activity.details}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {activity.type === 'success' ? 'Completed' : 
                             activity.type === 'warning' ? 'Warning' : 'Error'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Integration Settings
                </CardTitle>
                <CardDescription>Configure your automation preferences and connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Zapier Configuration</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage your Zapier webhook endpoints and API connections
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="https://zapier.com/app/dashboard" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open Zapier Dashboard
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Airtable Setup</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Configure your Airtable bases and API credentials
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="https://airtable.com/api" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Airtable API Docs
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Latitude.so AI</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage AI prompt workflows and model configurations
                      </p>
                      <Button variant="outline" className="w-full">
                        <Bot className="h-4 w-4 mr-2" />
                        Configure AI Settings
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Monitoring & Alerts</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Set up notifications for integration events
                      </p>
                      <Button variant="outline" className="w-full">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Configure Alerts
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AutomationDashboard;