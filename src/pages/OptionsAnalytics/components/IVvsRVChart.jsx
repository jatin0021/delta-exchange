import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

// Generate more realistic sample data for IV vs RV
const generateIVRVData = () => {
  const data = [];
  const days = 14;
  const now = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const dayFactor = i / days;
    const baseIV = 60 + Math.sin(dayFactor * Math.PI * 2) * 5 + Math.random() * 5;
    const baseRV = 50 + Math.cos(dayFactor * Math.PI * 2) * 4 + Math.random() * 5;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      iv: baseIV,
      rv: baseRV,
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
      <div className="bg-[rgba(13,17,23,0.95)] backdrop-blur-[4px] border border-[var(--divider-primary)] rounded-lg p-[10px] min-w-[150px] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="text-xs font-bold text-[var(--main-text-primary)] mb-2 pb-1 border-b border-[var(--divider-primary)]">{label}</div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)]">
             <span style={{ color: 'var(--primary-color)' }}>●</span> IV (Implied)
          </span>
          <span className="font-bold tabular-nums text-[var(--primary-color)]">{iv.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between items-center gap-5 text-[11px] mb-1">
          <span className="text-[var(--main-text-secondary)]">
            <span style={{ color: 'var(--warning)' }}>●</span> RV (Realized)
          </span>
          <span className="font-bold tabular-nums text-[var(--warning)]">{rv.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between items-center gap-5 text-[11px] mt-2 pt-2 border-t border-[var(--divider-primary)]">
          <span className="text-[var(--main-text-secondary)]">Spread</span>
          <span className="font-bold tabular-nums" style={{ color: spread > 0 ? 'var(--positive)' : 'var(--negative)' }}>
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

const IVvsRVChart = () => {
  const data = useMemo(() => generateIVRVData(), []);

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="ivGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary-color)" stopOpacity={0.2}/>
              <stop offset="100%" stopColor="var(--primary-color)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="rvGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--warning)" stopOpacity={0.2}/>
              <stop offset="100%" stopColor="var(--warning)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="none" 
            vertical={false} 
            stroke="var(--divider-primary)" 
          />
          <XAxis 
            dataKey="date" 
            stroke="var(--main-text-muted)"
            tick={{ fill: 'var(--main-text-secondary)', fontSize: 10, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis 
            stroke="var(--main-text-muted)"
            tick={{ fill: 'var(--main-text-secondary)', fontSize: 10, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            dx={-10}
            domain={['auto', 'auto']}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          
          <Area 
            type="monotone" 
            dataKey="iv" 
            stroke="var(--primary-color)" 
            strokeWidth={2}
            fill="url(#ivGradient)"
            activeDot={{ r: 4, fill: 'var(--primary-color)', stroke: '#fff', strokeWidth: 2 }}
          />
          <Area 
            type="monotone" 
            dataKey="rv" 
            stroke="var(--warning)" 
            strokeWidth={2}
            fill="url(#rvGradient)"
            activeDot={{ r: 4, fill: 'var(--warning)', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IVvsRVChart;
