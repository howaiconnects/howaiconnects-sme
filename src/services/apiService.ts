
/**
 * API Service for handling HTTP requests to backend
 * This can be easily configured to work with any backend (FastAPI, Express, etc.)
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  timestamp?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  appointmentDate: string;
  appointmentTime: string;
  source?: string;
  timestamp?: string;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    // This will use your environment variable or fall back to a placeholder
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const config: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      };

      console.log(`Making API request to: ${url}`, config);

      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        data,
        message: 'Request successful'
      };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  // Contact form submission
  async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    const enrichedData = {
      ...formData,
      source: 'contact_form',
      timestamp: new Date().toISOString(),
    };

    return this.makeRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(enrichedData),
    });
  }

  // Assessment booking submission
  async submitBookingForm(formData: BookingFormData): Promise<ApiResponse> {
    const enrichedData = {
      ...formData,
      source: 'assessment_booking',
      timestamp: new Date().toISOString(),
    };

    return this.makeRequest('/bookings', {
      method: 'POST',
      body: JSON.stringify(enrichedData),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<ApiResponse> {
    return this.makeRequest('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ 
        email,
        source: 'newsletter_signup',
        timestamp: new Date().toISOString()
      }),
    });
  }

  // Health check endpoint
  async healthCheck(): Promise<ApiResponse> {
    return this.makeRequest('/health');
  }
}

export const apiService = new ApiService();
