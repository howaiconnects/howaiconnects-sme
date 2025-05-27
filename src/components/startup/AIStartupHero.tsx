
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AIStartupHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-lightAccent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-brand-accent/20 rounded-full">
              <Rocket className="h-8 w-8 text-brand-accent" />
            </div>
            <div className="p-3 bg-brand-lightAccent/20 rounded-full">
              <Zap className="h-8 w-8 text-brand-lightAccent" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Launch Your <span className="text-brand-accent">AI Startup</span>
            <br />
            <span className="text-brand-lightAccent">Complete Setup</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
            From business formation to website creation to AI startup funding - we handle everything so you can focus on building your revolutionary AI solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-accent hover:bg-brand-lightAccent text-white px-8 py-4 text-lg">
                Start Your AI Startup <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-2">$0</h3>
              <p className="text-white/80">Upfront Investment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-2">30 Days</h3>
              <p className="text-white/80">Launch Timeline</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/80">Done-for-You</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStartupHero;
