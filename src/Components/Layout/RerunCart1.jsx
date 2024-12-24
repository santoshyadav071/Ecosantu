import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RerunCart1 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Mock cart data - in a real app this would come from state management or API
    const mockCartItems = [
      {
        id: 1,
        name: "Men's Wool Runner",
        price: 98.00,
        quantity: 1,
        image: "/Images/shop1.webp",
        size: "US 9"
      },
      {
        id: 2, 
        name: "Women's Tree Dasher",
        price: 125.00,
        quantity: 1,
        image: "/Images/shop2.webp",
        size: "US 8"
      }
    ];

    setCartItems(mockCartItems);
    calculateSubtotal(mockCartItems);
  }, []);

  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    calculateSubtotal(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    calculateSubtotal(updatedItems);
  };

  return (
    <div className="min-h-screen bg-[#E0DACF] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Your ReRun Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-xl text-gray-600">Your cart is empty</p>
                <Link to="/Shop" className="mt-4 inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm flex gap-6">
                    <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-500">
                          Remove
                        </button>
                      </div>
                      <p className="text-gray-600 mt-1">Size: {item.size}</p>
                      <p className="text-xl font-bold mt-2">${item.price.toFixed(2)}</p>
                      <div className="mt-4">
                        <select 
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="border rounded-md px-3 py-1"
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RerunCart1;
