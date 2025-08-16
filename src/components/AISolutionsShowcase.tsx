/**
 * AI Solutions Showcase Component
 * Highlights advanced AI web applications and custom solutions
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Zap, 
  Bot, 
  Globe, 
  ArrowRight,
  Sparkles,
  Code,
  BarChart3,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const AISolutionsShowcase = () => {
  const aiSolutions = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI Orchestration Platform",
      description: "Web applications, not websites. AI orchestration platforms that seamlessly integrate intelligence into everyday workflows with production-ready scalability.",
      features: ["Machine Learning Integration", "Real-time AI Processing", "Adaptive Interfaces", "Predictive Analytics"],
      badge: "Advanced AI",
      link: "/web-app-development",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Bot className="h-8 w-8 text-purple-600" />,
      title: "Voice-Activated Intelligence",
      description: "Advanced AI systems with voice activation and contextual understanding that anticipate needs and automate complex workflows at scale.",
      features: ["Self-Learning Systems", "Process Optimization", "Intelligent Workflows", "24/7 Monitoring"],
      badge: "Enterprise AI",
      link: "/done-for-you-ai-agency",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Predictive AI Systems",
      description: "Advanced analytics and predictive modeling that thinks three steps ahead, delivering insights before you need them.",
      features: ["Big Data Processing", "AI Analytics", "Predictive Modeling", "Real-time Insights"],
      badge: "Data AI",
      link: "/web-apps/ai-data-gem",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Deep Integration Networks",
      description: "Almost unlimited deep connections between systems, creating intelligent ecosystems that adapt and evolve with your business.",
      features: ["API Integration", "Legacy System AI", "Cloud AI Services", "Custom AI Models"],
      badge: "Integration AI",
      link: "/services",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  const techHighlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom AI Development",
      description: "Built from scratch for your specific needs"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Deep insights powered by machine learning"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level security for all AI implementations"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Instant AI responses and live data processing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 rounded-full">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-purple-600 font-medium">AI Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
            AI Products That Anticipate Tomorrow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building AI orchestration technology that doesn't just solve today's problems — 
            it anticipates what you'll need next and builds the infrastructure to get you there.
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiSolutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    {solution.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full group mt-6">
                  <Link to={solution.link}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Our Proprietary AI Technology Stack
              </h3>
              <p className="text-muted-foreground text-lg">
                Built on Next.js, Supabase backbone, and cutting-edge AI orchestration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {techHighlights.map((highlight, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
                <Button asChild size="lg" className="group">
                  <Link to="/app">
                    <Brain className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Join Waitlist
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsShowcase;