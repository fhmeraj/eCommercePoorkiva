import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Account Info</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Form Fields */}
          <div className="flex-1 space-y-4 w-full">
            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Guest"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
                ✏️
              </span>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
                ✏️
              </span>
            </div>

            {/* Mobile No. */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="8400253266"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
                ✏️
              </span>
            </div>
          </div>

          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
            Profile Pic
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
