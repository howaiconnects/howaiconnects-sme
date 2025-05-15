
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Map from "@/components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Contact HowAIConnects | AI Solutions for Small Businesses</title>
        <meta name="description" content="Connect with HowAIConnects for AI automation services and consultation. Serving small businesses in Mississauga, ON and throughout the Greater Toronto Area." />
        <meta name="keywords" content="contact HowAIConnects, AI consultation, AI services, AI for SMEs, Mississauga AI" />
        <link rel="canonical" href="https://howaiconnects.com/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact HowAIConnects",
              "description": "Contact page for HowAIConnects AI services.",
              "mainEntity": {
                "@type": "Organization",
                "name": "HowAIConnects",
                "email": "connect@howaiconnects.com",
                "telephone": "+12895055070",
                "areaServed": "Mississauga, ON and Greater Toronto Area"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Get In Touch
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                We're here to help your business leverage the power of AI
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <ContactForm />
              <div>
                <ContactInfo />
                <div className="mt-10">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
