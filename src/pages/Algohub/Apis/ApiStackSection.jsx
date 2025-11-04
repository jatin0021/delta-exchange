import React from "react";
import { FaBoxes, FaFileAlt, FaChartLine } from "react-icons/fa";

const ApiStackSection = () => {
  return (
    <section className="bg-[#141416] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              API Stack
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Market Data at your fingertips with Delta API
              <br />
              and Websocket Services
            </p>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Rest API */}
            <div className="bg-[#1b1b1d] border border-[#2b2b2e] rounded-2xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition hover:shadow-[0_4px_25px_rgba(255,122,0,0.15)] w-full sm:w-[450px]">
              <h3 className="text-gray-200 font-semibold mb-4 text-lg">
                Rest API
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 bg-[#1f1f22] border border-[#2b2b2e] px-4 py-3 rounded-lg text-gray-300 text-sm hover:border-[#ff7a00] hover:text-white transition-all">
                  <FaBoxes className="text-[#ff7a00]" />
                  <span>Order Management</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1f1f22] border border-[#2b2b2e] px-4 py-3 rounded-lg text-gray-300 text-sm hover:border-[#ff7a00] hover:text-white transition-all">
                  <FaFileAlt className="text-[#ff7a00]" />
                  <span>Historical Data</span>
                </div>
              </div>
            </div>

            {/* Webhooks */}
            <div className="bg-[#1b1b1d] border border-[#2b2b2e] rounded-2xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition hover:shadow-[0_4px_25px_rgba(255,122,0,0.15)] w-full sm:w-[320px]">
              <h3 className="text-gray-200 font-semibold mb-4 text-lg">
                Webhooks
              </h3>
              <div className="flex items-center gap-2 bg-[#1f1f22] border border-[#2b2b2e] px-4 py-3 rounded-lg text-gray-300 text-sm hover:border-[#ff7a00] hover:text-white transition-all">
                <FaChartLine className="text-[#ff7a00]" />
                <span>Live Trading Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiStackSection;
