export const Detail = () => {
  return (
    <>
      <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <div className="border-t border-b border-gray-200 py-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold pr-4">
                    NO SHOW SOCKS VERSUS CREW SOCKS: WHICH IS BETTER?
                  </h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Hey, everyone has a preference—but there's no way to say which one is better. So, whether you want to hide your socks or show them off, we have some good news. The Allbirds Anytime sock collection has options available in no-show and crew styles.
                  </p>
                  <p className="mt-3">
                    Need something a little more in-between? We also have ankle socks, of course! Each pair, regardless of style, is made with a blend of light, breathable materials like tree fiber and organic cotton that keep your feet cool, dry, and happy.
                  </p>
                </div>
              </details>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold pr-4">
                    What is the most sustainable material for socks?
                  </h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    One of the most sustainable materials for socks is our TENCEL™ Lyocell, made from renewable eucalyptus tree fibers. This eco-friendly fabric has minimal environmental impact during production because it uses less water and energy when compared to traditional materials. We combine this material with organic cotton to enhance softness and durability even more. Organic cotton is grown without harmful chemicals, further reducing the environmental footprint. Together, these materials create socks that are gentler on the planet and exceptionally comfy and breathable.
                  </p>
                </div>
              </details>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold pr-4">
                    What are sustainable socks?
                  </h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Simple: sustainable socks are made from sustainable materials. The blend of materials in Allbirds Anytime socks includes organic cotton and TENCEL™ Lyocell, a sustainable fabric crafted from eucalyptus tree fibers. Choosing a sustainable option for frequently purchased essentials like socks is an easy way to help preserve the health of our planet.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
