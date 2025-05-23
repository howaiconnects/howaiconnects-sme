import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeckSection from "@/components/sales/deck-section";
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
  
  // Data for each business division - updated with more engaging subtitles and benefit-focused copy
  const dedicatedAIServices = {
    subtitle: "Cost-Saving Innovation",
    title: "Dedicated AI Services",
    description: 
      "Save hundreds of thousands in operational costs with our AI automation solutions. We help businesses stay competitive in tight markets by streamlining processes, reducing manual work, and uncovering new revenue opportunities.",
    features: [
      "Cut operational costs by up to 40% with targeted AI automation",
      "Eliminate repetitive tasks that consume valuable staff time",
      "Gain market advantage with 24/7 AI-powered business operations",
      "Deploy custom AI solutions with no technical expertise required"
    ],
    benefits: [
      {
        title: "Proven ROI",
        description: "Our clients typically see a 300-500% return on investment within the first year of implementation."
      },
      {
        title: "Time Savings",
        description: "Reclaim hundreds of staff hours monthly by automating routine tasks and decision-making processes."
      },
      {
        title: "Competitive Edge",
        description: "Deploy enterprise-grade AI capabilities at a fraction of the cost of building in-house solutions."
      }
    ],
    linkTo: "/services",
    linkText: "Explore AI Services",
    imageSrc: "/lovable-uploads/6a19eca0-b899-42d6-bcd1-37c87248c21d.png",
    imageAlt: "AI Services Cost Savings Illustration",
    bgColor: "bg-gradient-to-b from-gray-50 to-white",
    expanded: true
  };

  const doneForYouAgency = {
    subtitle: "Turn-Key Business Opportunity",
    title: "Done-for-You AI Agency",
    description: 
      "Launch your own AI agency without the traditional startup headaches. Our complete business-in-a-box solution provides everything aspiring entrepreneurs need to capitalize on the booming AI services market with zero upfront costs.",
    features: [
      "Ready-to-launch business model with proven market demand",
      "Access to premium AI tools through our partner network",
      "Complete operational systems and sales frameworks included",
      "Ongoing mentorship from successful agency founders"
    ],
    benefits: [
      {
        title: "Zero Financial Risk",
        description: "Start generating revenue before investing a single dollar through our affiliate commission structure."
      },
      {
        title: "Market-Tested Systems",
        description: "Skip the trial-and-error phase with our field-tested business frameworks and marketing strategies."
      },
      {
        title: "Immediate Client Acquisition",
        description: "Our lead generation system helps you secure your first clients within weeks, not months."
      }
    ],
    linkTo: "/done-for-you-ai-agency",
    linkText: "Launch Your AI Agency",
    imageSrc: "/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png",
    imageAlt: "AI Agency Launch Illustration",
    bgColor: "bg-brand-primary/5",
    reverse: true,
    expanded: true
  };

  const webAppDevelopment = {
    subtitle: "Transform Your Digital Presence",
    title: "Web App Development",
    description: 
      "Convert your business challenges into powerful digital solutions with our custom web application development. We create intuitive, scalable platforms that optimize your operations and enhance customer engagement.",
    features: [
      "Custom applications aligned with specific business objectives",
      "Intuitive user experiences that drive adoption and satisfaction",
      "Scalable architecture designed for future growth",
      "Integration with your existing tools and AI capabilities"
    ],
    benefits: [
      {
        title: "Process Automation",
        description: "Eliminate manual workflows and reduce operating costs by up to 60% with digital transformation."
      },
      {
        title: "Customer Retention",
        description: "Increase repeat business by 40% with engaging, customer-centric digital experiences."
      },
      {
        title: "Data-Driven Decisions",
        description: "Leverage integrated analytics to make smarter business decisions based on real user behavior."
      }
    ],
    linkTo: "/web-app-development",
    linkText: "Discover Web App Solutions",
    imageSrc: "/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png",
    imageAlt: "Web App Development Illustration",
    expanded: true
  };

  // Business division summaries for the hero section - updated with more captivating descriptions
  const businessDivisions = [
    {
      title: "AI Services",
      description: "Cut costs and boost efficiency with custom AI automation.",
      linkFragment: "ai-services"
    },
    {
      title: "AI Agency Building",
      description: "Start your own AI business with zero upfront investment.",
      linkFragment: "ai-agency"
    },
    {
      title: "Web App Development",
      description: "Custom digital solutions that solve real business problems.",
      linkFragment: "web-app-dev"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Solutions | HowAIConnects Transformation Suite</title>
        <meta 
          name="description" 
          content="Discover how our AI automation services can save your business thousands while keeping you competitive in today's market. Explore our comprehensive business solutions."
        />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden print:py-0">
        {/* Hero Section */}
        <SalesDeckHero businessDivisions={businessDivisions} />
        
        {/* Solutions Navigation Tabs - Updated with more engaging labels */}
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
        
        {/* Business Divisions */}
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
