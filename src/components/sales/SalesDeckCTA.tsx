
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SalesDeckCTA = () => {
  return (
    <section className="py-16 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you need AI automation, want to start your own AI agency, or require custom web application development, we have the expertise to help you succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalesDeckCTA;
