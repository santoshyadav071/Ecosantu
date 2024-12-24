export const Help = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center sm:text-left">
          Help Center
        </h1>
        
        <div className="space-y-8 sm:space-y-12">
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-6 transition-all duration-200 hover:bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2">What is your return policy?</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We offer free returns within 30 days of purchase. Items must be unworn and in original condition with tags attached. 
                  Our hassle-free return process makes it easy to send items back if they don&apos;t work out.
                </p>
              </div>
              
              <div className="border-b pb-6 transition-all duration-200 hover:bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2">How do I track my order?</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Once your order ships, you&apos;ll receive a tracking number via email. You can use this to track your package&apos;s journey. 
                  You can also log into your account to view real-time shipping updates.
                </p>
              </div>
              
              <div className="border-b pb-6 transition-all duration-200 hover:bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2">What sizes do you offer?</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We offer sizes 5-13 for men and 5-11 for women. Check our size guide for detailed measurements.
                  Our shoes are designed to fit true to size for most customers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
              Contact Us
            </h2>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <p className="mb-4 text-sm sm:text-base">Need more help? Our customer service team is available:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2 text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: support@allbirds.com</span>
                </li>
                <li className="flex items-center space-x-2 text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone: 1-800-ALLBIRDS</span>
                </li>
                <li className="flex items-center space-x-2 text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Hours: Monday-Friday, 9am-5pm PST</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};