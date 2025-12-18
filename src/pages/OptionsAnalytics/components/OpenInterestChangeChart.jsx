import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

// Generate sample data for Open Interest Change
const generateOIChangeData = () => {
  const data = [];
  const currentPrice = 86546;
  const strikeStep = 400;
  
  for (let i = -15; i <= 15; i++) {
    const strike = Math.round((currentPrice + (i * strikeStep)) / 100) * 100;
    const distanceFromATM = Math.abs(i);
    
    // Distribution favoring ATM
    const baseValue = Math.exp(-Math.pow(distanceFromATM / 8, 2)) * 5000000;
    
    // Generate realistic OI change values - can be positive or negative
    const callsChange = (Math.random() - 0.45) * baseValue * 2;
    const putsChange = (Math.random() - 0.45) * baseValue * 2;
    
    data.push({
      strike: strike,
      calls: callsChange,
      puts: putsChange,
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
      const sign = val >= 0 ? '+' : '';
      const absVal = Math.abs(val);
      if (absVal >= 1000000) return `${sign}$${(val / 1000000).toFixed(2)}M`;
      if (absVal >= 1000) return `${sign}$${(val / 1000).toFixed(2)}K`;
      return `${sign}$${val.toFixed(2)}`;
    };

    return (
      <div className="bg-[rgba(13,17,23,0.95)] backdrop-blur-[4px] border border-[var(--divider-primary)] rounded-lg p-[10px] min-w-[150px] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="text-xs font-bold text-[var(--main-text-primary)] mb-2 pb-1 border-b border-[var(--divider-primary)]">Strike: ${label.toLocaleString()}</div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)]">Calls Change</span>
          <span className="font-bold tabular-nums" style={{ color: calls >= 0 ? 'var(--positive)' : 'var(--negative)' }}>
            {formatCurrency(calls)}
          </span>
        </div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)]">Puts Change</span>
          <span className="font-bold tabular-nums" style={{ color: puts >= 0 ? 'var(--positive)' : 'var(--negative)' }}>
            {formatCurrency(puts)}
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
  label: PropTypes.number
};

const OpenInterestChangeChart = () => {
  const data = useMemo(() => generateOIChangeData(), []);

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
          barGap={2}
        >
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
              const absValue = Math.abs(value);
              const sign = value < 0 ? '-' : '';
              if (absValue >= 1000000) return `${sign}${(absValue / 1000000).toFixed(0)}M`;
              if (absValue >= 1000) return `${sign}${(absValue / 1000).toFixed(0)}K`;
              return value;
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 4 }} />
          
          <Bar dataKey="calls" radius={[3, 3, 3, 3]} barSize={8}>
            {data.map((entry, index) => (
              <Cell key={`cell-calls-${index}`} fill={entry.calls >= 0 ? 'var(--positive)' : 'var(--negative)'} fillOpacity={0.8} />
            ))}
          </Bar>
          <Bar dataKey="puts" radius={[3, 3, 3, 3]} barSize={8}>
            {data.map((entry, index) => (
              <Cell key={`cell-puts-${index}`} fill={entry.puts >= 0 ? 'var(--positive)' : 'var(--negative)'} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OpenInterestChangeChart;
