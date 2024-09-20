import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserTie, FaTrophy, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const EventPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const eventImages = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const eventDetails = {
    name: "Tech Innovation Summit 2023",
    date: "September 15-17, 2023",
    time: "9:00 AM - 6:00 PM",
    venue: "Silicon Valley Convention Center",
    address: "123 Innovation Drive, San Jose, CA 95110",
    organizer: "TechFuture Inc.",
    prizePool: "$100,000"
  };

  const eventFlow = [
    { time: "09:00 AM", activity: "Registration and Networking" },
    { time: "10:00 AM", activity: "Opening Keynote" },
    { time: "11:30 AM", activity: "Panel Discussion: Future of AI" },
    { time: "01:00 PM", activity: "Lunch Break" },
    { time: "02:00 PM", activity: "Workshops and Breakout Sessions" },
    { time: "04:30 PM", activity: "Startup Pitch Competition" },
    { time: "06:00 PM", activity: "Networking Reception" }
  ];

  const faqs = [
    {
      question: "What is the dress code for the event?",
      answer: "The dress code is business casual. We recommend comfortable attire suitable for a professional tech conference."
    },
    {
      question: "Are meals provided during the event?",
      answer: "Yes, lunch and refreshments will be provided each day of the event. We also have a networking reception with hors d'oeuvres on the first evening."
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Yes, the Silicon Valley Convention Center has ample parking available. There's also a nearby public parking garage for overflow."
    },
    {
      question: "How can I participate in the Startup Pitch Competition?",
      answer: "To participate in the Startup Pitch Competition, you need to register separately through our website. Spots are limited, so early registration is recommended."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-100 text-center min-h-screen">
      <header className="bg-base text-base-content py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{eventDetails.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={eventImages[currentImageIndex]}
                alt={`Event image ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCalendarAlt className="text-blue-600 mr-2" />
                <span>
                  <strong>Date:</strong> {eventDetails.date}
                </span>
              </li>
              <li className="flex items-center">
                <FaCalendarAlt className="text-blue-600 mr-2" />
                <span>
                  <strong>Time:</strong> {eventDetails.time}
                </span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mr-2 mt-1" />
                <span>
                  <strong>Venue:</strong> {eventDetails.venue}
                  <br />
                  {eventDetails.address}
                </span>
              </li>
              <li className="flex items-center">
                <FaUserTie className="text-blue-600 mr-2" />
                <span>
                  <strong>Organizer:</strong> {eventDetails.organizer}
                </span>
              </li>
              <li className="flex items-center">
                <FaTrophy className="text-blue-600 mr-2" />
                <span>
                  <strong>Prize Pool:</strong> {eventDetails.prizePool}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Event Flow</h2>
            <ul className="space-y-4">
              {eventFlow.map((item, index) => (
                <li key={index} className="flex">
                  <span className="font-semibold w-24">{item.time}</span>
                  <span>{item.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-blue-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="p-4 bg-gray-50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventPage;
