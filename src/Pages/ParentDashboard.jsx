import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BellIcon,
  UserIcon,
  BanknotesIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ParentDashboard = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const navigate = useNavigate();  

  return (
    <div className={`min-h-screen p-6 transition-all ${darkMode ? "bg-gray-900 text-blue-400" : "bg-gray-100 text-blue-600"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Parent Dashboard</h2>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Progress */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center gap-4 cursor-pointer"
          onClick={() => navigate('/student-performance')}
        >
          <UserIcon className="h-12 w-12 text-blue-500" />
          <div>
            <h3 className="text-xl font-bold">Student Progress</h3>
            <p className="text-sm opacity-70">View child's grades & attendance</p>
          </div>
        </motion.div>

        {/* Announcements */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center gap-4 cursor-pointer"
          onClick={() => navigate('/announcement')}
        >
          <BellIcon className="h-12 w-12 text-green-500" />
          <div>
            <h3 className="text-xl font-bold">Announcements</h3>
            <p className="text-sm opacity-70">School updates & important notices</p>
          </div>
        </motion.div>

        {/* Fees & Payment Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center gap-4 cursor-pointer"
          onClick={() => navigate('/fees')}
        >
          <BanknotesIcon className="h-12 w-12 text-red-500" />
          <div>
            <h3 className="text-xl font-bold">Fees & Payments</h3>
            <p className="text-sm opacity-70">Check pending & paid fees</p>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            📢 <span className="font-bold">New Announcement:</span> Parent-Teacher Meeting scheduled for March 10th.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            ✅ <span className="font-bold">Fees Paid:</span> ₹15,000 for Term 1 - Receipt available.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            📝 <span className="font-bold">Exam Results:</span> Your child's Science marks: 85/100.
          </motion.li>
        </ul>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => navigate("/chat")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        💬 Chat with Teacher
      </button>
    </div>
  );
};

export default ParentDashboard;
