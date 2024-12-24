import WornSlid from "./WornSlid";

export const WornSlidef = () => {
    return (
        <>
            {/* Carousel Section */}
            <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Worn in the Wild</h2>
                <div className="flex justify-center">
                    <WornSlid />
                </div>
            </section>
        </>
    );
}