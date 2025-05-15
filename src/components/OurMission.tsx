
const OurMission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Mission
            </h2>
            <div className="mt-6 text-lg text-gray-600 space-y-4">
              <p>
                At HowAIConnects, we believe that AI technology should be accessible to businesses of all sizes. Our mission is to bridge the gap between cutting-edge AI solutions and small to medium-sized businesses.
              </p>
              <p>
                We founded HowAIConnects in 2023 after seeing too many SMEs struggle to implement AI due to technical barriers, high costs, and lack of clear guidance. We knew there had to be a better way.
              </p>
              <p>
                Today, we help hundreds of businesses across the Greater Toronto Area and beyond to leverage AI technologies through both done-for-you services and educational programs that empower business owners to implement solutions themselves.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team meeting"
                className="w-full h-full object-center object-cover" 
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 italic">
                Our team discussing AI integration strategies for a local retail client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
