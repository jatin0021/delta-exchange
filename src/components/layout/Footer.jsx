import { useContext, useState } from "react";
import Mycontext from "../../context/Mycontext";
import { DeltaLogo } from "./DeltaLogo";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


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

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://x.com/Delta_Exchange" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/deltaexchangein" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@deltaexchange" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/delta-exchange/" },
  ];

  return (
    <footer
      className={`w-full border-t transition-colors duration-300 ${
        mode === "dark"
          ? "bg-[#0E0F13] text-gray-400 border-gray-800"
          : "bg-[#f3f4f6] text-slate-500 border-gray-200"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24">
          
          {/* LEFT: Logo & Description */}
          <div className="flex flex-col max-w-lg lg:w-[400px]">
            <DeltaLogo className={mode === "dark" ? "text-white" : "text-black"} />
            
            <p className={`text-[15px] md:text-base leading-relaxed mt-4 lg:mt-8 font-medium ${
              mode === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              Delta Exchange India is operated by Excelium Technologies Private Limited, a{" "}
              <a href="https://fiuindia.gov.in/" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline font-bold">
                FIU
              </a>{" "}
              (Govt. of India) registered entity with REID: VA00041101
            </p>
          </div>

          {/* RIGHT: Sections */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-0 lg:gap-8">
              {footerLinks.map((section, idx) => (
                <div key={idx} className="lg:pb-0">
                  {/* Desktop Title */}
                  <h4 className={`hidden lg:block font-bold mb-8 text-[16px] tracking-tight ${
                    mode === "dark" ? "text-white" : "text-[#0F172A]"
                  }`}>
                    {section.title}
                  </h4>

                  {/* Mobile Header */}
                  <div 
                    onClick={() => toggleSection(section.title)}
                    className="lg:hidden flex items-center justify-between py-2 cursor-pointer"
                  >
                    <span className={`text-[17px] font-bold ${mode === "dark" ? "text-white" : "text-[#0F172A]"}`}>
                      {section.title}
                    </span>
                    <FiChevronRight className={`text-xl transition-transform duration-300 ${openSections[section.title] ? "rotate-90" : ""} ${mode === "dark" ? "text-gray-600" : "text-slate-400"}`} />
                  </div>

                  {/* Links */}
                  <ul className={`space-y-5 lg:space-y-4 transition-all duration-300 overflow-hidden ${
                    openSections[section.title] ? "max-h-96 py-6 opacity-100" : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100"
                  }`}>
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noreferrer" 
                          className={`text-[15px] transition-colors hover:text-orange-500 font-medium ${
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
            </div>

            {/* Socials - Moved after dropdowns */}
            <div className="mt-4 lg:mt-6 order-last">
              <h4 className={`text-[15px] font-semibold mb-4 ${
                mode === "dark" ? "text-gray-500" : "text-slate-400"
              }`}>Socials</h4>
              <div className="flex items-center gap-5">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`w-11 h-11 flex items-center justify-center rounded-full text-xl transition-all ${
                      mode === "dark" 
                        ? "bg-[#1E2026] text-gray-300 hover:bg-orange-500 hover:text-white" 
                        : "bg-[#E2E8F0] text-[#0F172A] hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
          mode === "dark" ? "border-gray-800" : "border-gray-100"
        }`}>
          <p className={`text-[12px] font-medium ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>
            Delta Exchange India © 2025. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-orange-500 transition-colors">Platform Status</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
