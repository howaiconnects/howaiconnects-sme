
import { Building, Mail, MapPin, Phone, LifeBuoy, Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const ContactInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
      <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
        <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Phone className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
        <p className="text-gray-600">
          <a href="tel:+12895055070" className="hover:text-brand-primary">(289) 505-5070</a>
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
        <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
        <p className="text-gray-600">
          <a href="mailto:connect@howaiconnects.com" className="hover:text-brand-primary">connect@howaiconnects.com</a>
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
        <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Building className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Office</h3>
        <p className="text-gray-600">Mississauga, ON</p>
        <p className="text-gray-600">Greater Toronto Area</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
        <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <MapPin className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Service Area</h3>
        <p className="text-gray-600">Remote services available worldwide</p>
        <p className="text-gray-600">In-person consultations in GTA</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
        <div className="mx-auto bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <LifeBuoy className="h-8 w-8 text-brand-primary" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Connect</h3>
        <div className="space-y-2">
          <p className="text-gray-600">
            <a href="https://linkedin.com/company/howaiconnects/" className="hover:text-brand-primary">LinkedIn</a>
          </p>
          <p className="text-gray-600">
            <a href="https://x.com/HowAIConnects" className="hover:text-brand-primary">X (Twitter)</a>
          </p>
          <p className="text-gray-600">
            <a href="https://instagram.com/howaiconnects/" className="hover:text-brand-primary">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
