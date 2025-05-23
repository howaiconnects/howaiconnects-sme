
import { useEffect } from "react";
import { zendeskConfig } from "@/config/integrationConfig";

const ZendeskIntegration = () => {
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
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskConfig.widgetKey}`; 
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

  return null; // This component doesn't render anything
};

export default ZendeskIntegration;

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
