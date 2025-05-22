
import { ArrowRight, ChartLine, Presentation, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SalesDeckCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white relative overflow-hidden">
      {/* Visual elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute right-10 top-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join innovative companies already leveraging our expertise to drive growth and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all">
            <ChartLine className="h-12 w-12 text-brand-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Data-Driven Results</h3>
            <p className="opacity-80">Our solutions deliver measurable ROI and tangible business outcomes.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all">
            <Presentation className="h-12 w-12 text-brand-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
            <p className="opacity-80">Work with industry experts who understand your specific challenges.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all">
            <Rocket className="h-12 w-12 text-brand-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Future-Ready Solutions</h3>
            <p className="opacity-80">Stay ahead with cutting-edge technologies and adaptive strategies.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 shadow-lg">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Services
            </Button>
          </Link>
          <Link to="/resources">
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              Explore Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalesDeckCTA;
