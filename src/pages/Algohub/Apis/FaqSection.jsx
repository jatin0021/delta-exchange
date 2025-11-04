import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    q: "How do I generate and activate my API Key?",
    a: (
      <>
        To start algorithmic trading on Delta Exchange, you'll need an API key.
        You can generate and activate your API key through your Delta Exchange
        account on the{" "}
        <a
          href="/app/account/manageapikeys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff7a00] hover:underline"
        >
          “Create A New API Key”
        </a>{" "}
        page. For detailed steps, refer to the{" "}
        <a
          href="https://docs.delta.exchange/#generating-an-api-key"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff7a00] hover:underline"
        >
          API key management guide.
        </a>
      </>
    ),
  },
  {
    q: "Is there a cost associated with using the API?",
    a: "Using the Delta Exchange API for algo trading or other operations is free. Both Trading APIs and Data APIs can be used absolutely with no cost.",
  },
  {
    q: "Can I automate trading strategies using the API?",
    a: "Yes, you can fully automate trading strategies with the Delta Exchange API. It supports integration with trading bots and platforms like TradingView and Tradetron, making it an excellent choice for algo or quant trading.",
  },
  {
    q: "What programming languages and libraries are supported?",
    a: (
      <>
        Delta Exchange APIs are compatible with almost all major programming
        languages. You can find sample code snippets in the{" "}
        <a
          href="https://docs.delta.exchange/#introduction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff7a00] hover:underline"
        >
          API documentation
        </a>
        .
      </>
    ),
  },
  {
    q: "What steps can I take if my API integration is not working?",
    a: (
      <>
        Ensure your API key is active and correctly configured. <br />
        Verify your IP address is whitelisted if required. <br />
        Double-check the API endpoint and version for your setup. <br />
        For additional help, consult the troubleshooting guide in the docs.
      </>
    ),
  },
  {
    q: "Is there a demo or paper trading mode for testing?",
    a: "Yes, Delta Exchange offers a simulation environment called testnet. Use the testnet endpoints in the API documentation to experiment without risking real funds.",
  },
  {
    q: "What are the steps to create a trading bot?",
    a: "You can create a trading bot that gives buy/sell alerts and then use Delta Exchange APIs to trade, place orders, fetch live tick data, and manage positions.",
  },
  {
    q: "Is there a community or support forum for API users?",
    a: (
      <>
        Yes, join{" "}
        <a
          href="https://community.india.delta.exchange/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff7a00] hover:underline"
        >
          Delta Exchange India Community
        </a>{" "}
        to connect with traders, share strategies, and get algo-trading support.
      </>
    ),
  },
  {
    q: 'What should I do if I receive an "Invalid API Key" error?',
    a: (
      <>
        If you encounter this error, try the following: <br />• Verify your API
        key and secret. <br />• Check that the key has the required permissions.{" "}
        <br />• Ensure your IP is whitelisted if necessary.
      </>
    ),
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#141416] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1d] border border-[#2b2b2e] rounded-xl transition hover:border-[#ff7a00]/40"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full cursor-pointer flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-gray-300 font-medium text-sm sm:text-base">
                  {item.q}
                </span>
                <FiChevronRight
                  className={`text-gray-400 text-2xl transition-transform ${
                    openIndex === index ? "rotate-90 text-[#ff7a00]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
