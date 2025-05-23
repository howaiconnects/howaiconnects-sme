
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeckSection from "@/components/sales/deck-section";
import SalesDeckHero from "@/components/sales/SalesDeckHero";
import SalesDeckCTA from "@/components/sales/SalesDeckCTA";
import { useState, useEffect } from "react";

const SalesDeckPresentation = () => {
  // Data for each business division - same as in SalesDeck.tsx
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

  // Business division summaries for the hero section
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

  // Add print functionality
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Business Solutions Presentation | HowAIConnects</title>
        <meta 
          name="description" 
          content="Presentation-ready version of our business solutions for meetings and pitches."
        />
        <style type="text/css">
          {`
            @media print {
              nav, footer, .print-hide {
                display: none !important;
              }
              .page-break-before {
                page-break-before: always;
              }
              body {
                padding: 0;
                margin: 0;
              }
              @page {
                size: auto;
                margin: 10mm;
              }
            }
          `}
        </style>
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <SalesDeckHero businessDivisions={businessDivisions} />
        
        {/* Print Button */}
        <div className="bg-white py-4 sticky top-0 z-30 shadow-sm print-hide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <button 
              onClick={handlePrint}
              className="bg-brand-primary hover:bg-brand-accent text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print Presentation
            </button>
          </div>
        </div>
        
        {/* Business Divisions - No tabs, all sections shown */}
        <div className="page-break-before">
          <DeckSection {...dedicatedAIServices} />
        </div>
        
        <div className="page-break-before">
          <DeckSection {...doneForYouAgency} />
        </div>
        
        <div className="page-break-before">
          <DeckSection {...webAppDevelopment} />
        </div>

        {/* Call to Action */}
        <SalesDeckCTA />
      </main>

      <Footer />
    </>
  );
};

export default SalesDeckPresentation;
