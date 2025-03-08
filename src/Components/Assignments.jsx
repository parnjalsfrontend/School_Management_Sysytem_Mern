import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon, TrashIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const Assignments = () => {
  const navigate = useNavigate();
  
  const [assignments, setAssignments] = useState({
    1: [{ id: 1, title: "Math Homework", description: "Solve 10 algebra problems." }],
    2: [{ id: 1, title: "Science Project", description: "Make a model of the solar system." }],
    3: [{ id: 1, title: "English Essay", description: "Write a 300-word essay on pollution." }],
    4: [{ id: 1, title: "History Notes", description: "Summarize Chapter 5." }],
    5: [],
    6: [],
    7: [],
    8: [],
  });

  const [newAssignment, setNewAssignment] = useState({ class: "", title: "", description: "" });

  const handleAddAssignment = () => {
    if (!newAssignment.class || !newAssignment.title || !newAssignment.description) return;

    setAssignments((prev) => ({
      ...prev,
      [newAssignment.class]: [
        ...prev[newAssignment.class],
        { id: Date.now(), title: newAssignment.title, description: newAssignment.description },
      ],
    }));

    setNewAssignment({ class: "", title: "", description: "" });
  };

  const handleDeleteAssignment = (classNum, id) => {
    setAssignments((prev) => ({
      ...prev,
      [classNum]: prev[classNum].filter((assignment) => assignment.id !== id),
    }));
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
        <button 
          onClick={() => navigate("/teacher")} 
          className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
        >
          <ArrowLeftIcon className="h-5 w-5" /> Back to Dashboard
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2 sm:mt-0">Assignments</h2>
      </div>

      {/* Add Assignment Form */}
      <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-blue-500 mb-3 sm:mb-4">Add New Assignment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <select
            className="p-2 sm:p-3 border rounded-lg dark:bg-gray-700 dark:text-white w-full"
            value={newAssignment.class}
            onChange={(e) => setNewAssignment({ ...newAssignment, class: e.target.value })}
          >
            <option value="">Select Class</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                Class {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="p-2 sm:p-3 border rounded-lg dark:bg-gray-700 dark:text-white w-full"
            placeholder="Assignment Title"
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
          />
          <input
            type="text"
            className="p-2 sm:p-3 border rounded-lg dark:bg-gray-700 dark:text-white w-full"
            placeholder="Description"
            value={newAssignment.description}
            onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
          />
          <button
            onClick={handleAddAssignment}
            className="flex items-center justify-center bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg col-span-1 sm:col-span-1 text-sm sm:text-base"
          >
            <PlusCircleIcon className="h-5 w-5 mr-2" /> Add Assignment
          </button>
        </div>
      </div>

      {/* Assignments List */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((classNum) => (
        <motion.div
          key={classNum}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3 sm:mb-4">Class {classNum}</h3>
          {assignments[classNum].length > 0 ? (
            assignments[classNum].map((assignment) => (
              <div key={assignment.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2">
                <div className="w-full sm:w-auto">
                  <h4 className="text-lg font-semibold text-blue-600">{assignment.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{assignment.description}</p>
                </div>
                <button 
                  onClick={() => handleDeleteAssignment(classNum, assignment.id)} 
                  className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No assignments yet.</p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Assignments;
