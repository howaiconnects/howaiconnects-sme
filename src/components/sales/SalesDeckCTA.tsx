
import { ArrowRight, ChartLine, Presentation, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SalesDeckCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white relative overflow-hidden print:py-10 print:bg-brand-primary print:page-break-before">
      {/* Visual elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none print:hidden">
        <div className="absolute right-10 top-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-48 h-48 bg-brand-accent/40 rounded-full blur-2xl"></div>
        
        {/* Abstract floating elements */}
        <div className="absolute top-20 left-[20%] w-12 h-12 border-2 border-white/20 rounded-md rotate-12 animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-8 h-8 border-2 border-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-[25%] w-16 h-16 border-2 border-white/20 rounded-lg -rotate-12 animate-float delay-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 print:mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 print:text-3xl">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 print:text-lg">
            Join innovative companies already leveraging our expertise to drive growth and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 print:mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all transform hover:-translate-y-1 hover:shadow-xl print:hover:translate-y-0 print:hover:shadow-none" data-aos="fade-up" data-aos-delay="100">
            <ChartLine className="h-12 w-12 text-brand-accent mb-4 print:h-8 print:w-8" />
            <h3 className="text-xl font-bold mb-3">Data-Driven Results</h3>
            <p className="opacity-80">Our solutions deliver measurable ROI and tangible business outcomes backed by comprehensive analytics.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all transform hover:-translate-y-1 hover:shadow-xl print:hover:translate-y-0 print:hover:shadow-none" data-aos="fade-up" data-aos-delay="200">
            <Presentation className="h-12 w-12 text-brand-accent mb-4 print:h-8 print:w-8" />
            <h3 className="text-xl font-bold mb-3">Expert Consultation</h3>
            <p className="opacity-80">Work with industry experts who understand your specific challenges and provide tailored strategies.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all transform hover:-translate-y-1 hover:shadow-xl print:hover:translate-y-0 print:hover:shadow-none" data-aos="fade-up" data-aos-delay="300">
            <Rocket className="h-12 w-12 text-brand-accent mb-4 print:h-8 print:w-8" />
            <h3 className="text-xl font-bold mb-3">Future-Ready Solutions</h3>
            <p className="opacity-80">Stay ahead with cutting-edge technologies and adaptive strategies designed for long-term success.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 print:hidden" data-aos="fade-up">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 shadow-lg group">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Browse All Services
            </Button>
          </Link>
          <Link to="/resources">
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              Explore Resources
            </Button>
          </Link>
        </div>
        
        {/* Contact information for print version */}
        <div className="hidden print:block text-center mt-8 border-t border-white/20 pt-6">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>Email: connect@howaiconnects.com | Phone: (555) 123-4567 | Website: www.howaiconnects.com</p>
        </div>
      </div>
    </section>
  );
};

export default SalesDeckCTA;
