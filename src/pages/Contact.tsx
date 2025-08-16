
import { Helmet } from "react-helmet-async";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactTabs from "@/components/contact/ContactTabs";
import LocationSection from "@/components/contact/LocationSection";
import ZendeskIntegration from "@/components/contact/ZendeskIntegration";
import { AutoBreadcrumb } from "@/components/ui/breadcrumb";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Contact HowAIConnects | AI Solutions for Small Businesses</title>
        <meta name="description" content="Connect with HowAIConnects for AI automation services and consultation. Serving small businesses in Mississauga, ON and throughout the Greater Toronto Area." />
      </Helmet>
      
      <ZendeskIntegration />
      <AutoBreadcrumb />
      
      <main className="flex-grow">
        <ContactHeader />
        
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards */}
          <ContactInfoCards />
          
          {/* Tabs for different contact methods */}
          <ContactTabs />
          
          <div className="mt-16">
            <LocationSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
