
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesShowcase from "@/components/ServicesShowcase";
import SuccessStories from "@/components/SuccessStories";
import EducationalOfferings from "@/components/EducationalOfferings";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>HowAIConnects | AI Automation & Education for Small Businesses</title>
        <meta name="description" content="HowAIConnects provides AI automation services and practical education for small businesses. Increase efficiency, reduce costs, and scale operations with AI." />
        <meta name="keywords" content="AI for small business, AI automation, SME AI education, AI consulting, business AI solutions" />
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
              "description": "AI automation and educational services for small and medium-sized businesses.",
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
        <ProblemSolution />
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
