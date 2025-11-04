// File: src/components/HowToUseDeltaAPI.jsx
import React from "react";

const HowToUse = () => {
  return (
    <section className="bg-[#121212] text-white  px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-medium mb-4">
          How to use Delta Exchange API?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
          You can use this API to fetch granular data for backtesting, listen to
          market feeds, and place orders on Delta Exchange.
        </p>

        {/* Flow Chart Container */}
        <div className="bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col md:flex-row items-start justify-center gap-10 md:gap-24">
          {/* Step 1: End User */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.delta.exchange/_next/image?url=https%3A%2F%2Fstatic.delta.exchange%2Flanding-page%2Fapi-guide%2Fend-user-india.svg&w=128&q=75"
              alt="End User"
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-gray-300 text-sm md:text-base">End User</p>
          </div>

          {/* Connector 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2A2A2A] px-4 py-2 rounded-lg text-gray-300 text-sm md:text-base">
              Create/Manage API Key
            </div>
            <div className="border-t border-dashed border-gray-500 w-24 md:w-32 mt-2"></div>
          </div>

          {/* Step 2: Delta API */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.delta.exchange/_next/image?url=https%3A%2F%2Fstatic.delta.exchange%2Flanding-page%2Fapi-guide%2Fdelta-api-india.svg&w=128&q=75"
              alt="Delta API"
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-gray-300 text-sm md:text-base">Delta API</p>
          </div>

          {/* Connector 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2A2A2A] px-4 py-2 rounded-lg text-gray-300 text-sm md:text-base">
              Connect API
            </div>
            <div className="border-t border-dashed border-gray-500 w-24 md:w-32 mt-2"></div>
          </div>

          {/* Step 3: Delta Ecosystem */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.delta.exchange/_next/image?url=https%3A%2F%2Fstatic.delta.exchange%2Flanding-page%2Fapi-guide%2Fdelta-india-logo.svg&w=128&q=75"
              alt="Delta Ecosystem"
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-gray-300 text-sm md:text-base">
              Delta Ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
