import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product } = state || {};

  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your order submission logic
    console.log('Order Details:', {
      product,
      customer: orderDetails
    });
    // You can add API call here to save the order
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Complete Your Order</h2>
      
      <div className="mb-6 p-4 border rounded">
        <h3 className="font-bold mb-2">Product Details</h3>
        <div className="flex gap-4">
          <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
          <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded p-2"
            value={orderDetails.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded p-2"
            value={orderDetails.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border rounded p-2"
            value={orderDetails.phone}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block mb-1">Delivery Address</label>
          <textarea
            name="address"
            required
            className="w-full border rounded p-2"
            rows="3"
            value={orderDetails.address}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            className="w-full border rounded p-2"
            value={orderDetails.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
