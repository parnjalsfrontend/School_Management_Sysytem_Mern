import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftIcon, BellIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Announcement = () => {
  const navigate = useNavigate();

  // Dummy announcements
  const announcements = [
    {
      id: 1,
      title: "🏫 Parent-Teacher Meeting",
      date: "March 10, 2025",
      description: "A meeting is scheduled to discuss student performance.",
    },
    {
      id: 2,
      title: "📢 Exam Schedule Released",
      date: "March 15, 2025",
      description: "The final term exam schedule has been uploaded to the portal.",
    },
    {
      id: 3,
      title: "📜 Holiday Notice",
      date: "March 20, 2025",
      description: "School will remain closed on March 25th for Holi festival.",
    },
  ];

  return (
    <div className="min-h-screen p-6 transition-all bg-gray-100 dark:bg-gray-900 text-blue-600 dark:text-blue-400">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <BellIcon className="h-8 w-8 text-green-500" />
          Announcements
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl"
          >
            <h3 className="text-xl font-bold">{announcement.title}</h3>
            <p className="text-sm opacity-70">{announcement.date}</p>
            <p className="mt-2">{announcement.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
