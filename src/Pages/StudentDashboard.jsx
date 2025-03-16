import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaUserGraduate,
  FaClipboardList,
  FaBook,
  FaUpload,
  FaCommentDots,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [messages, setMessages] = useState([
    { sender: "Teacher", text: "Hello! How can I help you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div
      className={`flex min-h-screen transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Overlay (Closes Sidebar on Mobile) */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden p-2 fixed top-4 right-4 bg-blue-500 text-white rounded-md z-50"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.5 }}
        className={`fixed lg:relative w-64 p-5 space-y-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl h-full z-40`}
      >
        <h2 className="text-2xl font-bold text-center hidden lg:block">
          📚 Student Panel
        </h2>

        {/* Sidebar Navigation */}
        <nav className="mt-6">
          <ul className="space-y-3">
            <li className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-blue-500 transition">
              <FaUserGraduate />
              <span>My Profile</span>
            </li>
            <li className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-blue-500 transition">
              <FaClipboardList />
              <span>Attendance</span>
            </li>
            <li className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-blue-500 transition">
              <FaBook />
              <span>Marks</span>
            </li>
            <li className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-blue-500 transition">
              <FaUpload />
              <span>Assignments</span>
            </li>
            <li className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-blue-500 transition">
              <FaCommentDots />
              <span>Chat</span>
            </li>
            <li className="flex items-center space-x-3 p-3 rounded-md cursor-pointer hover:bg-red-500 transition">
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem("darkMode", !darkMode);
          }}
          className="w-full p-2 mt-4 border rounded-md transition bg-gray-700 text-white hover:bg-gray-600 flex items-center justify-center gap-2"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
          📌 Student Dashboard
        </h1>

        {/* Subject-wise Marks */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-lg shadow-xl transition-all mb-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold">📊 Subject-wise Marks</h3>
          <table className="w-full mt-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Subject</th>
                <th className="text-left p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Mathematics</td>
                <td className="p-2 font-bold">85</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Computer Science</td>
                <td className="p-2 font-bold">90</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">English</td>
                <td className="p-2 font-bold">78</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Database Systems</td>
                <td className="p-2 font-bold">88</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Chat Feature */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-lg shadow-xl transition-all ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold">💬 Chat with Teacher</h3>
          <div className="h-40 overflow-y-auto bg-gray-700 p-3 rounded-md">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`p-2 rounded-md my-2 w-fit max-w-[80%] ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-600 text-white"
                }`}
              >
                <strong>{msg.sender}: </strong> {msg.text}
              </p>
            ))}
          </div>

          <div className="flex mt-3 gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Send
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StudentDashboard;
