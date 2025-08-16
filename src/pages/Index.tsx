
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesShowcase from "@/components/ServicesShowcase";
import SuccessStories from "@/components/SuccessStories";
import EducationalOfferings from "@/components/EducationalOfferings";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FeaturedServices from "@/components/FeaturedServices";
import VisionSection from "@/components/VisionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>HowAIConnects | Building the Future of AI Orchestration</title>
        <meta name="description" content="Advanced AI platform that anticipates tomorrow's needs today. We're building revolutionary technology that seamlessly integrates AI into everyday life with deep automation and intuitive design." />
        <meta name="keywords" content="AI platform, AI orchestration, voice-activated AI, advanced automation, AI startup, Next.js AI, Supabase AI, business AI platform" />
        <link rel="canonical" href="https://howaiconnects.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://howaiconnects.com",
              "name": "HowAIConnects",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+12895055070",
                "contactType": "customer service",
                "areaServed": "Mississauga, ON and Greater Toronto Area"
              },
              "description": "AI technology platform building advanced automation and orchestration solutions for the future of business.",
              "sameAs": [
                "https://facebook.com/howaiconnects",
                "https://twitter.com/howaiconnects",
                "https://linkedin.com/company/howaiconnects"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedServices />
        <ProblemSolution />
        <VisionSection />
        <ServicesShowcase />
        <SuccessStories />
        <EducationalOfferings />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
