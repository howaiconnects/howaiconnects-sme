import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AIStartupVision = () => {
  const points = [
    {
      title: "Problem",
      description: "SMBs want the power of AI but get stuck with generic tools that don't align with how they operate. Custom software is expensive, slow, and often misses the mark—leaving them with disconnected systems and wasted time.",
      icon: <Target className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Solution", 
      description: "We build AI-designed, AI-powered full-stack applications that fit like a glove. Each system is custom-built using a modular architecture powered by Next.js, Supabase, Airtable, and FastAPI.",
      icon: <Lightbulb className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Vision",
      description: "To be the trusted AI infrastructure partner for SMBs—powering their back office, growth engine, and strategic decisions through intelligent, modular applications.",
      icon: <TrendingUp className="h-8 w-8 text-brand-secondary" />
    },
    {
      title: "Mission",
      description: "To deliver AI-built systems that feel like digital cofounders—thinking, scaling, and solving business pain points 24/7.",
      icon: <Users className="h-8 w-8 text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-accent/20">
            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-brand-primary">Our Foundation</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Building the <span className="gradient-text">Future of AI</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            As a result of the traction we've gained and market feedback we've received, we've made the deliberate decision to pivot our business model 100% toward building AI-designed and AI-powered solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {points.map((point, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 border border-brand-accent/20 rounded-md rotate-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Advantage Section */}
        <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 border border-brand-accent/20 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-6">
                Our Strategic Advantage
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                What we've discovered is that when AI is implemented correctly—intelligently integrated into workflows and decision systems—the results speak louder than price tags. Based on feedback we've received, our clients consistently highlight that the value of our results far outweighs the cost.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Full-stack, AI-first, designed around each business</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Modular, scalable architecture with proven results</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Value-focused conversations, not cost-driven objections</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3">
                  Join Our Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-brand-accent/20">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Programs</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    <span>Microsoft Founders Hub (Azure)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-blue-400 mr-3"></span>
                    <span>DigitalOcean Hatch Program</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-orange-500 mr-3"></span>
                    <span>Airtable Startup Program</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-purple-500 mr-3"></span>
                    <span>Miro AI API Developer Program</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Providing infrastructure, credits, and technical mentorship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStartupVision;