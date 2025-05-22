
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeckSection from "@/components/sales/DeckSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const SalesDeck = () => {
  // Data for each business division
  const dedicatedAIServices = {
    subtitle: "Business Division 1",
    title: "Dedicated AI Services",
    description: 
      "Transform your business operations with our comprehensive AI automation and consultation services, specifically designed for small and medium-sized businesses. Our solutions streamline processes, reduce operational costs, and elevate customer experiences.",
    features: [
      "AI Automation Solutions for marketing, workflow, and customer service",
      "AI Consultation Services including readiness assessment and strategy development",
      "Tailored implementation and support for your specific business needs",
      "Ongoing optimization and performance monitoring"
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Automate repetitive tasks and streamline complex workflows to save time and resources."
      },
      {
        title: "Reduced Costs",
        description: "Cut operational expenses by optimizing processes and reducing manual intervention."
      },
      {
        title: "Enhanced Customer Experience",
        description: "Deliver faster, more personalized service with AI-powered customer interactions."
      }
    ],
    linkTo: "/services",
    linkText: "Explore AI Services",
    imageSrc: "/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png",
    imageAlt: "AI Services Illustration",
    bgColor: "bg-gradient-to-b from-gray-50 to-white"
  };

  const doneForYouAgency = {
    subtitle: "Business Division 2",
    title: "Done-for-You AI Agency",
    description: 
      "Launch your own AI agency with zero upfront costs. Our turnkey solution provides everything you need to start and run a successful AI service business, leveraging our pre-negotiated deals with leading AI vendors and service providers.",
    features: [
      "Complete agency setup with essential tools and platforms",
      "Vendor integrations through affiliate partnerships",
      "Business guidance and operational best practices",
      "Revenue-ready foundation to start acquiring clients immediately"
    ],
    benefits: [
      {
        title: "No Upfront Investment",
        description: "Start your AI agency without any initial financial burden through our affiliate commission structure."
      },
      {
        title: "Ready-to-Launch Business",
        description: "Skip the setup phase with our turnkey solution and start generating revenue immediately."
      },
      {
        title: "Ongoing Support",
        description: "Benefit from continued guidance and access to the latest AI tools and technologies."
      }
    ],
    linkTo: "/done-for-you-ai-agency",
    linkText: "Launch Your AI Agency",
    imageSrc: "/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png",
    imageAlt: "AI Agency Building Illustration",
    bgColor: "bg-brand-primary/5",
    reverse: true
  };

  const webAppDevelopment = {
    subtitle: "Business Division 3",
    title: "Web App Development",
    description: 
      "From concept to launch, we design and develop powerful, scalable web applications tailored to your specific business needs. Our expert team builds user-friendly digital solutions that help you streamline operations and grow your business.",
    features: [
      "Custom web application development for specific business requirements",
      "User-centric design focusing on intuitive interfaces",
      "Scalable architecture that grows with your business",
      "End-to-end service from discovery to launch and beyond"
    ],
    benefits: [
      {
        title: "Business Process Automation",
        description: "Streamline operations with custom digital tools designed for your specific workflows."
      },
      {
        title: "Enhanced Customer Engagement",
        description: "Create seamless digital experiences that keep your customers coming back."
      },
      {
        title: "Competitive Advantage",
        description: "Stand out from competitors with innovative digital solutions tailored to your business."
      }
    ],
    linkTo: "/web-app-development",
    linkText: "Discover Web App Solutions",
    imageSrc: "/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png",
    imageAlt: "Web App Development Illustration"
  };

  return (
    <>
      <Helmet>
        <title>Sales Deck | HowAIConnects Business Divisions</title>
        <meta 
          name="description" 
          content="Explore HowAIConnects' three specialized business divisions: AI Services, Done-for-You AI Agency Building, and Custom Web App Development."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-brand-primary/20 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="block">Complete</span>
              <span className="block gradient-text">Business Solutions</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
              Discover our comprehensive suite of business divisions designed to power your digital transformation journey.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold text-brand-primary mb-2">AI Services</h2>
                <p className="text-gray-600 mb-4">Transform your business with AI automation and expert consultation.</p>
                <Link to="#ai-services" className="text-brand-primary flex items-center font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold text-brand-primary mb-2">AI Agency Building</h2>
                <p className="text-gray-600 mb-4">Launch your own AI agency with zero upfront costs.</p>
                <Link to="#ai-agency" className="text-brand-primary flex items-center font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold text-brand-primary mb-2">Web App Development</h2>
                <p className="text-gray-600 mb-4">Custom web applications designed for your unique business needs.</p>
                <Link to="#web-app-dev" className="text-brand-primary flex items-center font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business Divisions */}
        <div id="ai-services">
          <DeckSection {...dedicatedAIServices} />
        </div>
        
        <div id="ai-agency">
          <DeckSection {...doneForYouAgency} />
        </div>
        
        <div id="web-app-dev">
          <DeckSection {...webAppDevelopment} />
        </div>

        {/* Call to Action */}
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
      </main>

      <Footer />
    </>
  );
};

export default SalesDeck;
