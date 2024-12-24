import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const locations = [
  {
    name: "Downtown Store",
    address: "123 Main St, City, State",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-6PM",
    position: { lat: 40.7128, lng: -74.0060 }
  },
  {
    name: "Westside Location", 
    address: "456 West Ave, City, State",
    phone: "(555) 987-6543",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-6PM",
    position: { lat: 40.7580, lng: -73.9855 }
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

export const Store = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Stores</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our products in person at one of our retail locations. Our knowledgeable staff is ready to help you find the perfect fit.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="p-8 lg:col-span-2 bg-gray-50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Store Locations</h2>
              <div className="space-y-6">
                {locations.map((store, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{store.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {store.address}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        {store.phone}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {store.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3 h-[600px]">
              <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={12}
                  options={{
                    styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }],
                    disableDefaultUI: true,
                    zoomControl: true
                  }}
                >
                  {locations.map((store, index) => (
                    <Marker
                      key={index}
                      position={store.position}
                      title={store.name}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};