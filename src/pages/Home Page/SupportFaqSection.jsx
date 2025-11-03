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
    <section className={`${bgColor} ${textColor} py-10 flex justify-center px-4 transition-colors duration-300`}>
      <div className="flex flex-col md:flex-row gap-18 w-full max-w-5xl justify-center items-start">
        {/* Left Support Card */}
        <div
          className="bg-gradient-to-b from-[#42260E] to-[#2A170A] rounded-2xl p-8 relative overflow-hidden flex-shrink-0 w-full md:w-[340px] h-auto md:h-[483px]"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] bg-cover"></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold text-white leading-tight">
                24x7 Customer Support
              </h2>
            </div>

            {/* Support Centre */}
            <div>
              <p className="text-gray-300 mb-1 text-md">Have a question?</p>
              <p className="text-gray-200 text-md">
                Go to{" "}
                <a href="#" className="text-orange-400 underline hover:text-orange-300">
                  Support Centre
                </a>{" "}
                to do a quick search
              </p>
            </div>

            {/* Support Ticket */}
            <div>
              <p className="text-gray-300 mb-1 text-md">Need more help?</p>
              <p className="text-gray-200 text-sm">
                Raise a{" "}
                <a href="#" className="text-orange-400 underline hover:text-orange-300">
                  support ticket
                </a>
                <br />
                We are here to help
              </p>
            </div>

            {/* Community */}
            <div>
              <p className="text-gray-300 mb-3 text-sm">
                Interact with our community
              </p>
              <div className="flex items-center gap-4 text-lg">
                <a href="#" className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition">
                  <FaTimes />
                </a>
                <a href="#" className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition">
                  <FaTelegramPlane />
                </a>
                <a href="#" className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right FAQ Section */}
        <div
          className="flex flex-col justify-start bg-transparent w-full h-auto md:h-[483px]"
        >
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${faqBg} rounded-xl px-6 py-4 cursor-pointer transition border shadow-lg ${
                  openIndex === index ? "border-orange-500" : "border-transparent"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-base sm:text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <IoChevronDownSharp className="text-white text-lg" />
                  </div>
                </div>

                {openIndex === index && (
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-3 text-sm sm:text-base leading-relaxed`}>
                    {faq.answer}
                  </p>
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
