import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Cpu, Zap, Settings, LogOut, User, Database, ArrowRight, Menu, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';

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
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-blue-50/30">
      <Helmet>
        <title>AI Platform Dashboard | HowAIConnects</title>
        <meta name="description" content="Your personal AI orchestration dashboard. Manage workflows, integrations, and automation." />
      </Helmet>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">AI Platform</h1>
              <p className="text-gray-600">Welcome to the Future</p>
            </div>
          </div>
          <p className="text-muted-foreground text-lg">
            Your AI orchestration platform is ready. Start building tomorrow's workflows today.
          </p>
        </div>

        {/* Platform Capabilities */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary">
                      <div className="text-white">
                        {capability.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900">{capability.title}</CardTitle>
                  </div>
                  <Badge 
                    variant={capability.status === 'Active' ? 'default' : 'secondary'}
                    className={capability.status === 'Active' ? 'bg-brand-accent text-white' : ''}
                  >
                    {capability.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{capability.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            <CardDescription className="text-gray-600">
              Jump into building your AI-powered workflows
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Featured Action - Navigation Dashboard */}
            <Card className="border-brand-accent/30 bg-gradient-to-r from-brand-accent/10 to-brand-accent/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-accent to-brand-light-accent text-white">
                      <Menu className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">360° Navigation Center</h3>
                      <p className="text-sm text-gray-600">Complete visibility of all features & services</p>
                    </div>
                  </div>
                  <Button asChild className="bg-brand-accent hover:bg-brand-accent/90">
                    <Link to="/seo/navigation">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Explore All
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Featured Action - Automation Dashboard */}
            <Card className="border-brand-primary/30 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Automation Dashboard</h3>
                      <p className="text-sm text-gray-600">Manage Zapier, Airtable & AI integrations</p>
                    </div>
                  </div>
                  <Button variant="outline" asChild className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                    <Link to="/seo/automation">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Open Dashboard
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button className="h-auto py-6 flex-col space-y-2 bg-gradient-to-br from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90" asChild>
                <Link to="/seo">
                  <Brain className="h-6 w-6" />
                  <span>SEO Dashboard</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex-col space-y-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white" asChild>
                <Link to="/seo/navigation">
                  <Menu className="h-6 w-6" />
                  <span>Navigation Center</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex-col space-y-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white" asChild>
                <Link to="/seo/automation">
                  <Database className="h-6 w-6" />
                  <span>Automation Hub</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex-col space-y-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                <Settings className="h-6 w-6" />
                <span>Platform Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;