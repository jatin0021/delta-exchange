import { useContext } from "react";
import Mycontext from "../Context/Mycontext";
import { DeltaLogo } from "./DeltaLogo";

export default function Footer() {
  const { mode } = useContext(Mycontext);

  return (
    <footer
      className={`w-full h-[280px] border-t transition-colors duration-300 ${
        mode === "dark"
          ? "bg-[#15161B] text-gray-300 border-gray-700"
          : "bg-white text-gray-700 border-gray-300"
      }`}
    >
      <div className="max-w-[1440px] mx-auto pr-6 md:pr-12 py-10 h-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-full">
          {/* Left Section - Logo and Description */}
          <div className="lg:w-1/4 flex-shrink-0">
            <DeltaLogo />
            
            <p
              className={`text-sm leading-relaxed mt-4 font-bold ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Delta Exchange India is operated by Excelium Technologies Private Limited, a{" "}
              <a
                href="https://fiuindia.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="text-orange-500 hover:underline font-medium"
              >
                FIU
              </a>{" "}
              (Govt. of India) registered entity with REID: VA00041101
            </p>
            
            <p
              className={`text-sm mt-4 ${
                mode === "dark" ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Delta Exchange India © 2025. All Rights Reserved.
            </p>
          </div>

          {/* Right Section - Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Company */}
            <div>
              <h4
                className={`font-semibold mb-4 text-base ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                Company
              </h4>
              <ul
                className={`space-y-2.5 text-sm ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>
                  <a href="https://www.delta.exchange/about-us/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.delta.exchange/referral-program/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="https://www.delta.exchange/terms-of-use/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="https://www.delta.exchange/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Privacy & Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="https://careers.delta.exchange" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Data */}
            <div>
              <h4
                className={`font-semibold mb-3 text-sm ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                Data
              </h4>
              <ul
                className={`space-y-2 text-xs ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>
                  <a href="https://www.delta.exchange/fees/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Fees
                  </a>
                </li>
                <li>
                  <a href="https://www.delta.exchange/contracts" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Contract Specifications
                  </a>
                </li>
                <li>
                  <a href="https://www.delta.exchange/indices/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Underlying Indices
                  </a>
                </li>
                <li>
                  <a href="/app/expired_futures_and_options" className="hover:text-orange-400 cursor-pointer">
                    Settlement Prices
                  </a>
                </li>
              </ul>
            </div>

            {/* References */}
            <div>
              <h4
                className={`font-semibold mb-3 text-sm ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                References
              </h4>
              <ul
                className={`space-y-2 text-xs ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>
                  <a href="https://www.delta.exchange/support" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="https://www.delta.exchange/blog/" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://india.delta.exchange/user-guide" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    User Guide
                  </a>
                </li>
                <li>
                  <a href="https://docs.delta.exchange/#introduction" target="_blank" rel="noreferrer" className="hover:text-orange-400 cursor-pointer">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`font-semibold mb-3 text-sm ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                Social Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://x.com/Delta_Exchange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 hover:text-orange-400 cursor-pointer ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                      <path fill="currentColor" d="m18.984 5.31 4.097-4.81h1.785l-5.08 5.977L26 15.5h-5.673l-3.674-5.337-4.536 5.337h-1.815l5.544-6.506L10 .5h5.673l3.311 4.81Zm2.068 8.703h2.202l-8.311-12.034h-2.2l8.31 12.034Z"></path>
                    </svg>
                    <span>X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/deltaexchangein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 hover:text-orange-400 cursor-pointer ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" className="flex-shrink-0">
                      <path fill="currentColor" d="M12 9.292a2.708 2.708 0 1 0 0 5.417 2.708 2.708 0 0 0 0-5.417Z"></path>
                      <path fill="currentColor" fillRule="evenodd" d="M7.642 4.568a39.56 39.56 0 0 1 8.716 0 3.45 3.45 0 0 1 3.044 3.011 38.06 38.06 0 0 1 0 8.842 3.451 3.451 0 0 1-3.043 3.012c-2.897.32-5.82.32-8.717 0a3.451 3.451 0 0 1-3.044-3.011 38.06 38.06 0 0 1 0-8.843 3.45 3.45 0 0 1 3.044-3.01ZM16.167 7a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667ZM8.042 12a3.958 3.958 0 1 1 7.916 0 3.958 3.958 0 0 1-7.916 0Z" clipRule="evenodd"></path>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@deltaexchange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 hover:text-orange-400 cursor-pointer ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                      <path fill="currentColor" d="m23.558 6.212.025.179c-.242-.938-.895-1.66-1.724-1.924l-.017-.004C20.282 4 14.008 4 14.008 4s-6.258-.01-7.833.463c-.845.267-1.498.99-1.736 1.908l-.004.02c-.582 3.324-.586 7.32.026 10.88l-.026-.18c.242.936.894 1.66 1.724 1.922l.017.005c1.558.463 7.833.463 7.833.463s6.258 0 7.834-.463c.845-.268 1.499-.99 1.736-1.909l.004-.019c.265-1.546.417-3.326.417-5.143V11.535c0-1.818-.152-3.597-.442-5.323Zm-11.551 8.854v-6.642l5.221 3.326-5.221 3.316Z"></path>
                    </svg>
                    <span>Youtube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/delta-exchange/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 hover:text-orange-400 cursor-pointer ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M6.5017 5C6.1034 5 5.7214 5.1582 5.4398 5.4398C5.1582 5.7214 5 6.1034 5 6.5017C5 6.8999 5.1582 7.2819 5.4398 7.5635C5.7214 7.8451 6.1034 8.0033 6.5017 8.0033C6.8999 8.0033 7.2819 7.8451 7.5635 7.5635C7.8451 7.2819 8.0033 6.8999 8.0033 6.5017C8.0033 6.1034 7.8451 5.7214 7.5635 5.4398C7.2819 5.1582 6.8999 5 6.5017 5ZM5.0883 9.24C5.0649 9.24 5.0424 9.2493 5.0259 9.2659C5.0093 9.2824 5 9.3049 5 9.3283V18.515C5 18.5638 5.0396 18.6033 5.0883 18.6033H7.915C7.9384 18.6033 7.9609 18.594 7.9775 18.5775C7.994 18.5609 8.0033 18.5384 8.0033 18.515V9.3283C8.0033 9.3049 7.994 9.2824 7.9775 9.2659C7.9609 9.2493 7.9384 9.24 7.915 9.24H5.0883ZM9.6817 9.24C9.6582 9.24 9.6358 9.2493 9.6192 9.2659C9.6026 9.2824 9.5933 9.3049 9.5933 9.3283V18.515C9.5933 18.5638 9.6329 18.6033 9.6817 18.6033H12.5083C12.5318 18.6033 12.5542 18.594 12.5708 18.5775C12.5874 18.5609 12.5967 18.5384 12.5967 18.515V13.5683C12.5967 13.2169 12.7363 12.8799 12.9847 12.6314C13.2332 12.3829 13.5703 12.2433 13.9217 12.2433C14.2731 12.2433 14.6101 12.3829 14.8586 12.6314C15.1071 12.8799 15.2467 13.2169 15.2467 13.5683V18.515C15.2467 18.5638 15.2862 18.6033 15.335 18.6033H18.1617C18.1851 18.6033 18.2076 18.594 18.2241 18.5775C18.2407 18.5609 18.25 18.5384 18.25 18.515V12.4235C18.25 10.7085 16.7589 9.3672 15.0523 9.522C14.5244 9.5704 14.0072 9.7011 13.5196 9.9092L12.5967 10.3049V9.3283C12.5967 9.3049 12.5874 9.2824 12.5708 9.2659C12.5542 9.2493 12.5318 9.24 12.5083 9.24H9.6817Z" fill="currentColor"></path>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
