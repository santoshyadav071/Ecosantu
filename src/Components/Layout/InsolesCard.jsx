import insolesData from '../../api/insolesData.json';

const InsolesCard = () => {
  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            {insolesData.category}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {insolesData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {insolesData.products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src={product.imageUrl}
                  alt={`${product.name} in ${product.color}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-1">{product.color}</p>
                <p className="text-sm text-gray-500 mb-3">{product.material}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.salePrice ? (
                      <>
                        <span className="text-lg sm:text-xl font-bold text-red-600">
                          ${product.salePrice}
                        </span>
                        <span className="text-sm sm:text-base text-gray-400 line-through">
                          ${product.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg sm:text-xl font-bold">
                        ${product.price}
                      </span>
                    )}
                  </div>
                  <button className="px-4 py-2 bg-black text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsolesCard;
