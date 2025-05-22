
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { LayoutList, Settings, DollarSign, Calendar } from "lucide-react";

const AIStrategyDevelopment = () => {
  const features = [
    {
      title: "Custom AI Roadmap",
      description: "Develop a comprehensive, multi-phase plan for implementing AI that aligns with your business objectives and growth targets.",
      icon: <LayoutList className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Technology Selection Guidance",
      description: "Expert recommendations on the specific AI technologies, platforms, and tools best suited to your business needs and budget.",
      icon: <Settings className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Budget & Resource Planning",
      description: "Detailed financial projections and resource allocation plans to ensure your AI initiatives are properly funded and staffed.",
      icon: <DollarSign className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Implementation Timeline",
      description: "Realistic, milestone-based schedule for AI adoption that minimizes business disruption while maximizing value delivery.",
      icon: <Calendar className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Strategic Alignment",
      description: "Ensure that all AI initiatives directly support your business goals and deliver measurable outcomes."
    },
    {
      title: "Budget Efficiency",
      description: "Avoid costly mistakes and technology mismatches by planning your AI investments strategically."
    },
    {
      title: "Competitive Advantage",
      description: "Get ahead of your competition with a coherent, forward-thinking AI strategy tailored to your market position."
    },
    {
      title: "Future-Proofing",
      description: "Build a flexible AI foundation that can adapt to emerging technologies and changing business needs."
    }
  ];

  const useCases = [
    "Enterprise-wide AI transformation planning",
    "Department-specific AI implementation strategies",
    "Data strategy development for AI readiness",
    "AI vendor selection and integration planning",
    "Phased implementation scheduling and prioritization",
    "Team restructuring and upskilling strategies for AI adoption"
  ];

  const relatedServices = [
    {
      title: "AI Readiness Assessment",
      link: "/services/ai-consultation/ai-readiness-assessment"
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
        <title>AI Strategy Development | Custom Roadmaps & Technology Selection | HowAIConnects</title>
        <meta 
          name="description" 
          content="Create a customized AI adoption strategy aligned with your business goals and resources. Our AI Strategy Development service builds comprehensive roadmaps for successful implementation."
        />
        <meta 
          name="keywords" 
          content="AI strategy development, custom AI roadmap, technology selection, budget planning, implementation timeline"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="AI Strategy Development"
          subtitle="AI Consultation Services"
          description="Create a customized AI adoption strategy aligned with your business goals and available resources. Our AI Strategy Development service helps small and medium-sized businesses chart a clear path to AI implementation."
          features={features}
          benefits={benefits}
          useCases={useCases}
          relatedServices={relatedServices}
          imageSrc="/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default AIStrategyDevelopment;
