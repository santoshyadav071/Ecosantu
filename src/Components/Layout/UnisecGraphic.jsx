import unisecData from '../../api/unisecData.json';

const UnisecGraphic = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{unisecData.category}</h2>
        <p className="text-gray-600">{unisecData.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {unisecData.products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={product.imageUrl}
              alt={`${product.name} in ${product.color}`}
              className="w-full h-50 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.color}</p>
              <p className="text-sm text-gray-500">{product.material}</p>
              <div className="mt-2">
                {product.salePrice ? (
                  <div className="flex gap-2 items-center">
                    <span className="text-red-600 font-bold">${product.salePrice}</span>
                    <span className="text-gray-400 line-through">${product.price}</span>
                  </div>
                ) : (
                  <span className="font-bold">${product.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnisecGraphic;
