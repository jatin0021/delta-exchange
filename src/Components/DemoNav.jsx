import { Link } from 'react-router-dom';
import './DemoNav.css';

const DemoNav = () => {
  return (
    <div className="demo-nav-container">
      <div className="demo-nav-card">
        <h2>🎯 Options Analytics Dashboard</h2>
        <p>View comprehensive options data with interactive charts</p>
        <Link to="/options-analytics/" className="demo-nav-button">
          Open Options Analytics →
        </Link>
      </div>
    </div>
  );
};

export default DemoNav;
