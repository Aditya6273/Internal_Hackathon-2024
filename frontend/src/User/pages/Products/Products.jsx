import React, { useState } from 'react';

const SearchResults = () => {
  const [cropType, setCropType] = useState('');
  const [orderStatus, setOrderStatus] = useState({
    purchaseNow: false,
    endingSoonest: false,
    newArrivals: false,
  });

  const products = [
    { id: 1, title: 'Not interested', price: 3.5, timeLeft: '4 days, 5 hours' },
    { id: 2, title: 'Wheat field', price: 3.0, timeLeft: '4 days, 3 hours' },
    { id: 3, title: 'Organic apples', price: 4.8, timeLeft: '6 hours 30' },
    { id: 4, title: 'Farm landscape', price: 3.5, quantity: '1000 kg' },
    { id: 5, title: 'Fresh produce', price: 3.5, quantity: '1000 kg' },
    { id: 6, title: 'Organic fruits', price: 3.5, quantity: '1000 kg' },
  ];

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="container mx-auto p-4">
        <header className="mb-6 bg-green-600 text-white p-4 rounded-lg shadow-md">
          <button className="mb-2 hover:text-yellow-300 transition-colors">&larr;</button>
          <h1 className="text-2xl font-bold">Search results for "Fresh Produce"</h1>
          <p className="text-green-100">120 results</p>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="cropType" className="block mb-2 font-semibold text-green-800">Filter by crop type</label>
              <select
                id="cropType"
                className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
              >
                <option value="">Select crop type</option>
                {/* Add crop type options */}
              </select>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2 text-green-800">Order status</h3>
              {Object.entries(orderStatus).map(([key, value]) => (
                <div key={key} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    onChange={() => setOrderStatus(prev => ({ ...prev, [key]: !prev[key] }))}
                    className="mr-2 form-checkbox text-yellow-500 focus:ring-yellow-400"
                  />
                  <label htmlFor={key} className="text-green-700">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</label>
                </div>
              ))}
            </div>

            {/* Add more filter options here */}
          </aside>

          <main className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-green-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 h-40 mb-2 rounded"></div>
                  <h3 className="font-bold text-green-800">{product.title}</h3>
                  <p className="text-yellow-600 font-semibold">Current price: ${product.price.toFixed(2)}</p>
                  <p className="text-green-600">{product.timeLeft || `Available: ${product.quantity}`}</p>
                </div>
              ))}
            </div>
          </main>
        </div>

        <button className="mt-6 px-6 py-2 bg-yellow-500 text-green-800 rounded-full hover:bg-yellow-400 transition-colors font-semibold shadow-md">
          Filter results
        </button>
      </div>
    </div>
  );
};

export default SearchResults;