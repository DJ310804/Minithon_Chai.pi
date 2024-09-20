import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Cafeteria = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    uid: "",
    email: "",
    foodOrders: {}
  });
  const [searchTerm, setSearchTerm] = useState("");

  const foodItems = [
    {
      id: 1,
      name: "Grilled Chicken Sandwich",
      price: 120,
      available: true,
      image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "Vegetarian Pizza",
      price: 150,
      available: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 70,
      available: false,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      name: "Spaghetti Bolognese",
      price: 180,
      available: true,
      image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      name: "Grilled Egg Sandwich",
      price: 120,
      available: true,
      image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      name: "Vegetarian Cheese Pizza",
      price: 150,
      available: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 7,
      name: "Caesar Tangy Salad",
      price: 70,
      available: true,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      name: "Spaghetti Mushroom Bolognese",
      price: 180,
      available: false,
      image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
    // ... (other food items)
  ];

  // Count available food items
  const availableFoodCount = foodItems.filter(item => item.available).length;

  // Calculate total cost based on selected food quantities
  const calculateTotal = () => {
    return Object.entries(formData.foodOrders).reduce((total, [foodId, quantity]) => {
      const foodItem = foodItems.find(item => item.id === parseInt(foodId));
      return total + (foodItem ? foodItem.price * quantity : 0);
    }, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (foodId, quantity) => {
    setFormData({
      ...formData,
      foodOrders: {
        ...formData.foodOrders,
        [foodId]: quantity
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    setShowOrderForm(false);
    setFormData({ uid: "", email: "", foodOrders: {} });
  };

  // Search and sort food items
  const filteredAndSortedFoodItems = foodItems
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (a.available === b.available) ? 0 : (a.available ? -1 : 1));

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-base text-base-content`}>
      <h1 className="text-3xl font-bold text-center mb-8">College Cafeteria</h1>
      <p className="text-center mb-4">Available Food Items: {availableFoodCount}</p>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for food items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAndSortedFoodItems.map((item) => (
          <div
            key={item.id}
            className={`bg-base-content text-base bg-opacity-10 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${!item.available ? 'filter grayscale' : ''}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="mb-2">{item.price.toFixed(2)} Rs</p>
              <div
                className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${item.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {item.available ? (
                  <>
                    <FaCheckCircle className="mr-1" /> Available
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="mr-1" /> Unavailable
                  </>
                )}
              </div>
              <div className="mt-2 text-sm text-base-content">
                {item.available ? `Available: ${availableFoodCount}` : 'Unavailable'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowOrderForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Order Food
        </button>
      </div>

      {showOrderForm && (
        <div className="fixed inset-0 flex items-center overflow-y-auto backdrop-blur-sm h-full w-full justify-center">
          <div className="bg-white text-grey-600 p-4 rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Order Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="uid" className="block text-sm font-bold mb-2">
                  UID
                </label>
                <input
                  type="text"
                  id="uid"
                  name="uid"
                  value={formData.uid}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Food Items</h3>
                {filteredAndSortedFoodItems
                  .filter(item => item.available) // Only show available food items
                  .map((item) => (
                    <div key={item.id} className="mb-4">
                      <label htmlFor={`food-${item.id}`} className="block mb-2">
                        {item.name} (Rs.{item.price.toFixed(2)})
                      </label>
                      <input
                        type="number"
                        id={`food-${item.id}`}
                        min="0"
                        value={formData.foodOrders[item.id] || 0}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  ))}
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Total Cost: Rs. {calculateTotal()}</h3>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cafeteria;
