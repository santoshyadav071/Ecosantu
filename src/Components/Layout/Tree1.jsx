import { useState } from 'react';

const Tree1 = () => {
  const [mainImage, setMainImage] = useState("/Images/tree.avif");
  const [selectedColor, setSelectedColor] = useState("Navy Night");
  const [selectedSize, setSelectedSize] = useState(null);

  const colorOptions = [
    { name: "Navy Night", color: "#000080", sole: "navy" },
    { name: "Charcoal Grey", color: "#36454F", sole: "grey" },
    { name: "Natural Black", color: "#000000", sole: "black" },
    { name: "Blizzard", color: "#FFFFFF", sole: "white" },
  ];

  const thumbnailImages = [
    "/Images/f1.avif",
    "/Images/f2.avif",
    "/Images/f3.avif", 
    "/Images/f4.avif",
  ];
  
  return (
    <div className="product-container max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-images">
          <img 
            src={mainImage}
            alt="Men's Tree Runners - Navy Night"
            className="main-image w-full h-auto rounded-lg"
          />
          <div className="thumbnail-images flex space-x-2 mt-2 overflow-x-auto">
            {thumbnailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className="thumbnail w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              />
            ))}
          </div>
        </div>

        <div className="product-info space-y-6">
          <div className="breadcrumb text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">Home</span> /
            <span className="hover:text-gray-700 cursor-pointer">Men's Shoes</span> /
            <span className="hover:text-gray-700 cursor-pointer">Everyday Sneakers</span>
          </div>
          
          <div className="flex items-center gap-3">
            <h1 className="product-title text-2xl md:text-3xl font-bold">Men's Tree Runners</h1>
            <span className="product-badge bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              BESTSELLER
            </span>
          </div>

          <div className="product-price text-xl font-semibold">$98</div>
          
          <div className="product-description">
            Light and Breezy Fan-Favorite Sneaker, Designed for Everyday Wear
          </div>

          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="review-count">(9778)</span>
          </div>

          <div className="product-variants">
            <h3 className="text-lg font-medium mb-3">Select Color:</h3>
            <div className="color-options grid grid-cols-2 sm:grid-cols-4 gap-3">
              {colorOptions.map((option) => (
                <button
                  key={option.name}
                  className={`color-btn flex flex-col items-center p-3 rounded-lg border-2 transition-all
                    ${selectedColor === option.name 
                      ? 'border-blue-500' 
                      : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => setSelectedColor(option.name)}
                >
                  <div 
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: option.color }}
                  />
                  <span className="mt-2 text-sm">{option.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="size-selector">
            <h3 className="text-lg font-medium mb-3">Select Size:</h3>
            <div className="size-options grid grid-cols-4 sm:grid-cols-7 gap-2">
              {[8, 9, 10, 11, 12, 13, 14].map((size) => (
                <button 
                  key={size} 
                  className={`size-btn py-3 rounded-md border-2 transition-all
                    ${selectedSize === size
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="size-note text-sm text-gray-600 mt-3">
              This style is available in whole sizes only. In between sizes? We recommend you size up.
            </p>
          </div>

          <div className="product-actions flex flex-col sm:flex-row gap-4">
            <button className="add-to-cart-btn flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="find-store-btn flex-1 border-2 border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Find in Store
            </button>
          </div>

          <div className="shipping-info space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <span className="text-green-600">✓</span> FREE 2-Day Shipping
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Free extended returns through January 17th*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree1;
