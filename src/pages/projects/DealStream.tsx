import React from 'react';
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Brain, Target, Zap, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const DealStream = () => {
  const features = [
    {
      title: "Advanced Web Scraping",
      description: "Multi-layered scraping system using Bright Data, Apify, Apollo, and Crawl4AI",
      icon: <Database className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: "AI-Powered Matching", 
      description: "Intelligent matching engine with custom buy-box logic for hedge funds",
      icon: <Brain className="h-6 w-6 text-brand-accent" />
    },
    {
      title: "Real-Time Intelligence",
      description: "Continuous monitoring of property feeds with instant notifications",
      icon: <Zap className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Market Analysis",
      description: "Advanced data interpretation and property profiling using OpenAI SDK",
      icon: <Target className="h-6 w-6 text-brand-secondary" />
    }
  ];

  const techStack = [
    "Bright Data", "Apify", "Apollo", "Crawl4AI", "OpenAI SDK", 
    "Azure AI", "Next.js", "FastAPI", "Real-time Processing"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>DealStream - AI-Powered Real Estate Intelligence | HowAIConnects</title>
        <meta name="description" content="DealStream: Advanced AI-powered real estate platform for wholesaling market. Uncovers distressed listings and matches them with hedge funds using intelligent algorithms." />
        <meta name="keywords" content="real estate AI, property intelligence, hedge fund matching, distressed properties, real estate automation, AI property analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Currently in Testing</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              DealStream Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
              AI-powered real estate intelligence platform for the wholesaling market. Uncovers distressed and off-market listings using advanced scraping and intelligent matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-3">
                  Request Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Intelligent Real Estate Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform revolutionizes how investors discover and evaluate distressed properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How DealStream Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data collection to deal execution, every step is powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Continuous Scanning</h3>
              <p className="text-gray-600">Our AI continuously monitors multiple data sources for distressed and off-market properties using advanced scraping frameworks.</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">Advanced AI algorithms analyze property data, market conditions, and investment potential using OpenAI and Azure AI technologies.</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
              <p className="text-gray-600">Properties are intelligently matched to hedge funds based on custom buy-box criteria and investment preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-gray-600 mb-8">
              Powered by the HowAIConnects Platform and industry-leading AI technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-brand-primary text-brand-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Real Estate Investment Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our early access program and be among the first to experience AI-powered real estate intelligence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DealStream;