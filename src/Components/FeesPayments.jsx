import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const FeesPayments = () => {
  const navigate = useNavigate();

  const feeStructure = {
    1: { admission: 5000, tuition: 15000, miscellaneous: 2000 },
    2: { admission: 5000, tuition: 16000, miscellaneous: 2500 },
    3: { admission: 6000, tuition: 17000, miscellaneous: 3000 },
    4: { admission: 6000, tuition: 18000, miscellaneous: 3500 },
    5: { admission: 7000, tuition: 19000, miscellaneous: 4000 },
    6: { admission: 7000, tuition: 20000, miscellaneous: 4500 },
    7: { admission: 8000, tuition: 21000, miscellaneous: 5000 },
    8: { admission: 8000, tuition: 22000, miscellaneous: 5500 },
  };

  const paidFees = {
    admission: 5000,
    tuition: 10000,
    miscellaneous: 1500,
  };

  const [selectedClass, setSelectedClass] = useState(1);

  const totalFees = feeStructure[selectedClass];
  const remainingFees = {
    admission: totalFees.admission - paidFees.admission,
    tuition: totalFees.tuition - paidFees.tuition,
    miscellaneous: totalFees.miscellaneous - paidFees.miscellaneous,
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 text-blue-600 dark:text-blue-400">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <BanknotesIcon className="h-7 sm:h-8 w-7 sm:w-8 text-red-500" />
          Fees & Payments
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="p-2 sm:p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          <ArrowLeftIcon className="h-5 sm:h-6 w-5 sm:w-6" />
        </button>
      </div>

      {/* Class Selection */}
      <div className="mb-6">
        <label className="font-bold text-lg">Select Class:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(Number(e.target.value))}
          className="ml-2 p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800"
        >
          {[...Array(8).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              Class {num + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Fees Table - Scrollable for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Fee Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-sm sm:text-base">
                <th className="border p-2">Fee Type</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Paid</th>
                <th className="border p-2">Remaining</th>
              </tr>
            </thead>
            <tbody>
              {["admission", "tuition", "miscellaneous"].map((feeType, index) => (
                <motion.tr
                  key={feeType}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="text-center text-sm sm:text-base"
                >
                  <td className="border p-2 capitalize">{feeType} Fee</td>
                  <td className="border p-2">₹{totalFees[feeType]}</td>
                  <td className="border p-2">₹{paidFees[feeType]}</td>
                  <td className="border p-2 text-red-500">
                    ₹{remainingFees[feeType]}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Payment Status */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Total Fee Summary</h3>
        <p className="text-base sm:text-lg">
          <strong>Total Fees: </strong>₹
          {totalFees.admission + totalFees.tuition + totalFees.miscellaneous}
        </p>
        <p className="text-base sm:text-lg text-green-500">
          <strong>Paid Fees: </strong>₹
          {paidFees.admission + paidFees.tuition + paidFees.miscellaneous}
        </p>
        <p className="text-base sm:text-lg text-red-500">
          <strong>Remaining Fees: </strong>₹
          {remainingFees.admission +
            remainingFees.tuition +
            remainingFees.miscellaneous}
        </p>
      </motion.div>

      {/* Pay Now Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-6 bg-blue-500 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-600 transition-all w-full text-center text-base sm:text-lg"
      >
        💳 Pay Now
      </motion.button>
    </div>
  );
};

export default FeesPayments;
