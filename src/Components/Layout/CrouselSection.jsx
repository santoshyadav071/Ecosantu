import SimpleSlider from "./SimpleSlider"

export const CrouselSection = () => {
  return (
    <>
      {/* Carousel Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 tracking-tight">
            Image Showcase
          </h2>
          <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
            <SimpleSlider />
          </div>
        </div>
      </section>
    </>
  )
}