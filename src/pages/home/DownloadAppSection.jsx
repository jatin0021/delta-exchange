import React from "react";

const DownloadAppSection = ({ mode }) => {
  const isDark = mode === "dark";
  const bgColor = isDark ? "bg-[#0E0F13]" : "bg-gray-50";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const qrBg = isDark ? "bg-[#161A22]" : "bg-white";

  return (
    <section className={`${bgColor} ${textColor} py-16 md:py-24 lg:py-32 flex justify-center px-4 sm:px-6 transition-colors duration-300 overflow-hidden`}>
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl px-2">
          <p className="text-orange-500 font-black tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 opacity-80">
            Anytime. Anywhere
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Download App, <br className="hidden sm:block" /> Trade On The Go!
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed opacity-90`}>
            Unlock the full potential of crypto trading with our high-performance mobile application.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-12 w-full sm:w-auto">
            <a href="#" className="transition-all transform hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-black/5 rounded-xl block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </a>
            <a href="#" className="transition-all transform hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-black/5 rounded-xl block">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </a>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center lg:items-start gap-4 group">
             <div className={`${qrBg} rounded-[2rem] p-6 sm:p-8 flex items-center justify-center shadow-2xl border-2 border-gray-100 dark:border-gray-800 transition-all group-hover:border-orange-500/50`}>
              <img
                src="https://www.delta.exchange/images/header/mobileAppQrCodeIndia.svg"
                alt="QR Code"
                className={`w-32 h-32 sm:w-40 sm:h-40 ${isDark ? 'invert grayscale' : ''} transition-opacity group-hover:opacity-80`}
              />
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2 group-hover:text-orange-500 transition-colors">Scan to download</p>
          </div>
        </div>

        {/* RIGHT SIDE PHONE MOCKUPS */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-md lg:max-w-none transform md:rotate-2 hover:rotate-0 transition-transform duration-1000">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 rounded-full blur-[100px]"></div>
            
            <img
              src="https://www.delta.exchange/images/homepage/downloadApp/india-mobile-app-preview-dark.svg"
              alt="App Mockup Main"
              className="relative w-full lg:w-[480px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
