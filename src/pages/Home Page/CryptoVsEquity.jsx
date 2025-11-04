import React, { useContext } from "react";
import Mycontext from "../../Context/Mycontext";

const CryptoFOComparison = () => {
  const { mode } = useContext(Mycontext);
  const data = [
    {
      label: "Trading Hours",
      equity: (
        <>
          6 hours × 5 days
          <br />
          <span className="text-gray-500 text-sm">
            (no trading on exchange holidays)
          </span>
        </>
      ),
      crypto: (
        <>
          24 × 7
          <br />
          <span className="text-gray-500 text-sm">(no trading holidays)</span>
        </>
      ),
      benefit: "Trade whenever you want",
    },
    {
      label: "Typical IV (Implied Volatility)",
      equity: "15%",
      crypto: "50%",
      benefit: "More opportunities in short term trading",
    },
    {
      label: "Minimum capital required for 1 lot Futures",
      equity: "~INR 210,000",
      crypto: (
        <>
          INR 100
          <br />
          <span className="text-gray-500 text-sm">(1 Lot = 0.001 BTC)</span>
        </>
      ),
      benefit: "Get started with capital you are comfortable with",
    },
    {
      label: "Options Expiry",
      equity: "No daily. Weekly only 1 index per exchange + Monthly",
      crypto: (
        <>
          Daily + Weekly + Monthly
          <br />
          <span className="text-gray-500 text-sm">(on BTC & ETH)</span>
        </>
      ),
      benefit: "More opportunities for expiry trading",
    },
    {
      label: "Futures Expiry",
      equity: "Monthly",
      crypto: "Perpetual Contracts",
      benefit: "No need to roll over",
    },
    {
      label: "Leverage",
      equity: (
        <>
          Approximately 7×
          <br />
          <span className="text-gray-500 text-sm">
            (for index futures/options)
          </span>
        </>
      ),
      crypto: "Up to 200× & Independent of trading capital",
      benefit: "Higher returns on same capital",
    },
    {
      label: (
        <>
          ATM Straddle Premium
          <br />
          <span className="text-gray-500 text-sm">
            Index Value (Weekly Expiry)
          </span>
        </>
      ),
      equity: (
        <>
          Premium ATM (Call + Put)
          <br />
          <span className="text-gray-500 text-sm">Equity Index ≈ 1%</span>
        </>
      ),
      crypto: (
        <>
          Premium ATM (Call + Put)
          <br />
          <span className="text-gray-500 text-sm">BTC Index ≈ 3–4%</span>
        </>
      ),
      benefit: "Higher option premiums",
    },
    {
      label: "Applicability of Technical Analysis & trading theories",
      equity: "Yes",
      crypto: "Yes",
      benefit: "Use existing skill & knowledge of Trading",
    },
    {
      label: "Taxation on Profits",
      equity: "Treated like Business Income",
      crypto: "Treated like Business Income",
      benefit:
        "Taxation on gains/losses in Crypto F&O same as Equity F&O",
    },
    {
      label: "Deposit/Settlement",
      equity: "in INR",
      crypto: "in INR",
      benefit: "No currency conversion",
    },
    {
      label: (
        <>
          Need of holding underlying
          <br />
          <span className="text-gray-500 text-sm">
            (Crypto Coins, Equity Indices for trading F&O)
          </span>
        </>
      ),
      equity: "No",
      crypto: "No",
      benefit: "No need to buy/hold crypto for trading Crypto F&O",
    },
    {
      label: "Trading Cost",
      equity: "Brokerage + Transaction Charges + Other Charges",
      crypto: "Trading Fees / Brokerage",
      benefit: "-",
    },
    {
      label: "Taxation",
      equity: "Transaction Tax + GST on Brokerage",
      crypto: "GST (18%) on brokerage",
      benefit: "-",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className={`relative flex flex-col items-center justify-center min-h-[60vh] ${mode === "dark" ? "bg-[#111]" : "bg-gray-900"} overflow-hidden text-center px-4`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:60px_60px] opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-3xl leading-snug">
            Crypto F&O on{" "}
            <span className="text-orange-500">Delta Exchange India</span>
          </h1>

          <div className="px-6 py-2 bg-orange-500/20 text-orange-500 border border-orange-500 rounded-full text-base sm:text-3xl font-semibold mt-3">
            vs
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-2">
            Equity F&O Trading
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2">
            Like Equities F&O but better!
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
      <section className={`${mode === "dark" ? "bg-[#15161B]" : "bg-[#fafafa]"} py-16 px-3 sm:px-6`}>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className={`min-w-[900px] ${mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-white border-gray-200"} rounded-3xl shadow-sm border`}>
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className={`${mode === "dark" ? "text-gray-200" : "text-gray-800"} text-base sm:text-md font-medium`}>
                  <th className={`w-1/4 ${mode === "dark" ? "bg-[#1E1F24]" : "bg-[#fafafa]"} rounded-tl-3xl p-3`}></th>
                  <th className={`w-1/4 ${mode === "dark" ? "bg-[#2A2B30]" : "bg-gray-100"} p-3`}>Equity F&O</th>
                  <th className={`w-1/4 ${mode === "dark" ? "bg-[#23242A]" : "bg-gray-50"} p-3`}>
                    Crypto F&O on Delta Exchange India
                  </th>
                  <th className={`w-1/4 ${mode === "dark" ? "bg-amber-900/30" : "bg-amber-200/60"} p-3 rounded-tr-3xl`}>
                    Benefits with Delta Exchange India
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t ${mode === "dark" ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-700"} text-xs sm:text-sm md:text-base`}
                  >
                    <td className={`p-3 font-medium ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>{row.label}</td>
                    <td className={`p-3 ${mode === "dark" ? "bg-[#23242A]" : "bg-gray-50"}`}>{row.equity}</td>
                    <td className={`p-3 ${mode === "dark" ? "bg-[#2A2B30]" : "bg-gray-100"}`}>{row.crypto}</td>
                    <td className={`p-3 ${mode === "dark" ? "bg-amber-900/20 text-amber-300" : "bg-amber-50 text-amber-900"} font-medium`}>
                      {row.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className={`${mode === "dark" ? "bg-[#1E1F24] border-gray-700 text-gray-300" : "bg-white border-gray-200 text-gray-600"} border rounded-xl px-5 py-6 text-lg flex items-center justify-center gap-2`}>
            <span className="text-orange-500 font-semibold">⚠ Disclaimer:</span>
            <span>
              This is for educational purpose only. Please do your own due
              diligence.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoFOComparison;
