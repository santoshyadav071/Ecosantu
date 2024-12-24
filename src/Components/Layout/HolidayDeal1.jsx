import { useState, useEffect } from 'react';
import holidayDeals from '../../api/holidayDeals.json';
import { useNavigate } from 'react-router-dom';

const HolidayDeal1 = () => {
  const [deals, setDeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDeals(holidayDeals.deals);
  }, []);

  const handleShopNow = (deal) => {
    const confirmOrder = window.confirm("Would you like to book this order now?");
    
    if (confirmOrder) {
      // If user confirms, proceed with order booking
      alert("Order booked successfully!");
      navigate('/rerunShopNow', {
        state: {
          product: {
            name: deal.title,
            price: deal.price,
            image: deal.image,
            orderStatus: 'booked'
          }
        }
      });
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Holiday Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">${deal.price}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <button 
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    onClick={() => handleShopNow(deal)}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidayDeal1;
