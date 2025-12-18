import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Generate sample data for Open Interest Change
const generateOIChangeData = () => {
  const data = [];
  const currentPrice = 86600;
  const strikeStep = 400;
  
  for (let i = -20; i <= 22; i++) {
    const strike = currentPrice + (i * strikeStep);
    const distanceFromATM = Math.abs(i);
    
    // Generate realistic OI change values - can be positive or negative
    const callsChange = (Math.random() - 0.3) * (15 - distanceFromATM * 0.5) * 1000000;
    const putsChange = (Math.random() - 0.3) * (15 - distanceFromATM * 0.5) * 1000000;
    
    data.push({
      strike: strike,
      calls: callsChange,
      puts: putsChange,
      isATM: Math.abs(strike - currentPrice) < strikeStep
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const calls = payload.find(p => p.dataKey === 'calls')?.value || 0;
    const puts = payload.find(p => p.dataKey === 'puts')?.value || 0;
    
    return (
      <div className="chart-tooltip">
        <div className="tooltip-label">At Strike: ${label.toLocaleString()}</div>
        <div className="tooltip-item">
          <span className="tooltip-name" style={{ color: calls >= 0 ? '#00c087' : '#ff5252' }}>● Calls:</span>
          <span className="tooltip-value">${(calls / 1000).toFixed(2)}K</span>
        </div>
        <div className="tooltip-item">
          <span className="tooltip-name" style={{ color: puts >= 0 ? '#00c087' : '#ff5252' }}>● Puts:</span>
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

const OpenInterestChangeChart = ({ crypto, period }) => {
  const [data] = useState(generateOIChangeData());

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
              if (absValue >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (absValue >= 1000) return `${(value / 1000).toFixed(1)}K`;
              return value.toFixed(0);
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
          
          <Bar dataKey="calls" radius={[2, 2, 2, 2]}>
            {data.map((entry, index) => (
              <Cell key={`cell-calls-${index}`} fill={entry.calls >= 0 ? '#00c087' : '#ff5252'} />
            ))}
          </Bar>
          <Bar dataKey="puts" radius={[2, 2, 2, 2]}>
            {data.map((entry, index) => (
              <Cell key={`cell-puts-${index}`} fill={entry.puts >= 0 ? '#00c087' : '#ff5252'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

OpenInterestChangeChart.propTypes = {
  crypto: PropTypes.string.isRequired,
  timeframe: PropTypes.string,
  period: PropTypes.string
};

export default OpenInterestChangeChart;
