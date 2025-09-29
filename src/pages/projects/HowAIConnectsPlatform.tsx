import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Brain, Shield, Zap, Cloud } from "lucide-react";

const HowAIConnectsPlatform = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Authentication",
      description: "Azure AD integration with secure, scalable user management and role-based access control."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Multi-Agent Orchestration",
      description: "CrewAI-powered intelligent agent coordination for complex workflow automation."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Modern Frontend",
      description: "Next.js 15+ with React Server Components for lightning-fast, SEO-optimized experiences."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Intelligent Memory",
      description: "mem0 integration for contextual AI memory and advanced data relationship management."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High-Performance Backend",
      description: "FastAPI for scalable, async-ready API processing and real-time data operations."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Visual Collaboration",
      description: "Miro AI SDK for intelligent whiteboarding, project visualization, and team coordination."
    }
  ];

  const techStack = [
    "Next.js 15+", "Azure AD", "CrewAI", "Latitude 2.0", "OpenAI SDK", 
    "Azure AI SDK", "mem0", "FastAPI", "Miro AI SDK", "Supabase",
    "TypeScript", "Tailwind CSS", "React Server Components"
  ];

  return (
    <>
      <Helmet>
        <title>HowAIConnects Platform | Unified AI Framework for Enterprise | HowAIConnects</title>
        <meta 
          name="description" 
          content="Explore the HowAIConnects Platform - a comprehensive AI framework integrating enterprise authentication, multi-agent orchestration, and intelligent workflow automation."
        />
        <meta 
          name="keywords" 
          content="AI platform, enterprise AI, multi-agent orchestration, Azure AD, CrewAI, Next.js, FastAPI"
        />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-brand-primary text-white">Platform Overview</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              HowAIConnects Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A unified AI framework that seamlessly integrates enterprise authentication, multi-agent orchestration, 
              real-time data sync, and advanced memory management into a single, scalable ecosystem.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/early-access">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-accent">
                  Join Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Architecture</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with cutting-edge technologies to deliver enterprise-grade AI solutions at scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-brand-primary/20 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powered by the most advanced AI and web technologies available today
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4 bg-white border border-brand-primary/10">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Platform?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Modular Architecture</h3>
                      <p className="text-muted-foreground">Build exactly what you need with our composable AI components.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                      <p className="text-muted-foreground">Azure-grade security and compliance built into every component.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Intelligent Automation</h3>
                      <p className="text-muted-foreground">AI agents that learn, adapt, and optimize your workflows automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Join our early access program and be among the first to experience the future of AI-powered business applications.
                  </p>
                  <div className="space-y-3">
                    <Link to="/early-access" className="block">
                      <Button className="w-full bg-brand-primary hover:bg-brand-accent">
                        Join Early Access Program
                      </Button>
                    </Link>
                    <Link to="/contact" className="block">
                      <Button variant="outline" className="w-full">
                        Schedule a Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the power of our unified AI platform and see how it can revolutionize your operations.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/early-access">
                <Button size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
                  Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HowAIConnectsPlatform;