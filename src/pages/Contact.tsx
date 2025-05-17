
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Map from "@/components/Map";
import BookAssessment from "@/components/BookAssessment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Contact HowAIConnects | AI Solutions for Small Businesses</title>
        <meta name="description" content="Connect with HowAIConnects for AI automation services and consultation. Serving small businesses in Mississauga, ON and throughout the Greater Toronto Area." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="bg-brand-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Get In Touch
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                We're here to help your business leverage the power of AI
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+12895055070" className="hover:text-brand-primary">(289) 505-5070</a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:connect@howaiconnects.com" className="hover:text-brand-primary">connect@howaiconnects.com</a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Mississauga, ON</p>
              <p className="text-gray-600">Greater Toronto Area</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Service Area</h3>
              <p className="text-gray-600">Remote services available worldwide</p>
              <p className="text-gray-600">In-person consultations in GTA</p>
            </div>
          </div>
          
          {/* Tabs for different contact methods */}
          <Tabs defaultValue="contact" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="contact">Send a Message</TabsTrigger>
              <TabsTrigger value="assessment">Book Assessment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact">
              <ContactForm />
            </TabsContent>
            
            <TabsContent value="assessment">
              <BookAssessment />
            </TabsContent>
          </Tabs>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Location</h2>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <Map />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                While we're based in Mississauga, Ontario, we serve clients throughout the Greater Toronto Area and beyond. 
                Our digital solutions enable us to work with businesses across Canada and internationally.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
