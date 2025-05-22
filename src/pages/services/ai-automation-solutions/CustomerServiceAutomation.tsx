
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { MessageSquare, BarChart2, FileText } from "lucide-react";

const CustomerServiceAutomation = () => {
  const features = [
    {
      title: "AI Chatbots",
      description: "Deploy intelligent chatbots that handle common customer inquiries 24/7, freeing up your team for complex issues.",
      icon: <MessageSquare className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Ticket Routing & Prioritization",
      description: "Automatically categorize and direct customer inquiries to the right department based on content and urgency.",
      icon: <FileText className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Self-Learning FAQ Systems",
      description: "Implement knowledge bases that continuously improve by learning from customer interactions and common questions.",
      icon: <FileText className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Customer Insight Analysis",
      description: "Extract valuable trends and feedback patterns from customer interactions to improve products and services.",
      icon: <BarChart2 className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Provide 24/7 Support",
      description: "Offer instant responses to customer queries at any time, enhancing satisfaction and engagement."
    },
    {
      title: "Reduce Support Costs",
      description: "Handle a higher volume of inquiries without proportionally increasing your support team size."
    },
    {
      title: "Improve Response Times",
      description: "Dramatically decrease wait times for customers with immediate automated responses to common questions."
    },
    {
      title: "Enhance Customer Experience",
      description: "Create consistent, helpful interactions across all support channels to boost customer loyalty."
    }
  ];

  const useCases = [
    "Website chatbots for immediate customer assistance",
    "Automated order status and tracking information",
    "Product recommendation based on customer preferences",
    "Appointment scheduling and reminder systems",
    "Customer onboarding and setup guidance",
    "Post-purchase follow-up and satisfaction monitoring"
  ];

  const relatedServices = [
    {
      title: "Workflow Automation",
      link: "/services/ai-automation-solutions/workflow-automation"
    },
    {
      title: "Marketing Automation",
      link: "/services/ai-automation-solutions/marketing-automation"
    },
    {
      title: "AI Readiness Assessment",
      link: "/services/ai-consultation/ai-readiness-assessment"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Service Automation | AI Chatbots & Support Solutions | HowAIConnects</title>
        <meta 
          name="description" 
          content="Provide exceptional 24/7 customer support with AI chatbots, automated ticket routing, and intelligent FAQ systems that learn from every interaction."
        />
        <meta 
          name="keywords" 
          content="customer service automation, AI chatbots, ticket routing, FAQ systems, customer insights"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="Customer Service Automation"
          subtitle="AI Automation Solutions"
          description="Revolutionize your customer support with intelligent automation that helps you respond faster, solve problems more efficiently, and understand customer needs better. Our solutions help small and medium-sized businesses provide enterprise-quality service without the enterprise headcount."
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

export default CustomerServiceAutomation;
