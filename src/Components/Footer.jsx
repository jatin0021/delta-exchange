import { useContext } from "react";
import Mycontext from "../Context/Mycontext";
import { FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { mode } = useContext(Mycontext);

  return (
    <footer
      className={`w-full border-t transition-colors duration-300 ${
        mode === "dark"
          ? "bg-[#15161B] text-gray-300 border-gray-700"
          : "bg-white text-gray-700 border-gray-300"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-gradient-to-tr from-green-500 to-orange-500 rounded-sm" />
            <div
              className={`font-semibold text-sm ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              Delta.
            </div>
            <span
              className={`text-sm ${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Exchange | INDIA
            </span>
          </div>

          <p
            className={`text-sm leading-relaxed mt-2 ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Delta Exchange India is operated by Excelium Technologies Private
            Limited, a{" "}
            <span className="text-orange-400 font-medium cursor-pointer hover:underline">
              FIU
            </span>{" "}
            (Govt. of India) registered entity with REID:{" "}
            <span
              className={`font-medium ${
                mode === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              VA00041101
            </span>
          </p>

          <p
            className={`text-sm mt-2 ${
              mode === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Delta Exchange India © 2025. All Rights Reserved.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3
            className={`font-semibold mb-3 text-sm ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            Company
          </h3>
          <ul
            className={`space-y-2 text-sm ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Affiliate Program
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Privacy & Cookies Policy
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Data */}
        <div>
          <h3
            className={`font-semibold mb-3 text-sm ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            Data
          </h3>
          <ul
            className={`space-y-2 text-sm ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <li className="hover:text-orange-400 cursor-pointer">Fees</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Contract Specifications
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Underlying Indices
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Settlement Prices
            </li>
          </ul>
        </div>

        {/* References + Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* References */}
          <div>
            <h3
              className={`font-semibold mb-3 text-sm ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              References
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li className="hover:text-orange-400 cursor-pointer">
                Support Center
              </li>
              <li className="hover:text-orange-400 cursor-pointer">Blog</li>
              <li className="hover:text-orange-400 cursor-pointer">
                User Guide
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                API Documentation
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className={`font-semibold mb-3 text-sm ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              Social Links
            </h3>
            <ul
              className={`space-y-3 text-sm ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    mode === "dark" ? "bg-[#1E1F24]" : "bg-gray-200"
                  }`}
                >
                  <FaXTwitter size={16} />
                </div>
                X
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    mode === "dark" ? "bg-[#1E1F24]" : "bg-gray-200"
                  }`}
                >
                  <FiInstagram size={16} />
                </div>
                Instagram
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    mode === "dark" ? "bg-[#1E1F24]" : "bg-gray-200"
                  }`}
                >
                  <FiYoutube size={16} />
                </div>
                Youtube
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    mode === "dark" ? "bg-[#1E1F24]" : "bg-gray-200"
                  }`}
                >
                  <FiLinkedin size={16} />
                </div>
                Linkedin
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 py-3 text-xs border-t transition-colors duration-300 ${
          mode === "dark"
            ? "border-gray-700 text-gray-500"
            : "border-gray-300 text-gray-500"
        }`}
      >
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Connected</span>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 hover:text-orange-400 mt-2 sm:mt-0"
        >
          <span>Open in Web</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h6m0 0v6m0-6L10 17"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
