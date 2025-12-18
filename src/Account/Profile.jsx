import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Profile = ({ mode }) => {
  return (
    <div className={`h-screen overflow-y-auto ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Profile Card */}
      <div className={`border rounded-md mx-4 mt-4 p-4 md:p-6 shadow-sm ${
        mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-100 border-gray-200"
      }`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <FaUserCircle className={`text-5xl ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`} />
            <div>
              <div className="flex items-center space-x-2">
                <h2 className={`text-lg font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>
                  UID: 33169894
                </h2>
                <button
                  className={mode === "dark" ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}
                  title="Copy UID"
                >
                  📋
                </button>
              </div>
              <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>thomasselve7@gmail.com</p>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className={`flex items-center text-sm px-3 py-1 rounded-md ${
              mode === "dark" ? "bg-red-900/30 text-red-400" : "bg-red-50 text-red-500"
            }`}>
              <AiOutlineInfoCircle className="mr-1" />
              Unverified
            </div>
            <button className="text-orange-500 text-sm font-medium hover:underline">
              Get Verified &gt;
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t my-4 ${mode === "dark" ? "border-gray-600" : "border-gray-300"}`}></div>

        {/* User details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>First Name</p>
            <p className={`font-medium ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>-</p>
          </div>
          <div>
            <p className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>Last Name</p>
            <p className={`font-medium ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>-</p>
          </div>
          <div>
            <p className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>Username</p>
            <p className={`font-semibold ${mode === "dark" ? "text-gray-100" : "text-gray-900"}`}>
              icy-darkness-15902855
            </p>
          </div>
          <div>
            <p className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>Phone Number</p>
            <p className={`font-medium ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
