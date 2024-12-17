import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Plane, Star, Calendar, ChevronRight } from "lucide-react";

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const destinations = [
    {
      name: "Paris",
      image: "paris.png",
      category: "Europe",
      description: "City of Love and Lights",
      rating: 4.8,
    },
    {
      name: "Berlin",
      image: "berlin.png",
      category: "Europe",
      description: "The Capital of Germany",
      rating: 4.7,
    },
    {
      name: "Tokyo",
      image: "Tokyo.png",
      category: "Asia",
      description: "Modern Meets Traditional",
      rating: 4.9,
    },
    {
      name: "New York",
      image: "new.png",
      category: "North America",
      description: "The City That Never Sleeps",
      rating: 4.7,
    },
    {
      name: "Toronto",
      image: "toranto.png",
      category: "North America",
      description: "A Dynamic and Diverse City",
      rating: 4.7,
    },

    {
      name: "Los Angeles",
      image: "los.png",
      category: "North America",
      description: "The Entertainment Capital of the World",
      rating: 4.6,
    },

    {
      name: "Bangkok",
      image: "bangkok.png",
      category: "Asia",
      description: "The Vibrant Capital of Thailand",
      rating: 4.7,
    },
    {
      name: "Bali",
      image: "bali.png",
      category: "Asia",
      description: "Tropical Paradise",
      rating: 4.6,
    },
    {
      name: "Rome",
      image: "rome.png",
      category: "Europe",
      description: "Eternal City",
      rating: 4.7,
    },
  ];

  const categories = ["All", "Europe", "Asia", "North America"];

  return (
    <div className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <div
        className="back relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('thailand.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Explore Extraordinary Destinations
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
            Unlock Incredible Travel Experiences Around the Globe
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/destinations"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Explore Now <ChevronRight className="ml-2" />
            </Link>
            <Link
              to="/bookings"
              className="flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Plan a Trip <Plane className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore carefully curated destinations that offer unique experiences
            and unforgettable memories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full transition duration-300 flex items-center
                ${activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations
            .filter(
              (dest) =>
                activeCategory === "All" || dest.category === activeCategory
            )
            .map((destination, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full flex items-center">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      <MapPin className="mr-2 text-blue-600" size={20} />
                      {destination.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link
                    to={`/destination/${destination.name.toLowerCase()}`}
                    className="block text-center bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Inspired, Stay Informed
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest travel tips,
            destination guides, and exclusive offers.
          </p>
          <div className="max-w-lg mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-800"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
