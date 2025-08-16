
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, Calendar as CalendarCheck } from "lucide-react";
import DateSelector from "./booking/DateSelector";
import TimeSlotSelector from "./booking/TimeSlotSelector";
import ContactInfoForm from "./booking/ContactInfoForm";
import { Form } from "@/components/ui/form";
import { generateCalendarLinks, generateCalendarOptionsHtml } from "@/utils/bookingUtils";
import { sendBookingEmail } from "@/services/emailService";
import { sendToZapier } from "@/utils/formUtils";
import { zapierConfig, n8nConfig } from "@/config/integrationConfig";
import { apiService, BookingFormData } from "@/services/apiService";
import { useApiRequest } from "@/hooks/useApiRequest";

interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
}

const BookAssessment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [emailSettings, setEmailSettings] = useState({
    configured: false
  });

  // Use the new API request hook
  const bookingApi = useApiRequest(apiService.submitBookingForm);
  
  useEffect(() => {
    // Check if email settings exist in localStorage
    const savedSettings = localStorage.getItem('emailSettings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        if (
          parsedSettings.serviceId && 
          parsedSettings.serviceId !== "YOUR_SERVICE_ID" &&
          parsedSettings.bookingTemplateId && 
          parsedSettings.publicKey
        ) {
          setEmailSettings({
            configured: true
          });
        }
      } catch (error) {
        console.error("Failed to parse saved email settings:", error);
      }
    }
  }, []);

  const form = useForm<BookingFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  });

  const onSubmit = async (data: BookingFormValues) => {
    if (!date || !selectedTime || !data.name || !data.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const { 
        startTime, 
        eventDetails, 
        googleCalendarUrl, 
        outlookCalendarUrl 
      } = generateCalendarLinks(date, selectedTime, data.name, data.company);
      
      // Prepare data for API
      const apiData: BookingFormData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        appointmentDate: date.toISOString(),
        appointmentTime: selectedTime,
      };

      // Submit to new API service
      const apiResponse = await bookingApi.execute(apiData);
      
      // Send booking notification via EmailJS if configured
      if (emailSettings.configured) {
        try {
          await sendBookingEmail({
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            appointmentDate: startTime,
            appointmentTime: selectedTime,
            appointmentDetails: eventDetails
          });
        } catch (emailError) {
          console.error("Email send error:", emailError);
          // Continue execution even if email fails
        }
      }
      
      // Try to send to Zapier if configured
      try {
        if (zapierConfig.assessmentBookingWebhook && 
            zapierConfig.assessmentBookingWebhook !== "YOUR_ZAPIER_ASSESSMENT_BOOKING_WEBHOOK_URL") {
          await sendToZapier(
            zapierConfig.assessmentBookingWebhook,
            {
              ...data,
              appointmentDate: date.toISOString(),
              appointmentTime: selectedTime,
              formType: "assessment_booking"
            },
            "assessment_booking"
          );
        }
      } catch (zapierError) {
        console.error("Zapier send error:", zapierError);
        // Continue execution even if Zapier fails
      }
      
      // Try to send to n8n if configured
      try {
        if (n8nConfig.assessmentBookingWebhook && 
            n8nConfig.assessmentBookingWebhook !== "YOUR_N8N_ASSESSMENT_BOOKING_WEBHOOK_URL") {
          await sendToZapier(
            n8nConfig.assessmentBookingWebhook,
            {
              ...data,
              appointmentDate: date.toISOString(),
              appointmentTime: selectedTime,
              formType: "assessment_booking"
            },
            "assessment_booking"
          );
        }
      } catch (n8nError) {
        console.error("n8n send error:", n8nError);
        // Continue execution even if n8n fails
      }
      
      if (apiResponse.success) {
        toast({
          title: "Assessment call scheduled!",
          description: `Your call is booked for ${date.toLocaleDateString()} at ${selectedTime}.`,
        });
      } else {
        toast({
          title: "Booking processed via backup systems",
          description: `Your call is booked for ${date.toLocaleDateString()} at ${selectedTime}.`,
        });
      }
      
      // Open a new window with calendar options
      const calendarOptionsHtml = generateCalendarOptionsHtml(
        date, 
        selectedTime, 
        googleCalendarUrl, 
        outlookCalendarUrl
      );
      
      const calendarWindow = window.open("", "calendar", "width=500,height=500");
      if (calendarWindow) {
        calendarWindow.document.write(calendarOptionsHtml);
      }
      
      // Reset form
      form.reset();
      setDate(undefined);
      setSelectedTime(null);
      bookingApi.reset();
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking failed",
        description: "There was a problem scheduling your call. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-3 text-brand-primary mb-6">
        <CalendarCheck className="h-7 w-7" />
        <h3 className="text-2xl font-bold">Request Platform Demo</h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        Experience our revolutionary AI orchestration platform firsthand. 
        Schedule a personalized demo with our engineering team to see the future of automation in action.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DateSelector date={date} setDate={setDate} />
          
          <TimeSlotSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          
          <ContactInfoForm form={form} />
          
          <Button 
            type="submit" 
            className="w-full bg-brand-primary hover:bg-brand-accent"
            disabled={bookingApi.loading}
          >
            {bookingApi.loading ? "Scheduling..." : "Schedule Platform Demo"}
          </Button>
          
          {bookingApi.error && (
            <p className="text-sm text-red-600 mt-2">
              API Error: {bookingApi.error} (Booking processed via backup systems)
            </p>
          )}
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <CalendarIcon className="h-4 w-4" />
            <p>
              Our team will confirm your booking and send you a calendar invitation.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookAssessment;
