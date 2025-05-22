import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import BookAssessment from "@/components/BookAssessment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Mail, MapPin, Phone, LifeBuoy } from "lucide-react";
import { useEffect } from "react";
import Map from "@/components/Map"; // Import the Map component

const Contact = () => {
  // Initialize Zendesk widget when component mounts
  useEffect(() => {
    // This function will be called when the Zendesk script is loaded
    window.zESettings = {
      webWidget: {
        color: { 
          theme: '#6366f1' // Use brand-primary color
        },
        launcher: {
          chatLabel: {
            'en-US': 'Need help?'
          }
        },
        contactForm: {
          title: {
            'en-US': 'Contact HowAIConnects'
          }
        }
      }
    };
    
    // Add Zendesk script with your actual Zendesk key
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=your-zendesk-key'; // Replace with your actual Zendesk key
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Clean up on unmount
      const zendeskScript = document.getElementById('ze-snippet');
      if (zendeskScript) {
        zendeskScript.remove();
      }
    };
  }, []);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <LifeBuoy className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">24/7 Customer Support</p>
              <button 
                onClick={() => {
                  // @ts-ignore - Zendesk widget global function
                  if (window.zE) window.zE('webWidget', 'open');
                }}
                className="mt-2 text-brand-primary hover:text-brand-accent"
              >
                Open Support Chat
              </button>
            </div>
          </div>
          
          {/* Tabs for different contact methods */}
          <Tabs defaultValue="contact" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="contact">Send a Message</TabsTrigger>
              <TabsTrigger value="assessment">Book Assessment</TabsTrigger>
              <TabsTrigger value="support">Customer Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact">
              <ContactForm />
            </TabsContent>
            
            <TabsContent value="assessment">
              <BookAssessment />
            </TabsContent>
            
            <TabsContent value="support">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-brand-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <LifeBuoy className="h-10 w-10 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Customer Support</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Our support team is available to help you with any questions or issues you may have.
                  Click below to start a conversation with our support team.
                </p>
                <button 
                  onClick={() => {
                    // @ts-ignore - Zendesk widget global function
                    if (window.zE) window.zE('webWidget', 'open');
                  }}
                  className="px-6 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-accent transition duration-200"
                >
                  Launch Support Chat
                </button>
              </div>
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

// Add TypeScript interface for Zendesk global object
declare global {
  interface Window {
    zE?: any;
    zESettings?: {
      webWidget: {
        color: { theme: string };
        launcher: { chatLabel: Record<string, string> };
        contactForm: { title: Record<string, string> };
      };
    };
  }
}

export default Contact;
