import SimpleSlider1 from "./SimpleSlider1";

export const CrouselSection1 = () => {
  return (
    <>
      <section className="w-full py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
            <div className="w-full h-full">
              <SimpleSlider1 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
