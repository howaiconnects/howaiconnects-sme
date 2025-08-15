
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ContactSection from "@/components/ContactSection";
import RelatedServices from "@/components/RelatedServices";
import { AutoBreadcrumb } from "@/components/ui/breadcrumb";
import { BarChart2, Send, Zap } from "lucide-react";

const MarketingAutomation = () => {
  const features = [
    {
      title: "Email Marketing Sequences",
      description: "Create personalized email journeys that nurture leads, engage customers, and drive conversions automatically.",
      icon: <Send className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Social Media Automation",
      description: "Schedule and optimize posts across platforms, ensuring consistent brand presence without constant manual effort.",
      icon: <Zap className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "AI-Driven Content Generation",
      description: "Leverage AI to create compelling marketing content, from blog posts to ad copy, tailored to your target audience.",
      icon: <Zap className="h-8 w-8 text-brand-primary" />
    },
    {
      title: "Marketing Analytics",
      description: "Automatically collect and visualize campaign data to gain insights and optimize marketing performance.",
      icon: <BarChart2 className="h-8 w-8 text-brand-primary" />
    }
  ];

  const benefits = [
    {
      title: "Save Time on Repetitive Tasks",
      description: "Reclaim hours spent on manual marketing activities and focus on strategic initiatives instead."
    },
    {
      title: "Improve Campaign Consistency",
      description: "Maintain regular customer touchpoints with automated scheduling and delivery systems."
    },
    {
      title: "Personalize at Scale",
      description: "Deliver tailored content to different audience segments without multiplying your workload."
    },
    {
      title: "Optimize Based on Data",
      description: "Make informed marketing decisions with automatically generated performance insights."
    }
  ];

  const useCases = [
    "Welcome email sequences for new subscribers",
    "Abandoned cart recovery campaigns",
    "Social media content calendars",
    "Personalized product recommendations",
    "Automated lead scoring and nurturing",
    "Customer retention and re-engagement campaigns"
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
      title: "AI Strategy Development",
      link: "/services/ai-consultation/ai-strategy-development"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Marketing Automation Solutions | Email & Content Automation | HowAIConnects</title>
        <meta 
          name="description" 
          content="Streamline your marketing efforts with AI-powered automation solutions for email sequences, social media, content creation, and analytics."
        />
        <meta 
          name="keywords" 
          content="marketing automation, email marketing, social media automation, content generation, marketing analytics"
        />
      </Helmet>

      <Navbar />
      <AutoBreadcrumb />
      
      <main>
        <ServiceDetails
          title="Marketing Automation"
          subtitle="AI Automation Solutions"
          description="Transform your marketing operations with intelligent automation that helps you reach more customers, create better content, and analyze results with less effort. Our marketing automation solutions empower small and medium-sized businesses to execute enterprise-level marketing strategies."
          features={features}
          benefits={benefits}
          useCases={useCases}
          relatedServices={relatedServices}
          imageSrc="/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png"
        />
        
        <RelatedServices 
          currentService="/services/ai-automation-solutions/marketing-automation"
          category="automation"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default MarketingAutomation;
