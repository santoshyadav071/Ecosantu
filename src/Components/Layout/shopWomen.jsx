import { useState } from 'react';
import mensData from '../../api/mensData.json';
import { Link } from 'react-router-dom';

export const ShopWomen = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { products } = mensData;

    const filteredProducts = products.filter(product =>
        selectedCategory === 'all' ? true : product.category === selectedCategory
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Women&apos;s Collection</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our sustainable women&apos;s collection, featuring comfortable and stylish pieces made from eco-friendly materials.
                </p>
            </div>

            <div className="flex justify-center space-x-4 mb-12">
                {['All', 'Shoes', 'Apparel', 'Accessories'].map((category) => (
                    <button
                        key={category}
                        className={`px-6 py-2 rounded-full ${
                            selectedCategory === category.toLowerCase()
                                ? 'bg-black text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        onClick={() => setSelectedCategory(category.toLowerCase())}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover transition duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h3 className="text-white text-xl font-bold">{product.name}</h3>
                                <p className="text-white/90">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-gray-600">{product.description}</p>
                            <div className="flex space-x-2">
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
                                className="block w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition text-center"
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
