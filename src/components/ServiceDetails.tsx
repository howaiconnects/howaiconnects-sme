
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  useCases?: string[];
  callToAction?: {
    text: string;
    link: string;
  };
  relatedServices?: Array<{
    title: string;
    link: string;
  }>;
  imageSrc?: string;
}

const ServiceDetails = ({
  title,
  subtitle,
  description,
  features,
  benefits,
  useCases,
  callToAction = { text: "Schedule a Consultation", link: "/contact" },
  relatedServices = [],
  imageSrc,
}: ServiceDetailsProps) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Service Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-brand-primary text-lg font-medium">{subtitle}</h2>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6 gradient-text">{title}</h1>
            <p className="text-gray-700 text-lg mb-8">{description}</p>
            <Link to={callToAction.link}>
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                {callToAction.text} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          {imageSrc && (
            <div className="relative mt-8 md:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl blur-md opacity-25"></div>
              <img 
                src={imageSrc} 
                alt={title}
                className="relative rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          )}
        </div>

        {/* Key Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-shadow">
                {feature.icon && <div className="mb-4">{feature.icon}</div>}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 bg-gray-50 py-12 px-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-brand-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        {useCases && useCases.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Common Use Cases</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-2">
                    <span className="text-brand-primary text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-brand-primary">{service.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-brand-primary">
                    <span>Explore</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our team today to learn more about how our services can help you achieve your business goals.
          </p>
          <Link to={callToAction.link}>
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              {callToAction.text} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
