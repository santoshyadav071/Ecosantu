import { useState } from 'react';
import mensData from '../../api/mensData.json';
import { Link } from 'react-router-dom';

export const ShopMen = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { products } = mensData;

    const filteredProducts = products.filter(product =>
        selectedCategory === 'all' ? true : product.category === selectedCategory
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-16 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Men&apos;s Collection</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    Discover our sustainable men&apos;s collection, featuring comfortable and stylish pieces made from eco-friendly materials.
                </p>
            </div>

            <div className="flex flex-wrap justify-center space-x-4 mb-12">
                {['All', 'Shoes', 'Apparel', 'Accessories'].map((category) => (
                    <button
                        key={category}
                        className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base ${
                            selectedCategory === category.toLowerCase()
                                ? 'bg-black text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                        } ${category === 'Accessories' ? 'mt-2' : ''}`} // Added margin-top for Accessories button
                        onClick={() => setSelectedCategory(category.toLowerCase())}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                                <h3 className="text-white text-lg sm:text-xl font-bold">{product.name}</h3>
                                <p className="text-white/90">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>
                            <div className="flex space-x-2 mt-2">
                                {product.colors && product.colors.map((color) => (
                                    <div
                                        key={color}
                                        className="w-6 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    />
                                ))}
                            </div>
                            <Link 
                                to={`/product/${product.id}`}
                                className="block w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition text-center mt-4"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
