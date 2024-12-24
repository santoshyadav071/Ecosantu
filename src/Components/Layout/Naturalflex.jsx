export const Naturalflex = () => {
  return (
    <>
      <section className="h-auto bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="/Images/inf.avif" alt="Made From Nature" className="w-full h-auto mb-4" />
              <h2 className="font-bold text-lg sm:text-xl">Made From Nature</h2>
              <p className="py-4 text-sm sm:text-base">
                Our ethically sourced Merino wool provides a cozy fit that is soft and itch-free on the inside and durable on the outside.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/inf2.avif" alt="Wear-All-Day Support" className="w-full h-auto mb-4" />
              <h2 className="font-bold text-lg sm:text-xl">Wear-All-Day Support</h2>
              <p className="py-4 text-sm sm:text-base">
                Experience the comfort of SweetFoam®, our cushioned midsole made from sugarcane, providing all-day happiness for your feet.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/inf3.avif" alt="100% Machine Washable" className="w-full h-auto mb-4" />
              <h2 className="font-bold text-lg sm:text-xl">100% Machine Washable</h2>
              <p className="py-4 text-sm sm:text-base">
                Our shoes are fully washable, making every step as clean as the first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
