import { useState } from "react";
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
import { sendToN8n } from "@/utils/webhookUtils";
import { emailjsConfig, zapierConfig, n8nConfig } from "@/config/integrationConfig";

interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
}

const BookAssessment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  });

  const handleSubmit = async (data: BookingFormValues) => {
    if (!date || !selectedTime || !data.name || !data.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { 
        startTime, 
        eventDetails, 
        googleCalendarUrl, 
        outlookCalendarUrl 
      } = generateCalendarLinks(date, selectedTime, data.name, data.company);
      
      // Prepare booking data
      const bookingData = {
        ...data,
        appointmentDate: date.toISOString(),
        appointmentTime: selectedTime,
        formType: "assessment_booking",
        calendarLinks: {
          google: googleCalendarUrl,
          outlook: outlookCalendarUrl
        }
      };
      
      // Send booking notification via EmailJS
      await sendBookingEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        appointmentDate: startTime,
        appointmentTime: selectedTime,
        appointmentDetails: eventDetails
      });
      
      // Send to n8n for automation workflows
      const n8nSuccess = await sendToN8n(
        n8nConfig.assessmentBookingWebhook,
        bookingData
      );
      
      // Also send to Zapier as a fallback or additional integration
      await sendToZapier(
        zapierConfig.assessmentBookingWebhook,
        bookingData,
        "assessment_booking"
      );
      
      toast({
        title: "Assessment call scheduled!",
        description: `Your call is booked for ${date.toLocaleDateString()} at ${selectedTime}.`,
      });
      
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
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking failed",
        description: "There was a problem scheduling your call. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-3 text-brand-primary mb-6">
        <CalendarCheck className="h-7 w-7" />
        <h3 className="text-2xl font-bold">Book Your Free AI Readiness Assessment</h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        Schedule a complimentary 30-minute call with one of our AI experts to discuss your business needs and explore how AI can help you achieve your goals.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <DateSelector date={date} setDate={setDate} />
        
        <TimeSlotSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        
        <ContactInfoForm 
          name={form.watch("name")}
          setName={form.register("name")}
          email={form.watch("email")}
          setEmail={form.register("email")}
          phone={form.watch("phone")}
          setPhone={form.register("phone")}
          company={form.watch("company")}
          setCompany={form.register("company")}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-brand-primary hover:bg-brand-accent"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Schedule Assessment Call"}
        </Button>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <CalendarIcon className="h-4 w-4" />
          <p>
            Our team will confirm your booking and send you a calendar invitation.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookAssessment;
