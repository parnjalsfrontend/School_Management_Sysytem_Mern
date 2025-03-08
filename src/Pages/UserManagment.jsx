import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const usersData = [
  { id: 1, name: "John Doe", email: "john@school.com", role: "Student" },
  { id: 2, name: "Jane Smith", email: "jane@school.com", role: "Teacher" },
  { id: 3, name: "Alice Brown", email: "alice@school.com", role: "Parent" },
  { id: 4, name: "Bob Johnson", email: "bob@school.com", role: "Admin" },
];

const UserManagement = () => {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (roleFilter === "All" || user.role === roleFilter)
  );

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">User Management</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 border rounded-md transition"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 border rounded-md flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-md"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="All" className="text-black">All Roles</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Parent">Parent</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <motion.table
        className="w-full border rounded-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                whileHover={{ scale: 1.02 }}
                className={`border-b ${darkMode ? "border-gray-700" : "border-gray-300"}`}
              >
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-4 text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </motion.table>
    </div>
  );
};

export default UserManagement;
