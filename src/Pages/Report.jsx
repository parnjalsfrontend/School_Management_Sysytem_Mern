import { useState } from "react";
import { motion } from "framer-motion";

const studentData = [
  { name: "Alice", class: 1, roll: 101, caste: "General", house: "Red", attendance: 95 },
  { name: "Bob", class: 1, roll: 102, caste: "OBC", house: "Blue", attendance: 89 },
  { name: "Charlie", class: 2, roll: 201, caste: "SC", house: "Green", attendance: 92 },
  { name: "David", class: 2, roll: 202, caste: "General", house: "Yellow", attendance: 90 },
  { name: "Eva", class: 3, roll: 301, caste: "ST", house: "Blue", attendance: 87 },
  { name: "Fay", class: 3, roll: 302, caste: "OBC", house: "Red", attendance: 94 },
  { name: "Grace", class: 4, roll: 401, caste: "General", house: "Green", attendance: 91 },
  { name: "Hank", class: 5, roll: 501, caste: "SC", house: "Yellow", attendance: 88 },
  { name: "Ivy", class: 6, roll: 601, caste: "OBC", house: "Red", attendance: 93 },
  { name: "Jack", class: 7, roll: 701, caste: "ST", house: "Blue", attendance: 90 },
  { name: "Kate", class: 8, roll: 801, caste: "General", house: "Green", attendance: 96 },
];

const Report = () => {
  const [selectedClass, setSelectedClass] = useState("All");

  const filteredStudents =
    selectedClass === "All"
      ? studentData
      : studentData.filter((student) => student.class === Number(selectedClass));

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-all">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
      >
        🏫 School Report - <span className="text-blue-500">Session 2025-2026</span>
      </motion.h2>

      {/* Class Selection */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="p-2 w-full max-w-xs border rounded-md bg-white dark:bg-gray-700 dark:text-white shadow-md"
        >
          <option value="All">All Classes</option>
          {[...Array(8).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              Class {num + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Student Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[600px] border-collapse border border-gray-300 dark:border-gray-700 text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-500 text-white dark:bg-blue-700">
              <th className="border p-2">Roll No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Class</th>
              <th className="border p-2">Caste</th>
              <th className="border p-2">House Color</th>
              <th className="border p-2">Attendance (%)</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
              >
                <td className="border p-2">{student.roll}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.class}</td>
                <td className="border p-2">{student.caste}</td>
                <td className="border p-2">{student.house}</td>
                <td className="border p-2 font-bold">{student.attendance}%</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Report;
