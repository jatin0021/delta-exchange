# Options Analytics Dashboard

A comprehensive cryptocurrency options analytics dashboard with interactive charts and real-time data visualization.

## Features

### 📊 Four Interactive Charts

1. **Open Interest Chart**
   - Visualizes calls and puts distribution across strike prices
   - Shows current BTC price marker
   - Displays max pain level
   - Interactive tooltips with detailed data

2. **Open Interest Change Chart**
   - Tracks changes in open interest over time
   - Color-coded bars (green for increases, red for decreases)
   - Customizable time periods (12h, 24h, 7d)

3. **Volume vs Strike Chart**
   - Displays trading volume distribution
   - Separate visualization for calls and puts
   - Shows total volume statistics

4. **IV vs RV Chart**
   - Compares Implied Volatility vs Realized Volatility
   - Time-series line chart
   - Shows IV-RV spread

### 🎛️ Controls & Filters

- **Timeframe Selection**: D1, W1, M1
- **Cryptocurrency Selection**: BTC, ETH, SOL
- **Period Filters**: Last 12 hours, 24 hours, 7 days
- **Axis Toggles**: Show/hide Y and X axis data

### 📈 Key Metrics

- Total Calls Open Interest
- Total Puts Open Interest
- Put-Call Ratio (PCR)
- Max Pain Level
- Total Volume (Calls & Puts)

## Usage

### Accessing the Dashboard

Navigate to `/options-analytics/` in your application:

```javascript
// Direct navigation
window.location.href = '/options-analytics/';

// Using React Router Link
<Link to="/options-analytics/">Options Analytics</Link>
```

### Component Structure

```
src/pages/OptionsAnalytics/
├── OptionsAnalytics.jsx          # Main container component
├── OptionsAnalytics.css           # Styling
└── components/
    ├── OpenInterestChart.jsx      # OI distribution chart
    ├── OpenInterestChangeChart.jsx # OI change over time
    ├── VolumeStrikeChart.jsx      # Volume distribution
    └── IVvsRVChart.jsx            # Volatility comparison
```

## Customization

### Changing Chart Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --positive: #00c087;    /* Green for calls/positive changes */
  --negative: #ff5252;    /* Red for puts/negative changes */
  --primary-color: #2894F9; /* Blue for highlights */
}
```

### Adding New Cryptocurrencies

Update the crypto selector in `OptionsAnalytics.jsx`:

```javascript
<select className="crypto-select" value={selectedCrypto}>
  <option value="BTC">🪙 BTC</option>
  <option value="ETH">🪙 ETH</option>
  <option value="SOL">🪙 SOL</option>
  <option value="YOUR_CRYPTO">🪙 YOUR_CRYPTO</option>
</select>
```

### Connecting Real Data

Replace the sample data generators with API calls:

```javascript
// In OpenInterestChart.jsx
const [data, setData] = useState([]);

useEffect(() => {
  fetch(`/api/options/open-interest?crypto=${crypto}&timeframe=${timeframe}`)
    .then(res => res.json())
    .then(data => setData(data));
}, [crypto, timeframe]);
```

## Technologies Used

- **React** - UI framework
- **Recharts** - Chart library
- **React Router** - Navigation
- **CSS Variables** - Theming

## Responsive Design

The dashboard is fully responsive and adapts to:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (< 768px)

## Performance

- Lazy loading of chart components
- Optimized re-renders with React hooks
- Efficient data structures for large datasets

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

- [ ] Real-time data updates via WebSocket
- [ ] Export charts as images
- [ ] Custom date range selection
- [ ] Greeks visualization (Delta, Gamma, Theta, Vega)
- [ ] Options chain table
- [ ] Historical data comparison
- [ ] Alert notifications for key levels

## License

This component is part of the Delta Exchange project.
