import { useState } from 'react';

const User1 = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-3xl text-gray-600">JD</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Hello, John</h1>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                {[
                  { name: 'Your Profile', tab: 'profile' },
                  { name: 'Your Orders', tab: 'orders' },
                  { name: 'Login & Security', tab: 'settings' },
                  { name: 'Your Lists', tab: 'saved-items' },
                ].map((item) => (
                  <button
                    key={item.tab}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeTab === item.tab
                        ? 'bg-orange-100 text-orange-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(item.tab)}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold pb-4 border-b">Your Profile</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            defaultValue="john.doe@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            defaultValue="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Communication Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" className="h-5 w-5 text-orange-500 rounded" defaultChecked />
                          <div>
                            <p className="font-medium">Order Updates</p>
                            <p className="text-sm text-gray-500">Receive updates about your orders via email</p>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" className="h-5 w-5 text-orange-500 rounded" />
                          <div>
                            <p className="font-medium">Promotions and Deals</p>
                            <p className="text-sm text-gray-500">Get notified about sales and special offers</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t">
                    <button className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User1;
