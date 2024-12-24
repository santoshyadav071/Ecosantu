export const Insole1 = () => {
  return (
    <>
      <section className="relative bg-[url('/Images/insole1.avif')] bg-cover bg-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-end">
          <div className="text-right max-w-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Men&apos;s Insoles
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-200 leading-relaxed">
              Get the spring back in your step with our high cushion, 
              merino-lined replacement insoles.
            </p>
            <button className="mt-4 sm:mt-6 px-6 py-2 sm:py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
