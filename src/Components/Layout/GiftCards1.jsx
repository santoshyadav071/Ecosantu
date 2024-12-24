import { useState } from "react";

const GiftCards1 = () => {
  const [selectedType, setSelectedType] = useState('physical');
  const [showThankYou, setShowThankYou] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleSendGift = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Gift Cards</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Physical Gift Card */}
        <div 
          className={`border rounded-lg p-6 cursor-pointer transition-all ${
            selectedType === 'physical' ? 'border-black' : 'border-gray-200'
          }`}
          onClick={() => setSelectedType('physical')}
        >
          <img 
            src="/Images/physicalcard.avif" 
            alt="Physical Gift Card"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Physical Gift Card</h2>
          <p className="text-gray-600 mb-4">
            Send a beautifully packaged physical gift card to your loved ones. Perfect for special occasions.
          </p>
          <button 
            className={`w-full py-3 rounded-md ${
              selectedType === 'physical' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            Select Physical Card
          </button>
        </div>

        {/* Digital Gift Card */}
        <div 
          className={`border rounded-lg p-6 cursor-pointer transition-all ${
            selectedType === 'digital' ? 'border-black' : 'border-gray-200'
          }`}
          onClick={() => setSelectedType('digital')}
        >
          <img 
            src="/Images/digitalcard.avif" 
            alt="Digital Gift Card"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Digital Gift Card</h2>
          <p className="text-gray-600 mb-4">
            Send an instant digital gift card via email. Perfect for last-minute gifting.
          </p>
          <button 
            className={`w-full py-3 rounded-md ${
              selectedType === 'digital' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            Select Digital Card
          </button>
        </div>
      </div>

      {/* Amount Selection */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Select Amount</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[50, 100, 150, 200].map((amount) => (
            <button
              key={amount}
              className="border border-gray-200 rounded-md py-3 hover:border-black"
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      {/* Card Description */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <details className="cursor-pointer">
          <summary className="text-xl font-semibold mb-4">About Our Gift Cards</summary>
          <p className="text-gray-600 mt-4">
            Our gift cards are the perfect way to share joy with your loved ones. Whether you choose a physical or digital card, 
            each comes with a personalized message and is valid for 12 months. Physical cards are elegantly packaged and shipped 
            within 2-3 business days, while digital cards are delivered instantly to any email address.
          </p>
        </details>
      </div>

      {showThankYou && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl z-50 text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
          <p className="text-gray-700">
            Your thoughtful gift has been sent successfully. We&apos;re sure it will bring a smile to their face! 
            A confirmation email will be sent to you shortly.
          </p>
        </div>
      )}

      {showAddedToCart && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl z-50 text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Added to Cart!</h3>
          <p className="text-gray-700">
            Your gift card has been added to your shopping cart successfully.
            Continue shopping or proceed to checkout when ready.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button 
          onClick={handleAddToCart}
          className="w-full md:w-auto bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleSendGift}
          className="w-full md:w-auto bg-green-600 text-white py-3 px-8 rounded-md hover:bg-green-700"
        >
          Send as Gift
        </button>
      </div>
    </div>
  );
};

export default GiftCards1;
