
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeckSection from "@/components/sales/DeckSection";
import SalesDeckHero from "@/components/sales/SalesDeckHero";
import SalesDeckCTA from "@/components/sales/SalesDeckCTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const SalesDeck = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("overview");
  
  // Update URL hash when tab changes
  useEffect(() => {
    if (activeTab !== "overview") {
      const element = document.getElementById(activeTab);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeTab]);
  
  // Data for each business division
  const dedicatedAIServices = {
    subtitle: "Business Division 1",
    title: "Dedicated AI Services",
    description: 
      "Transform your business operations with our comprehensive AI automation and consultation services, specifically designed for small and medium-sized businesses. Our solutions streamline processes, reduce operational costs, and elevate customer experiences.",
    features: [
      "AI Automation Solutions for marketing, workflow, and customer service",
      "AI Consultation Services including readiness assessment and strategy development",
      "Tailored implementation and support for your specific business needs",
      "Ongoing optimization and performance monitoring"
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Automate repetitive tasks and streamline complex workflows to save time and resources."
      },
      {
        title: "Reduced Costs",
        description: "Cut operational expenses by optimizing processes and reducing manual intervention."
      },
      {
        title: "Enhanced Customer Experience",
        description: "Deliver faster, more personalized service with AI-powered customer interactions."
      }
    ],
    linkTo: "/services",
    linkText: "Explore AI Services",
    imageSrc: "/lovable-uploads/6a19eca0-b899-42d6-bcd1-37c87248c21d.png", // Changed image to be more representative
    imageAlt: "AI Services Illustration",
    bgColor: "bg-gradient-to-b from-gray-50 to-white",
    expanded: true // Added expanded prop to show all content by default
  };

  const doneForYouAgency = {
    subtitle: "Business Division 2",
    title: "Done-for-You AI Agency",
    description: 
      "Launch your own AI agency with zero upfront costs. Our turnkey solution provides everything you need to start and run a successful AI service business, leveraging our pre-negotiated deals with leading AI vendors and service providers.",
    features: [
      "Complete agency setup with essential tools and platforms",
      "Vendor integrations through affiliate partnerships",
      "Business guidance and operational best practices",
      "Revenue-ready foundation to start acquiring clients immediately"
    ],
    benefits: [
      {
        title: "No Upfront Investment",
        description: "Start your AI agency without any initial financial burden through our affiliate commission structure."
      },
      {
        title: "Ready-to-Launch Business",
        description: "Skip the setup phase with our turnkey solution and start generating revenue immediately."
      },
      {
        title: "Ongoing Support",
        description: "Benefit from continued guidance and access to the latest AI tools and technologies."
      }
    ],
    linkTo: "/done-for-you-ai-agency",
    linkText: "Launch Your AI Agency",
    imageSrc: "/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png",
    imageAlt: "AI Agency Building Illustration",
    bgColor: "bg-brand-primary/5",
    reverse: true,
    expanded: true // Added expanded prop to show all content by default
  };

  const webAppDevelopment = {
    subtitle: "Business Division 3",
    title: "Web App Development",
    description: 
      "From concept to launch, we design and develop powerful, scalable web applications tailored to your specific business needs. Our expert team builds user-friendly digital solutions that help you streamline operations and grow your business.",
    features: [
      "Custom web application development for specific business requirements",
      "User-centric design focusing on intuitive interfaces",
      "Scalable architecture that grows with your business",
      "End-to-end service from discovery to launch and beyond"
    ],
    benefits: [
      {
        title: "Business Process Automation",
        description: "Streamline operations with custom digital tools designed for your specific workflows."
      },
      {
        title: "Enhanced Customer Engagement",
        description: "Create seamless digital experiences that keep your customers coming back."
      },
      {
        title: "Competitive Advantage",
        description: "Stand out from competitors with innovative digital solutions tailored to your business."
      }
    ],
    linkTo: "/web-app-development",
    linkText: "Discover Web App Solutions",
    imageSrc: "/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png",
    imageAlt: "Web App Development Illustration",
    expanded: true // Added expanded prop to show all content by default
  };

  // Business division summaries for the hero section
  const businessDivisions = [
    {
      title: "AI Services",
      description: "Transform your business with AI automation and expert consultation.",
      linkFragment: "ai-services"
    },
    {
      title: "AI Agency Building",
      description: "Launch your own AI agency with zero upfront costs.",
      linkFragment: "ai-agency"
    },
    {
      title: "Web App Development",
      description: "Custom web applications designed for your unique business needs.",
      linkFragment: "web-app-dev"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Investor Deck | HowAIConnects Business Solutions</title>
        <meta 
          name="description" 
          content="Explore HowAIConnects' innovative business solutions: AI Services, Done-for-You AI Agency Building, and Custom Web App Development - driving digital transformation and growth."
        />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden print:py-0">
        {/* Hero Section */}
        <SalesDeckHero businessDivisions={businessDivisions} />
        
        {/* Solutions Navigation Tabs */}
        <div id="solutions" className="bg-white py-8 sticky top-0 z-30 shadow-sm print:static print:shadow-none print:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs 
              defaultValue="overview" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto print:hidden">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="ai-services">AI Services</TabsTrigger>
                <TabsTrigger value="ai-agency">AI Agency</TabsTrigger>
                <TabsTrigger value="web-app-dev">Web Apps</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Business Divisions - Made fully expanded by default for presentations */}
        <div id="ai-services" className="scroll-mt-20 print:scroll-mt-0 print:page-break-before">
          <DeckSection {...dedicatedAIServices} />
        </div>
        
        <div id="ai-agency" className="scroll-mt-20 print:scroll-mt-0 print:page-break-before">
          <DeckSection {...doneForYouAgency} />
        </div>
        
        <div id="web-app-dev" className="scroll-mt-20 print:scroll-mt-0 print:page-break-before">
          <DeckSection {...webAppDevelopment} />
        </div>

        {/* Call to Action */}
        <SalesDeckCTA />
      </main>

      <Footer />
    </>
  );
};

export default SalesDeck;
