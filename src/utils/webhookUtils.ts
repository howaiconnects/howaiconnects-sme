
/**
 * Sends data to an n8n webhook
 * @param webhookUrl The n8n webhook URL to send data to
 * @param data The data to send
 * @returns Promise that resolves when the webhook call completes
 */
export const sendToN8n = async (
  webhookUrl: string,
  data: Record<string, any>
): Promise<boolean> => {
  if (!webhookUrl || webhookUrl.includes("YOUR_N8N")) {
    console.error("No valid n8n webhook URL provided");
    return false;
  }

  try {
    // Add metadata to help with n8n workflow processing
    const enrichedData = {
      ...data,
      metadata: {
        timestamp: new Date().toISOString(),
        source: window.location.href,
        referrer: document.referrer || "direct",
        userAgent: navigator.userAgent,
        screen: {
          width: window.screen.width,
          height: window.screen.height
        }
      }
    };

    // Send to n8n webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrichedData),
    });
    
    if (!response.ok) {
      throw new Error(`n8n webhook responded with status: ${response.status}`);
    }
    
    console.log(`Data sent to n8n webhook:`, enrichedData);
    return true;
  } catch (error) {
    console.error("Error sending data to n8n webhook:", error);
    return false;
  }
};

/**
 * A helper utility to create a webhook configuration input component
 */
export const getWebhookConfig = (defaultUrl: string = "") => {
  // Code that could be used if you want to add a UI component for webhook configuration
  return {
    url: defaultUrl,
    setUrl: (newUrl: string) => {
      // This would be handled by state in a React component
      return newUrl;
    }
  };
};
