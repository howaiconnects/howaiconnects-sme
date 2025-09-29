
import React from 'react';
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import AIStartupPlatform from "@/components/AIStartupPlatform";
import AIStartupVision from "@/components/AIStartupVision";
import AISolutionsShowcase from "@/components/AISolutionsShowcase";
import SuccessStories from "@/components/SuccessStories";
import ContactSection from "@/components/ContactSection";
import FeaturedServices from "@/components/FeaturedServices";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>HowAIConnects | Pioneering AI Startup Building Tomorrow's Technology</title>
        <meta name="description" content="Revolutionary AI startup creating advanced AI-powered web applications and intelligent automation solutions. We're building the future of AI technology today - from concept to deployment." />
        <meta name="keywords" content="AI startup, artificial intelligence, AI web applications, intelligent automation, custom AI solutions, machine learning, AI development, tech innovation, AI platform, future technology" />
        <link rel="canonical" href="https://howaiconnects.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://howaiconnects.com",
              "name": "HowAIConnects",
              "description": "AI startup pioneering advanced AI-powered web applications and intelligent automation solutions for the future of business technology.",
              "foundingDate": "2024",
              "industry": "Artificial Intelligence",
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Web Development", "Automation", "Custom AI Solutions"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-416-898-4516",
                "contactType": "customer service",
                "areaServed": "Global"
              },
              "sameAs": [
                "https://linkedin.com/company/howaiconnects",
                "https://twitter.com/howaiconnects",
                "https://github.com/howaiconnects"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <main className="flex-grow">
        <Hero />
        <FeaturedServices />
        <AIStartupPlatform />
        <AIStartupVision />
        <AISolutionsShowcase />
        <SuccessStories />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
