import { useState } from "react";

export default function Changepassword() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full h-full px-5">
      <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>

        {/* New Password */}
        <div className="relative mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showNew ? "text" : "password"}
            placeholder="Enter New Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm New Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Get OTP Button */}
        <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
          Get OTP
        </button>
      </div>
    </div>
  );
}
