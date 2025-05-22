
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { Database, BarChart2, Settings } from "lucide-react";

const WorkflowAutomation = () => {
  const features = [
    {
      title: "Document Processing",
      description: "Automatically extract data from documents, categorize information, and route it to the right departments or systems.",
      icon: <Database className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Data Extraction & Entry",
      description: "Eliminate manual data entry with AI that can pull information from forms, emails, and documents with high accuracy.",
      icon: <Database className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Automated Reporting",
      description: "Schedule and generate comprehensive reports that pull data from multiple sources and deliver insights automatically.",
      icon: <BarChart2 className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Process Optimization",
      description: "Analyze your business workflows to identify bottlenecks and implement automation that streamlines operations.",
      icon: <Settings className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Reduce Operational Costs",
      description: "Cut expenses associated with manual processes by up to 60% through intelligent automation."
    },
    {
      title: "Minimize Human Error",
      description: "Eliminate costly mistakes in data entry and processing that can impact decision-making and customer experience."
    },
    {
      title: "Accelerate Turnaround Time",
      description: "Complete processes in minutes or hours instead of days, improving overall business agility."
    },
    {
      title: "Enhance Data Accuracy",
      description: "Ensure consistent data quality across all systems with automated validation and error checking."
    }
  ];

  const useCases = [
    "Invoice processing and accounts payable automation",
    "Employee onboarding document management",
    "Inventory management and order processing",
    "Compliance documentation and reporting",
    "Contract review and management",
    "Customer data consolidation and enrichment"
  ];

  const relatedServices = [
    {
      title: "Marketing Automation",
      link: "/services/ai-automation-solutions/marketing-automation"
    },
    {
      title: "Customer Service Automation",
      link: "/services/ai-automation-solutions/customer-service-automation"
    },
    {
      title: "AI Strategy Development",
      link: "/services/ai-consultation/ai-strategy-development"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Workflow Automation Solutions | Document Processing & Data Automation | HowAIConnects</title>
        <meta 
          name="description" 
          content="Streamline your business processes with AI-powered workflow automation. Automate document processing, data entry, reporting, and optimize your operations."
        />
        <meta 
          name="keywords" 
          content="workflow automation, document processing, data extraction, automated reporting, process optimization"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="Workflow Automation"
          subtitle="AI Automation Solutions"
          description="Streamline your business processes, eliminate manual data entry, and automate reporting to save time and reduce errors. Our workflow automation solutions help small and medium-sized businesses operate more efficiently by automating repetitive tasks."
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

export default WorkflowAutomation;
