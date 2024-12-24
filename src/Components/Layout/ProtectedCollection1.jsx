
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedCollection1 = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate(`/order/${product.id}`, {
      state: {
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        }
      }
    });
  };

  const products = [
    {
      id: 'protected-runner-1',
      name: 'Water-Repellent Runner',
      price: 129.99,
      image: '/Images/protectf.avif',
      description: 'Our most durable water-repellent running shoe'
    },
    {
      id: 'protected-runner-2', 
      name: 'All-Weather Runner',
      price: 139.99,
      image: '/Images/protectf2.avif',
      description: 'Perfect for any weather conditions'
    },
    {
      id: 'protected-runner-3', 
      name: 'All-Weather Runner',
      price: 139.99,
      image: '/Images/protectf3.avif',
      description: 'Perfect for any weather conditions'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Protected Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our most durable and weather-resistant shoes, designed to keep you comfortable in any conditions.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{product.name}</h3>
                <p className="text-white/90">${product.price}</p>
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Select Size</h4>
              <div className="grid grid-cols-4 gap-2">
                {[7,8,9,10,11,12].map((size) => (
                  <button
                    key={size}
                    className={`border rounded-md py-2 ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-black'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 space-y-2">
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button 
                onClick={() => handleBuyNow(product)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="font-bold mb-2">Water Repellent</h3>
          <p className="text-gray-600">Keeps your feet dry in light rain and wet conditions</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Durable Construction</h3>
          <p className="text-gray-600">Built to last with reinforced materials</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">All-Day Comfort</h3>
          <p className="text-gray-600">Cushioned support for extended wear</p>
        </div>
      </div>
    </div>
  );
};

export default ProtectedCollection1;

