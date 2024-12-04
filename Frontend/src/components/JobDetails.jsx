/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// Helper function to get today's day dynamically
const getToday = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayIndex = new Date().getDay(); // getDay() returns a number (0 - Sunday, 1 - Monday, etc.)
  return daysOfWeek[todayIndex];
};

const BusinessHours = ({ hours }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border rounded-lg shadow-lg bg-white">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-lg font-small">Day</th>
          <th className="px-6 py-3 text-left text-lg font-small">Time</th>
        </tr>
      </thead>
      <tbody>
        {hours.map(({ day, time, isToday }, index) => (
          <tr key={index} className="border-b">
            <td
              className={`px-6 py-3 ${
                isToday ? "font-bold text-orange-500" : ""
              }`}
            >
              {day} {isToday && "(Today)"}
            </td>
            <td className="px-6 py-3">{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// const Address = ({ address }) => (
//   <div className="border rounded-lg shadow-lg shadow-orange-50 p-6 bg-white">
//     <h4 className="text-2xl font-semibold mb-4">Address</h4>
//     <p className="text-lg mb-4">{address}</p>
//   </div>
// );
const Address = ({ address }) => (
  <div className="border rounded-lg shadow-lg shadow-orange-100 p-6 bg-white">
    <h4 className="text-2xl font-semibold mb-4">Address</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Address Text */}
      <p className="text-lg">{address}</p>

      {/* Embedded Google Map */}
      <div className="w-full h-64 shadow-md border-2 border-orange-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7545.190306859467!2d72.82298399357909!3d18.9934788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf0042a0eb93%3A0xd0b3d609b6e5a430!2sShree%20Swami%20Samartha%20Math!5e0!3m2!1sen!2sin!4v1733245334685!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "1" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
    <div className="mt-12 text-center">
      <h4 className="text-xl font-semibold text-gray-900 mb-4">
        Get in Touch Today!
      </h4>
      <p className="text-lg text-gray-700 mb-6">
        Whether you have a question or need more information, feel free to reach
        out. We`re happy to assist!
      </p>

      {/* Call or WhatsApp Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href="tel:+917710870992" // Replace with your phone number
          className="bg-orange-50 text-black py-4 px-6 rounded-lg hover:bg-orange-600"
        >
          Call Us
        </a>
        <a
          href="https://wa.me/7710870992" // Replace with your WhatsApp number
          className="bg-green-50 text-black py-4 px-6 rounded-lg  hover:bg-green-600"
        >
          WhatsApp Us
        </a>
        <Link to="/contact" className="bg-red-50 text-black py-2 px-6 rounded-lg hover:bg-red-600">
          <Button>Email-us</Button>
        </Link>
      </div>
    </div>
  </div>
);

const JobDetails = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState("Address");

  // Business hours data with dynamically calculated 'isToday' property
  const businessHours = [
    { day: "Monday", time: "10:00 am - 7:00 pm" },
    { day: "Tuesday", time: "10:00 am - 7:00 pm" },
    { day: "Wednesday", time: "10:00 am - 7:00 pm" },
    { day: "Thursday", time: "10:00 am - 7:00 pm" },
    { day: "Friday", time: "10:00 am - 7:00 pm" },
    { day: "Saturday", time: "10:00 am - 7:00 pm" },
    { day: "Sunday", time: "Closed - Closed" },
  ];

  const updatedBusinessHours = businessHours.map((hour) => ({
    ...hour,
    isToday: hour.day === getToday(),
  }));

  const address =
    "SHED NO-03, FLOOR-GRD, PLOT-173, 237, NAVALKAR BUILDING, NM JOSHI MARG, BAWLA MASJID, Lower Parel, Mumbai - 400013 (LOWER PAREL, DELISLE ROAD)";

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Tab Menu */}
      <div className="border-b border-gray-200 mb-6">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          <li
            className={`mr-2 ${
              activeTab === "Address"
                ? "border-orange-500 text-orange-600"
                : "text-gray-500"
            }`}
          >
            <button
              onClick={() => setActiveTab("Address")}
              className={`inline-block p-4 ${
                activeTab === "Address"
                  ? "border-b-2 border-orange-500 font-semibold"
                  : "hover:text-orange-500 hover:border-gray-300"
              }`}
            >
              Address
            </button>
          </li>
          <li
            className={`mr-2 ${
              activeTab === "Business Hours"
                ? "border-orange-500 text-orange-600"
                : "text-gray-500"
            }`}
          >
            <button
              onClick={() => setActiveTab("Business Hours")}
              className={`inline-block p-4 ${
                activeTab === "Business Hours"
                  ? "border-b-2 border-orange-500 font-semibold"
                  : "hover:text-orange-500 hover:border-gray-300"
              }`}
            >
              Business Hours
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "Business Hours" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === "Business Hours" ? -50 : 50 }}
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
            x: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {activeTab === "Address" && <Address address={address} />}
          {activeTab === "Business Hours" && (
            <BusinessHours hours={updatedBusinessHours} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;
