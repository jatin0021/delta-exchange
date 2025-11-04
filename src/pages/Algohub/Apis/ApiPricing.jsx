import React from "react";

const ApiPricing = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">API Pricing</h2>
        <p className="text-gray-400 text-base md:text-lg mb-12">
          Market Data at your fingertips with Delta API and Websocket Services
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Trading API Card */}
          <div className="bg-gradient-to-r from-[#19163a] to-[#16142f] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center hover:scale-[1.02] transition-transform duration-300 shadow-lg">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                FREE Trading API
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Market Data at your fingertips with Delta API
                <br /> and Websocket Services
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/trading-api.svg"
                alt="Trading API"
                className="w-28 md:w-32 lg:w-36 object-contain"
              />
            </div>
          </div>

          {/* Free Data API Card */}
          <div className="bg-gradient-to-r from-[#3a2a14] to-[#2d1f0f] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center hover:scale-[1.02] transition-transform duration-300 shadow-lg">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                FREE Data API
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Market Data at your fingertips with Delta API
                <br /> and Websocket Services
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/data-api.svg"
                alt="Data API"
                className="w-28 md:w-32 lg:w-36 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPricing;
