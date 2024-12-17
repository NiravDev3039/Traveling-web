import React from 'react';

function Destinations() {
  const destinations = [
    { 
      name: "Paris", 
      description: "The City of Lights", 
      image: "paris.png",
      price: "$1200"
    },
    { 
      name: "Tokyo", 
      description: "Modern meets traditional", 
      image: "Tokyo.png",
      price: "$1500"
    },
    { 
      name: "Bali", 
      description: "Tropical paradise", 
      image: "bali.png",
      price: "$1000"
    },
    { 
      name: "New York", 
      description: "The city that never sleeps", 
      image: "new.png",
      price: "$1300"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Explore Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((dest, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{dest.name}</h2>
              <p className="text-gray-600 mb-4">{dest.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">{dest.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;