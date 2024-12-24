export const Comfty = () => {
    return (
      <>
        <section className="h-auto bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-10 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="/Images/comfty1.avif" alt="Comfy, Breezy, Active Sneaker" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg sm:text-xl mt-4">Comfy, Breezy, Active Sneaker</h2>
              <p className="py-4 text-sm sm:text-base">
                Our proprietary knit feels lightweight, breathable, and pleasantly cool thanks to a tree fiber material blend.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/comfty2.avif" alt="Wear-All-Day Support" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg sm:text-xl mt-4">Wear-All-Day Support</h2>
              <p className="py-4 text-sm sm:text-base">
                Engineered for the urban explorer seeking cushion, stability, and energy return, the Tree Dasher 2 is your go-to for conquering city streets, from morning jogs to evening strolls.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/comfty3.avif" alt="100% Machine Washable" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg sm:text-xl mt-4">100% Machine Washable</h2>
              <p className="py-4 text-sm sm:text-base">
                Our shoes are fully washable, making every step as clean as the first.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };