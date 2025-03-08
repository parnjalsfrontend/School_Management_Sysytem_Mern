import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  MoonIcon,
  SunIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

import StudentPerformance from "../Components/StudentPerformance";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const TeacherDashboard = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Dummy Student Performance Data
  const performanceData = {
    labels: ["Math", "Science", "English", "History", "Physics"],
    datasets: [
      {
        label: "Average Scores",
        data: [85, 78, 90, 76, 82],
        backgroundColor: "rgba(37, 99, 235, 0.7)",
      },
    ],
  };

  return (
    <div className={`min-h-screen p-6 transition-all ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">Teacher Dashboard</h2>
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">
          {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Student Performance Tab (NEW) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center gap-4 cursor-pointer"
          onClick={() => navigate("/student-performance")} // Navigate to StudentPerformance.jsx
        >
          <ChartBarIcon className="h-12 w-12 text-blue-500" />
          <div>
            <h3 className="text-xl font-bold text-blue-500">Student Performance</h3>
            <p className="text-sm text-blue-500">Analyze grades & progress.</p>
          </div>
        </motion.div>

        {/* Assignments */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center gap-4 cursor-pointer"
          onClick={() => navigate("/assignment")}
        >
          <ClipboardDocumentCheckIcon className="h-12 w-12 text-green-500" />
          <div>
            <h3 className="text-xl font-bold text-blue-500">Assignments</h3>
            <p className="text-sm text-blue-500">Upload, review & notify parents.</p>
          </div>
        </motion.div>

        {/* Chat with Parents */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center gap-4 cursor-pointer"
          onClick={() => navigate('/chat')}
        >
          <ChatBubbleLeftIcon className="h-12 w-12 text-blue-500" />
          <div>
            <h3 className="text-xl font-bold text-blue-500">Parent Communication</h3>
            <p className="text-sm text-blue-500">Chat directly with parents.</p>
          </div>
        </motion.div>

      </div>


      {/* Performance Chart */}
      <div className="mt-8 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <h3 className="text-2xl font-bold text-blue-500 mb-4">Performance Overview</h3>
        <Bar data={performanceData} />
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            📢 <b className="text-red-500">New Announcement:</b> Science project submission due next Monday.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            ✅ <b className="text-red-500">Homework Submitted:</b> 25 students completed Math assignment.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            📝 <b className="text-red-500">Meeting Scheduled:</b> Parent-Teacher conference on March 15th.
          </motion.li>
        </ul>
      </div>
      
    </div>
  );
};

export default TeacherDashboard;
