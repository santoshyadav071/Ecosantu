import { Link } from "react-router-dom";
import menuData from "../api/menuData.json";

export const Men = () => {
  return (
    <section className="min-h-screen bg-[#FEFEFE] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
          {menuData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="font-bold text-xl sm:text-2xl tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => {
                  const isSpecialItem =
                    item === "Shop mens" || item === "New: Protected Collection";
                  const isObjectItem = typeof item === "object";
                  const itemName = isObjectItem ? item.name : item;
                  const itemUrl = isObjectItem ? item.url : "/";

                  return (
                    <div
                      key={itemIndex}
                      className={`${
                        isSpecialItem
                          ? "relative h-32 sm:h-40 rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"
                          : "transform transition duration-200 hover:translate-x-1"
                      }`}
                    >
                      {isSpecialItem && (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url('/Images/${
                              item === "Shop mens" ? "shopmen.avif" : "protect.avif"
                            }')`,
                          }}
                        >
                          <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300" />
                        </div>
                      )}
                      <Link
                        to={itemUrl}
                        className={`${
                          isSpecialItem
                            ? "absolute inset-0 flex items-center justify-center text-white font-bold text-lg sm:text-xl hover:underline z-10"
                            : "text-gray-800 hover:text-black text-sm sm:text-base hover:underline"
                        }`}
                      >
                        {itemName}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
