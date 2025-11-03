import React from "react";

const DownloadAppSection = ({ mode }) => {
  const isDark = mode === "dark";
  const bgColor = isDark ? "bg-[#0E0F13]" : "bg-gray-50";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const qrBg = isDark ? "bg-[#161A22]" : "bg-white";

  return (
    <section className={`${bgColor} ${textColor} py-15 flex justify-center px-4 transition-colors duration-300`}>
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start max-w-md">
          <p className="text-orange-400 text-lg font-medium mb-2">
            Anytime. Anywhere
          </p>
          <h2 className={`text-2xl md:text-3xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Download App, Trade On The Go!
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-base mb-6`}>
            We offer futures and options on Bitcoin and Ethereum.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 mb-10 flex-wrap">
            <a href="#" className="transition hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-44"
              />
            </a>
            <a href="#" className="transition hover:scale-105">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-44"
              />
            </a>
          </div>

          {/* QR Code */}
          <div className={`${qrBg} rounded-2xl p-6 flex items-center justify-center shadow-lg`}>
            <img
              src="https://www.delta.exchange/images/header/mobileAppQrCodeIndia.svg"
              alt="QR Code"
              className="w-46 h-46"
            />
          </div>
        </div>

        {/* RIGHT SIDE PHONE MOCKUPS */}
        <div className="relative flex justify-center items-center">
          <div className="relative z-10">
            <img
              src="https://www.delta.exchange/images/homepage/downloadApp/india-mobile-app-preview-dark.svg" // Replace with your actual phone image
              alt="App Mockup Main"
              className="w-[400px] md:w-[420px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
