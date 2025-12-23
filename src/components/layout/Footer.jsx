import { useContext, useState } from "react";
import Mycontext from "../../context/Mycontext";
import { DeltaLogo } from "./DeltaLogo";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { mode } = useContext(Mycontext);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Terms of Service", href: "/terms-of-use" },
        { name: "Privacy & Cookies Policy", href: "/privacy-policy" },
        { name: "Careers", href: "https://careers.delta.exchange" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Contract Specifications", href: "/contracts" },
        { name: "Trading Fees", href: "/fees" },
        { name: "Settlement Prices", href: "/app/expired_futures_and_options" },
        { name: "Bug Bounty", href: "https://delta.exchange/bug-bounty-program" },
      ],
    },
    {
      title: "Resources & Support",
      links: [
        { name: "API Docs", href: "https://docs.delta.exchange/#introduction" },
        { name: "Raise a Ticket", href: "/support/ticket?source=footer" },
        { name: "Support Center", href: "/support" },
        { name: "User Guide", href: "https://guides.delta.exchange/delta-exchange-india-user-guide" },
        { name: "Referral Program", href: "/referral-program" },
        { name: "Demo Trading", href: "https://testnet.delta.exchange/app" },
      ],
    },
  ];

  const socials = [
    { name: "X", icon: <FaXTwitter />, href: "https://x.com/Delta_Exchange" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/deltaexchangein" },
    { name: "Youtube", icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCaw-1cUd74wvEatvZna0TzQ" },
    { name: "Linkedin", icon: <FaLinkedin />, href: "https://www.linkedin.com/company/delta-exchange/" },
  ];

  return (
    <footer
      className={`w-full border-t transition-colors duration-300 ${
        mode === "dark"
          ? "bg-[#0E0F13] text-gray-400 border-gray-800"
          : "bg-[#f3f4f6] text-slate-500 border-gray-200"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          
          {/* LEFT: Logo & Description */}
          <div className="lg:w-[320px] flex flex-col gap-3">
            <DeltaLogo className={mode === "dark" ? "text-white" : "text-black"} />
            
            <p className={`text-[15px] leading-relaxed font-medium ${
              mode === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              Delta Exchange India is operated by Excelium Technologies Private Limited, a{" "}
              <a href="https://fiuindia.gov.in/" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline font-bold">
                FIU
              </a>{" "}
              (Govt. of India) registered entity with REID: VA00041101
            </p>
          </div>

          {/* RIGHT: Links Sections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
              {/* Columns for Links */}
              {footerLinks.map((section, idx) => (
                <div key={idx} className="w-full">
                  {/* Desktop Title */}
                  <h4 className={`hidden lg:block font-bold mb-3 text-[17px] tracking-tight ${
                    mode === "dark" ? "text-white" : "text-[#0F172A]"
                  }`}>
                    {section.title}
                  </h4>

                  {/* Mobile Accordion Header */}
                  <div 
                    onClick={() => toggleSection(section.title)}
                    className="lg:hidden flex items-center justify-between py-2 border-b border-gray-700/50 cursor-pointer"
                  >
                    <span className={`text-[17px] font-bold ${mode === "dark" ? "text-white" : "text-[#0F172A]"}`}>
                      {section.title}
                    </span>
                    <FiChevronRight className={`text-lg transition-transform duration-300 ${openSections[section.title] ? "rotate-90" : ""} ${mode === "dark" ? "text-gray-500" : "text-slate-400"}`} />
                  </div>

                  {/* Links List */}
                  <ul className={`flex flex-col gap-1.5 transition-all duration-300 overflow-hidden ${
                    openSections[section.title] ? "max-h-96 py-2 opacity-100" : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100"
                  }`}>
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noreferrer" 
                          className={`text-[15px] hover:text-orange-500 transition-colors font-medium ${
                            mode === "dark" ? "text-gray-400" : "text-slate-500"
                          }`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Annual Socials Column */}
              <div className="w-full">
                 <h4 className={`hidden lg:block font-bold mb-3 text-[17px] tracking-tight ${
                    mode === "dark" ? "text-white" : "text-[#0F172A]"
                  }`}>
                    Socials
                  </h4>

                  {/* Mobile Accordion Header for Socials */}
                  <div 
                    onClick={() => toggleSection("Socials")}
                    className="lg:hidden flex items-center justify-between py-2 border-b border-gray-700/50 cursor-pointer"
                  >
                    <span className={`text-[17px] font-bold ${mode === "dark" ? "text-white" : "text-[#0F172A]"}`}>
                      Socials
                    </span>
                    <FiChevronRight className={`text-lg transition-transform duration-300 ${openSections["Socials"] ? "rotate-90" : ""} ${mode === "dark" ? "text-gray-500" : "text-slate-400"}`} />
                  </div>

                  <div className={`flex flex-col gap-2 transition-all duration-300 overflow-hidden ${
                    openSections["Socials"] ? "max-h-96 py-2 opacity-100" : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100"
                  }`}>
                    {socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-2 text-[15px] font-medium transition-colors hover:text-orange-500 ${
                           mode === "dark" ? "text-gray-400" : "text-slate-500"
                        }`}
                      >
                        <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm ${
                          mode === "dark" ? "bg-[#1E2026] text-gray-300" : "bg-gray-200 text-gray-700"
                        }`}>
                          {social.icon}
                        </span>
                        {social.name}
                      </a>
                    ))}
                  </div>
              </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className={`mt-2 pt-4 border-t text-center ${
          mode === "dark" ? "border-gray-800" : "border-gray-300"
        }`}>
          <p className={`text-[16px] font-medium ${mode === "dark" ? "text-gray-500" : "text-gray-500"}`}>
            Delta Exchange India © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
