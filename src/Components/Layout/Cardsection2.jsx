import Data from "../../api/Data.json";

export const CardSection2 = () => {
  return (
    <section className="bg-white w-full py-12"> {/* Remove h-screen, use py-12 for spacing */}
      <div className="px-4">
        <h1 className="font-bold text-2xl">No Show Socks</h1>
        <p className="text-gray-600">
          Light, breathable and made to move and groove without budging.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
        {Data.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />

            {/* Product Info */}
            <h2 className="font-semibold text-lg mt-4">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.color}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-green-500">{item.price}</span>
              <span className="line-through text-gray-400 text-sm">
                {item.originalPrice}
              </span>
            </div>

            {/* Sizes (Visible on Hover) */}
            <div className="relative mt-4 group">
              <div className="absolute inset-0 bg-white border border-gray-200 text-black opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 rounded p-2 max-h-40">
                <div className="grid grid-cols-2 gap-2 w-full">
                  {Object.entries(item.sizes).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center text-sm font-medium bg-black text-white py-1 px-2 rounded"
                    >
                      <span>{key}: {value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
