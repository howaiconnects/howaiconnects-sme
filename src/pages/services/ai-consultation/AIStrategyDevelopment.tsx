
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { Map, Settings, ClipboardList, Clock } from "lucide-react";

const AIStrategyDevelopment = () => {
  const features = [
    {
      title: "Custom AI Roadmap",
      description: "A tailored strategic plan that outlines the optimal path for AI integration into your unique business environment.",
      icon: <Map className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Technology Selection Guidance",
      description: "Expert recommendations on the most suitable AI tools and platforms for your specific business needs and goals.",
      icon: <Settings className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Budget & Resource Planning",
      description: "Detailed financial and resource allocation plans that ensure efficient implementation without overextension.",
      icon: <ClipboardList className="h-8 w-8 text-brand-accent" />
    },
    {
      title: "Implementation Timeline",
      description: "Realistic, phase-based scheduling that balances quick wins with long-term transformational objectives.",
      icon: <Clock className="h-8 w-8 text-brand-accent" />
    }
  ];

  const benefits = [
    {
      title: "Align AI with Business Goals",
      description: "Ensure your AI initiatives directly support and enhance your core business objectives and values."
    },
    {
      title: "Maximize Investment Value",
      description: "Get the best possible return by strategically selecting and implementing the right AI tools for your needs."
    },
    {
      title: "Reduce Implementation Risks",
      description: "Navigate potential challenges with a well-planned strategy that anticipates obstacles and includes contingencies."
    },
    {
      title: "Create Sustainable Change",
      description: "Build a foundation for lasting transformation rather than implementing temporary technological fixes."
    }
  ];

  const useCases = [
    "Comprehensive company-wide AI adoption planning",
    "Department-specific AI implementation strategies",
    "Digital transformation initiatives requiring AI components",
    "Customer experience enhancement strategies",
    "Operational efficiency improvement planning",
    "Competitive differentiation through AI capabilities"
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
      title: "Marketing Automation",
      link: "/services/ai-automation-solutions/marketing-automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Strategy Development | Custom AI Roadmap & Technology Selection | HowAIConnects</title>
        <meta 
          name="description" 
          content="Create a customized AI adoption strategy aligned with your business goals. Get expert guidance on technology selection, budget planning, and implementation timelines."
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
          description="Transform your business with a customized AI strategy that aligns with your goals, capabilities, and budget. Our expert consultants create practical roadmaps that guide your AI journey from concept to implementation, ensuring you invest in the right technologies at the right time."
          features={features}
          benefits={benefits}
          useCases={useCases}
          relatedServices={relatedServices}
          imageSrc="/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default AIStrategyDevelopment;
