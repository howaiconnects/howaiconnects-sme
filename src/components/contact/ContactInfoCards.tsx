
import { Building, Mail, MapPin, Phone, LifeBuoy } from "lucide-react";

const ContactInfoCards = () => {
  return (
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
  );
};

export default ContactInfoCards;
