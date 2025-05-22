
import { Button } from "@/components/ui/button";
import { timeSlots } from "@/utils/bookingUtils";

interface TimeSlotSelectorProps {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

const TimeSlotSelector = ({ selectedTime, setSelectedTime }: TimeSlotSelectorProps) => {
  return (
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
  );
};

export default TimeSlotSelector;
