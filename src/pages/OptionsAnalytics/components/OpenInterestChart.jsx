import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

// Generate more realistic sample data for Open Interest
const generateOIData = () => {
  const data = [];
  const currentPrice = 86546;
  const strikeStep = 400;
  
  // Create a range of strikes around current price
  for (let i = -15; i <= 15; i++) {
    const strike = Math.round((currentPrice + (i * strikeStep)) / 100) * 100;
    const distanceFromATM = Math.abs(i);
    
    // Distribution favoring ATM
    const baseValue = Math.exp(-Math.pow(distanceFromATM / 8, 2)) * 15000000;
    
    // Random variations
    const callsOI = Math.max(0, baseValue * (0.5 + Math.random()));
    const putsOI = Math.max(0, baseValue * (0.3 + Math.random()));
    
    data.push({
      strike: strike,
      calls: callsOI,
      puts: putsOI,
      isATM: distanceFromATM === 0
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const calls = payload.find(p => p.dataKey === 'calls')?.value || 0;
    const puts = payload.find(p => p.dataKey === 'puts')?.value || 0;
    
    const formatCurrency = (val) => {
      if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
      if (val >= 1000) return `$${(val / 1000).toFixed(2)}K`;
      return `$${val.toFixed(2)}`;
    };

    return (
      <div className="bg-[rgba(13,17,23,0.95)] backdrop-blur-[4px] border border-[var(--divider-primary)] rounded-lg p-[10px] min-w-[150px] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="text-xs font-bold text-[var(--main-text-primary)] mb-2 pb-1 border-b border-[var(--divider-primary)]">Strike: ${label.toLocaleString()}</div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)] flex items-center gap-2">
            <span style={{ color: 'var(--positive)' }}>●</span> Calls
          </span>
          <span className="font-bold tabular-nums text-[var(--positive)]">
            {formatCurrency(calls)}
          </span>
        </div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)] flex items-center gap-2">
            <span style={{ color: 'var(--negative)' }}>●</span> Puts
          </span>
          <span className="font-bold tabular-nums text-[var(--negative)]">
            {formatCurrency(puts)}
          </span>
        </div>
        <div className="flex justify-between items-center gap-5 text-[11px] mt-2 pt-2 border-t border-[var(--divider-primary)]">
          <span className="text-[var(--main-text-secondary)]">Total OI</span>
          <span className="font-bold tabular-nums text-[var(--main-text-primary)]">{formatCurrency(calls + puts)}</span>
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
  const data = useMemo(() => generateOIData(), []);
  const currentPrice = 86546.7;
  const maxPain = 82400;

  return (
    <div className="w-full h-[250px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
          barGap={2}
        >
          <defs>
            <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--positive)" stopOpacity={1}/>
              <stop offset="100%" stopColor="var(--positive)" stopOpacity={0.6}/>
            </linearGradient>
            <linearGradient id="putsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--negative)" stopOpacity={1}/>
              <stop offset="100%" stopColor="var(--negative)" stopOpacity={0.6}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="none" 
            vertical={false} 
            stroke="var(--divider-primary)" 
          />
          <XAxis 
            dataKey="strike" 
            stroke="var(--main-text-muted)"
            tick={{ fill: 'var(--main-text-secondary)', fontSize: 10, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            dy={10}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <YAxis 
            stroke="var(--main-text-muted)"
            tick={{ fill: 'var(--main-text-secondary)', fontSize: 10, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            dx={-10}
            tickFormatter={(value) => {
              if (value === 0) return '0';
              if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
              return value;
            }}
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 4 }} 
          />
          
          <ReferenceLine 
            x={currentPrice} 
            stroke="#94a3b8" 
            strokeDasharray="3 3"
            strokeWidth={1.5}
            label={{ 
              value: `${crypto}: ${currentPrice.toLocaleString()}`, 
              position: 'top',
              fill: '#ffffff',
              fontSize: 10,
              fontWeight: 600,
              style: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: '2px 6px',
                borderRadius: '4px',
              }
            }}
          />
          
          <ReferenceLine 
            x={maxPain} 
            stroke="var(--negative)" 
            strokeDasharray="3 3"
            strokeWidth={1.5}
            label={{ 
              value: `Max pain: ${maxPain.toLocaleString()}`, 
              position: 'top',
              fill: 'var(--negative)',
              fontSize: 10,
              fontWeight: 600,
              style: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: '2px 6px',
                borderRadius: '4px',
              }
            }}
          />
          
          <Bar 
            dataKey="calls" 
            fill="url(#callsGradient)" 
            radius={[3, 3, 0, 0]} 
            barSize={10}
          />
          <Bar 
            dataKey="puts" 
            fill="url(#putsGradient)" 
            radius={[3, 3, 0, 0]} 
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

OpenInterestChart.propTypes = {
  crypto: PropTypes.string.isRequired
};

export default OpenInterestChart;
