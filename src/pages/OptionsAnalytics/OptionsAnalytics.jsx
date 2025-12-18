import { useState } from 'react';
import OpenInterestChart from './components/OpenInterestChart';
import OpenInterestChangeChart from './components/OpenInterestChangeChart';
import VolumeStrikeChart from './components/VolumeStrikeChart';
import IVvsRVChart from './components/IVvsRVChart';
import './OptionsAnalytics.css';

const OptionsAnalytics = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [oiTimeframe, setOiTimeframe] = useState('D1');
  const [oiChangeTimeframe, setOiChangeTimeframe] = useState('D1');
  const [oiChangePeriod, setOiChangePeriod] = useState('Last 12 hours');
  const [volumeTimeframe, setVolumeTimeframe] = useState('D1');
  const [ivTimeframe, setIvTimeframe] = useState('Daily');

  return (
    <div className="options-analytics-container">
      {/* Open Interest Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title-section">
            <h3 className="chart-title">Open Interest</h3>
            <select 
              className="timeframe-select"
              value={oiTimeframe}
              onChange={(e) => setOiTimeframe(e.target.value)}
            >
              <option value="D1">D1</option>
              <option value="W1">W1</option>
              <option value="M1">M1</option>
            </select>
          </div>
          <div className="chart-controls">
            <div className="axis-toggles">
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m4.42 5.33-4 2.39v6.529h14v-10L8.85 8.232 4.42 5.33Z" fill="url(#YAxisLeftA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.599 4.49 9.16 8.51 4.958 5.664 1.34 7.898l-.315-.51 3.947-2.44 4.172 2.827 5.097-3.768.357.483Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M.421 13.498h14"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                  <defs>
                    <linearGradient id="YAxisLeftA" x1="7.421" y1="4.249" x2="7.421" y2="14.248" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#676B7B" stopOpacity="0.5"></stop>
                      <stop offset="1" stopOpacity="0.12"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Y - Open Interest($)
              </button>
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="m1.92 6.824 2.5-1.494 4.43 2.902 5.57-3.983v10h-14V13h1.5V6.824Z" fill="url(#XAxisChartA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16 8.51 14.6 4.49l-.357-.483-5.097 3.769-4.172-2.828-3.052 1.886v.705l3.037-1.876L9.16 8.51Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M.421 13.498h14"></path>
                  <defs>
                    <linearGradient id="XAxisChartA" x1="7.421" y1="4.249" x2="7.421" y2="14.248" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#676B7B" stopOpacity="0.5"></stop>
                      <stop offset="1" stopOpacity="0.12"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                X - Strike($)
              </button>
            </div>
            <select 
              className="crypto-select"
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
            >
              <option value="BTC">🪙 BTC</option>
              <option value="ETH">🪙 ETH</option>
              <option value="SOL">🪙 SOL</option>
            </select>
          </div>
        </div>
        <OpenInterestChart crypto={selectedCrypto} timeframe={oiTimeframe} />
        <div className="chart-stats">
          <div className="stat-item">
            <span className="stat-label">Tot. Calls</span>
            <span className="stat-value">$110.44M</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Tot. Puts</span>
            <span className="stat-value">$77.29M</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">PCR</span>
            <span className="stat-value">0.70</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Max Pain</span>
            <span className="stat-value">93200</span>
          </div>
        </div>
      </div>

      {/* Open Interest Change Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title-section">
            <h3 className="chart-title">Open Interest Change</h3>
            <div className="dual-select">
              <select 
                className="timeframe-select"
                value={oiChangeTimeframe}
                onChange={(e) => setOiChangeTimeframe(e.target.value)}
              >
                <option value="D1">D1</option>
                <option value="W1">W1</option>
                <option value="M1">M1</option>
              </select>
              <select 
                className="period-select"
                value={oiChangePeriod}
                onChange={(e) => setOiChangePeriod(e.target.value)}
              >
                <option value="Last 12 hours">Last 12 hours</option>
                <option value="Last 24 hours">Last 24 hours</option>
                <option value="Last 7 days">Last 7 days</option>
              </select>
            </div>
          </div>
          <div className="chart-controls">
            <div className="axis-toggles">
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m4.42 5.33-4 2.39v6.529h14v-10L8.85 8.232 4.42 5.33Z" fill="url(#YAxisLeftA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.599 4.49 9.16 8.51 4.958 5.664 1.34 7.898l-.315-.51 3.947-2.44 4.172 2.827 5.097-3.768.357.483Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M.421 13.498h14"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                </svg>
                Y - Open Interest($)
              </button>
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="m1.92 6.824 2.5-1.494 4.43 2.902 5.57-3.983v10h-14V13h1.5V6.824Z" fill="url(#XAxisChartA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16 8.51 14.6 4.49l-.357-.483-5.097 3.769-4.172-2.828-3.052 1.886v.705l3.037-1.876L9.16 8.51Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M.421 13.498h14"></path>
                </svg>
                X - Strike($)
              </button>
            </div>
            <select className="crypto-select" value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
              <option value="BTC">🪙 BTC</option>
              <option value="ETH">🪙 ETH</option>
            </select>
          </div>
        </div>
        <OpenInterestChangeChart crypto={selectedCrypto} timeframe={oiChangeTimeframe} period={oiChangePeriod} />
      </div>

      {/* Volume vs Strike Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title-section">
            <h3 className="chart-title">Volume vs Strike</h3>
            <select 
              className="timeframe-select"
              value={volumeTimeframe}
              onChange={(e) => setVolumeTimeframe(e.target.value)}
            >
              <option value="D1">D1</option>
              <option value="W1">W1</option>
              <option value="M1">M1</option>
            </select>
          </div>
          <div className="chart-controls">
            <div className="axis-toggles">
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m4.42 5.33-4 2.39v6.529h14v-10L8.85 8.232 4.42 5.33Z" fill="url(#YAxisLeftA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.599 4.49 9.16 8.51 4.958 5.664 1.34 7.898l-.315-.51 3.947-2.44 4.172 2.827 5.097-3.768.357.483Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M.421 13.498h14"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                </svg>
                Y - Volume($)
              </button>
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="m1.92 6.824 2.5-1.494 4.43 2.902 5.57-3.983v10h-14V13h1.5V6.824Z" fill="url(#XAxisChartA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16 8.51 14.6 4.49l-.357-.483-5.097 3.769-4.172-2.828-3.052 1.886v.705l3.037-1.876L9.16 8.51Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M.421 13.498h14"></path>
                </svg>
                X - Strike($)
              </button>
            </div>
            <select className="crypto-select" value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
              <option value="BTC">🪙 BTC</option>
              <option value="ETH">🪙 ETH</option>
            </select>
          </div>
        </div>
        <VolumeStrikeChart crypto={selectedCrypto} timeframe={volumeTimeframe} />
        <div className="chart-stats">
          <div className="stat-item">
            <span className="stat-label">Tot. Calls</span>
            <span className="stat-value">$711.25M</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Tot. Puts</span>
            <span className="stat-value">$586.48M</span>
          </div>
        </div>
      </div>

      {/* IV vs RV Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title-section">
            <h3 className="chart-title">IV vs RV</h3>
            <select 
              className="timeframe-select"
              value={ivTimeframe}
              onChange={(e) => setIvTimeframe(e.target.value)}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="chart-controls">
            <div className="axis-toggles">
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m4.42 5.33-4 2.39v6.529h14v-10L8.85 8.232 4.42 5.33Z" fill="url(#YAxisLeftA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.599 4.49 9.16 8.51 4.958 5.664 1.34 7.898l-.315-.51 3.947-2.44 4.172 2.827 5.097-3.768.357.483Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M.421 13.498h14"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                </svg>
                Y - ATM Volatility(%)
              </button>
              <button className="axis-toggle active">
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="m1.92 6.824 2.5-1.494 4.43 2.902 5.57-3.983v10h-14V13h1.5V6.824Z" fill="url(#XAxisChartA)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16 8.51 14.6 4.49l-.357-.483-5.097 3.769-4.172-2.828-3.052 1.886v.705l3.037-1.876L9.16 8.51Z" fill="#F8B83A"></path>
                  <path stroke="#676B7B" strokeOpacity="0.5" strokeWidth="1.5" d="M1.171.249v13.999"></path>
                  <path stroke="#2894F9" strokeWidth="1.5" d="M.421 13.498h14"></path>
                </svg>
                X - Time(7d)
              </button>
            </div>
            <select className="crypto-select" value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
              <option value="BTC">🪙 BTC</option>
              <option value="ETH">🪙 ETH</option>
            </select>
          </div>
        </div>
        <IVvsRVChart crypto={selectedCrypto} timeframe={ivTimeframe} />
      </div>
    </div>
  );
};

export default OptionsAnalytics;
