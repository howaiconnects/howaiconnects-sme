
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { Activity, MapPin, DollarSign, LayoutList } from "lucide-react";

const AIReadinessAssessment = () => {
  const features = [
    {
      title: "Process Evaluation",
      description: "Comprehensive audit of your current business processes to identify which are most suitable for AI-driven optimization.",
      icon: <Activity className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Automation Opportunity Mapping",
      description: "Detailed mapping of specific processes and tasks where AI can deliver the highest value with the least disruption.",
      icon: <MapPin className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "ROI Calculation",
      description: "Precise financial analysis of potential AI implementations, including cost savings, revenue increases, and breakeven timelines.",
      icon: <DollarSign className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Implementation Roadmap",
      description: "Actionable step-by-step plan for AI adoption tailored to your business size, needs, and technical capabilities.",
      icon: <LayoutList className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Focused Investment",
      description: "Allocate resources only to AI initiatives that will deliver tangible value to your business."
    },
    {
      title: "Risk Reduction",
      description: "Identify potential implementation challenges before committing significant resources to AI projects."
    },
    {
      title: "Clear Prioritization",
      description: "Develop a clear sequence for AI implementations based on impact, complexity, and resource requirements."
    },
    {
      title: "Stakeholder Alignment",
      description: "Build organization-wide consensus on AI strategy with clear, data-driven assessment reports."
    }
  ];

  const useCases = [
    "Pre-implementation evaluation for new AI initiatives",
    "Technology stack compatibility assessment",
    "Data readiness and quality evaluation",
    "Staff skill gap analysis for AI adoption",
    "Process complexity and automation feasibility scoring",
    "Competitive analysis of AI opportunities in your industry"
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
      title: "Marketing Automation",
      link: "/services/ai-automation-solutions/marketing-automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Readiness Assessment | Process Evaluation & Opportunity Mapping | HowAIConnects</title>
        <meta 
          name="description" 
          content="Evaluate your business processes and identify high-impact AI implementation opportunities. Our AI Readiness Assessment helps you understand where AI can deliver the greatest value."
        />
        <meta 
          name="keywords" 
          content="AI readiness assessment, process evaluation, automation opportunity mapping, ROI calculation, implementation roadmap"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="AI Readiness Assessment"
          subtitle="AI Consultation Services"
          description="Evaluate your business processes and identify the highest-impact opportunities for AI implementation. Our AI Readiness Assessment helps small and medium-sized businesses understand where and how to start their AI journey."
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

export default AIReadinessAssessment;
