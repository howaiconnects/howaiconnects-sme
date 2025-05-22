
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { MessageSquare, PhoneIncoming, HelpCircle, BarChart2 } from "lucide-react";

const CustomerServiceAutomation = () => {
  const features = [
    {
      title: "AI Chatbots",
      description: "Implement conversational AI to handle common customer inquiries, provide 24/7 support, and escalate complex issues to human agents.",
      icon: <MessageSquare className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Ticket Routing & Prioritization",
      description: "Automatically categorize and route customer issues to the right department based on content analysis and urgency detection.",
      icon: <PhoneIncoming className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Self-Learning FAQ Systems",
      description: "Deploy knowledge bases that continuously improve by learning from customer interactions and identifying information gaps.",
      icon: <HelpCircle className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Customer Insight Analysis",
      description: "Extract valuable trends and sentiment data from support interactions to improve products and service delivery.",
      icon: <BarChart2 className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "24/7 Customer Support",
      description: "Provide round-the-clock assistance without the cost of maintaining night shifts or international support teams."
    },
    {
      title: "Faster Resolution Times",
      description: "Reduce average resolution time by up to 70% through instant responses and efficient routing."
    },
    {
      title: "Handle Higher Volume",
      description: "Scale your support capabilities to handle peak periods without service degradation or additional hiring."
    },
    {
      title: "Improve Customer Satisfaction",
      description: "Deliver consistent, accurate responses that solve customer problems quickly, leading to higher satisfaction scores."
    }
  ];

  const useCases = [
    "24/7 website and social media customer support",
    "Automated order status and tracking information",
    "Product recommendation and troubleshooting",
    "Appointment scheduling and management",
    "Return and refund processing automation",
    "Customer feedback collection and analysis"
  ];

  const relatedServices = [
    {
      title: "Marketing Automation",
      link: "/services/ai-automation-solutions/marketing-automation"
    },
    {
      title: "Workflow Automation",
      link: "/services/ai-automation-solutions/workflow-automation"
    },
    {
      title: "Implementation Support",
      link: "/services/ai-consultation/implementation-support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Service Automation Solutions | AI Chatbots & Support Systems | HowAIConnects</title>
        <meta 
          name="description" 
          content="Enhance your customer support with AI-powered automation. Deploy intelligent chatbots, automated ticket routing, self-learning FAQ systems, and gain valuable customer insights."
        />
        <meta 
          name="keywords" 
          content="customer service automation, AI chatbots, ticket routing, self-learning FAQ systems, customer insight analysis"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="Customer Service Automation"
          subtitle="AI Automation Solutions"
          description="Provide 24/7 customer support, automate ticket routing, and build intelligent FAQ systems that learn from interactions. Our customer service automation solutions help small and medium-sized businesses deliver exceptional support experiences efficiently."
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

export default CustomerServiceAutomation;
