import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shopData from '../../api/shopData.json';

export const ShopRerun = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCategories(shopData.categories);
    setProducts(shopData.products);
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#E0DACF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">ReRun Shop</h1>
          <p className="text-lg sm:text-xl text-gray-700">Sustainable Style, Second Chances</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 text-base font-medium rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-6 px-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group-hover:bg-[#4A4A4A]">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopRerun;
