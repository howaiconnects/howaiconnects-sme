import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Settings, 
  BarChart3, 
  Mail, 
  Shield,
  Database
} from 'lucide-react';

const AdminDashboard = () => {
  const { userProfile, signOut } = useAuth();

  const adminFeatures = [
    {
      title: "User Management",
      description: "Manage user accounts, roles, and permissions",
      icon: Users,
      href: "/admin/users",
      color: "text-blue-600"
    },
    {
      title: "Email Integration",
      description: "Configure email settings and templates",
      icon: Mail,
      href: "/admin/email-integration",
      color: "text-green-600"
    },
    {
      title: "Analytics",
      description: "View platform usage and performance metrics",
      icon: BarChart3,
      href: "/admin/analytics",
      color: "text-purple-600"
    },
    {
      title: "System Settings",
      description: "Configure platform settings and preferences",
      icon: Settings,
      href: "/admin/settings",
      color: "text-orange-600"
    },
    {
      title: "Security",
      description: "Manage security settings and access controls",
      icon: Shield,
      href: "/admin/security",
      color: "text-red-600"
    },
    {
      title: "Database",
      description: "View and manage database operations",
      icon: Database,
      href: "/admin/database",
      color: "text-indigo-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | HowAIConnects</title>
        <meta name="description" content="Administrative dashboard for HowAIConnects platform management." />
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back, {userProfile?.full_name || userProfile?.email}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/dashboard">User Dashboard</Link>
            </Button>
            <Button variant="destructive" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.href} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link to={feature.href}>Access {feature.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Platform overview and key metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">--</div>
                <div className="text-sm text-muted-foreground">Total Users</div>
              </div>
              <div className="text-center p-4 bg-green-500/5 rounded-lg">
                <div className="text-2xl font-bold text-green-600">--</div>
                <div className="text-sm text-muted-foreground">Active Sessions</div>
              </div>
              <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">--</div>
                <div className="text-sm text-muted-foreground">Platform Uptime</div>
              </div>
              <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">--</div>
                <div className="text-sm text-muted-foreground">System Health</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminDashboard;