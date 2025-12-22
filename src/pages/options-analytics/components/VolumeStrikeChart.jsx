import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

// Generate more realistic sample data for Volume vs Strike
const generateVolumeData = () => {
  const data = [];
  const currentPrice = 86410.6;
  const strikeStep = 400;
  
  for (let i = -15; i <= 15; i++) {
    const strike = Math.round((currentPrice + (i * strikeStep)) / 100) * 100;
    const distanceFromATM = Math.abs(i);
    
    const baseValue = Math.exp(-Math.pow(distanceFromATM / 6, 2)) * 10000000;
    
    const callsVolume = Math.max(0, baseValue * (0.4 + Math.random()));
    const putsVolume = Math.max(0, baseValue * (0.4 + Math.random()));
    
    data.push({
      strike: strike,
      calls: callsVolume,
      puts: putsVolume,
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
            <span style={{ color: 'var(--positive)' }}>●</span> Calls Volume
          </span>
          <span className="font-bold tabular-nums text-[var(--positive)]">
            {formatCurrency(calls)}
          </span>
        </div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)] flex items-center gap-2">
            <span style={{ color: 'var(--negative)' }}>●</span> Puts Volume
          </span>
          <span className="font-bold tabular-nums text-[var(--negative)]">
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

const VolumeStrikeChart = ({ crypto }) => {
  const data = useMemo(() => generateVolumeData(), []);
  const currentPrice = 86410.6;

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
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
              if (value === 0) return '0';
              if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
              return value;
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 4 }} />
          
          <ReferenceLine 
            x={currentPrice} 
            stroke="var(--main-text-muted)" 
            strokeDasharray="3 3"
            strokeWidth={1.5}
            label={{ 
              value: `${crypto}: ${currentPrice.toLocaleString()}`, 
              position: 'top',
              fill: 'var(--main-text-primary)',
              fontSize: 10,
              fontWeight: 600,
              style: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: '2px 6px',
                borderRadius: '4px'
              }
            }}
          />
          
          <Bar dataKey="calls" fill="var(--positive)" radius={[3, 3, 0, 0]} barSize={8} />
          <Bar dataKey="puts" fill="var(--negative)" radius={[3, 3, 0, 0]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

VolumeStrikeChart.propTypes = {
  crypto: PropTypes.string.isRequired
};

export default VolumeStrikeChart;
