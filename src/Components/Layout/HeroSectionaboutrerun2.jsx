export const HeroSectionaboutrerun2 = () => {
  return (
    <>
      <section className="w-full h-auto bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <img 
              src="/Images/cover3.webp" 
              alt="Limited Edition Colors" 
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            
            <div className="text-center mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                A New Way To Get The Colors That Got Away
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
                Once our limited edition colorways sell out, they're gone for good. Until now.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto border-2 border-black bg-white text-black hover:bg-black hover:text-white px-8 sm:px-12 py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-300">
                SHOP WOMEN
              </button>
              <button className="w-full sm:w-auto border-2 border-black bg-white text-black hover:bg-black hover:text-white px-8 sm:px-12 py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-300">
                SHOP MEN
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
