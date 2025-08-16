import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Cpu, Zap, Settings, LogOut, User } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const capabilities = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Orchestration",
      description: "Advanced workflow automation with voice integration",
      status: "Active"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Deep Integrations",
      description: "Seamless connection to your entire tech stack",
      status: "Active"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "AI-powered insights for future decision making",
      status: "Beta"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Platform Dashboard | HowAIConnects</title>
        <meta name="description" content="Your personal AI orchestration dashboard. Manage workflows, integrations, and automation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              <h1 className="text-xl font-bold">AI Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="hidden sm:inline-flex">
                <User className="h-3 w-3 mr-1" />
                {user?.email}
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Welcome to the Future
            </h2>
            <p className="text-muted-foreground mt-2">
              Your AI orchestration platform is ready. Start building tomorrow's workflows today.
            </p>
          </div>

          {/* Platform Capabilities */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {capability.icon}
                      </div>
                      <CardTitle className="text-lg">{capability.title}</CardTitle>
                    </div>
                    <Badge variant={capability.status === 'Active' ? 'default' : 'secondary'}>
                      {capability.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Jump into building your AI-powered workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button className="h-auto py-4 flex-col space-y-2">
                <Brain className="h-6 w-6" />
                <span>Create Workflow</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col space-y-2">
                <Cpu className="h-6 w-6" />
                <span>Manage Integrations</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col space-y-2">
                <Zap className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>Platform Settings</span>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default Dashboard;