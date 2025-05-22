
import Map from "../Map";

const LocationSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Location</h2>
      <div className="h-96 rounded-lg overflow-hidden shadow-lg">
        <Map />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          While we're based in Mississauga, Ontario, we serve clients throughout the Greater Toronto Area and beyond. 
          Our digital solutions enable us to work with businesses across Canada and internationally.
        </p>
      </div>
    </div>
  );
};

export default LocationSection;
