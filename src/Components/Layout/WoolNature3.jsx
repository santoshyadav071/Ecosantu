export const WoomenNature3 = () => {
    return (
      <>
        <section className="h-auto bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 md:p-10 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="/Images/sp.avif" alt="Made From Nature" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg md:text-xl mt-4">Made From Nature</h2>
              <p className="py-4 text-sm md:text-base">
                Our ethically sourced Merino wool provides a cozy fit that is soft and itch-free on the inside and durable on the outside.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/sp1.avif" alt="Wear-All-Day Support" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg md:text-xl mt-4">Wear-All-Day Support</h2>
              <p className="py-4 text-sm md:text-base">
                Experience the comfort of SweetFoam®, our cushioned midsole made from sugarcane, providing all-day happiness for your feet.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/sp3.avif" alt="100% Machine Washable" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg md:text-xl mt-4">100% Machine Washable</h2>
              <p className="py-4 text-sm md:text-base">
                Our shoes are fully washable, making every step as clean as the first.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };