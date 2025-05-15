
const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Email</p>
            <p className="text-gray-600">
              <a href="mailto:connect@howaiconnects.com" className="hover:text-brand-primary">
                connect@howaiconnects.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Phone</p>
            <p className="text-gray-600">
              <a href="tel:+12895055070" className="hover:text-brand-primary">
                (289) 505-5070
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Location</p>
            <p className="text-gray-600">
              Mississauga, ON<br />
              Serving the Greater Toronto Area
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Business Hours</p>
            <p className="text-gray-600">
              Monday - Friday: 9am - 5pm<br />
              Saturday & Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
