/**
 * AI Startup Mission Component
 * Showcases company mission, vision, and AI innovation focus
 */

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Rocket, 
  Zap, 
  Globe, 
  Target, 
  Lightbulb,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const AIStartupMission = () => {
  const missionPoints = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-First Innovation",
      description: "We design and build AI-powered web applications that push the boundaries of what's possible, creating intelligent solutions that adapt and evolve."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Future-Ready Technology",
      description: "Our advanced AI systems are built for tomorrow's challenges, leveraging cutting-edge machine learning and automation technologies."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Intelligent Automation",
      description: "We create self-learning systems that automate complex workflows, enabling businesses to scale with unprecedented efficiency."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Impact",
      description: "Our AI solutions are designed to transform industries worldwide, making advanced technology accessible to businesses of all sizes."
    }
  ];

  const visionStats = [
    { number: "100+", label: "AI Models Deployed", color: "text-blue-600" },
    { number: "50+", label: "Custom AI Apps Built", color: "text-purple-600" },
    { number: "99.9%", label: "System Reliability", color: "text-green-600" },
    { number: "24/7", label: "AI Monitoring", color: "text-orange-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Mission Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Pioneering the AI Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the next generation of AI-powered web applications and intelligent systems 
            that will define how businesses operate in the digital future.
          </p>
        </div>

        {/* Vision Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {visionStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100 rounded-full">
                <Target className="h-4 w-4 text-purple-600" />
                <span className="text-purple-600 font-medium">Our Vision</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Transforming Tomorrow, Today
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                We envision a world where AI seamlessly integrates into every aspect of business operations, 
                creating intelligent ecosystems that anticipate needs, solve problems before they arise, 
                and unlock unprecedented levels of innovation and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/web-app-development">
                    <Lightbulb className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Explore Our AI Solutions
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/contact">
                    <Rocket className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Join Our AI Journey
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Focus */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Our AI Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "Natural Language Processing", "Computer Vision", 
              "Predictive Analytics", "Automation Frameworks", "Custom AI Models",
              "Deep Learning", "AI Integration APIs"
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 hover:shadow-md transition-shadow cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStartupMission;