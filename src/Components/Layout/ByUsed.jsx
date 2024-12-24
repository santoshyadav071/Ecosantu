export const ByUsed = () => {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/Images/hight11.webp" 
                  alt="High Quality" 
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">HIGH QUALITY</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Strict evaluation criteria means only shoes deemed in like new
                condition make it onto the ReRun platform and into your closet.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/Images/hight2.webp" 
                  alt="High Value"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">HIGH VALUE</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Not only does ReRun allow you access to limited edition products
                from the past, it does so with a lower price tag, too.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/Images/hight3.webp" 
                  alt="Low Impact"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">LOW IMPACT</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Doubling our products' lifetime is one of the many commitments
                we've made that will help us lower our carbon footprint as a
                business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
