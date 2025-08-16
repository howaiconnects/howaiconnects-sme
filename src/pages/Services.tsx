
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesBanner from "@/components/ServicesBanner";
import ServicesShowcase from "@/components/ServicesShowcase";
import ContactSection from "@/components/ContactSection";
import { AutoBreadcrumb } from "@/components/ui/breadcrumb";

const Services = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Platform & Orchestration Services | HowAIConnects</title>
        <meta name="description" content="Revolutionary AI orchestration platform with voice-activated intelligence, deep integrations, and predictive automation that anticipates your needs." />
        <meta name="keywords" content="AI platform services, AI orchestration technology, voice-activated AI systems, advanced automation platform, AI engineering services" />
        <link rel="canonical" href="https://howaiconnects.com/services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Platform & Orchestration Services",
              "provider": {
                "@type": "Organization",
                "name": "HowAIConnects"
              },
              "serviceType": "AI Platform & Orchestration Technology",
              "description": "Advanced AI orchestration platform with voice-activated intelligence and predictive automation capabilities.",
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
      <AutoBreadcrumb />
      <main className="flex-grow">
        <ServicesBanner />
        <ServicesShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
