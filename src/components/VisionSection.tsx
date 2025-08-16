import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Cpu, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const VisionSection = () => {
  const techHighlights = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built for performance"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Scale",
      description: "Enterprise-ready infrastructure"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Native",
      description: "Intelligence at the core"
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Connect everything"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-brand-primary to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-brand-accent/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-brand-secondary/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10">
            Our North Star
          </Badge>
          <h2 className="text-4xl font-extrabold mb-6 sm:text-5xl">
            Building the Future Before It Arrives
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We're not just building software — we're architecting the neural pathways of tomorrow's business ecosystem. 
              Our AI orchestration platform doesn't just automate; it anticipates, learns, and evolves.
            </p>
            <p className="text-lg text-gray-300 mb-12">
              Almost unlimited deep connections. Voice-activated intelligence. Predictive automation that thinks three steps ahead.
              This isn't consultation — this is the future, delivered today.
            </p>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {techHighlights.map((highlight, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brand-accent/20">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-300">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Manifesto */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-brand-accent">Our Manifesto</h3>
            <div className="space-y-4 text-lg text-gray-200 mb-8">
              <p>
                <strong className="text-white">We believe in AI that empowers, not replaces.</strong> 
                Technology that amplifies human potential rather than diminishing it.
              </p>
              <p>
                <strong className="text-white">We build for tomorrow's challenges with today's solutions.</strong> 
                Our platform evolves as your business grows, learning and adapting at the speed of innovation.
              </p>
              <p>
                <strong className="text-white">We reject complexity for complexity's sake.</strong> 
                Sophistication should feel simple. Power should feel effortless.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white">
                  Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;