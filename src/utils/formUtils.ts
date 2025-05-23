
import { toast } from "@/components/ui/use-toast";

/**
 * Sends form data to a Zapier webhook
 * @param webhookUrl The Zapier webhook URL to send data to
 * @param formData The form data to send
 * @param source The source of the form submission (e.g., "contact", "assessment")
 * @returns Promise resolving to boolean indicating success
 */
export const sendToZapier = async (
  webhookUrl: string,
  formData: Record<string, any>,
  source: string
): Promise<boolean> => {
  if (!webhookUrl) {
    console.error("No Zapier webhook URL provided");
    return false;
  }

  try {
    // Add metadata to the form submission
    const enrichedData = {
      ...formData,
      source,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      referrer: document.referrer || "direct",
    };

    // Send to Zapier webhook
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Handle CORS issues
      body: JSON.stringify(enrichedData),
    });
    
    // Since we use no-cors mode, we won't get a proper response
    // So we assume success if no exception is thrown
    console.log(`Form data sent to Zapier from ${source}:`, enrichedData);
    return true;
  } catch (error) {
    console.error("Error sending to Zapier:", error);
    return false;
  }
};
