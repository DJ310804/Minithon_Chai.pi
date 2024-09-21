import React, { useState, useRef } from "react";
import { FiSearch, FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2023",
      description: "Annual gathering of tech enthusiasts and industry leaders",
      location: "San Francisco, CA",
      date: "2023-09-15",
      time: "09:00 AM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isRegistered: false,
    },
    {
      id: 2,
      title: "Art Exhibition: Modern Perspectives",
      description: "Showcasing contemporary art from emerging artists",
      location: "New York, NY",
      date: "2023-10-05",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isRegistered: true,
    },
    {
      id: 3,
      title: "Food Festival: Flavors of the World",
      description: "A culinary journey through international cuisines",
      location: "Chicago, IL",
      date: "2023-11-20",
      time: "11:00 AM",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isRegistered: false,
    },
    {
      id: 4,
      title: "Music Festival: Harmony in the Park",
      description: "A day of live performances across multiple genres",
      location: "Austin, TX",
      date: "2023-08-30",
      time: "12:00 PM",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isRegistered: false,
    },
    {
      id: 5,
      title: "Fitness Expo: Health & Wellness",
      description: "Explore the latest in fitness trends and health products",
      location: "Los Angeles, CA",
      date: "2023-09-25",
      time: "08:00 AM",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isRegistered: true,
    },
    {
      id: 6,
      title: "Book Fair: Words & Wonder",
      description: "A literary extravaganza for book lovers of all ages",
      location: "Boston, MA",
      date: "2023-10-15",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      isRegistered: false,
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRegister = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, isRegistered: !event.isRegistered } : event
      )
    );
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-base min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-base-content mb-8 text-center">Upcoming Events</h1>
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-base-content focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search events"
            />
            <FiSearch className="absolute left-3 top-3 text-base-content" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <TiltCard key={event.id} event={event} handleRegister={handleRegister} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ event, handleRegister }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <FiMapPin className="mr-2" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <FiCalendar className="mr-2" />
          <span>{event.date}</span>
          <FiClock className="ml-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <button
          onClick={() => handleRegister(event.id)}
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors duration-300 ${event.isRegistered ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          aria-label={event.isRegistered ? "Unregister from event" : "Register for event"}
        >
          {event.isRegistered ? "Registered" : "Register"}
        </button>
        <Link to={`/event`}>
          <button
            className="w-full py-2 px-4 mt-2 rounded-lg font-semibold text-white bg-black hover:bg-gray-800 transition-colors duration-300"
            aria-label="View more details"
          >
            View More →
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EventsPage;
