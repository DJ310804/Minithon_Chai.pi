import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FaBus, FaClock, FaMapMarkerAlt, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/224/224208.png",
  iconSize: [40, 40],
});

const CampusTransportTracker = () => {
  const [buses, setBuses] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchBuses = () => {
      const dummyBuses = [
        { id: 1, route: "A", currentStop: "Main Campus", nextStop: "Library", nextStopETA: 5, lat: 19.129888, lng: 72.847274, lastUpdated: "08:05 AM" },
        { id: 2, route: "B", currentStop: "Dormitories", nextStop: "Sports Complex", nextStopETA: 7, lat: 19.067080, lng: 72.847274, lastUpdated: "08:10 AM" },
        { id: 3, route: "C", currentStop: "Research Center", nextStop: "Student Center", nextStopETA: 3, lat: 19.114038, lng: 72.855768, lastUpdated: "08:15 AM" },
        { id: 4, route: "D", currentStop: "North Gate", nextStop: "East Wing", nextStopETA: 6, lat: 19.124671, lng: 72.856618, lastUpdated: "08:20 AM" },
        { id: 5, route: "E", currentStop: "South Gate", nextStop: "Library", nextStopETA: 9, lat: 19.068674, lng: 72.837206, lastUpdated: "08:25 AM" },
      ];
      setBuses(dummyBuses);
    };

    const fetchSchedules = () => {
      const dummySchedules = [
        {
          route: "A",
          stops: [
            { name: "Main Campus", arrival: "08:00", departure: "08:05" },
            { name: "Library", arrival: "08:15", departure: "08:20" },
            { name: "Sports Complex", arrival: "08:30", departure: "08:35" },
            { name: "Dormitories", arrival: "08:45", departure: "08:50" },
          ],
        },
        {
          route: "B",
          stops: [
            { name: "Dormitories", arrival: "08:10", departure: "08:15" },
            { name: "Main Campus", arrival: "08:25", departure: "08:30" },
            { name: "Research Center", arrival: "08:40", departure: "08:45" },
            { name: "Library", arrival: "08:55", departure: "09:00" },
          ],
        },
        {
          route: "C",
          stops: [
            { name: "Research Center", arrival: "09:00", departure: "09:05" },
            { name: "Main Campus", arrival: "09:15", departure: "09:20" },
            { name: "Sports Complex", arrival: "09:30", departure: "09:35" },
            { name: "Student Center", arrival: "09:45", departure: "09:50" },
          ],
        },
        {
          route: "D",
          stops: [
            { name: "North Gate", arrival: "08:30", departure: "08:35" },
            { name: "East Wing", arrival: "08:45", departure: "08:50" },
            { name: "Library", arrival: "09:00", departure: "09:05" },
            { name: "Dormitories", arrival: "09:15", departure: "09:20" },
          ],
        },
        {
          route: "E",
          stops: [
            { name: "South Gate", arrival: "09:10", departure: "09:15" },
            { name: "Main Campus", arrival: "09:25", departure: "09:30" },
            { name: "Student Center", arrival: "09:40", departure: "09:45" },
            { name: "Library", arrival: "09:55", departure: "10:00" },
          ],
        },
      ];
      setSchedules(dummySchedules);
    };

    // Sample alerts
    const sampleAlerts = [
      { message: "Bus A is running 10 minutes late.", type: "warning" },
      { message: "Bus B has been cancelled due to traffic.", type: "danger" },
    ];
    setAlerts(sampleAlerts);

    fetchBuses();
    fetchSchedules();
    
    const interval = setInterval(fetchBuses, 5000); 

    return () => clearInterval(interval);
  }, []);

  // Set Route A as the default selected route
  useEffect(() => {
    if (schedules.length > 0) {
      setSelectedRoute("A");
    }
  }, [schedules]);

  return (
    <div className="bg-base min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-base-content mb-8">Campus Transport Tracker</h1>

          {/* Alerts Section */}
            <div className="bg-base p-4 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-base-content flex items-center">
                <FaExclamationTriangle className="mr-2" /> Alerts
            </h2>
            <ul className="list-disc pl-5">
                {alerts.map((alert, index) => (
                <li
                    key={index}
                    className={`${
                    alert.type === 'danger' ? 'text-red-600' : 'text-orange-600'
                    }`}
                >
                    {alert.message}
                </li>
                ))}
            </ul>
            </div>


          {/* Bus Schedules Section */}
          <div className="bg-base rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-base-content mb-4">Bus Schedules</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 max-h-40 overflow-y-auto">
                {schedules.map((schedule) => (
                    <button
                    key={schedule.route}
                    className={`p-4 rounded-lg transition-all ${
                        selectedRoute === schedule.route
                        ? "bg-blue-600 text-white" // Change to blue background and white text for selected
                        : "bg-base-200 text-base-content hover:bg-primary"
                    }`}
                    onClick={() => setSelectedRoute(schedule.route)}
                    >
                    <FaBus className="inline-block mr-2" />
                    Route {schedule.route}
                    </button>
                ))}
                </div>


              {/* Show the selected route's schedule */}
              {selectedRoute && (
                <div className="bg-base-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-base-content mb-4">
                    Schedule for Route {selectedRoute}
                  </h3>
                  <div className="space-y-4 max-h-40 overflow-y-auto">
                    {schedules
                      .find((s) => s.route === selectedRoute)
                      .stops.map((stop, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-base p-4 rounded-lg shadow"
                        >
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="text-base-content mr-2" />
                            <span className="font-medium">{stop.name}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div>
                              <FaClock className="text-base-content inline-block mr-1" />
                              <span className="text-sm">Arr: {stop.arrival}</span>
                            </div>
                            <div>
                              <FaClock className="text-base-content inline-block mr-1" />
                              <span className="text-sm">Dep: {stop.departure}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-base rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold text-base-content p-6">Bus Locations</h2>
        <MapContainer center={[19.12, 72.85]} zoom={13} className="h-80">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {buses.map((bus) => (
            <Marker key={bus.id} position={[bus.lat, bus.lng]} icon={busIcon}>
              <Popup>
                <div className="flex flex-col">
                    <h3 className="font-bold flex items-center">
                    <FaBus className="mr-2" /> Route {bus.route}
                    </h3>
                    <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Current Stop: {bus.currentStop}
                    </p>
                    <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Next Stop: {bus.nextStop} (ETA: {bus.nextStopETA} min)
                    </p>
                    <p className="flex items-center">
                    <FaClock className="mr-2" /> Last Updated: {bus.lastUpdated}
                    </p>
                </div>
               </Popup>

            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
  );
};

export default CampusTransportTracker;
