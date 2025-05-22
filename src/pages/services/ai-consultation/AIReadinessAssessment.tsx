
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { ClipboardCheck, Search, Calculator } from "lucide-react";

const AIReadinessAssessment = () => {
  const features = [
    {
      title: "Process Evaluation",
      description: "Comprehensive analysis of your existing business processes to identify automation opportunities and potential barriers.",
      icon: <ClipboardCheck className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Automation Opportunity Mapping",
      description: "Detailed mapping of processes that can benefit most from AI implementation, with priority recommendations.",
      icon: <Search className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "ROI Calculation",
      description: "Clear financial projections showing the expected return on investment for each recommended AI implementation.",
      icon: <Calculator className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Implementation Roadmap",
      description: "Step-by-step guidance on how to proceed with AI adoption, tailored to your business size and resources.",
      icon: <ClipboardCheck className="h-8 w-8 text-brand-accent" />
    }
  ];

  const benefits = [
    {
      title: "Avoid Costly Mistakes",
      description: "Identify the right AI opportunities for your specific business before investing significant resources."
    },
    {
      title: "Prioritize High-Impact Areas",
      description: "Focus your AI implementation efforts on processes that will deliver the greatest business value."
    },
    {
      title: "Build Internal Alignment",
      description: "Create consensus among leadership with objective assessment data and clear opportunity analysis."
    },
    {
      title: "Plan Resource Allocation",
      description: "Understand the time, budget, and personnel needed for successful AI implementation."
    }
  ];

  const useCases = [
    "Pre-implementation assessment for businesses new to AI",
    "AI strategy validation for companies with existing initiatives",
    "Departmental process audits to identify automation candidates",
    "Cost reduction analysis for operational inefficiencies",
    "Customer experience improvement opportunity mapping",
    "Competitive advantage assessment in your industry"
  ];

  const relatedServices = [
    {
      title: "AI Strategy Development",
      link: "/services/ai-consultation/ai-strategy-development"
    },
    {
      title: "Implementation Support",
      link: "/services/ai-consultation/implementation-support"
    },
    {
      title: "Workflow Automation",
      link: "/services/ai-automation-solutions/workflow-automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Readiness Assessment | Process Evaluation & Opportunity Mapping | HowAIConnects</title>
        <meta 
          name="description" 
          content="Evaluate your business's readiness for AI implementation with our comprehensive assessment. Identify high-impact opportunities and create an implementation roadmap."
        />
        <meta 
          name="keywords" 
          content="AI readiness assessment, process evaluation, automation opportunity, ROI calculation, implementation roadmap"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="AI Readiness Assessment"
          subtitle="AI Consultation Services"
          description="Make confident decisions about AI implementation with our comprehensive readiness assessment. We evaluate your processes, identify the highest-impact automation opportunities, and create a clear roadmap for successful AI adoption tailored to your business needs."
          features={features}
          benefits={benefits}
          useCases={useCases}
          relatedServices={relatedServices}
          imageSrc="/lovable-uploads/6a19eca0-b899-42d6-bcd1-37c87248c21d.png"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default AIReadinessAssessment;
