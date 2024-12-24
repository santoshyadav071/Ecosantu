import { Link } from 'react-router-dom';

export const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/Images/heroimg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-20" /> {/* Overlay for better text visibility */}
                <div className="relative h-full flex flex-col justify-between container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center md:text-end pt-16 md:pt-24">
                        Protected <br className="hidden sm:block" />
                        By Nature
                    </h1>
                    <div className="text-center md:text-end mt-4 md:mt-0">
                        <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                            Water-Repellent Styles Designed For <br className="hidden sm:block" />
                            Drizzles And Downpours.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 sm:gap-6 pb-10 mt-8 md:mt-0">
                        <Link to="/shop-men">
                            <button className="w-full sm:w-auto border-4 rounded border-white bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 px-6 py-2 shadow-md hover:shadow-lg text-base sm:text-lg">
                                Shop Men
                            </button>
                        </Link>
                        <Link to="/shop-women">
                            <button className="w-full sm:w-auto border-4 rounded border-white bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 px-6 py-2 shadow-md hover:shadow-lg text-base sm:text-lg">
                                Shop Women
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}