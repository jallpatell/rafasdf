import React from 'react';
import { 
  FaChartLine, 
  FaChartBar, 
  FaDollarSign, 
  FaNewspaper, 
  FaLightbulb
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Your Investment Dashboard</h1>
        <p>Welcome back! Here's an overview of your investments and market insights.</p>
      </div>
      
      <div className="dashboard-summary">
        <div className="summary-card">
          <div className="card-icon">
            <FaChartLine />
          </div>
          <div className="card-content">
            <h3>Portfolio Value</h3>
            <p className="value">$124,589.32</p>
            <p className="change positive">+2.4% Today</p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="card-icon">
            <FaChartBar />
          </div>
          <div className="card-content">
            <h3>Total Gain/Loss</h3>
            <p className="value">$14,218.75</p>
            <p className="change positive">+12.9% Overall</p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="card-icon">
            <FaDollarSign />
          </div>
          <div className="card-content">
            <h3>Dividend Income</h3>
            <p className="value">$1,842.16</p>
            <p className="change">YTD</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Portfolio Allocation</h2>
            <button className="btn btn-secondary btn-sm">View Details</button>
          </div>
          <div className="section-content allocation-chart">
            <div className="placeholder-chart">
              <div className="chart-section tech" style={{ width: '35%' }}></div>
              <div className="chart-section finance" style={{ width: '20%' }}></div>
              <div className="chart-section healthcare" style={{ width: '15%' }}></div>
              <div className="chart-section consumer" style={{ width: '12%' }}></div>
              <div className="chart-section energy" style={{ width: '10%' }}></div>
              <div className="chart-section other" style={{ width: '8%' }}></div>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color tech"></div>
                <span>Technology (35%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color finance"></div>
                <span>Financial (20%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color healthcare"></div>
                <span>Healthcare (15%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color consumer"></div>
                <span>Consumer (12%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color energy"></div>
                <span>Energy (10%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color other"></div>
                <span>Other (8%)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Market News</h2>
            <button className="btn btn-secondary btn-sm">See All</button>
          </div>
          <div className="section-content">
            <div className="news-card">
              <div className="news-icon">
                <FaNewspaper />
              </div>
              <div className="news-content">
                <h3>Federal Reserve Signals Interest Rate Stability</h3>
                <p>The Federal Reserve indicated it plans to maintain current interest rates through Q3...</p>
                <div className="news-footer">
                  <span className="news-source">Financial Times</span>
                  <span className="news-time">2 hours ago</span>
                </div>
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
            
            <div className="news-card">
              <div className="news-icon">
                <FaNewspaper />
              </div>
              <div className="news-content">
                <h3>Tech Stocks Rally on Positive Earnings Reports</h3>
                <p>Major technology companies report better-than-expected quarterly earnings...</p>
                <div className="news-footer">
                  <span className="news-source">Wall Street Journal</span>
                  <span className="news-time">5 hours ago</span>
                </div>
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-section">
        <div className="section-header">
          <h2>Investment Insights</h2>
          <button className="btn btn-secondary btn-sm">More Insights</button>
        </div>
        <div className="section-content">
          <div className="insights-card">
            <div className="insights-icon">
              <FaLightbulb />
            </div>
            <div className="insights-content">
              <h3>Portfolio Diversification Opportunity</h3>
              <p>Your portfolio is heavily weighted in technology stocks. Consider diversifying into other sectors to reduce risk.</p>
              <button className="btn btn-primary btn-sm">Get Advice</button>
            </div>
          </div>
          
          <div className="insights-card">
            <div className="insights-icon">
              <FaLightbulb />
            </div>
            <div className="insights-content">
              <h3>Tax Loss Harvesting Opportunity</h3>
              <p>Several positions in your portfolio could be candidates for tax-loss harvesting to offset capital gains.</p>
              <button className="btn btn-primary btn-sm">Analyze</button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .dashboard-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .dashboard-header {
          margin-bottom: 20px;
        }
        
        .dashboard-header h1 {
          font-size: 28px;
          margin-bottom: 8px;
          color: #2c3e50;
        }
        
        .dashboard-header p {
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .dashboard-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .summary-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          align-items: center;
        }
        
        .card-icon {
          background: #f5f7fa;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          font-size: 24px;
          color: #3498db;
        }
        
        .card-content h3 {
          font-size: 16px;
          color: #7f8c8d;
          margin-bottom: 5px;
        }
        
        .value {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        
        .change {
          font-size: 14px;
          color: #7f8c8d;
        }
        
        .change.positive {
          color: #2ecc71;
        }
        
        .change.negative {
          color: #e74c3c;
        }
        
        .dashboard-sections {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .dashboard-section {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 30px;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .section-header h2 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0;
        }
        
        .btn-sm {
          padding: 5px 10px;
          font-size: 14px;
        }
        
        .allocation-chart {
          margin-bottom: 20px;
        }
        
        .placeholder-chart {
          height: 30px;
          display: flex;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 15px;
        }
        
        .chart-section {
          height: 100%;
        }
        
        .chart-section.tech {
          background: #3498db;
        }
        
        .chart-section.finance {
          background: #2ecc71;
        }
        
        .chart-section.healthcare {
          background: #9b59b6;
        }
        
        .chart-section.consumer {
          background: #f1c40f;
        }
        
        .chart-section.energy {
          background: #e74c3c;
        }
        
        .chart-section.other {
          background: #95a5a6;
        }
        
        .chart-legend {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
          margin-right: 5px;
        }
        
        .legend-color.tech {
          background: #3498db;
        }
        
        .legend-color.finance {
          background: #2ecc71;
        }
        
        .legend-color.healthcare {
          background: #9b59b6;
        }
        
        .legend-color.consumer {
          background: #f1c40f;
        }
        
        .legend-color.energy {
          background: #e74c3c;
        }
        
        .legend-color.other {
          background: #95a5a6;
        }
        
        .news-card {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }
        
        .news-card:last-child {
          border-bottom: none;
        }
        
        .news-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f5f7fa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: #3498db;
          flex-shrink: 0;
        }
        
        .news-content h3 {
          font-size: 16px;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        
        .news-content p {
          color: #7f8c8d;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        .news-footer {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 12px;
          color: #95a5a6;
        }
        
        .insights-card {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }
        
        .insights-card:last-child {
          border-bottom: none;
        }
        
        .insights-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f5f7fa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: #f39c12;
          flex-shrink: 0;
        }
        
        .insights-content h3 {
          font-size: 16px;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        
        .insights-content p {
          color: #7f8c8d;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        @media (max-width: 992px) {
          .dashboard-summary,
          .dashboard-sections {
            grid-template-columns: 1fr;
          }
          
          .chart-legend {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 576px) {
          .chart-legend {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;