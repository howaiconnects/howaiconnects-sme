import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Rocket, 
  Users, 
  Globe, 
  Target, 
  Lightbulb, 
  Code,
  BarChart3,
  Zap,
  ArrowRight,
  Sparkles,
  Star,
  Award,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const companyValues = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-First Innovation",
      description: "We believe artificial intelligence is the foundation of tomorrow's technology. Every solution we build puts AI capabilities at its core."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Future-Focused Thinking",
      description: "We don't just solve today's problems - we anticipate tomorrow's challenges and build solutions that remain relevant as technology evolves."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Human-Centered AI",
      description: "Our AI solutions enhance human capabilities rather than replace them, creating technology that empowers people and organizations."
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Global Impact",
      description: "We're building AI solutions that can transform industries worldwide, making advanced technology accessible to businesses of every size."
    }
  ];

  const teamMembers = [
    {
      name: "Adham Eldeeb",
      role: "Founder & CEO",
      bio: "Startup founder and technical leader with over a decade of experience in software engineering, sales, and customer service leadership. Driving growth and excellence in aviation and industrial sectors while pioneering AI-powered solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["AI Strategy", "Technical Leadership", "Business Development"],
      linkedin: "https://ca.linkedin.com/in/adham-eldeeb"
    },
    {
      name: "Reham Sultan",
      role: "Customer Service Director", 
      bio: "Experienced customer service leader with expertise in compliance, risk management, and operational excellence. Brings strong background in financial services and customer experience optimization.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?w=400&h=400&fit=crop&crop=face",
      expertise: ["Customer Experience", "Operations", "Compliance"],
      linkedin: "https://www.linkedin.com/in/reham~sultan/"
    }
  ];

  const achievements = [
    { number: "2024", label: "Founded", color: "text-blue-600" },
    { number: "50+", label: "AI Projects Delivered", color: "text-purple-600" },
    { number: "100+", label: "AI Models Deployed", color: "text-green-600" },
    { number: "99.9%", label: "System Uptime", color: "text-orange-600" }
  ];

  const milestones = [
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      title: "2024 Q1: Company Founded",
      description: "HowAIConnects was born from a vision to democratize advanced AI technology"
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "2024 Q2: First AI Platform Launch",
      description: "Deployed our first intelligent automation platform with 99.9% uptime"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "2024 Q3: Enterprise Partnerships",
      description: "Secured partnerships with leading enterprises for AI transformation projects"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "2024 Q4: Global Expansion",
      description: "Expanded our AI solutions to serve clients across multiple industries worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About HowAIConnects | AI Startup Building Tomorrow's Technology</title>
        <meta name="description" content="Learn about HowAIConnects, the AI startup pioneering advanced AI-powered web applications and intelligent automation solutions. Meet our team of AI experts and innovators." />
        <meta name="keywords" content="AI startup team, artificial intelligence company, AI experts, machine learning specialists, AI innovation, technology leadership" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HowAIConnects",
              "description": "AI startup pioneering advanced AI-powered web applications and intelligent automation solutions",
              "url": "https://howaiconnects.com",
              "foundingDate": "2024",
              "industry": "Artificial Intelligence",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-647-123-4567",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600 font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              The AI Startup Building Tomorrow
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Founded by experienced technology leaders, we're pioneering AI-designed and AI-powered 
              full-stack applications that transform how businesses operate and scale.
            </p>
            <div className="mb-8">
              <Button 
                asChild 
                variant="outline" 
                className="group hover:bg-brand-accent hover:text-white"
              >
                <a 
                  href="https://linkedin.com/company/howaiconnects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328c0 .734.582 1.332 1.328 1.332h15.34c.734 0 1.332-.598 1.332-1.332C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                  Follow HowAIConnects on LinkedIn
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                <Rocket className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                Join Our Mission
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To democratize advanced artificial intelligence by creating custom AI-powered web applications 
                  and intelligent automation solutions that transform how businesses operate, making cutting-edge 
                  AI technology accessible to organizations of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the world's leading AI startup that pioneers the future of intelligent web applications, 
                  creating a world where AI seamlessly integrates into every aspect of business operations, 
                  driving unprecedented innovation and efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do in AI innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced founders and leaders driving innovation in AI-powered business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                        {member.linkedin && (
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm" 
                            className="text-xs hover:bg-brand-accent hover:text-white"
                          >
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                              </svg>
                              LinkedIn
                            </a>
                          </Button>
                        )}
                      </div>
                      <p className="text-brand-accent font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs bg-brand-light/10 text-brand-dark border-brand-accent/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in building the future of AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                      {milestone.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Build the Future with AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join us in creating the next generation of intelligent web applications and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  <Brain className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Your AI Project
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/web-app-development">
                  <Code className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;