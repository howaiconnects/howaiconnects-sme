
const AboutBanner = () => {
  return (
    <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">About</span>
            <span className="block gradient-text">HowAIConnects</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering small and medium-sized businesses to leverage AI technologies without requiring technical expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
