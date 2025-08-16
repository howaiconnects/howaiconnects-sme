
const ContactHeader = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed">
            We're here to help your business leverage the power of AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
