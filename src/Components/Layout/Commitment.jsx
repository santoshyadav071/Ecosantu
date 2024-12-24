export const Commitment = () => {
  return (
    <>
      <section className="w-full min-h-[320px] bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Wear-All-Day Comfort</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Lightweight, bouncy, and wildly comfortable, Allbirds shoes make
                any outing feel effortless. Slip in, lace up, or slide them on and
                enjoy the comfy support.
              </p>
              <a href="#" className="inline-block underline text-sm sm:text-base hover:text-gray-600 transition-colors">
                learn more
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Sustainability In Every Step</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                From materials to transport, we're working to reduce our carbon 
                footprint to near zero. Holding ourselves accountable and striving
                for climate goals isn't a 30-year goal—it's now.
              </p>
              <a href="#" className="inline-block underline text-sm sm:text-base hover:text-gray-600 transition-colors">
                learn more
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Materials From The Earth</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We replace petroleum-based synthetics with natural alternatives
                wherever we can. Like using wool, tree fiber, and sugar cane.
                They're soft, breathable, and better for the planet—win, win, win.
              </p>
              <a href="#" className="inline-block underline text-sm sm:text-base hover:text-gray-600 transition-colors">
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
