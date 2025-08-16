
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/AboutBanner";
import OurMission from "@/components/OurMission";
import TeamMembers from "@/components/TeamMembers";
import CompanyValues from "@/components/CompanyValues";
import ContactSection from "@/components/ContactSection";
import { AutoBreadcrumb } from "@/components/ui/breadcrumb";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>About HowAIConnects | Building the Future of AI Orchestration</title>
        <meta name="description" content="We're engineering the next generation of AI orchestration platforms. Learn about our mission to build technology that anticipates tomorrow's needs today." />
        <meta name="keywords" content="AI platform company, AI orchestration technology, voice-activated AI, advanced automation engineering, AI startup" />
        <link rel="canonical" href="https://howaiconnects.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HowAIConnects",
              "description": "AI technology platform building advanced automation and orchestration solutions for the future of business",
              "url": "https://howaiconnects.com",
              "logo": "https://howaiconnects.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+12895055070",
                "contactType": "customer service",
                "areaServed": "Mississauga, ON and Greater Toronto Area"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "foundingDate": "2024",
              "industry": "AI Technology Platform"
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <AutoBreadcrumb />
      <main className="flex-grow">
        <AboutBanner />
        <OurMission />
        <TeamMembers />
        <CompanyValues />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
