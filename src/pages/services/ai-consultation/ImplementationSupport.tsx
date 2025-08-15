
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import RelatedServices from "@/components/RelatedServices";
import { AutoBreadcrumb } from "@/components/ui/breadcrumb";
import { Settings, Users, BarChart2, Zap } from "lucide-react";

const ImplementationSupport = () => {
  const features = [
    {
      title: "Technical Setup Assistance",
      description: "Hands-on help with configuring and deploying AI tools, ensuring proper integration with your existing systems.",
      icon: <Settings className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Integration Support",
      description: "Expert guidance on connecting AI solutions with your current software ecosystem for seamless data flow and functionality.",
      icon: <Zap className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Staff Training",
      description: "Comprehensive education programs that empower your team to effectively use and maintain new AI systems.",
      icon: <Users className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Ongoing Optimization",
      description: "Continuous improvement services that refine your AI implementation based on performance data and evolving needs.",
      icon: <BarChart2 className="h-8 w-8 text-brand-accent" />
    }
  ];

  const benefits = [
    {
      title: "Accelerate Time-to-Value",
      description: "Start seeing returns on your AI investment faster with expert implementation support that avoids common pitfalls."
    },
    {
      title: "Ensure Proper Configuration",
      description: "Get your AI solutions working correctly from day one with technical guidance from experienced specialists."
    },
    {
      title: "Build Internal Capabilities",
      description: "Develop your team's skills through knowledge transfer and hands-on training during implementation."
    },
    {
      title: "Minimize Disruption",
      description: "Maintain business continuity with smooth implementation processes designed around your operational needs."
    }
  ];

  const useCases = [
    "New AI platform deployment and configuration",
    "Legacy system integration with AI solutions",
    "Employee onboarding for new AI tools",
    "Process redesign around AI capabilities",
    "AI system performance tuning and optimization",
    "Change management for AI-driven transformation"
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
      title: "Workflow Automation",
      link: "/services/ai-automation-solutions/workflow-automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Implementation Support | Technical Setup & Integration Services | HowAIConnects</title>
        <meta 
          name="description" 
          content="Get hands-on guidance throughout your AI implementation journey. Our expert consultants provide technical setup, integration support, staff training, and ongoing optimization."
        />
        <meta 
          name="keywords" 
          content="AI implementation support, technical setup, integration support, staff training, optimization"
        />
      </Helmet>

      <Navbar />
      <AutoBreadcrumb />
      
      <main>
        <ServiceDetails
          title="Implementation Support"
          subtitle="AI Consultation Services"
          description="Bridge the gap between AI strategy and successful execution with comprehensive implementation support. Our consultants work alongside your team to handle technical setup, ensure smooth integration, train staff, and continuously optimize your AI solutions for maximum value."
          features={features}
          benefits={benefits}
          useCases={useCases}
          relatedServices={relatedServices}
          imageSrc="/lovable-uploads/6a19eca0-b899-42d6-bcd1-37c87248c21d.png"
        />
        
        <RelatedServices 
          currentService="/services/ai-consultation/implementation-support"
          category="consultation"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default ImplementationSupport;
