import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { FiSun, FiMoon, FiUsers, FiBook, FiSettings } from "react-icons/fi";

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <header className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md text-lg border transition-all border-gray-500 hover:bg-gray-700 hover:text-white"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-xl shadow-lg flex items-center gap-4 border transition-all"
        >
          <FiUsers className="text-3xl text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
            <p className="text-2xl font-bold">1,250</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-xl shadow-lg flex items-center gap-4 border transition-all"
        >
          <FiBook className="text-3xl text-green-500" />
          <div>
            <h2 className="text-lg font-semibold">Courses</h2>
            <p className="text-2xl font-bold">35</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-xl shadow-lg flex items-center gap-4 border transition-all"
        >
          <FiSettings className="text-3xl text-red-500" />
          <div>
            <h2 className="text-lg font-semibold">Settings</h2>
            <p className="text-2xl font-bold">Manage</p>
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl shadow-lg border"
        >
          <h2 className="text-lg font-semibold mb-4">Student Growth</h2>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Enrolled Students",
                  data: [50, 100, 150, 200, 250, 300],
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderColor: "rgba(59, 130, 246, 1)",
                  borderWidth: 2,
                },
              ],
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-xl shadow-lg border"
        >
          <h2 className="text-lg font-semibold mb-4">Course Enrollments</h2>
          <Bar
            data={{
              labels: ["Math", "Science", "English", "History", "Art"],
              datasets: [
                {
                  label: "Students",
                  data: [120, 90, 100, 80, 60],
                  backgroundColor: [
                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444",
                    "#8b5cf6",
                  ],
                },
              ],
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
