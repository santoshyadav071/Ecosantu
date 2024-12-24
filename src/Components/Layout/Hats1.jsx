import { useState } from "react";
import productData from "../../api/Products.json";

const Hats1 = () => {
  const product = productData.mensBoxerBrief;
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.colors)[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="flex flex-col space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src={mainImage}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {product.images.map((img) => (
                <button
                  key={img}
                  className={`relative rounded-lg overflow-hidden aspect-square ${
                    mainImage === img ? 'ring-2 ring-black' : ''
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img 
                    src={img}
                    alt="Product view" 
                    className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            {/* Title and Price */}
            <div className="border-b pb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-xl sm:text-2xl text-gray-900">${product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
                <span className="text-sm text-gray-600">{selectedColor}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {Object.entries(product.colors).map(([color, hexCode]) => (
                  <button
                    key={color}
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      selectedColor === color 
                        ? 'ring-2 ring-offset-2 ring-black' 
                        : 'ring-1 ring-gray-200'
                    }`}
                    style={{ backgroundColor: hexCode }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Size</h2>
                <a href="#size-guide" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-3 px-4 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-4 px-6 rounded-md hover:bg-gray-800 transition-colors duration-200 text-lg font-medium">
              Add to Cart
            </button>

            {/* Product Details */}
            <div className="border-t pt-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm sm:text-base">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hats1;
