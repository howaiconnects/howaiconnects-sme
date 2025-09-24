import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Mail, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const AIStartupPlatform = () => {
  const projects = [
    {
      title: "DealStream",
      description: "AI-powered real estate intelligence platform for the wholesaling market. Uncovers distressed and off-market listings using multi-layered scraping and AI-powered matching.",
      features: ["Advanced web scraping (Bright Data, Apify, Apollo, Crawl4AI)", "AI-powered property matching", "Hedge fund integration", "Real-time market intelligence"],
      icon: <Database className="h-8 w-8 text-white" />,
      link: "/projects/dealstream",
      bgClass: "bg-gradient-to-br from-brand-primary to-brand-secondary",
      status: "Currently in testing"
    },
    {
      title: "OST2PST.com", 
      description: "Enterprise-grade, AI-powered Outlook data conversion platform. Designed for legal, IT, and enterprise clients with AI-enhanced parsing and error recovery.",
      features: ["High-speed secure conversions", "AI-driven error recovery", "Metadata extraction", "Enterprise-grade security"],
      icon: <Mail className="h-8 w-8 text-white" />,
      link: "/projects/ost2pst",
      bgClass: "bg-gradient-to-br from-brand-secondary to-brand-accent",
      status: "In early adoption"
    },
    {
      title: "HowAIConnects Platform",
      description: "Our flagship unified AI framework - the engine powering all current and future products. Fully modular, cloud-native AI operating system.",
      features: ["Next.js + Azure AD authentication", "Multi-agent orchestration (CrewAI)", "OpenAI & Azure AI SDK integration", "FastAPI + Miro AI collaboration"],
      icon: <Brain className="h-8 w-8 text-white" />,
      link: "/projects/howaiconnects-platform", 
      bgClass: "bg-gradient-to-br from-brand-accent to-brand-primary",
      status: "Core infrastructure"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-accent/20">
            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
            <span className="text-sm font-medium text-brand-primary">Current Projects</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="gradient-text">AI-Designed & AI-Powered Solutions</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We build AI-designed, AI-powered full-stack applications tailored to each business. These aren't just AI wrappers—they're deeply integrated web apps that handle everything from repetitive workflows to autonomous business decision-making.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0 card-hover">
              <div className={`p-6 ${project.bgClass} flex items-center relative overflow-hidden`}>
                <div className="bg-white/20 p-3 rounded-full mr-4 backdrop-blur-sm">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  <span className="text-xs text-white/80 font-medium mt-1 block">{project.status}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 border border-white/20 rounded-lg rotate-12 opacity-50"></div>
              </div>
              <CardHeader className="bg-white pb-2">
                <CardDescription className="text-base text-gray-700 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2 pb-6 bg-white">
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={project.link}>
                  <Button className="w-full bg-brand-primary hover:bg-brand-secondary text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 border border-brand-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Built with HowAIConnects Platform
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              At the core of our builds is the HowAIConnects platform—a unified AI framework integrating Azure AD, Next.js, CrewAI, Latitude 2.0, and mem0. It offers secure enterprise authentication, multi-agent orchestration, real-time sync, and smart memory management.
            </p>
            <Link to="/projects/howaiconnects-platform">
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Explore Platform Architecture
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStartupPlatform;