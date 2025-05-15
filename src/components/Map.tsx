
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Map = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
      <AspectRatio ratio={16/9}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80858180306!2d-79.65336022217645!3d43.5890877432482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1621345678901!5m2!1sen!2sca" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          title="HowAIConnects location map"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>
    </div>
  );
};

export default Map;
