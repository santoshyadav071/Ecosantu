import { useLocation } from 'react-router-dom';

const RerunShopNow1 = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#E0DACF] flex items-center justify-center">
        <p className="text-2xl text-gray-800">No product details available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E0DACF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Size
                    </label>
                    <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RerunShopNow1;
