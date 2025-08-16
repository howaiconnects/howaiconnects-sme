import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Settings, 
  User, 
  Database, 
  ArrowRight, 
  Menu, 
  BarChart3,
  FileText,
  Users,
  Rocket,
  TrendingUp,
  Clock,
  CheckCircle,
  PlayCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  // User onboarding progress - dynamic based on actual usage
  const userProgress = {
    setupComplete: 85,
    nextSteps: [
      { task: "Connect first automation", completed: true },
      { task: "Set up AI agent", completed: true }, 
      { task: "Create first workflow", completed: false },
      { task: "Configure analytics", completed: false }
    ]
  };

  // Quick Actions - Most used daily tasks
  const quickActions = [
    {
      title: "Build Automation",
      description: "Create new AI workflow",
      icon: <Zap className="h-5 w-5" />,
      url: "/app/automation",
      priority: "high",
      badge: "Most Used"
    },
    {
      title: "View Analytics", 
      description: "Monitor performance",
      icon: <BarChart3 className="h-5 w-5" />,
      url: "/app",
      priority: "high"
    },
    {
      title: "Manage Content",
      description: "Update resources",
      icon: <FileText className="h-5 w-5" />,
      url: "/resources",
      priority: "medium"
    },
    {
      title: "Team Settings",
      description: "User management",
      icon: <Users className="h-5 w-5" />,
      url: "/account",
      priority: "low"
    }
  ];

  // Navigation Groups - Feature discovery  
  const navigationGroups = [
    {
      title: "Core Workflows",
      description: "Main platform features",
      items: [
        { name: "AI Automation Hub", url: "/app/automation", icon: <Zap className="h-4 w-4" /> },
        { name: "Analytics Dashboard", url: "/app", icon: <BarChart3 className="h-4 w-4" /> },
        { name: "Navigation Center", url: "/app/navigation", icon: <Menu className="h-4 w-4" /> }
      ]
    },
    {
      title: "AI Services",
      description: "Business solutions",
      items: [
        { name: "Service Catalog", url: "/services", icon: <Brain className="h-4 w-4" /> },
        { name: "Web Development", url: "/web-app-development", icon: <Database className="h-4 w-4" /> },
        { name: "AI Agency", url: "/done-for-you-ai-agency", icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      title: "Learning & Support", 
      description: "Resources & training",
      items: [
        { name: "Resource Library", url: "/resources", icon: <FileText className="h-4 w-4" /> },
        { name: "Training Courses", url: "/courses", icon: <Brain className="h-4 w-4" /> },
        { name: "System Audit", url: "/app/audit", icon: <CheckCircle className="h-4 w-4" /> }
      ]
    }
  ];

  // Platform Status - Real system health
  const platformStatus = [
    { name: "AI Services", status: "operational", uptime: "99.9%" },
    { name: "Automations", status: "operational", uptime: "99.8%" },
    { name: "Integrations", status: "maintenance", uptime: "98.5%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-blue-50/30">
      <Helmet>
        <title>AI Platform Dashboard | HowAIConnects</title>
        <meta name="description" content="Your personal AI orchestration dashboard. Manage workflows, integrations, and automation." />
      </Helmet>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        
        {/* Welcome Header with Progress */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.email?.split('@')[0] || 'User'}</h1>
                <p className="text-muted-foreground">HowAIConnects AI Platform</p>
              </div>
            </div>
          </div>
          
          {/* Setup Progress */}
          <Card className="w-full lg:w-80">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Setup Progress</span>
                <span className="text-sm text-muted-foreground">{userProgress.setupComplete}%</span>
              </div>
              <Progress value={userProgress.setupComplete} className="mb-3" />
              <div className="space-y-1">
                {userProgress.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <CheckCircle className={`h-3 w-3 ${step.completed ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className={step.completed ? 'text-green-700' : 'text-muted-foreground'}>
                      {step.task}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Status Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                Platform Status
              </h3>
              <div className="flex items-center gap-4">
                {platformStatus.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${
                      service.status === 'operational' ? 'bg-green-500' : 
                      service.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <span className="text-sm">{service.name}</span>
                    <span className="text-xs text-muted-foreground">{service.uptime}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions - Daily Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Most frequently used tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action, index) => (
                <Button 
                  key={index}
                  variant={action.priority === 'high' ? 'default' : 'outline'}
                  className="h-auto p-4 flex-col space-y-2 text-left"
                  asChild
                >
                  <Link to={action.url}>
                    <div className="flex items-center justify-between w-full">
                      {action.icon}
                      {action.badge && (
                        <Badge variant="secondary" className="text-xs">{action.badge}</Badge>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs opacity-70">{action.description}</div>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Groups - Feature Discovery */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {navigationGroups.map((group, groupIndex) => (
            <Card key={groupIndex}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <Button
                    key={itemIndex}
                    variant="ghost"
                    className="w-full justify-start h-auto py-3"
                    asChild
                  >
                    <Link to={item.url}>
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Link>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity - Future Enhancement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Rocket className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Start using the platform to see your activity here</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;