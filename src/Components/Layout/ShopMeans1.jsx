import { useState } from 'react';
import mensData from '../../api/mensData.json';
import { Link } from 'react-router-dom';

const ShopMeans1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { products } = mensData;

  const filteredProducts = products.filter(product =>
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="mb-12 sm:mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          More Collection
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Discover our sustainable women's collection, featuring comfortable and stylish pieces made from eco-friendly materials.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
        {['All', 'Shoes', 'Apparel', 'Accessories'].map((category) => (
          <button
            key={category}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
              selectedCategory === category.toLowerCase()
                ? 'bg-black text-white shadow-lg transform scale-105'
                : 'bg-gray-100 hover:bg-gray-200 hover:shadow-md'
            }`}
            onClick={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-xl aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold">{product.name}</h3>
                <p className="text-white/90 text-sm sm:text-base">${product.price}</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3">
              <p className="text-gray-600 text-sm sm:text-base line-clamp-2">{product.description}</p>
              <div className="flex items-center space-x-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 shadow-sm transition-transform hover:scale-110"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
              <Link 
                to={`/product/${product.id}`}
                className="block w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 active:bg-gray-900 transition-colors duration-300 text-center text-sm sm:text-base font-medium"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-3">Sustainable Materials</h3>
          <p className="text-gray-600 text-sm sm:text-base">Crafted from eco-friendly and recycled materials</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-3">Comfort Guaranteed</h3>
          <p className="text-gray-600 text-sm sm:text-base">Designed for all-day comfort and durability</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-3">Free Returns</h3>
          <p className="text-gray-600 text-sm sm:text-base">30-day free returns on all purchases</p>
        </div>
      </div>
    </div>
  );
};

export default ShopMeans1;
