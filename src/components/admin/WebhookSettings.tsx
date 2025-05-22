
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { n8nConfig } from "@/config/integrationConfig";

const WebhookSettings = () => {
  const [contactWebhook, setContactWebhook] = useState(n8nConfig.contactFormWebhook);
  const [bookingWebhook, setBookingWebhook] = useState(n8nConfig.assessmentBookingWebhook);
  const [isSaving, setIsSaving] = useState(false);

  const saveSettings = () => {
    setIsSaving(true);
    
    // In a real implementation, you would save these to localStorage
    // or to a backend service. For now, we'll just simulate the save.
    setTimeout(() => {
      // Update n8nConfig in memory
      n8nConfig.contactFormWebhook = contactWebhook;
      n8nConfig.assessmentBookingWebhook = bookingWebhook;
      
      // Store in localStorage for persistence across page reloads
      localStorage.setItem('n8n_contact_webhook', contactWebhook);
      localStorage.setItem('n8n_booking_webhook', bookingWebhook);
      
      toast({
        title: "Settings saved",
        description: "Your webhook settings have been updated successfully."
      });
      setIsSaving(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>n8n Webhook Settings</CardTitle>
        <CardDescription>
          Configure webhook URLs to connect your forms with n8n automation workflows.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="contactWebhook" className="text-sm font-medium">
            Contact Form Webhook URL
          </label>
          <Input
            id="contactWebhook"
            value={contactWebhook}
            onChange={(e) => setContactWebhook(e.target.value)}
            placeholder="https://your-n8n-instance.com/webhook/contact-form"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="bookingWebhook" className="text-sm font-medium">
            Assessment Booking Webhook URL
          </label>
          <Input
            id="bookingWebhook"
            value={bookingWebhook}
            onChange={(e) => setBookingWebhook(e.target.value)}
            placeholder="https://your-n8n-instance.com/webhook/booking-form"
            className="w-full"
          />
        </div>
        
        <Button 
          onClick={saveSettings} 
          disabled={isSaving}
          className="w-full"
        >
          {isSaving ? "Saving..." : "Save Webhook Settings"}
        </Button>
        
        <div className="text-sm text-gray-500 mt-4">
          <p>
            These settings are stored in your browser. In a production environment, these would be stored in 
            your server configuration.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebhookSettings;
