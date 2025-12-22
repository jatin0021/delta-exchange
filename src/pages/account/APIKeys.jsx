import React, { useState } from "react";
import { FaExclamationTriangle, FaBook, FaTrashAlt, FaCopy } from "react-icons/fa";

export default function APIKeys({ mode }) {
  const [readData, setReadData] = useState(true);
  const [trading, setTrading] = useState(false);

  // Example API key list (you can replace with API data)
  const [apiKeys, setApiKeys] = useState([]);

  const handleDelete = (keyName) => {
    setApiKeys(apiKeys.filter((key) => key.name !== keyName));
  };

  return (
    <div className={`w-full h-full overflow-y-auto p-6 ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-xl font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>
          Create a new API key
        </h1>
        <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center gap-2">
          <FaBook className="text-sm" />
          View tutorial
        </button>
      </div>

      {/* Warning Banner */}
      <div className={`border p-4 rounded flex justify-between items-center mb-6 ${
        mode === "dark" ? "bg-yellow-900/20 border-yellow-700" : "bg-yellow-100 border-yellow-300"
      }`}>
        <div className={`flex items-center gap-3 ${mode === "dark" ? "text-yellow-400" : "text-yellow-800"}`}>
          <FaExclamationTriangle className="text-lg" />
          <p className="text-sm font-medium">
            2FA must be enabled for generating API Key
          </p>
        </div>
        <button className={`text-sm font-medium px-4 py-1 rounded ${
          mode === "dark" ? "bg-yellow-600 hover:bg-yellow-700" : "bg-yellow-400 hover:bg-yellow-500"
        }`}>
          Setup
        </button>
      </div>

      {/* Form Section */}
      <div className="space-y-6 max-w-xl mb-10">
        {/* Account Name */}
        <div>
          <label className={`block text-sm font-medium mb-1 ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Account Name
          </label>
          <select className={`w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-400 focus:outline-none ${
            mode === "dark" ? "bg-[#1E1F24] border-gray-600 text-gray-200" : "border-gray-300 bg-white text-gray-800"
          }`}>
            <option>Main</option>
            <option>Sub Account</option>
          </select>
        </div>

        {/* API Key Name */}
        <div>
          <label className={`block text-sm font-medium mb-1 ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            API Key Name
          </label>
          <input
            type="text"
            placeholder="ExampleApiKey123"
            className={`w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-400 focus:outline-none ${
              mode === "dark" ? "bg-[#1E1F24] border-gray-600 text-gray-200 placeholder-gray-500" : "border-gray-300 bg-white text-gray-800"
            }`}
          />
        </div>

        {/* Whitelisted IP */}
        <div>
          <label className={`block text-sm font-medium mb-1 ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Whitelisted IP
          </label>
          <input
            type="text"
            placeholder="Enter comma separated IP addresses"
            className={`w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-400 focus:outline-none ${
              mode === "dark" ? "bg-[#1E1F24] border-gray-600 text-gray-200 placeholder-gray-500" : "border-gray-300 bg-white text-gray-800"
            }`}
          />
        </div>

        {/* IPs to Whitelist */}
        <div>
          <label className={`block text-sm font-medium mb-1 ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            IP's to whitelist
          </label>
          <select className={`w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-400 focus:outline-none ${
            mode === "dark" ? "bg-[#1E1F24] border-gray-600 text-gray-200" : "border-gray-300 bg-white text-gray-800"
          }`}>
            <option>Select Whitelisted IP</option>
            <option>192.168.0.1</option>
          </select>
        </div>

        {/* Permissions */}
        <div>
          <h2 className={`text-sm font-semibold mb-3 ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>
            Permissions
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Read Data */}
            <div className={`border rounded p-3 flex items-center gap-3 w-full sm:w-1/2 ${
              mode === "dark" ? "border-gray-600 bg-[#1E1F24]" : "border-gray-200 bg-white"
            }`}>
              <input
                type="checkbox"
                checked={readData}
                onChange={() => setReadData(!readData)}
                className="w-4 h-4 text-orange-500 accent-orange-500"
              />
              <div>
                <p className={`font-medium text-sm ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>Read Data</p>
                <p className={`text-xs ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  All API keys have read permissions
                </p>
              </div>
            </div>

            {/* Trading */}
            <div className={`border rounded p-3 flex items-center gap-3 w-full sm:w-1/2 ${
              mode === "dark" ? "border-gray-600 bg-[#1E1F24]" : "border-gray-200 bg-white"
            }`}>
              <input
                type="checkbox"
                checked={trading}
                onChange={() => setTrading(!trading)}
                className="w-4 h-4 text-orange-500 accent-orange-500"
              />
              <div>
                <p className={`font-medium text-sm ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>Trading</p>
                <p className={`text-xs ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  Select this to give trading permissions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Create Button */}
        <div>
          <button className="bg-orange-400 text-white text-sm font-semibold px-6 py-2 rounded hover:bg-orange-500 transition w-full sm:w-auto">
            Create API key
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t mb-4 ${mode === "dark" ? "border-gray-700" : "border-gray-200"}`}></div>

      {/* API Keys Table */}
      <div className="overflow-x-auto">
        <h2 className={`text-base font-semibold mb-4 ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>
          Your API keys
        </h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className={`text-sm border-b ${mode === "dark" ? "text-gray-400 border-gray-700" : "text-gray-600 border-gray-200"}`}>
              <th className="text-left px-4 py-2 font-medium">Account Name</th>
              <th className="text-left px-4 py-2 font-medium">API Key Name</th>
              <th className="text-left px-4 py-2 font-medium">API Key</th>
              <th className="text-left px-4 py-2 font-medium">Permissions</th>
              <th className="text-left px-4 py-2 font-medium">Whitelisted IP</th>
              <th className="text-left px-4 py-2 font-medium">Created On</th>
              <th className="text-left px-4 py-2 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {apiKeys.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className={`text-center text-sm py-8 ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  No rows found
                </td>
              </tr>
            ) : (
              apiKeys.map((key) => (
                <tr
                  key={key.name}
                  className={`text-sm border-b transition ${
                    mode === "dark" ? "border-gray-700 hover:bg-[#1E1F24]" : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2">{key.account}</td>
                  <td className="px-4 py-2">{key.name}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    {key.value}
                    <FaCopy
                      className={`cursor-pointer ${mode === "dark" ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}
                      title="Copy API key"
                    />
                  </td>
                  <td className="px-4 py-2">{key.permissions}</td>
                  <td className="px-4 py-2">{key.whitelistedIP}</td>
                  <td className="px-4 py-2">{key.createdOn}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(key.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
