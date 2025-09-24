import React from 'react';
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Shield, Zap, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const OST2PST = () => {
  const features = [
    {
      title: "High-Speed Conversions",
      description: "Enterprise-grade conversion engine with optimized FastAPI backend processing",
      icon: <Zap className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: "AI-Driven Error Recovery", 
      description: "Advanced error detection and recovery using OpenAI SDK for intelligent parsing",
      icon: <Mail className="h-6 w-6 text-brand-accent" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and secure processing for sensitive legal and corporate data",
      icon: <Shield className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Metadata Extraction",
      description: "Comprehensive metadata handling and preservation during conversion process",
      icon: <FileText className="h-6 w-6 text-brand-secondary" />
    }
  ];

  const useCases = [
    {
      title: "Legal Firms",
      description: "Secure email archive conversions for litigation and compliance",
      industries: ["Legal Discovery", "Compliance", "Document Review"]
    },
    {
      title: "Enterprise IT", 
      description: "Large-scale email migration and data management solutions",
      industries: ["Data Migration", "IT Operations", "System Upgrades"]
    },
    {
      title: "Migration Services",
      description: "Professional services for email system transitions",
      industries: ["Service Providers", "Consultants", "System Integrators"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>OST2PST.com - Enterprise Email Conversion Platform | HowAIConnects</title>
        <meta name="description" content="OST2PST.com: AI-powered enterprise-grade email conversion platform. Secure, high-speed conversions with intelligent error recovery and metadata preservation." />
        <meta name="keywords" content="OST to PST converter, email conversion, enterprise email migration, AI-powered email tools, legal email processing, secure email conversion" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-secondary to-brand-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">In Early Adoption</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              OST2PST.com Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Enterprise-grade, AI-powered Outlook data conversion platform. Designed for legal, IT, and enterprise clients with secure, high-speed conversions and intelligent error recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-secondary hover:bg-gray-100 px-8 py-3">
                  Request Enterprise Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit OST2PST.com
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
              Enterprise-Grade Email Conversion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for organizations that demand security, speed, and intelligence in their email data processing
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Enterprise Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by legal firms, enterprise IT departments, and migration service providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.industries.map((industry, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 text-xs">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Security & Compliance First
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                OST2PST.com is architected with enterprise security and compliance at its core. Every conversion is processed with bank-level encryption and comprehensive audit trails.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-brand-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">End-to-end encryption with zero data retention</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-brand-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Complete audit trails for compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-brand-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">AI-powered intelligent parsing with error recovery</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white">
                  <CardTitle className="text-white">Conversion Stats</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-bold text-brand-primary">99.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Processing Speed</span>
                      <span className="font-bold text-brand-primary">15MB/sec</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Metadata Preservation</span>
                      <span className="font-bold text-brand-primary">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Enterprise Clients</span>
                      <span className="font-bold text-brand-primary">200+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-secondary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Enterprise-Grade Email Conversion?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the power of AI-enhanced email processing with enterprise security and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-brand-secondary hover:bg-gray-100 px-8 py-4 text-lg">
                Request Enterprise Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit OST2PST.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OST2PST;