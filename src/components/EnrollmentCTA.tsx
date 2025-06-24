
import { Button } from "@/components/ui/button";

const EnrollmentCTA = () => {
  return (
    <section className="py-12 bg-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Not Sure Where to Start?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Schedule a free 15-minute consultation with our education team. 
                We'll help you choose the right course based on your business needs and goals.
              </p>
              <div className="mt-8">
                <Button>
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team consultation meeting"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Corporate Training Available
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Looking to train multiple team members? We offer custom corporate training 
            packages with volume discounts. Contact us for more information.
          </p>
          <div className="mt-6">
            <Button variant="outline">
              Inquire About Corporate Training
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentCTA;
