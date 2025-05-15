
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesBanner from "@/components/ServicesBanner";
import AIAutomationServices from "@/components/AIAutomationServices";
import AIConsultationServices from "@/components/AIConsultationServices";
import ContactSection from "@/components/ContactSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Automation & Consultation Services | HowAIConnects</title>
        <meta name="description" content="Transform your small business with AI automation services and expert consultation. Streamline marketing, workflow, and customer service operations." />
        <meta name="keywords" content="AI automation services, AI consultation for SMEs, marketing automation, workflow automation, customer service automation" />
        <link rel="canonical" href="https://howaiconnects.com/services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Automation & Consultation Services",
              "provider": {
                "@type": "Organization",
                "name": "HowAIConnects"
              },
              "serviceType": "AI Automation & Consultation",
              "description": "AI automation and consultation services tailored for small and medium-sized businesses.",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "43.5890",
                  "longitude": "-79.6441"
                },
                "geoRadius": "50000"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <ServicesBanner />
        <AIAutomationServices />
        <AIConsultationServices />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
