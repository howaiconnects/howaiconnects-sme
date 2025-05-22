
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { Wrench, Link, Users, Settings } from "lucide-react";

const ImplementationSupport = () => {
  const features = [
    {
      title: "Technical Setup Assistance",
      description: "Hands-on guidance with configuring AI platforms, integrating with existing systems, and setting up necessary infrastructure.",
      icon: <Wrench className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Integration Support",
      description: "Expert help connecting AI solutions with your current software ecosystem, ensuring smooth data flow and functionality.",
      icon: <Link className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Staff Training",
      description: "Comprehensive training programs tailored to different roles in your organization, from end-users to administrators.",
      icon: <Users className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Ongoing Optimization",
      description: "Continuous improvement services that fine-tune your AI systems based on performance data and evolving business needs.",
      icon: <Settings className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Reduce Implementation Time",
      description: "Cut months off your implementation timeline with expert guidance that avoids common pitfalls and delays."
    },
    {
      title: "Increase Adoption Rates",
      description: "Ensure that your team embraces new AI tools through proper training and change management support."
    },
    {
      title: "Technical Issue Resolution",
      description: "Quickly overcome technical challenges with access to experienced AI implementation specialists."
    },
    {
      title: "Maximize ROI",
      description: "Fine-tune your AI systems to deliver optimal performance and value from day one."
    }
  ];

  const useCases = [
    "New AI platform deployment support",
    "Legacy system integration with modern AI tools",
    "Custom AI model implementation and training",
    "User experience optimization for AI interfaces",
    "Data migration and validation for AI systems",
    "Performance monitoring and improvement programs"
  ];

  const relatedServices = [
    {
      title: "AI Readiness Assessment",
      link: "/services/ai-consultation/ai-readiness-assessment"
    },
    {
      title: "AI Strategy Development",
      link: "/services/ai-consultation/ai-strategy-development"
    },
    {
      title: "Customer Service Automation",
      link: "/services/ai-automation-solutions/customer-service-automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Implementation Support | Technical Setup & Integration Assistance | HowAIConnects</title>
        <meta 
          name="description" 
          content="Get hands-on guidance throughout your AI implementation journey. Our Implementation Support service provides technical setup assistance, integration support, staff training, and ongoing optimization."
        />
        <meta 
          name="keywords" 
          content="AI implementation support, technical setup assistance, integration support, staff training, ongoing optimization"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="Implementation Support"
          subtitle="AI Consultation Services"
          description="Get hands-on guidance throughout your AI implementation journey from our experienced consultants. Our Implementation Support service helps small and medium-sized businesses successfully deploy AI solutions with minimal disruption."
          features={features}
          benefits={benefits}
          useCases={useCases}
          relatedServices={relatedServices}
          imageSrc="/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default ImplementationSupport;
