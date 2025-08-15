
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
        <title>About HowAIConnects | AI Solutions for Small Businesses</title>
        <meta name="description" content="HowAIConnects helps small and medium-sized businesses leverage AI technologies without requiring technical expertise. Learn about our mission and values." />
        <meta name="keywords" content="AI for SMEs, about HowAIConnects, small business AI solutions, AI automation company" />
        <link rel="canonical" href="https://howaiconnects.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HowAIConnects",
              "description": "AI automation and education for small and medium-sized businesses",
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
              }
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
