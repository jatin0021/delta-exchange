import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Generate sample data for IV vs RV
const generateIVRVData = () => {
  const data = [];
  const days = 7;
  const now = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Generate realistic volatility values
    const baseIV = 55 + Math.random() * 10;
    const baseRV = 45 + Math.random() * 8;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      timestamp: date.getTime(),
      iv: baseIV,
      rv: baseRV,
      ivRvSpread: baseIV - baseRV
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const iv = payload.find(p => p.dataKey === 'iv')?.value || 0;
    const rv = payload.find(p => p.dataKey === 'rv')?.value || 0;
    const spread = iv - rv;
    
    return (
      <div className="chart-tooltip">
        <div className="tooltip-label">{label}</div>
        <div className="tooltip-item">
          <span className="tooltip-name" style={{ color: '#2894F9' }}>● IV (Implied Volatility):</span>
          <span className="tooltip-value">{iv.toFixed(2)}%</span>
        </div>
        <div className="tooltip-item">
          <span className="tooltip-name" style={{ color: '#F8B83A' }}>● RV (Realized Volatility):</span>
          <span className="tooltip-value">{rv.toFixed(2)}%</span>
        </div>
        <div className="tooltip-item" style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="tooltip-name">IV-RV Spread:</span>
          <span className="tooltip-value" style={{ color: spread > 0 ? '#00c087' : '#ff5252' }}>
            {spread > 0 ? '+' : ''}{spread.toFixed(2)}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string
};

const IVvsRVChart = ({ crypto }) => {
  const [data] = useState(generateIVRVData());

  return (
    <div className="chart-container" style={{ height: '330px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="date" 
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 11 }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis 
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 11 }}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            label={{ 
              value: 'ATM Volatility(%)', 
              angle: -90, 
              position: 'insideLeft',
              style: { fill: '#ffffff', fontSize: 12 }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            content={() => (
              <div className="legend-container">
                <div className="legend-item">
                  <div style={{ 
                    width: '20px', 
                    height: '2px', 
                    background: '#2894F9',
                    borderRadius: '1px'
                  }}></div>
                  <span>IV (Implied Volatility)</span>
                </div>
                <div className="legend-item">
                  <div style={{ 
                    width: '20px', 
                    height: '2px', 
                    background: '#F8B83A',
                    borderRadius: '1px'
                  }}></div>
                  <span>RV (Realized Volatility)</span>
                </div>
              </div>
            )}
          />
          
          <Line 
            type="monotone" 
            dataKey="iv" 
            stroke="#2894F9" 
            strokeWidth={2.5}
            dot={{ fill: '#2894F9', r: 4 }}
            activeDot={{ r: 6, fill: '#2894F9', stroke: '#fff', strokeWidth: 2 }}
            name="IV"
          />
          <Line 
            type="monotone" 
            dataKey="rv" 
            stroke="#F8B83A" 
            strokeWidth={2.5}
            dot={{ fill: '#F8B83A', r: 4 }}
            activeDot={{ r: 6, fill: '#F8B83A', stroke: '#fff', strokeWidth: 2 }}
            name="RV"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

IVvsRVChart.propTypes = {
  crypto: PropTypes.string.isRequired,
  timeframe: PropTypes.string
};

export default IVvsRVChart;
