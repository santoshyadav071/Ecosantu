export const Explore = () => {
  return (
    <>
      <section className="w-full bg-[#F5F5F5] py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Explore More
            <br />
            Mens Running Shoes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/Images/ex1.avif"
                  alt="Active Shoes"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-3 text-center group-hover:text-gray-700 transition-colors">
                Active Shoes
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/Images/ex2.avif"
                  alt="Water Repellent Shoes"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-3 text-center group-hover:text-gray-700 transition-colors">
                Water Repellent Shoes
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/Images/ex3.avif"
                  alt="Slip-on Shoes"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-3 text-center group-hover:text-gray-700 transition-colors">
                Slip-on Shoes
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/Images/ex4.avif"
                  alt="Hiking Shoes"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-3 text-center group-hover:text-gray-700 transition-colors">
                Hiking Shoes
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};