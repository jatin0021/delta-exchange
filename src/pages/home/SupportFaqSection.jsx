import React, { useState } from "react";
import { FaInstagram, FaTelegramPlane, FaYoutube, FaTimes } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const faqs = [
  {
    question: "Is Delta Exchange India legal?",
    answer:
      "We are registered with Financial Intelligence Unit (FIU) of India and 100% compliant with Indian regulations.",
  },
  {
    question: "Do I need crypto to trade on Delta Exchange India?",
    answer:
      "No, you can deposit INR directly and trade without owning crypto.",
  },
  {
    question: "Can I buy Crypto on Delta Exchange India?",
    answer:
      "Yes, you can deposit INR and buy or sell crypto futures & options easily.",
  },
];

const SupportFaqSection = ({ mode }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const isDark = mode === "dark";
  const bgColor = isDark ? "bg-[#0E0F13]" : "bg-gray-50";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const faqBg = isDark ? "bg-[#161A22]" : "bg-white";

  return (
    <section className={`${bgColor} ${textColor} py-12 md:py-16 px-4 sm:px-6 transition-colors duration-300 overflow-hidden`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
        {/* Left Support Card */}
        <div
          className="bg-gradient-to-br from-[#42260E] to-[#2A170A] rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex-shrink-0 w-full lg:w-[320px] min-h-[400px] shadow-2xl flex flex-col justify-between"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] bg-cover"></div>
          
          {/* Top light effect */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                24x7 Customer Support
              </h2>
            </div>

            {/* Support Items */}
            <div className="space-y-6">
              <div>
                <p className="text-orange-400/60 mb-1.5 text-[10px] font-black uppercase tracking-[0.2em]">Have a question?</p>
                <p className="text-gray-100 text-base leading-relaxed">
                  Go to{" "}
                  <a href="#" className="text-orange-400 font-black border-b-2 border-orange-400/30 hover:border-orange-400 transition-all">
                    Support Centre
                  </a>{" "}
                  to do a quick search
                </p>
              </div>

              <div>
                <p className="text-orange-400/60 mb-1.5 text-[10px] font-black uppercase tracking-[0.2em]">Need more help?</p>
                <p className="text-gray-100 text-base leading-relaxed">
                  Raise a{" "}
                  <a href="#" className="text-orange-400 font-black border-b-2 border-orange-400/30 hover:border-orange-400 transition-all">
                    support ticket
                  </a>
                  <br />
                  We are here to help
                </p>
              </div>
            </div>

            {/* Community */}
            <div>
              <p className="text-orange-400/60 mb-4 text-[10px] font-black uppercase tracking-[0.2em]">
                Interact with our community
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaTimes />, label: 'X' },
                  { icon: <FaInstagram />, label: 'Instagram' },
                  { icon: <FaTelegramPlane />, label: 'Telegram' },
                  { icon: <FaYoutube />, label: 'Youtube' }
                ].map((social, i) => (
                  <a key={i} href="#" className="bg-white/10 backdrop-blur-md w-9 h-9 flex items-center justify-center rounded-xl text-white hover:bg-orange-500 transition-all hover:scale-110 shadow-lg" title={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right FAQ Section */}
        <div className="flex-1 flex flex-col justify-start w-full gap-6 sm:gap-8">
          <div className="text-center lg:text-left space-y-2">
             <p className="text-orange-500 font-black tracking-[0.2em] text-[10px] uppercase opacity-80">Got Questions?</p>
             <h2 className={`text-xl sm:text-3xl lg:text-4xl font-black leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
               Frequently Asked Questions
             </h2>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${faqBg} rounded-2xl px-5 sm:px-6 py-4 sm:py-5 cursor-pointer transition-all border-2 ${
                  openIndex === index ? "border-orange-500 shadow-[0_10px_30px_rgba(249,115,22,0.1)]" : "border-transparent shadow-sm hover:border-orange-500/30"
                }`}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-base sm:text-lg font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <div
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-300 ${
                      openIndex === index ? "bg-orange-500 text-white rotate-180" : "bg-orange-500/10 text-orange-500"
                    }`}
                  >
                    <IoChevronDownSharp className="text-lg" />
                  </div>
                </div>

                {openIndex === index && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base leading-relaxed opacity-90`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportFaqSection;
