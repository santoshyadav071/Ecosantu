 import clearData from '../api/clearData.json';

export const Sales = () => {
    return (
        <>
            <section className="min-h-screen bg-[#FEFEFE] w-full py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clearData.sections.map((section, index) => (
                            <div key={index} className="flex flex-col">
                                <h2 className="font-bold text-lg mb-2 text-center text-gray-800">{section.title}</h2>
                                {section.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className={`bg-cover bg-center p-4 rounded-lg mb-4 transition-transform duration-300 shadow-lg hover:shadow-xl ${
                                            item === "Shop mens" || item === "New: Protected Collection"
                                                ? "transform hover:scale-105"
                                                : ""
                                        }`}
                                        style={{
                                            backgroundImage: item === "Shop mens"
                                                ? "url('/Images/shopmen.avif')"
                                                : item === "New: Protected Collection"
                                                    ? "url('/Images/protect.avif')"
                                                    : "none",
                                            height: "120px",
                                            border: item === "Shop mens" || item === "New: Protected Collection" ? "2px solid #000" : "none",
                                        }}
                                    >
                                        <a
                                            href="#"
                                            className={`block text-center text-black hover:underline ${
                                                item === "Shop mens" || item === "New: Protected Collection"
                                                    ? "text-white font-bold"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {item}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}