export const TestimonialSection = () => {
  return (
    <>
      {/* Testimonial Section */}
      <section className="relative min-h-[300px] w-full bg-slate-500 bg-[url('/Images/card4long.avif')] bg-no-repeat bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 py-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              We Make Better Things In A Better Way
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed px-2 sm:px-4">
              By looking to the world&apos;s greatest innovator—Nature—we create shoes that deliver
              unrivaled comfort that you feel good in and feel good about.
            </p>
            <div className="pt-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold italic tracking-wide transform transition hover:scale-105 duration-300">
                Ecosantu by nature
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};