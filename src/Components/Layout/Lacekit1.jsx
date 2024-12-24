import { useState } from "react";
import laceData from "../../api/laceData.json";

const Lacekit1 = () => {
 const product = laceData.mensBoxerBrief;
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.colors)[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img) => (
              <img 
                key={img}
                src={img}
                alt="Detail" 
                className="rounded-lg cursor-pointer w-full h-24 object-cover"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl mt-2">${product.price}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Color: {selectedColor}</h2>
            <div className="flex space-x-2">
              {Object.entries(product.colors).map(([color, hexCode]) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: hexCode }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Size: {selectedSize}</h2>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>

          <div className="prose">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <ul className="list-disc pl-5">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lacekit1;
