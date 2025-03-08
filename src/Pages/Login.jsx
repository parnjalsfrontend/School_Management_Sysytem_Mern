import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      (role === "admin" && email !== "admin@gmail.com") ||
      (role === "teacher" && email !== "teacher@gmail.com") ||
      (role === "student" && email !== "student@gmail.com") ||
      (role === "parent" && email !== "parent@gmail.com") ||
      (role === "report" && email !== "report@gmail.com")
    ) {
      setError("Incorrect email for the selected role!");
      return;
    }

    setError("");

    if (role === "admin") navigate("/admin");
    else if (role === "teacher") navigate("/teacher");
    else if (role === "student") navigate("/student");
    else if (role === "parent") navigate("/parent");
    else if (role === "report") navigate("/report");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-all ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`p-10 rounded-2xl shadow-xl border w-full max-w-[450px] md:max-w-[550px] lg:max-w-[650px] ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      >
        {/* School Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNo8sakYPWo_RfvcfXmB54QGSE4ygdwEc_iQ&s"
            alt="School Logo"
            className="w-24 h-24 md:w-28 md:h-28"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
            School Login
          </h2>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md text-sm font-bold border transition-all border-gray-500 hover:bg-gray-700 hover:text-white"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <form onSubmit={handleLogin}>
          {/* Role Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5"
          >
            <label className="block mb-1 font-semibold text-lg">Select Role</label>
            <select
              className={`w-full p-3 rounded-lg border transition-all text-lg ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-400"
                  : "bg-gray-100 border-gray-300 text-black focus:ring-2 focus:ring-blue-600"
              }`}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
              <option value="report">Report</option>
            </select>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-5"
          >
            <label className="block mb-1 font-semibold text-lg">Email</label>
            <input
              type="email"
              className={`w-full p-3 rounded-lg text-lg border transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-400"
                  : "bg-gray-100 border-gray-300 text-black focus:ring-2 focus:ring-blue-600"
              }`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-5"
          >
            <label className="block mb-1 font-semibold text-lg">Password</label>
            <input
              type="password"
              className={`w-full p-3 rounded-lg text-lg border transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-400"
                  : "bg-gray-100 border-gray-300 text-black focus:ring-2 focus:ring-blue-600"
              }`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-md mb-4 text-center"
            >
              {error}
            </motion.p>
          )}

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white p-3 text-lg rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer"
          >
            Login
          </motion.button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-sm mt-5 opacity-70">
          Forgot Password?{" "}
          <span className="underline cursor-pointer hover:text-blue-400">
            Reset Here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
