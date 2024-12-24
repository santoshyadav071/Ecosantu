import { useState } from 'react';
import bagProductsData from '../../api/bagProduct.json';

const Bags1 = () => {
  const [mainImage, setMainImage] = useState("/Images/hat1.avif");
  const { bagProducts } = bagProductsData;

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Sustainable Bags Collection
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Crafted from eco-friendly materials, our bags combine style with sustainability.
              Perfect for work, travel, or everyday adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={mainImage}
                  alt="Featured Bag"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {bagProducts[0].images.map((img, index) => (
                  <div key={index} className="aspect-w-1 aspect-h-1">
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover rounded cursor-pointer hover:opacity-75 transition duration-300"
                      onClick={() => setMainImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">The Daypack</h2>
                <p className="text-xl sm:text-2xl text-gray-600">$98</p>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Our signature daypack combines minimalist design with maximum functionality.
                Made from recycled materials, it features padded laptop sleeve, multiple
                organization pockets, and water-resistant exterior.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Available Colors:</h3>
                <div className="flex flex-wrap gap-3">
                  {bagProducts[0].colors.map(color => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer hover:border-black transition-colors duration-300"
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: color === 'Black' ? '2px solid white' : undefined
                      }}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>
              <button className="w-full sm:w-auto bg-black text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300 text-lg font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {bagProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-lg font-semibold">${product.price}</span>
                    <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Sustainable Materials</h3>
              <p className="text-gray-600">Made from recycled materials and eco-friendly fabrics</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Lifetime Warranty</h3>
              <p className="text-gray-600">Built to last with quality craftsmanship and materials</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $75 within the continental US</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bags1;
