
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { format, addMinutes } from "date-fns";
import { CalendarIcon, Calendar as CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM"
];

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
      // Parse the selected time
      const [hourStr, minuteStr, period] = selectedTime.match(/(\d+):(\d+)\s(AM|PM)/)?.slice(1) || [];
      const hour = parseInt(hourStr) + (period === "PM" && hourStr !== "12" ? 12 : 0);
      const minute = parseInt(minuteStr);
      
      // Set the date with the correct time
      const startTime = new Date(date);
      startTime.setHours(hour, minute, 0, 0);
      
      // Calculate end time (30 minutes after start)
      const endTime = addMinutes(startTime, 30);
      
      // Format dates for calendar event
      const formattedStart = startTime.toISOString().replace(/-|:|\.\d+/g, "");
      const formattedEnd = endTime.toISOString().replace(/-|:|\.\d+/g, "");
      
      // Create calendar event details
      const eventTitle = "AI Readiness Assessment - HowAIConnects";
      const eventDetails = `AI Readiness Assessment with ${name}${company ? ` from ${company}` : ""}`;
      const location = "Virtual Meeting";
      
      // Create Google Calendar link
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formattedStart}/${formattedEnd}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(location)}`;
      
      // Create Outlook Calendar link
      const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&startdt=${startTime.toISOString()}&enddt=${endTime.toISOString()}&body=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(location)}`;
      
      // Send booking notification via EmailJS
      const templateParams = {
        name,
        email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        appointment_date: format(startTime, "PPP"),
        appointment_time: selectedTime,
        appointment_details: eventDetails
      };
      
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_BOOKING_TEMPLATE_ID', // Replace with your EmailJS template ID for bookings
        templateParams,
        'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
      );
      
      toast({
        title: "Assessment call scheduled!",
        description: `Your call is booked for ${format(date, "PPPP")} at ${selectedTime}.`,
      });
      
      // Open a new window with calendar options
      const calendarOptionsHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Add to Calendar</title>
            <style>
              body { font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 2rem; }
              .btn { display: block; margin: 1rem 0; padding: 1rem; text-align: center; 
                     background: #6366f1; color: white; text-decoration: none; border-radius: 0.5rem; }
              h1 { color: #4f46e5; }
            </style>
          </head>
          <body>
            <h1>Add your assessment to calendar</h1>
            <p>Your assessment is scheduled for ${format(date, "PPPP")} at ${selectedTime}.</p>
            <a href="${googleCalendarUrl}" target="_blank" class="btn">Add to Google Calendar</a>
            <a href="${outlookCalendarUrl}" target="_blank" class="btn">Add to Outlook Calendar</a>
            <p>You'll receive a confirmation email with meeting details shortly.</p>
          </body>
        </html>
      `;
      
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

  // Filter out weekends and past dates
  const isDateDisabled = (date: Date) => {
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
    return isWeekend || isPast;
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date <span className="text-red-500">*</span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={isDateDisabled}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Time <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? "default" : "outline"}
                className={`text-sm py-2 ${selectedTime === time ? "bg-brand-primary" : ""}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
        
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
