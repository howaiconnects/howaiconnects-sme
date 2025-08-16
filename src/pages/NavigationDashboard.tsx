import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Home, 
  Brain, 
  Database, 
  Zap, 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  Briefcase, 
  GraduationCap,
  Shield,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle,
  Star,
  Cpu,
  Bot,
  Mail,
  Phone,
  Globe,
  Building,
  CreditCard
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface QuickActionCard {
  title: string;
  description: string;
  icon: React.ElementType;
  path: string;
  category: 'dashboard' | 'service' | 'resource' | 'admin' | 'external';
  status?: 'active' | 'beta' | 'coming-soon';
  isPremium?: boolean;
  external?: boolean;
}

interface NavigationSection {
  title: string;
  description: string;
  items: QuickActionCard[];
}

const NavigationDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  // Comprehensive navigation structure
  const navigationSections: NavigationSection[] = [
    {
      title: "Core Dashboards",
      description: "Primary control centers for your business operations",
      items: [
        {
          title: "Main Dashboard",
          description: "Overview of your AI platform and quick actions",
          icon: Home,
          path: "/dashboard",
          category: "dashboard",
          status: "active"
        },
        {
          title: "SEO Dashboard", 
          description: "AI-powered SEO analytics and optimization tools",
          icon: BarChart3,
          path: "/seo",
          category: "dashboard",
          status: "active",
          isPremium: true
        },
        {
          title: "Automation Hub",
          description: "Manage Zapier, Airtable, and AI workflow integrations",
          icon: Zap,
          path: "/automation",
          category: "dashboard", 
          status: "active",
          isPremium: true
        },
        {
          title: "Admin Console",
          description: "System administration and user management",
          icon: Shield,
          path: "/admin/dashboard",
          category: "admin",
          status: "active"
        }
      ]
    },
    {
      title: "AI Services",
      description: "Artificial intelligence and automation solutions",
      items: [
        {
          title: "Marketing Automation",
          description: "AI-driven marketing campaigns and lead nurturing",
          icon: Bot,
          path: "/services/ai-automation-solutions/marketing-automation",
          category: "service",
          status: "active"
        },
        {
          title: "Workflow Automation", 
          description: "Streamline business processes with intelligent automation",
          icon: Cpu,
          path: "/services/ai-automation-solutions/workflow-automation",
          category: "service",
          status: "active"
        },
        {
          title: "Customer Service AI",
          description: "Automated customer support and chatbot solutions",
          icon: Users,
          path: "/services/ai-automation-solutions/customer-service-automation", 
          category: "service",
          status: "active"
        },
        {
          title: "AI Strategy Development",
          description: "Custom AI implementation roadmaps for your business",
          icon: Brain,
          path: "/services/ai-consultation/ai-strategy-development",
          category: "service", 
          status: "active",
          isPremium: true
        }
      ]
    },
    {
      title: "Business Solutions",
      description: "Complete business transformation services", 
      items: [
        {
          title: "Web App Development",
          description: "Custom web applications for small and medium businesses", 
          icon: Globe,
          path: "/web-app-development",
          category: "service",
          status: "active"
        },
        {
          title: "Done-for-You AI Agency",
          description: "Launch your own AI agency with zero upfront cost",
          icon: Building,
          path: "/done-for-you-ai-agency", 
          category: "service",
          status: "active",
          isPremium: true
        },
        {
          title: "AI Readiness Assessment",
          description: "Evaluate your business readiness for AI transformation",
          icon: CheckCircle,
          path: "/services/ai-consultation/ai-readiness-assessment",
          category: "service",
          status: "active"
        },
        {
          title: "Implementation Support",
          description: "End-to-end AI implementation and ongoing support",
          icon: Settings,
          path: "/services/ai-consultation/implementation-support",
          category: "service", 
          status: "active",
          isPremium: true
        }
      ]
    },
    {
      title: "Learning & Resources",
      description: "Educational content and business resources",
      items: [
        {
          title: "Resource Library",
          description: "Templates, guides, and automation resources",
          icon: FileText,
          path: "/resources",
          category: "resource",
          status: "active"
        },
        {
          title: "Case Studies", 
          description: "Real-world AI implementation success stories",
          icon: Star,
          path: "/resources/case-studies",
          category: "resource",
          status: "active"
        },
        {
          title: "AI Tools Directory",
          description: "Curated collection of AI tools and platforms",
          icon: Briefcase,
          path: "/resources/tools", 
          category: "resource",
          status: "active"
        },
        {
          title: "Training Courses",
          description: "AI and automation courses for business professionals",
          icon: GraduationCap,
          path: "/courses",
          category: "resource",
          status: "beta"
        }
      ]
    },
    {
      title: "Account & Support",
      description: "Account management and customer support",
      items: [
        {
                  title: "Account Settings",
                  description: "Manage your profile, billing, and preferences", 
                  icon: Users,
          path: "/account",
          category: "dashboard",
          status: "active"
        },
        {
          title: "Contact Support",
          description: "Get help from our AI automation experts",
          icon: Mail,
          path: "/contact",
          category: "external",
          status: "active"
        },
        {
          title: "Book Consultation",
          description: "Schedule a free AI strategy consultation",
          icon: Phone, 
          path: "/contact#consultation",
          category: "external",
          status: "active",
          isPremium: true
        },
        {
          title: "Billing & Invoices",
          description: "View billing history and manage subscriptions",
          icon: CreditCard,
          path: "/account#billing", 
          category: "dashboard",
          status: "coming-soon"
        }
      ]
    }
  ];

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default" className="ml-2">Active</Badge>;
      case 'beta':  
        return <Badge variant="secondary" className="ml-2">Beta</Badge>;
      case 'coming-soon':
        return <Badge variant="outline" className="ml-2">Coming Soon</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'beta':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'coming-soon':
        return <AlertTriangle className="h-4 w-4 text-gray-400" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'dashboard': return 'border-l-blue-500 bg-blue-50 dark:bg-blue-950/20';
      case 'service': return 'border-l-purple-500 bg-purple-50 dark:bg-purple-950/20';  
      case 'resource': return 'border-l-green-500 bg-green-50 dark:bg-green-950/20';
      case 'admin': return 'border-l-red-500 bg-red-50 dark:bg-red-950/20';
      case 'external': return 'border-l-orange-500 bg-orange-50 dark:bg-orange-950/20';
      default: return 'border-l-gray-500 bg-gray-50 dark:bg-gray-950/20';
    }
  };

  const isCurrentPath = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  // Recent activity and quick stats
  const quickStats = [
    { label: "Active Integrations", value: "12", icon: Zap, change: "+3 this month" },
    { label: "AI Workflows", value: "8", icon: Bot, change: "+2 this week" },
    { label: "Data Records", value: "2.8K", icon: Database, change: "+421 this week" },
    { label: "Success Rate", value: "99.2%", icon: BarChart3, change: "+0.5% improvement" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              360° Navigation Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Complete visibility and access to all HowAIConnects features and services
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="px-3 py-1">
              {user?.email || 'User'}
            </Badge>
            <Badge variant="default" className="px-3 py-1">
              {user?.role || 'Member'}
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Navigation Sections */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">All Features</TabsTrigger>
            <TabsTrigger value="shortcuts">Quick Access</TabsTrigger>
            <TabsTrigger value="sitemap">Site Map</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {navigationSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <Card 
                        key={itemIndex} 
                        className={`border-l-4 transition-all hover:shadow-md ${getCategoryColor(item.category)} ${
                          isCurrentPath(item.path) ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm">
                                <item.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-sm">{item.title}</h3>
                                  {item.isPremium && <Badge variant="secondary" className="text-xs">Premium</Badge>}
                                  {getStatusBadge(item.status)}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(item.status)}
                              <Button size="sm" variant="outline" asChild>
                                <Link to={item.path}>
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>All Features & Services</CardTitle>
                <CardDescription>Complete list of available features organized by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {navigationSections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-lg font-semibold mb-3 text-primary">{section.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {section.items.map((item) => (
                          <Button
                            key={item.path}
                            variant={isCurrentPath(item.path) ? "default" : "outline"}
                            className="h-auto p-3 flex flex-col items-start text-left"
                            asChild
                          >
                            <Link to={item.path}>
                              <div className="flex items-center gap-2 mb-1">
                                <item.icon className="h-4 w-4" />
                                <span className="font-medium text-sm">{item.title}</span>
                              </div>
                              <span className="text-xs opacity-75">{item.status}</span>
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Most Used Features */}
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Most Used</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/seo"><BarChart3 className="h-4 w-4 mr-2" />SEO Dashboard</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/automation"><Zap className="h-4 w-4 mr-2" />Automation Hub</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/resources"><FileText className="h-4 w-4 mr-2" />Resources</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Features */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-purple-600" />
                    Premium Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/services/ai-consultation/ai-strategy-development">
                      <Brain className="h-4 w-4 mr-2" />AI Strategy
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/done-for-you-ai-agency">
                      <Building className="h-4 w-4 mr-2" />AI Agency
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/contact#consultation">
                      <Phone className="h-4 w-4 mr-2" />Consultation
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* External Links */}
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">External Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://pathtocanada.ca" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />Path to Canada
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://aidatagem.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />AI Data Gem
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/contact">
                      <Mail className="h-4 w-4 mr-2" />Contact Support
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sitemap" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Complete Site Map</CardTitle>
                <CardDescription>All routes and pages in the application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Public Pages</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li><Link to="/" className="hover:text-primary">Home</Link></li>
                      <li><Link to="/about" className="hover:text-primary">About</Link></li>
                      <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                      <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
                      <li><Link to="/courses" className="hover:text-primary">Courses</Link></li>
                      <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">AI Services</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li><Link to="/services/ai-automation-solutions/marketing-automation" className="hover:text-primary">Marketing Automation</Link></li>
                      <li><Link to="/services/ai-automation-solutions/workflow-automation" className="hover:text-primary">Workflow Automation</Link></li>
                      <li><Link to="/services/ai-automation-solutions/customer-service-automation" className="hover:text-primary">Customer Service AI</Link></li>
                      <li><Link to="/services/ai-consultation/ai-readiness-assessment" className="hover:text-primary">AI Readiness</Link></li>
                      <li><Link to="/services/ai-consultation/ai-strategy-development" className="hover:text-primary">AI Strategy</Link></li>
                      <li><Link to="/services/ai-consultation/implementation-support" className="hover:text-primary">Implementation</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Protected Areas</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li><Link to="/dashboard" className="hover:text-primary">Main Dashboard</Link></li>
                      <li><Link to="/seo" className="hover:text-primary">SEO Dashboard</Link></li>
                      <li><Link to="/automation" className="hover:text-primary">Automation Hub</Link></li>
                      <li><Link to="/account" className="hover:text-primary">Account Settings</Link></li>
                      <li><Link to="/admin/dashboard" className="hover:text-primary">Admin Console</Link></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NavigationDashboard;