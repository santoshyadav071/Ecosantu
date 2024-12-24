export const Comfort = () => {
    return (
      <>
        <section className="h-auto bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 md:p-10 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="/Images/comfrt.avif" alt="Made From Nature" className="w-full h-auto mb-4" />
              <h2 className="font-bold text-lg md:text-xl">Made From Nature</h2>
              <p className="py-4 text-sm md:text-base">
                Our proprietary knit feels lightweight, breathable, and pleasantly cool thanks to a tree fiber material blend.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/comfrt1.avif" alt="Wear-All-Day Support" className="w-full h-auto mb-4" />
              <h2 className="font-bold text-lg md:text-xl">Wear-All-Day Support</h2>
              <p className="py-4 text-sm md:text-base">
                Experience the comfort of SweetFoam®, our cushioned midsole made from sugarcane, providing all-day happiness for your feet.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/comfrt2.avif" alt="100% Machine Washable" className="w-full h-auto mb-4" />
              <h2 className="font-bold text-lg md:text-xl">100% Machine Washable</h2>
              <p className="py-4 text-sm md:text-base">
                Our shoes are fully washable, making every step as clean as the first.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };