
import { LifeBuoy } from "lucide-react";

const SupportTab = () => {
  return (
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
  );
};

export default SupportTab;
