
import { format, addMinutes } from "date-fns";

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM"
];

// Filter out weekends and past dates
export const isDateDisabled = (date: Date) => {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
  return isWeekend || isPast;
};

// Create calendar event details and URLs
export const generateCalendarLinks = (date: Date, selectedTime: string, name: string, company: string) => {
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

  return {
    startTime,
    eventDetails,
    googleCalendarUrl,
    outlookCalendarUrl
  };
};

// Generate the HTML for calendar options window
export const generateCalendarOptionsHtml = (date: Date, selectedTime: string, googleCalendarUrl: string, outlookCalendarUrl: string) => {
  return `
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
};
