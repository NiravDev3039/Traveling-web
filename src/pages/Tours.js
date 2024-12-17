import React from 'react';

function Tours() {
  const tours = [
    { 
      name: "European Discovery", 
      countries: "France, Italy, Spain", 
      duration: "14 Days",
      image: "Europe.png",
      price: "$2500"
    },
    { 
      name: "Asian Adventure", 
      countries: "Japan, Thailand, Singapore", 
      duration: "10 Days",
      image: "singapore.png",
      price: "$2200"
    },
    { 
      name: "Americas Expedition", 
      countries: "USA, Canada, Mexico", 
      duration: "16 Days",
      image: "canada.png",
      price: "$2800"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Guided Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tours.map((tour, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img 
              src={tour.image} 
              alt={tour.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{tour.name}</h2>
              <div className="mb-4">
                <p className="text-gray-600">Countries: {tour.countries}</p>
                <p className="text-gray-600">Duration: {tour.duration}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">{tour.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Explore Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;