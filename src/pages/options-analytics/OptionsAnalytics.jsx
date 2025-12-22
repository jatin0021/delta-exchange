import { useState } from 'react';
import OpenInterestChart from './components/OpenInterestChart';
import OpenInterestChangeChart from './components/OpenInterestChangeChart';
import VolumeStrikeChart from './components/VolumeStrikeChart';
import IVvsRVChart from './components/IVvsRVChart';

const OptionsAnalytics = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [oiTimeframe, setOiTimeframe] = useState('D1');
  const [oiChangeTimeframe, setOiChangeTimeframe] = useState('D1');
  const [oiChangePeriod, setOiChangePeriod] = useState('Last 12 hours');
  const [volumeTimeframe, setVolumeTimeframe] = useState('D1');
  const [ivTimeframe, setIvTimeframe] = useState('Daily');

  return (
    <div className="p-3 bg-[var(--main-bg-primary)] min-h-screen text-[var(--main-text-primary)] w-full">
      {/* Options Analytics Header */}
      <div className="flex justify-between items-center p-[6px_12px] bg-[var(--main-bg-surface)] border border-[var(--divider-primary)] rounded-[10px] mb-4 flex-wrap gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.1)]" id="options-analytics-header">
        <div className="flex gap-[2px]">
          <a href="#recent-trades-section" className="p-[6px_12px] text-[var(--main-text-secondary)] text-[13px] font-semibold no-underline rounded-dev transition-all duration-200 hover:text-[var(--main-text-primary)] hover:bg-[var(--main-bg-surface-alt)]">Recent Trades</a>
          <a href="#taker-activity-chart" className="p-[6px_12px] text-[var(--main-text-secondary)] text-[13px] font-semibold no-underline rounded-dev transition-all duration-200 hover:text-[var(--main-text-primary)] hover:bg-[var(--main-bg-surface-alt)]">Taker Activity</a>
          <a href="#iv-rv-chart" className="p-[6px_12px] text-[var(--main-text-secondary)] text-[13px] font-semibold no-underline rounded-dev transition-all duration-200 hover:text-[var(--main-text-primary)] hover:bg-[var(--main-bg-surface-alt)]">Implied Volatility</a>
          <a href="#volume-strike-chart" className="p-[6px_12px] text-[var(--main-text-secondary)] text-[13px] font-semibold no-underline rounded-dev transition-all duration-200 hover:text-[var(--main-text-primary)] hover:bg-[var(--main-bg-surface-alt)]">Volume</a>
          <a href="#open-interest-chart" className="p-[6px_12px] text-[var(--primary-color)] bg-[rgba(40,148,249,0.08)] border border-[rgba(40,148,249,0.15)] text-[13px] font-semibold no-underline rounded-dev transition-all duration-200">Open Interest</a>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase text-[var(--main-text-muted)] font-bold tracking-[0.04em] mb-px">24h Vol</span>
              <span className="text-[13px] text-[var(--main-text-primary)] font-bold tabular-nums">$3.07B</span>
            </div>
          </div>
          <div className="w-px h-5 bg-[var(--divider-primary)]"></div>
          <div className="flex items-center">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase text-[var(--main-text-muted)] font-bold tracking-[0.04em] mb-px">Open Interest</span>
              <span className="text-[13px] text-[var(--main-text-primary)] font-bold tabular-nums">$466.32M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Open Interest Section */}
      <div className="bg-[var(--main-bg-surface)] rounded-lg p-3 mb-3 border border-[var(--divider-primary)] shadow-[0_1px_6px_rgba(0,0,0,0.15)]" id="open-interest-chart">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold text-[var(--main-text-primary)] m-0">Open Interest</h3>
            <select 
              className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
              value={oiTimeframe}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
              onChange={(e) => setOiTimeframe(e.target.value)}
            >
              <option value="D1">D1</option>
              <option value="W1">W1</option>
              <option value="M1">M1</option>
            </select>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex gap-1 p-[3px] bg-[var(--main-bg-surface-alt)] rounded-md border border-[var(--divider-primary)]">
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer transition-all duration-200">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="m4.42 5.33-4 2.39v6.529h14v-10L8.85 8.232 4.42 5.33Z" fill="rgba(103, 107, 123, 0.5)"></path>
                  <path d="M14.599 4.49 9.16 8.51 4.958 5.664 1.34 7.898" stroke="#F8B83A" strokeWidth="1.5"></path>
                  <path d="M0.421 13.498h14" stroke="rgba(103, 107, 123, 0.5)" strokeWidth="1.5"></path>
                  <path d="M1.171 0.249v13.999" stroke="#2894F9" strokeWidth="1.5"></path>
                </svg>
                Y - Open Interest($)
              </button>
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer transition-all duration-200">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="m1.92 6.824 2.5-1.494 4.43 2.902 5.57-3.983" stroke="#F8B83A" strokeWidth="1.5"></path>
                  <path d="M1.171 0.249v13.999" stroke="rgba(103, 107, 123, 0.5)" strokeWidth="1.5"></path>
                  <path d="M0.421 13.498h14" stroke="#2894F9" strokeWidth="1.5"></path>
                </svg>
                X - Strike($)
              </button>
            </div>
            
            <select 
              className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
              value={selectedCrypto}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
              onChange={(e) => setSelectedCrypto(e.target.value)}
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="SOL">SOL</option>
            </select>
          </div>
        </div>

        <OpenInterestChart crypto={selectedCrypto} timeframe={oiTimeframe} />

        <ul className="flex gap-0 mt-4 p-[12px_0_0_0] border-t border-[var(--divider-primary)] list-none flex-wrap">
          <li className="flex flex-col gap-1 p-[0_12px] border-r border-[var(--divider-primary)]">
            <span className="text-[10px] text-[var(--main-text-secondary)] uppercase tracking-[0.04em] font-semibold">Tot. Calls</span>
            <span className="text-sm text-[var(--main-text-primary)] font-bold">$90.02M</span>
          </li>
          <li className="flex flex-col gap-1 p-[0_12px] border-r border-[var(--divider-primary)]">
            <span className="text-[10px] text-[var(--main-text-secondary)] uppercase tracking-[0.04em] font-semibold">Tot. Puts</span>
            <span className="text-sm text-[var(--main-text-primary)] font-bold">$34.82M</span>
          </li>
          <li className="flex flex-col gap-1 p-[0_12px] border-r border-[var(--divider-primary)]">
            <span className="text-[10px] text-[var(--main-text-secondary)] uppercase tracking-[0.04em] font-semibold">PCR</span>
            <span className="text-sm text-[var(--main-text-primary)] font-bold">0.39</span>
          </li>
          <li className="flex flex-col gap-1 p-[0_12px] border-r-0">
            <span className="text-[10px] text-[var(--main-text-secondary)] uppercase tracking-[0.04em] font-semibold">Max Pain</span>
            <span className="text-sm text-[var(--main-text-primary)] font-bold">82400</span>
          </li>
        </ul>
      </div>

      {/* Open Interest Change Section */}
      <div className="bg-[var(--main-bg-surface)] rounded-lg p-3 mb-3 border border-[var(--divider-primary)] shadow-[0_1px_6px_rgba(0,0,0,0.15)]" id="taker-activity-chart">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold text-[var(--main-text-primary)] m-0">Open Interest Change</h3>
            <div className="flex gap-2">
              <select 
                className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
                value={oiChangeTimeframe} 
                onChange={(e) => setOiChangeTimeframe(e.target.value)}
              >
                <option value="D1">D1</option>
                <option value="W1">W1</option>
              </select>
              <select 
                className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
                value={oiChangePeriod} 
                onChange={(e) => setOiChangePeriod(e.target.value)}
              >
                <option value="Last 12 hours">Last 12 hours</option>
                <option value="Last 24 hours">Last 24 hours</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex gap-1 p-[3px] bg-[var(--main-bg-surface-alt)] rounded-md border border-[var(--divider-primary)]">
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer">Y - Open Interest($)</button>
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer">X - Strike($)</button>
            </div>
            <select 
               className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
               value={selectedCrypto} 
               onChange={(e) => setSelectedCrypto(e.target.value)}
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>
        <OpenInterestChangeChart crypto={selectedCrypto} timeframe={oiChangeTimeframe} period={oiChangePeriod} />
      </div>

      {/* Volume vs Strike Section */}
      <div className="bg-[var(--main-bg-surface)] rounded-lg p-3 mb-3 border border-[var(--divider-primary)] shadow-[0_1px_6px_rgba(0,0,0,0.15)]" id="volume-strike-chart">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold text-[var(--main-text-primary)] m-0">Volume vs Strike</h3>
            <select 
              className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
              value={volumeTimeframe} 
              onChange={(e) => setVolumeTimeframe(e.target.value)}
            >
              <option value="D1">D1</option>
              <option value="W1">W1</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 p-[3px] bg-[var(--main-bg-surface-alt)] rounded-md border border-[var(--divider-primary)]">
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer">Y - Volume($)</button>
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer">X - Strike($)</button>
            </div>
            <select 
               className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
               value={selectedCrypto} 
               onChange={(e) => setSelectedCrypto(e.target.value)}
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>
        <VolumeStrikeChart crypto={selectedCrypto} timeframe={volumeTimeframe} />
        <ul className="flex gap-0 mt-4 p-[12px_0_0_0] border-t border-[var(--divider-primary)] list-none flex-wrap">
          <li className="flex flex-col gap-1 p-[0_12px] border-r border-[var(--divider-primary)]">
            <span className="text-[10px] text-[var(--main-text-secondary)] uppercase tracking-[0.04em] font-semibold">Tot. Calls Volume</span>
            <span className="text-sm text-[var(--main-text-primary)] font-bold">$711.25M</span>
          </li>
          <li className="flex flex-col gap-1 p-[0_12px] border-r-0">
            <span className="text-[10px] text-[var(--main-text-secondary)] uppercase tracking-[0.04em] font-semibold">Tot. Puts Volume</span>
            <span className="text-sm text-[var(--main-text-primary)] font-bold">$586.48M</span>
          </li>
        </ul>
      </div>

      {/* IV vs RV Section */}
      <div className="bg-[var(--main-bg-surface)] rounded-lg p-3 border border-[var(--divider-primary)] shadow-[0_1px_6px_rgba(0,0,0,0.15)]" id="iv-rv-chart">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold text-[var(--main-text-primary)] m-0">IV vs RV</h3>
            <select 
              className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
              value={ivTimeframe} 
              onChange={(e) => setIvTimeframe(e.target.value)}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 p-[3px] bg-[var(--main-bg-surface-alt)] rounded-md border border-[var(--divider-primary)]">
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer">Y - ATM Volatility(%)</button>
              <button className="flex items-center gap-[6px] p-[4px_10px] bg-[var(--primary-color)] text-white rounded-sm text-[11px] font-semibold cursor-pointer">X - Time(7d)</button>
            </div>
            <select 
               className="p-[6px_28px_6px_10px] bg-[var(--main-bg-surface-alt)] border border-[var(--divider-primary)] rounded-md text-[var(--main-text-primary)] text-xs font-semibold cursor-pointer appearance-none bg-[position:right_10px_center] bg-[size:8px] bg-no-repeat"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z' fill='%238b949e'/%3E%3C/svg%3E")` }}
               value={selectedCrypto} 
               onChange={(e) => setSelectedCrypto(e.target.value)}
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>
        <IVvsRVChart crypto={selectedCrypto} timeframe={ivTimeframe} />
      </div>
    </div>
  );
};

export default OptionsAnalytics;
