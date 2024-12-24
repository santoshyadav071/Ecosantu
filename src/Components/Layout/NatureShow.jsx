export const NatureShow = () => {
  return (
    <>
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="/Images/na1.avif" alt="" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg mt-4">Made From Nature, For Nature</h2>
              <p className="py-4">
                Mizzles are rain-ready sneakers, made from high quality Merino
                wool with a water-repellent coating to keep your feet dry and warm
                in wet-weather.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/na2.avif" alt="" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg mt-4">Stability in Slick Conditions</h2>
              <p className="py-4">
                Our sugarcane-based SweetFoam® sole is combined with natural
                rubber treads for a delightful bounce and better traction.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Images/na3.avif" alt="" className="w-full h-auto rounded-lg" />
              <h2 className="font-bold text-lg mt-4">100% Machine Washable</h2>
              <p className="py-4">
                Our shoes are fully washable, making every step as clean as the
                first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
