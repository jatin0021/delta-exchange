import React from "react";
import {
  FaLock,
  FaUserShield,
  FaClock,
  FaKey,
  FaTrashAlt,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";

export default function AccountSettings({ mode }) {
  const items = [
    {
      icon: <FaLock className="text-orange-500 w-5 h-5" />,
      title: "2FA",
      description:
        "Use one of the recommended authenticator apps to secure your account.",
      extra: (
        <a href="#" className="text-xs text-orange-500 underline">
          FAQs on authenticator apps based 2FA ↗
        </a>
      ),
      button: "Setup",
    },
    {
      icon: <FaClock className="text-orange-500 w-5 h-5" />,
      title: "Safe Session",
      description:
        "If enabled, you will be logged out after 10 mins of inactivity.",
      toggle: true,
    },
    {
      icon: <FaUserShield className="text-orange-500 w-5 h-5" />,
      title: "KYC Verification",
      description: "Get verified to add funds.",
      button: "Verify",
    },
    {
      icon: <FaKey className="text-orange-500 w-5 h-5" />,
      title: "Account Activity",
      description: (
        <>
          <ul className={`text-sm space-y-1 ${mode === "dark" ? "text-gray-400" : "text-gray-400"}`}>
            <li>Last Login: 01 Nov 2025</li>
            <li>IP Address: 49.43.111.210</li>
            <li>0 active sessions</li>
          </ul>
          <button className="text-orange-500 text-xs mt-1 hover:underline">
            Logout from other sessions
          </button>
        </>
      ),
      button: "Details",
    },
    {
      icon: <FaKey className="text-orange-500 w-5 h-5" />,
      title: "Manage Password",
      button: "Manage",
    },
    {
      icon: <FaShieldAlt className="text-orange-500 w-5 h-5" />,
      title: "Anti-Phishing Code",
      description: (
        <>
          <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-400"}`}>
            This code appears in all notification emails from Delta and provides
            protection against phishing attempts.{" "}
            <a href="#" className="text-orange-500 underline">
              Learn more
            </a>
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className={`border rounded-md px-3 py-1 text-sm ${
              mode === "dark" ? "border-gray-600 text-gray-300 bg-[#1E1F24]" : "border-gray-300 text-gray-800 bg-white"
            }`}>
              Code: FG***
            </div>
            <FaEyeSlash className={`w-4 h-4 ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`} />
          </div>
        </>
      ),
      button: "Change",
    },
    {
      icon: <FaTrashAlt className="text-orange-500 w-5 h-5" />,
      title: "Delete Account",
      description:
        "A deleted account can be restored. Please note that your data will be preserved in our systems to meet regulatory requirements.",
      button: "Request Account Deletion",
    },
  ];

  return (
    <div className={`h-screen flex flex-col ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Header */}
      <div className={`px-6 md:px-10 py-4 border-b flex-shrink-0 ${
        mode === "dark" ? "border-gray-700" : "border-gray-200"
      }`}>
        <h1 className={`font-semibold text-lg ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Account in use: <span className={`font-bold ${mode === "dark" ? "text-gray-100" : "text-black"}`}>Main</span>
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`border rounded-lg p-5 flex flex-col justify-between shadow-sm ${
                mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h2 className={`font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>{item.title}</h2>
                </div>

                {item.button && (
                  <button className="border border-orange-500 text-orange-500 px-3 py-1 text-sm rounded hover:bg-orange-50">
                    {item.button}
                  </button>
                )}

                {item.toggle && (
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>On</span>
                    <button className="border border-orange-500 text-orange-500 px-3 py-1 text-sm rounded hover:bg-orange-50">
                      Off
                    </button>
                  </div>
                )}
              </div>

              <div className={`mt-3 text-sm space-y-2 ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {item.description}
              </div>

              {item.extra && <div className="mt-3">{item.extra}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
