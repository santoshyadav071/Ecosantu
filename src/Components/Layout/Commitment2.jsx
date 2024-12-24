export const Commitment2 = () => {
  return (
    <>
      <section className="w-full bg-gray-50 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">Wear-All-Day Comfort</h2>
            <p className="text-sm sm:text-base">
              Lightweight, bouncy, and wildly comfortable, Allbirds shoes make
              any outing feel effortless. Slip in, lace up, or slide them on and
              enjoy the comfy support.
            </p>
            <a href="#" className="underline text-sm mt-2">learn more</a>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">Sustainability In Every Step</h2>
            <p className="text-sm sm:text-base">
              From materials to transport, we’re working to reduce our carbon 
              footprint to near zero. Holding ourselves accountable and striving
              for climate goals isn’t a 30-year goal—it’s now.
            </p>
            <a href="#" className="underline text-sm mt-2">learn more</a>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">Materials From The Earth</h2>
            <p className="text-sm sm:text-base">
              We replace petroleum-based synthetics with natural alternatives
              wherever we can. Like using wool, tree fiber, and sugar cane.
              They’re soft, breathable, and better for the planet—win, win, win.
            </p>
            <a href="#" className="underline text-sm mt-2">learn more</a>
          </div>
        </div>
      </section>
    </>
  );
};
