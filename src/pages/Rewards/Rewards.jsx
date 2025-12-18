import { useContext, useState } from "react";
import MyContext from "../../Context/Mycontext";
import { FiChevronDown } from "react-icons/fi";

const Rewards = () => {
  const { mode } = useContext(MyContext);
  const [expandedOffer, setExpandedOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "X-Mas Offer: 66% Discount on Options Trading Fee",
      descriptions: [
        "Options Trading Fee is now at 0.010% of notional value of the trade from the earlier 0.03%.",
        "This is applicable only on Options Trades.",
        "Options Trading Fee is capped at 3.5% of Option Premium."
      ],
      image: "https://static.delta.exchange/landing-page/offers/66-percent-xmas.png",
      ctaLabel: "Trade Now",
      ctaLink: "/markets/options"
    },
    {
      id: 2,
      title: "Scalper Offer: Pay 0 Closing Fees on All Futures",
      descriptions: [
        "Pay 0 fees on closing your Futures, hence maximizing your returns",
        "Your BTC Futures trade must be closed within 30 minutes and other futures trades must close within 15 minutes of opening.",
        "Offer is available for all Futures trades."
      ],
      image: "https://static.delta.exchange/landing-page/offers/scalper-offer-light.webp",
      ctaLabel: "Join Now",
      ctaLink: "/markets/futures"
    }
  ];

  return (
    <div className={`min-h-screen pb-20 ${mode === 'dark' ? 'bg-[#040911]' : 'bg-[#F0F2F5]'}`}>
      {/* Hero Banner Section */}
      <section className="w-full pt-10 px-4">
        <div className="max-w-[1200px] mx-auto rounded-xl overflow-hidden">
          <img 
            className="w-full h-auto object-cover" 
            src="https://www.delta.exchange/images/offers/offersBannerDesktop.png" 
            alt="Rewards Home Banner" 
          />
        </div>
      </section>

      {/* Offers Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto space-y-6">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className={`rounded-xl border shadow-md transition-all duration-300 ${
                mode === 'dark' 
                ? 'bg-[#0c111c] border-gray-800' 
                : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex flex-col lg:flex-row p-6 lg:p-7 gap-8 items-center lg:items-start text-left">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#FFB11A] text-lg">☀️</span>
                    <h3 className="text-[#FFB11A] text-xl sm:text-2xl font-bold tracking-tight">
                      {offer.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {offer.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-[10px] h-[10px] rounded-full border-2 border-orange-500 mt-1.5 shrink-0"></div>
                        <span className={`text-[15px] leading-relaxed font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-[#474D57]'}`}>
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Right Image */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                  <img 
                    alt="Offer Graphic" 
                    className="max-h-[220px] object-contain"
                    src={offer.image}
                  />
                </div>
              </div>

              {/* CTA Section */}
              <div className={`px-6 lg:px-7 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-6 ${mode === 'dark' ? 'border-gray-800' : 'border-gray-50'}`}>
                <button 
                  onClick={() => setExpandedOffer(offer.id === expandedOffer ? null : offer.id)}
                  className={`flex items-center gap-2 text-[14px] font-bold transition-colors ${mode === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                >
                  <span>Terms & Condition</span>
                  <FiChevronDown className={`transition-transform duration-300 ${expandedOffer === offer.id ? 'rotate-180' : ''}`} />
                </button>
                
                <a 
                  href={offer.ctaLink}
                  className="px-10 py-2.5 bg-[#FF6A0D] hover:bg-[#E85D00] text-white rounded-lg text-sm font-bold transition-all shadow-md active:scale-95"
                >
                  {offer.ctaLabel}
                </a>
              </div>

              {/* Terms Expansion Content (Mock) */}
              {expandedOffer === offer.id && (
                <div className={`px-8 lg:px-10 pb-8 text-xs leading-relaxed ${mode === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  * Disclaimer: Valid for a limited time only. Rewards are subject to verification. Delta Exchange reserves the right to modify or terminate this offer at any time without prior notice.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
