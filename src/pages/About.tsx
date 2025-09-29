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
      linkedin: "https://ca.linkedin.com/in/adham-eldeeb",
      linkedinBadge: `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="adham-eldeeb" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/adham-eldeeb?trk=profile-badge">Adham Eldeeb</a></div>`
    },
    {
      name: "Reham Sultan",
      role: "Customer Service Director", 
      bio: "Experienced customer service leader with expertise in compliance, risk management, and operational excellence. Brings strong background in financial services and customer experience optimization.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?w=400&h=400&fit=crop&crop=face",
      expertise: ["Customer Experience", "Operations", "Compliance"],
      linkedin: "https://www.linkedin.com/in/reham~sultan/",
      linkedinBadge: `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="reham~sultan" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/reham%7Esultan?trk=profile-badge">Reham S.</a></div>`
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
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
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
                "telephone": "+1-416-898-4516",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-primary font-semibold tracking-wide">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x">
              Building What You're<br />Dreaming About — Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10">
              We're not consultants. We're an <span className="font-semibold text-foreground">AI startup</span> pioneering 
              <span className="font-semibold text-foreground"> AI-orchestrated full-stack platforms</span> that 
              anticipate tomorrow's needs.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-background to-muted/50 border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className={`text-4xl md:text-5xl font-bold ${achievement.color} mb-3 group-hover:scale-110 transition-transform`}>
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-semibold text-sm">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Vision & Mission Section */}
        <section className="relative py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our North Star
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building the future before it arrives
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-background to-muted/50 p-10 rounded-3xl shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-primary">Our Vision</h3>
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    To become the go-to infrastructure layer that helps SMBs plug into the future of work by 
                    simplifying, customizing, and scaling AI adoption.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a world where every small business has access to intelligent, AI-powered 
                    systems that feel like having a digital COO—always-on, scalable, and deeply integrated 
                    into their unique business logic.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-background to-muted/50 p-10 rounded-3xl shadow-lg border border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-2xl mb-6">
                    <Rocket className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-accent">Our Mission</h3>
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    Empower every small business with personalized AI systems that feel like having a 
                    digital cofounder—always thinking, building, and solving business challenges 24/7.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We build AI-designed and AI-powered full-stack applications tailored to each business's 
                    specific workflows, from automating repetitive tasks to enabling autonomous business 
                    decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">Innovation First</h3>
                <p className="text-muted-foreground">
                  Building the future before it arrives with AI-first architecture and cutting-edge 
                  technology integrations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-brand-accent">Tailored Solutions</h3>
                <p className="text-muted-foreground">
                  Every system is purpose-built, AI-designed, and deeply integrated with how your 
                  business actually operates.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-brand-secondary">Strategic Partnership</h3>
                <p className="text-muted-foreground">
                  We don't just build tools—we become your AI infrastructure partner, scaling with 
                  your ambitions.
                </p>
              </div>
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-full">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold tracking-wide">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Meet Our Founding Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced technology leaders pioneering the future of AI-powered business infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-background via-background/95 to-muted/30 backdrop-blur-sm overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-32 h-32 rounded-full object-cover border-4 border-background group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                        <p className="text-accent font-semibold text-lg">{member.role}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 hover:border-accent/40 transition-all"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      {member.linkedinBadge && (
                        <div 
                          className="linkedin-badge-container"
                          dangerouslySetInnerHTML={{ __html: member.linkedinBadge }}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-primary font-semibold tracking-wide">Join the Future</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Ready to Build Tomorrow?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Partner with us to create <span className="font-semibold text-foreground">AI-orchestrated platforms</span> that 
              anticipate what you'll need tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl">
                <Link to="/contact">
                  <Rocket className="h-6 w-6 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Start Your AI Journey
                  <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300">
                <Link to="/web-app-development">
                  <Code className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Our Platform
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