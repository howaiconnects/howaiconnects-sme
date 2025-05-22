
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import { Mail, MessageSquare, Zap, BarChart2 } from "lucide-react";

const MarketingAutomation = () => {
  const features = [
    {
      title: "Email Marketing Sequences",
      description: "Create personalized email journeys that nurture leads and convert customers with AI-powered content and timing optimization.",
      icon: <Mail className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Social Media Automation",
      description: "Schedule posts, automate engagement responses, and generate trending content ideas across all your social platforms.",
      icon: <MessageSquare className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "AI-Driven Content Generation",
      description: "Generate high-quality blog posts, social media content, and promotional copy that resonates with your target audience.",
      icon: <Zap className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Marketing Analytics",
      description: "Gain actionable insights with automated reporting and dashboards that track campaign performance and customer behavior.",
      icon: <BarChart2 className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Save Time and Resources",
      description: "Reduce manual marketing tasks by up to 70%, allowing your team to focus on strategy and creative work."
    },
    {
      title: "Increase Conversion Rates",
      description: "Personalized marketing automation leads to 14% higher open rates and 10% higher conversion rates on average."
    },
    {
      title: "Maintain Consistency",
      description: "Keep your marketing efforts consistent across channels, even with limited staff resources."
    },
    {
      title: "Scale Your Marketing",
      description: "Easily expand your marketing activities without proportionally increasing staff or budget."
    }
  ];

  const useCases = [
    "Customer onboarding and welcome sequence automation",
    "Abandoned cart recovery campaigns",
    "Cross-selling and upselling to existing customers",
    "Re-engagement campaigns for inactive prospects",
    "Product launch and promotion campaigns",
    "Seasonal and event-based marketing initiatives"
  ];

  const relatedServices = [
    {
      title: "Workflow Automation",
      link: "/services/ai-automation-solutions/workflow-automation"
    },
    {
      title: "Customer Service Automation",
      link: "/services/ai-automation-solutions/customer-service-automation"
    },
    {
      title: "AI Readiness Assessment",
      link: "/services/ai-consultation/ai-readiness-assessment"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Marketing Automation Solutions | AI-Powered Email & Social Media | HowAIConnects</title>
        <meta 
          name="description" 
          content="Transform your marketing with AI-powered automation for email sequences, social media, content generation, and analytics. Increase engagement while saving time and resources."
        />
        <meta 
          name="keywords" 
          content="marketing automation, email sequences, social media automation, AI content generation, marketing analytics"
        />
      </Helmet>

      <Navbar />
      
      <main>
        <ServiceDetails
          title="Marketing Automation"
          subtitle="AI Automation Solutions"
          description="Automate your email sequences, social media posting, and content generation to reach more customers with less effort. Our AI-powered marketing automation solutions help small and medium-sized businesses scale their marketing efforts without increasing headcount."
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

export default MarketingAutomation;
