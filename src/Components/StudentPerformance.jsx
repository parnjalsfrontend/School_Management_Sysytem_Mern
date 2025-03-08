import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const StudentPerformance = () => {
  const [selectedClass, setSelectedClass] = useState(1);

  // Dummy Student Data (Class-wise)
  const studentData = {
    1: [
      { name: "Alice", math: 85, science: 90, english: 78, attendance: 95 },
      { name: "Bob", math: 75, science: 80, english: 88, attendance: 90 },
    ],
    2: [
      { name: "Charlie", math: 80, science: 85, english: 75, attendance: 92 },
      { name: "David", math: 88, science: 82, english: 80, attendance: 94 },
    ],
    // Add data for classes 3-8
  };

  // Get student data for selected class
  const students = studentData[selectedClass] || [];

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      {/* Class Selection Dropdown */}
      <div className="mb-4">
        <label className="font-bold text-lg">Select Class:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(Number(e.target.value))}
          className="ml-2 p-2 border border-gray-300 rounded-md text-sm md:text-base"
        >
          {[...Array(8).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              Class {num + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Student Progress Table (Mobile Responsive) */}
      <h3 className="text-xl font-bold mb-2">Student Progress</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border p-2">Name</th>
              <th className="border p-2">Math</th>
              <th className="border p-2">Science</th>
              <th className="border p-2">English</th>
              <th className="border p-2">Attendance (%)</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.math}</td>
                <td className="border p-2">{student.science}</td>
                <td className="border p-2">{student.english}</td>
                <td className="border p-2">{student.attendance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentPerformance;
