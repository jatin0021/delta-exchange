// // File: src/components/WhyDeltaExchangeAPI.jsx
// import React from "react";
// import { FileText, Layers, Clock, Zap, ArrowRight } from "lucide-react";
// import pythonLogo from "../assets/python.png"; // replace with your icon
// import ccxtLogo from "../assets/ccxt.png"; // replace with your icon

// const WhyDeltaExchangeAPI = () => {
//   return (
//     <section className="bg-[#121212] text-white py-20 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
//           Why Delta Exchange API?
//         </h2>
//         <p className="text-gray-400 text-base md:text-lg mb-10">
//           Experience lightning-fast API trading across different markets for
//           Institutional & Professional Traders.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {/* Card 1 */}
//           <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-colors duration-300">
//             <FileText size={40} className="text-[#ff7a00]" />
//             <h3 className="text-lg font-medium">Simple Documentation</h3>
//           </div>

//           {/* Card 2 */}
//           <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-colors duration-300">
//             <Layers size={40} className="text-[#ff7a00]" />
//             <h3 className="text-lg font-medium">
//               Programming Language Independent
//             </h3>
//           </div>

//           {/* Card 3 */}
//           <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-colors duration-300">
//             <Clock size={40} className="text-[#ff7a00]" />
//             <h3 className="text-lg font-medium">Minimal Latency</h3>
//           </div>

//           {/* Card 4 */}
//           <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-colors duration-300">
//             <Zap size={40} className="text-[#ff7a00]" />
//             <h3 className="text-lg font-medium">Super Fast Order Placement</h3>
//           </div>
//         </div>

//         {/* API Docs Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           {/* REST API DOCS */}
//           <div className="bg-[#181a1f] rounded-xl p-6 flex items-start justify-between border border-[#222] hover:border-[#ff7a00] transition-colors duration-300">
//             <div className="flex items-start gap-4">
//               <img src={pythonLogo} alt="Python" className="w-10 h-10" />
//               <div>
//                 <h4 className="text-lg font-semibold mb-1">
//                   Rest API Docs: Python
//                 </h4>
//                 <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                   Rest API in Python operates on HTTP principles to perform
//                   specific operations on resources.
//                 </p>
//               </div>
//             </div>
//             <a
//               href="https://pypi.org/project/delta-rest-client/"
//               className="text-[#ff7a00] text-sm font-medium flex items-center hover:underline"
//             >
//               Click Here <ArrowRight size={16} className="ml-1" />
//             </a>
//           </div>

//           {/* CCXT Integration */}
//           <div className="bg-[#181a1f] rounded-xl p-6 flex items-start justify-between border border-[#222] hover:border-[#ff7a00] transition-colors duration-300">
//             <div className="flex items-start gap-4">
//               <img src={ccxtLogo} alt="CCXT" className="w-10 h-10" />
//               <div>
//                 <h4 className="text-lg font-semibold mb-1">
//                   CCXT Integration
//                 </h4>
//                 <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                   CCXT is a cryptocurrency trading library used for building
//                   trading algorithms.
//                 </p>
//               </div>
//             </div>
//             <a
//               href="https://github.com/ccxt/ccxt"
//               className="text-[#ff7a00] text-sm font-medium flex items-center hover:underline"
//             >
//               Click Here <ArrowRight size={16} className="ml-1" />
//             </a>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="text-left">
//           <button className="bg-[#ff7a00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e36d00] transition-colors duration-300">
//             Explore API Docs
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyDeltaExchangeAPI;


import React from "react";
import {
  FaFileAlt,
  FaLayerGroup,
  FaClock,
  FaBolt,
  FaPython,
  FaBitcoin,
  FaArrowRight,
} from "react-icons/fa";

const WhyDeltaExchangeAPI = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Why Delta Exchange API?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10">
          Experience lightning-fast API trading across different markets for
          Institutional & Professional Traders.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
            <FaFileAlt size={40} className="text-[#ff7a00]" />
            <h3 className="text-lg font-medium">Simple Documentation</h3>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
            <FaLayerGroup size={40} className="text-[#ff7a00]" />
            <h3 className="text-lg font-medium">
              Programming Language Independent
            </h3>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
            <FaClock size={40} className="text-[#ff7a00]" />
            <h3 className="text-lg font-medium">Minimal Latency</h3>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4 bg-[#181818] rounded-xl p-6 border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
            <FaBolt size={40} className="text-[#ff7a00]" />
            <h3 className="text-lg font-medium">Super Fast Order Placement</h3>
          </div>
        </div>

        {/* API Docs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* REST API DOCS */}
          <div className="bg-[#181a1f] rounded-xl p-6 flex items-start justify-between border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
            <div className="flex items-start gap-4">
              <FaPython size={45} className="text-[#3776AB]" />
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Rest API Docs: Python
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Rest API in Python operates on HTTP principles to perform
                  specific operations on resources.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="text-[#ff7a00] text-sm font-medium flex items-center hover:underline whitespace-nowrap ml-4"
            >
              Click Here <FaArrowRight size={12} className="ml-1" />
            </a>
          </div>

          {/* CCXT Integration */}
          <div className="bg-[#181a1f] rounded-xl p-6 flex items-start justify-between border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
            <div className="flex items-start gap-4">
              <FaBitcoin size={45} className="text-[#f7931a]" />
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  CCXT Integration
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  CCXT (Cryptocurrency Exchange Trading library) is a software
                  used for building trading algorithms.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/ccxt/ccxt"
              className="text-[#ff7a00] text-sm font-medium flex items-center hover:underline whitespace-nowrap ml-4"
            >
              Click Here <FaArrowRight size={12} className="ml-1" />
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-left">
          <button className="bg-[#ff7a00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e36d00] transition-colors duration-300">
            Explore API Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyDeltaExchangeAPI;
