
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIStartupHero from "@/components/startup/AIStartupHero";
import StartupServicesShowcase from "@/components/startup/StartupServicesShowcase";
import StartupFundingSection from "@/components/startup/StartupFundingSection";
import ContactSection from "@/components/ContactSection";

const AIStartupServices = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Startup Launch Services | Complete Business Setup | HowAIConnects</title>
        <meta name="description" content="Launch your AI startup with our complete done-for-you service. Website creation, business setup, and access to AI startup funding opportunities." />
        <meta name="keywords" content="AI startup launch, startup funding, AI business setup, startup website creation, AI founder benefits" />
        <link rel="canonical" href="https://howaiconnects.com/ai-startup-services" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <AIStartupHero />
        <StartupServicesShowcase />
        <StartupFundingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AIStartupServices;
