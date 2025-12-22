import React from "react";
import { FaEdit } from "react-icons/fa";

const SubAccounts = ({ mode }) => {
  const user = {
    id: "33169894",
    value: "₹0.00 $0",
    name: "Main",
    email: "thomasselve7@gmail.com",
    margin: "Isolated",
  };

  return (
    <div className={`flex flex-col h-full w-full p-6 ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-start mb-6">
        {/* Left Info */}
        <div>
          <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Account in use:{" "}
            <span className={`font-medium ${mode === "dark" ? "text-gray-100" : "text-black"}`}>{user.name}</span>
          </p>

          <div className="flex flex-wrap gap-10 mt-4 text-sm">
            <div>
              <p className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>User ID</p>
              <p className={`font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>{user.id}</p>
            </div>
            <div>
              <p className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>Account Value</p>
              <p className={`font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>{user.value}</p>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md text-sm hover:bg-orange-50 transition">
            Create Sub Account
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md text-sm hover:bg-orange-50 transition">
            Transfer Funds
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className={`border-b pb-2 text-sm font-semibold ${
        mode === "dark" ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"
      }`}>
        Accounts
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className={`border-b ${mode === "dark" ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
              <th className="pb-3 font-medium">Account Name</th>
              <th className="pb-3 font-medium">User ID</th>
              <th className="pb-3 font-medium">Email ID</th>
              <th className="pb-3 font-medium">Margin Mode</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`border-b ${mode === "dark" ? "text-gray-300 border-gray-800" : "text-gray-700 border-gray-100"}`}>
              <td className="py-3">{user.name}</td>
              <td className="py-3">{user.id}</td>
              <td className="py-3">{user.email}</td>
              <td className="py-3 flex items-center gap-2">
                {user.margin}
                <FaEdit className="text-orange-500 cursor-pointer hover:text-orange-600" />
              </td>
              <td className="py-3">
                <button className="text-orange-500 hover:text-orange-600 mr-3">
                  Create API Key
                </button>
                <span className={mode === "dark" ? "text-gray-600" : "text-gray-300"}>|</span>
                <button className="text-orange-500 hover:text-orange-600 ml-3">
                  Transfer History
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubAccounts;
