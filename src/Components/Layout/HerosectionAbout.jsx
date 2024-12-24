export const HeroSectionAbout = () => {
    return (
        <>
            <section 
                className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{backgroundImage: "url('/Images/cover2.webp')"}}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Overlay for better text visibility */}
                <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                            About ReRun
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-light">
                            The Allbirds Resale Program
                        </p>
                        <p className="mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-gray-200">
                            Join us in our commitment to sustainable fashion through our innovative resale program
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}