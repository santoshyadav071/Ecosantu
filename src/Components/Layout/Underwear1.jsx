import { useState } from "react";
import { Link } from "react-router-dom";

const Underwear1 = () => {
  const [selectedColor, setSelectedColor] = useState("Natural Black");
  const [selectedSize, setSelectedSize] = useState("S");
  const [mainImage, setMainImage] = useState("/Images/underwear.avif");

  const colors = ["Natural Black", "Chasm Teal", "Medium Grey", "Natural White"];
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <img
            src={mainImage}
            alt="Underwear"
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {["/Images/underwear.avif", "/Images/underwear1.avif", "/Images/underwear2.avif", "/Images/underwear3.avif"].map((img) => (
              <img 
                key={img}
                src={img} 
                alt="Detail" 
                className="rounded-lg cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Men's Boxer Brief</h1>
            <p className="text-xl mt-2">$28</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Color: {selectedColor}</h2>
            <div className="flex space-x-2">
              {colors.map((color) => {
                const colorMap = {
                  "Natural Black": "#000000",
                  "Chasm Teal": "#008080",
                  "Medium Grey": "#808080",
                  "Natural White": "#FFFFFF"
                };
                
                return (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: colorMap[color] }}
                    onClick={() => setSelectedColor(color)}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Size: {selectedSize}</h2>
            <div className="flex space-x-2">
              {sizes.map((size) => (
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
              <li>Made with sustainable materials</li>
              <li>Moisture-wicking fabric</li>
              <li>Breathable mesh zones</li>
              <li>No-roll waistband</li>
              <li>Available in multiple colors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Underwear1;
