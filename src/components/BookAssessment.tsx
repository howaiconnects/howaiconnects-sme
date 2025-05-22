
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, Calendar as CalendarCheck } from "lucide-react";
import DateSelector from "./booking/DateSelector";
import TimeSlotSelector from "./booking/TimeSlotSelector";
import ContactInfoForm from "./booking/ContactInfoForm";
import { generateCalendarLinks, generateCalendarOptionsHtml } from "@/utils/bookingUtils";
import { sendBookingEmail } from "@/services/emailService";

const BookAssessment = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !name || !email) {
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
      } = generateCalendarLinks(date, selectedTime, name, company);
      
      // Send booking notification via EmailJS
      await sendBookingEmail({
        name,
        email,
        phone,
        company,
        appointmentDate: startTime,
        appointmentTime: selectedTime,
        appointmentDetails: eventDetails
      });
      
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
      setDate(undefined);
      setSelectedTime(null);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
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
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          company={company}
          setCompany={setCompany}
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
