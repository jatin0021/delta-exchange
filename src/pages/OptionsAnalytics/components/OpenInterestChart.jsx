import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Generate sample data for Open Interest
const generateOIData = () => {
  const data = [];
  const currentPrice = 86600;
  const strikeStep = 400;
  
  for (let i = -20; i <= 22; i++) {
    const strike = currentPrice + (i * strikeStep);
    const distanceFromATM = Math.abs(i);
    
    // Generate realistic OI values - higher near ATM
    const callsOI = Math.max(0, (15 - distanceFromATM * 0.5) * Math.random() * 1000000);
    const putsOI = Math.max(0, (15 - distanceFromATM * 0.5) * Math.random() * 1000000);
    
    data.push({
      strike: strike,
      calls: callsOI,
      puts: -putsOI, // Negative for visual separation
      isATM: Math.abs(strike - currentPrice) < strikeStep
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const calls = payload.find(p => p.dataKey === 'calls')?.value || 0;
    const puts = Math.abs(payload.find(p => p.dataKey === 'puts')?.value || 0);
    
    return (
      <div className="chart-tooltip">
        <div className="tooltip-label">At Strike: ${label.toLocaleString()}</div>
        <div className="tooltip-item">
          <span className="tooltip-name" style={{ color: '#00c087' }}>● Calls:</span>
          <span className="tooltip-value">${(calls / 1000).toFixed(2)}K</span>
        </div>
        <div className="tooltip-item">
          <span className="tooltip-name" style={{ color: '#ff5252' }}>● Puts:</span>
          <span className="tooltip-value">${(puts / 1000).toFixed(2)}K</span>
        </div>
        <div className="tooltip-item" style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="tooltip-name">P-BTC-84400-161225</span>
        </div>
        <div className="tooltip-item">
          <span className="tooltip-value" style={{ color: '#F8B83A' }}>($112.00)</span>
        </div>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.number
};

const OpenInterestChart = ({ crypto }) => {
  const [data] = useState(generateOIData());
  const currentPrice = 86600;
  const maxPain = 93200;

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="strike" 
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 11 }}
            angle={-45}
            textAnchor="end"
            height={80}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <YAxis 
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 11 }}
            tickFormatter={(value) => {
              const absValue = Math.abs(value);
              if (absValue >= 1000000) return `${(absValue / 1000000).toFixed(1)}M`;
              if (absValue >= 1000) return `${(absValue / 1000).toFixed(1)}K`;
              return absValue.toFixed(0);
            }}
            label={{ 
              value: 'Open Interest($)', 
              angle: -90, 
              position: 'insideLeft',
              style: { fill: '#ffffff', fontSize: 12 }
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            content={() => (
              <div className="legend-container">
                <div className="legend-item">
                  <div className="legend-circle calls"></div>
                  <span>Calls</span>
                </div>
                <div className="legend-item">
                  <div className="legend-circle puts"></div>
                  <span>Puts</span>
                </div>
              </div>
            )}
          />
          
          {/* Current Price Line */}
          <ReferenceLine 
            x={currentPrice} 
            stroke="#999999" 
            strokeDasharray="3 1"
            label={{ 
              value: `${crypto}: ${currentPrice.toLocaleString()} USD`, 
              position: 'top',
              fill: '#ffffff',
              fontSize: 12,
              style: {
                background: 'rgba(20, 25, 34, 0.9)',
                padding: '5px 8px',
                borderRadius: '4px'
              }
            }}
          />
          
          {/* Max Pain Line */}
          <ReferenceLine 
            x={maxPain} 
            stroke="#ff5252" 
            strokeDasharray="4 3"
            label={{ 
              value: `Max pain: ${maxPain.toLocaleString()}`, 
              position: 'top',
              fill: '#ff5252',
              fontSize: 12,
              style: {
                background: 'rgba(255, 82, 82, 0.1)',
                padding: '5px 8px',
                borderRadius: '4px',
                border: '1px solid #ff5252'
              }
            }}
          />
          
          <Bar dataKey="calls" fill="#00c087" radius={[2, 2, 0, 0]} />
          <Bar dataKey="puts" fill="#ff5252" radius={[0, 0, 2, 2]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

OpenInterestChart.propTypes = {
  crypto: PropTypes.string.isRequired,
  timeframe: PropTypes.string
};

export default OpenInterestChart;
