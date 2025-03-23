import React, { useState } from 'react';
import { FaCalculator, FaExchangeAlt, FaInfoCircle, FaFileAlt } from 'react-icons/fa';

const TaxCompliance = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [selectedPortfolio, setSelectedPortfolio] = useState('default');
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };
  
  return (
    <div className="tax-container">
      <div className="tax-header">
        <h1>Tax Compliance Tools</h1>
        <p>
          Manage your investment tax obligations with our comprehensive tax compliance tools.
        </p>
      </div>
      
      <div className="tax-tabs">
        <button 
          className={`tab ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          <FaCalculator />
          <span>Capital Gains Calculator</span>
        </button>
        <button 
          className={`tab ${activeTab === 'harvesting' ? 'active' : ''}`}
          onClick={() => setActiveTab('harvesting')}
        >
          <FaExchangeAlt />
          <span>Tax Loss Harvesting</span>
        </button>
        <button 
          className={`tab ${activeTab === 'rates' ? 'active' : ''}`}
          onClick={() => setActiveTab('rates')}
        >
          <FaInfoCircle />
          <span>Tax Rate Information</span>
        </button>
        <button 
          className={`tab ${activeTab === 'planning' ? 'active' : ''}`}
          onClick={() => setActiveTab('planning')}
        >
          <FaFileAlt />
          <span>Tax Planning</span>
        </button>
      </div>
      
      <div className="tax-content">
        {activeTab === 'calculator' && (
          <div className="tax-calculator">
            <div className="calculator-controls">
              <div className="control-group">
                <label htmlFor="portfolio-select">Select Portfolio:</label>
                <select 
                  id="portfolio-select" 
                  value={selectedPortfolio}
                  onChange={(e) => setSelectedPortfolio(e.target.value)}
                >
                  <option value="default">Main Portfolio</option>
                  <option value="retirement">Retirement Fund</option>
                </select>
              </div>
              
              <div className="control-group">
                <label htmlFor="tax-year">Tax Year:</label>
                <select 
                  id="tax-year" 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              
              <button className="btn btn-primary">Calculate</button>
            </div>
            
            <div className="calculator-results">
              <div className="results-summary">
                <div className="summary-card">
                  <h3>Short-Term Gains</h3>
                  <p className="summary-value">$2,845.32</p>
                  <p className="summary-detail">Tax Rate: 22%</p>
                  <p className="summary-detail">Estimated Tax: $625.97</p>
                </div>
                
                <div className="summary-card">
                  <h3>Long-Term Gains</h3>
                  <p className="summary-value">$11,373.43</p>
                  <p className="summary-detail">Tax Rate: 15%</p>
                  <p className="summary-detail">Estimated Tax: $1,706.01</p>
                </div>
                
                <div className="summary-card">
                  <h3>Total Capital Gains</h3>
                  <p className="summary-value">$14,218.75</p>
                  <p className="summary-detail">Total Estimated Tax: $2,331.98</p>
                </div>
              </div>
              
              <div className="results-table">
                <h3>Capital Gains by Investment</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Investment</th>
                      <th>Purchase Date</th>
                      <th>Holding Period</th>
                      <th>Gain/Loss</th>
                      <th>Tax Type</th>
                      <th>Est. Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AAPL</td>
                      <td>Nov 15, 2021</td>
                      <td>Long-term</td>
                      <td className="positive">$1,358.00</td>
                      <td>15%</td>
                      <td>$203.70</td>
                    </tr>
                    <tr>
                      <td>MSFT</td>
                      <td>Jan 20, 2022</td>
                      <td>Long-term</td>
                      <td className="positive">$1,160.75</td>
                      <td>15%</td>
                      <td>$174.11</td>
                    </tr>
                    <tr>
                      <td>AMZN</td>
                      <td>Sep 5, 2021</td>
                      <td>Long-term</td>
                      <td className="negative">-$1,372.90</td>
                      <td>15%</td>
                      <td>-$205.93</td>
                    </tr>
                    <tr>
                      <td>GOOGL</td>
                      <td>Feb 10, 2022</td>
                      <td>Long-term</td>
                      <td className="positive">$864.75</td>
                      <td>15%</td>
                      <td>$129.71</td>
                    </tr>
                    <tr>
                      <td>JNJ</td>
                      <td>Oct 1, 2021</td>
                      <td>Long-term</td>
                      <td className="positive">$343.20</td>
                      <td>15%</td>
                      <td>$51.48</td>
                    </tr>
                    <tr>
                      <td>JPM</td>
                      <td>Jan 10, 2022</td>
                      <td>Long-term</td>
                      <td className="negative">-$452.40</td>
                      <td>15%</td>
                      <td>-$67.86</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="tax-disclaimer">
                <FaInfoCircle />
                <p>
                  These calculations are estimates based on current tax laws. 
                  Actual tax obligations may vary. Please consult with a tax professional for personalized advice.
                </p>
              </div>
              
              <div className="export-options">
                <button className="btn btn-secondary">Export to PDF</button>
                <button className="btn btn-secondary">Export to CSV</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'harvesting' && (
          <div className="tax-harvesting">
            <div className="harvesting-explanation">
              <h2>Tax Loss Harvesting</h2>
              <p>
                Tax loss harvesting is a strategy to offset capital gains by selling investments at a loss. 
                This tool identifies potential tax loss harvesting opportunities in your portfolio and 
                suggests alternative investments to maintain market exposure while avoiding wash sales.
              </p>
            </div>
            
            <div className="harvesting-controls">
              <div className="control-group">
                <label htmlFor="harvesting-portfolio">Select Portfolio:</label>
                <select id="harvesting-portfolio">
                  <option value="default">Main Portfolio</option>
                  <option value="retirement">Retirement Fund</option>
                </select>
              </div>
              
              <button className="btn btn-primary">Find Opportunities</button>
            </div>
            
            <div className="harvesting-results">
              <h3>Tax Loss Harvesting Opportunities</h3>
              
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <div>
                    <h4>AMZN</h4>
                    <p>Amazon.com Inc.</p>
                  </div>
                  <div className="opportunity-value negative">
                    -$1,372.90
                  </div>
                </div>
                
                <div className="opportunity-details">
                  <div className="detail-group">
                    <p><strong>Shares:</strong> 10</p>
                    <p><strong>Purchase Price:</strong> $3,250.00</p>
                    <p><strong>Current Price:</strong> $3,112.71</p>
                  </div>
                  
                  <div className="detail-group">
                    <p><strong>Purchase Date:</strong> Sep 5, 2021</p>
                    <p><strong>Loss Percentage:</strong> -4.23%</p>
                    <p><strong>Potential Tax Savings:</strong> $205.93</p>
                  </div>
                </div>
                
                <div className="opportunity-recommendations">
                  <h5>Recommended Alternatives:</h5>
                  <ul>
                    <li>
                      <span className="alternative-symbol">GOOG</span>
                      <span className="alternative-name">Alphabet Inc. Class C</span>
                      <span className="alternative-reason">Similar sector exposure, avoids wash sale</span>
                    </li>
                    <li>
                      <span className="alternative-symbol">XLY</span>
                      <span className="alternative-name">Consumer Discretionary Select Sector SPDR Fund</span>
                      <span className="alternative-reason">ETF with Amazon exposure, avoids wash sale</span>
                    </li>
                  </ul>
                </div>
                
                <div className="opportunity-actions">
                  <button className="btn btn-primary">Execute Trade</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
              
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <div>
                    <h4>JPM</h4>
                    <p>JPMorgan Chase & Co.</p>
                  </div>
                  <div className="opportunity-value negative">
                    -$452.40
                  </div>
                </div>
                
                <div className="opportunity-details">
                  <div className="detail-group">
                    <p><strong>Shares:</strong> 40</p>
                    <p><strong>Purchase Price:</strong> $154.32</p>
                    <p><strong>Current Price:</strong> $143.01</p>
                  </div>
                  
                  <div className="detail-group">
                    <p><strong>Purchase Date:</strong> Jan 10, 2022</p>
                    <p><strong>Loss Percentage:</strong> -7.33%</p>
                    <p><strong>Potential Tax Savings:</strong> $67.86</p>
                  </div>
                </div>
                
                <div className="opportunity-recommendations">
                  <h5>Recommended Alternatives:</h5>
                  <ul>
                    <li>
                      <span className="alternative-symbol">BAC</span>
                      <span className="alternative-name">Bank of America Corp</span>
                      <span className="alternative-reason">Similar sector exposure, avoids wash sale</span>
                    </li>
                    <li>
                      <span className="alternative-symbol">XLF</span>
                      <span className="alternative-name">Financial Select Sector SPDR Fund</span>
                      <span className="alternative-reason">ETF with financial sector exposure, avoids wash sale</span>
                    </li>
                  </ul>
                </div>
                
                <div className="opportunity-actions">
                  <button className="btn btn-primary">Execute Trade</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'rates' && (
          <div className="tax-rates">
            <div className="rates-controls">
              <div className="control-group">
                <label htmlFor="tax-country">Country:</label>
                <select id="tax-country">
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                </select>
              </div>
              
              <div className="control-group">
                <label htmlFor="tax-year-rates">Tax Year:</label>
                <select id="tax-year-rates">
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              
              <button className="btn btn-primary">Get Rates</button>
            </div>
            
            <div className="rates-content">
              <h2>United States Tax Rates (2024)</h2>
              
              <div className="rates-section">
                <h3>Short-Term Capital Gains Rates</h3>
                <p>
                  Short-term capital gains are taxed as ordinary income at the following rates:
                </p>
                
                <table className="rates-table">
                  <thead>
                    <tr>
                      <th>Income Bracket (Single)</th>
                      <th>Income Bracket (Married Filing Jointly)</th>
                      <th>Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$0 - $10,275</td>
                      <td>$0 - $20,550</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>$10,276 - $41,775</td>
                      <td>$20,551 - $83,550</td>
                      <td>12%</td>
                    </tr>
                    <tr>
                      <td>$41,776 - $89,075</td>
                      <td>$83,551 - $178,150</td>
                      <td>22%</td>
                    </tr>
                    <tr>
                      <td>$89,076 - $170,050</td>
                      <td>$178,151 - $340,100</td>
                      <td>24%</td>
                    </tr>
                    <tr>
                      <td>$170,051 - $215,950</td>
                      <td>$340,101 - $431,900</td>
                      <td>32%</td>
                    </tr>
                    <tr>
                      <td>$215,951 - $539,900</td>
                      <td>$431,901 - $647,850</td>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <td>Over $539,900</td>
                      <td>Over $647,850</td>
                      <td>37%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="rates-section">
                <h3>Long-Term Capital Gains Rates</h3>
                <p>
                  Long-term capital gains are taxed at preferential rates based on income:
                </p>
                
                <table className="rates-table">
                  <thead>
                    <tr>
                      <th>Income Bracket (Single)</th>
                      <th>Income Bracket (Married Filing Jointly)</th>
                      <th>Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$0 - $41,675</td>
                      <td>$0 - $83,350</td>
                      <td>0%</td>
                    </tr>
                    <tr>
                      <td>$41,676 - $459,750</td>
                      <td>$83,351 - $517,200</td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <td>Over $459,750</td>
                      <td>Over $517,200</td>
                      <td>20%</td>
                    </tr>
                  </tbody>
                </table>
                
                <p>
                  <strong>Note:</strong> An additional 3.8% Net Investment Income Tax may apply to taxpayers with modified adjusted gross income exceeding $200,000 (single filers) or $250,000 (joint filers).
                </p>
              </div>
              
              <div className="rates-section">
                <h3>Dividend Taxation</h3>
                <p>
                  Qualified dividends are taxed at the long-term capital gains rates. Non-qualified dividends are taxed as ordinary income.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'planning' && (
          <div className="tax-planning">
            <div className="planning-controls">
              <div className="control-group">
                <label htmlFor="planning-portfolio">Select Portfolio:</label>
                <select id="planning-portfolio">
                  <option value="default">Main Portfolio</option>
                  <option value="retirement">Retirement Fund</option>
                </select>
              </div>
              
              <div className="control-group">
                <label htmlFor="income-level">Income Level:</label>
                <select id="income-level">
                  <option value="low">Low ($0 - $41,675)</option>
                  <option value="middle" selected>Middle ($41,676 - $170,050)</option>
                  <option value="high">High ($170,051 - $459,750)</option>
                  <option value="very-high">Very High (Over $459,750)</option>
                </select>
              </div>
              
              <button className="btn btn-primary">Get Tax Planning Advice</button>
            </div>
            
            <div className="planning-results">
              <h2>Personalized Tax Planning Recommendations</h2>
              
              <div className="strategy-card">
                <h3>Tax-Loss Harvesting Opportunities</h3>
                <p>
                  Based on your portfolio, you have two investments with unrealized losses that could be used for tax-loss harvesting: Amazon (AMZN) and JPMorgan Chase (JPM). By selling these positions, you could offset some of your capital gains and potentially reduce your tax liability.
                </p>
                <button className="btn btn-secondary">View Opportunities</button>
              </div>
              
              <div className="strategy-card">
                <h3>Tax-Advantaged Account Utilization</h3>
                <p>
                  Consider maxing out contributions to tax-advantaged accounts like 401(k)s, IRAs, or HSAs. Based on your income level, you could qualify for a deductible traditional IRA contribution, which would reduce your taxable income.
                </p>
                <div className="strategy-details">
                  <div className="detail-item">
                    <span>401(k) Contribution Limit (2024):</span>
                    <span>$22,500 ($30,000 if over 50)</span>
                  </div>
                  <div className="detail-item">
                    <span>IRA Contribution Limit (2024):</span>
                    <span>$6,500 ($7,500 if over 50)</span>
                  </div>
                  <div className="detail-item">
                    <span>HSA Contribution Limit (2024):</span>
                    <span>$4,150 (individual); $8,300 (family)</span>
                  </div>
                </div>
              </div>
              
              <div className="strategy-card">
                <h3>Asset Location Strategy</h3>
                <p>
                  Optimize your tax efficiency by placing investments in the most tax-advantaged accounts based on their tax characteristics:
                </p>
                <ul className="strategy-list">
                  <li>
                    <strong>Tax-Deferred Accounts (401(k), Traditional IRA):</strong> Hold investments that generate ordinary income, such as bonds, REITs, and high-dividend stocks.
                  </li>
                  <li>
                    <strong>Tax-Exempt Accounts (Roth IRA, Roth 401(k)):</strong> Hold investments with the highest growth potential, such as small-cap stocks and emerging markets.
                  </li>
                  <li>
                    <strong>Taxable Accounts:</strong> Hold tax-efficient investments like low-turnover index funds, tax-managed funds, and municipal bonds.
                  </li>
                </ul>
              </div>
              
              <div className="strategy-card">
                <h3>Charitable Giving Strategies</h3>
                <p>
                  Consider donating appreciated securities instead of cash. By donating stocks or funds that have increased in value, you can avoid capital gains tax and still receive a charitable deduction for the full market value of the securities.
                </p>
              </div>
              
              <div className="planning-disclaimer">
                <FaInfoCircle />
                <p>
                  These recommendations are for informational purposes only and do not constitute tax advice. Please consult with a qualified tax professional for personalized guidance based on your specific situation.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .tax-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .tax-header {
          margin-bottom: 20px;
        }
        
        .tax-header h1 {
          font-size: 28px;
          margin-bottom: 8px;
          color: #2c3e50;
        }
        
        .tax-header p {
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .tax-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          overflow-x: auto;
          padding-bottom: 5px;
        }
        
        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #f5f5f5;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        
        .tab:hover {
          background: #e0e0e0;
        }
        
        .tab.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .tax-content {
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 20px;
        }
        
        .calculator-controls,
        .harvesting-controls,
        .rates-controls,
        .planning-controls {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          padding: 15px;
          background: #f5f7fa;
          border-radius: 8px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .control-group label {
          font-weight: 500;
          color: #2c3e50;
          font-size: 14px;
        }
        
        .control-group select {
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-size: 16px;
          min-width: 200px;
        }
        
        .results-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .summary-card {
          background: #f5f7fa;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
        }
        
        .summary-card h3 {
          font-size: 16px;
          color: #7f8c8d;
          margin: 0 0 10px 0;
        }
        
        .summary-value {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .summary-detail {
          font-size: 14px;
          color: #7f8c8d;
          margin: 0 0 5px 0;
        }
        
        .results-table {
          margin-bottom: 20px;
        }
        
        .results-table h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        table th,
        table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        
        table th {
          background: #f5f7fa;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .positive {
          color: #2ecc71;
        }
        
        .negative {
          color: #e74c3c;
        }
        
        .tax-disclaimer,
        .planning-disclaimer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 5px;
          border-left: 4px solid #f39c12;
          margin-bottom: 20px;
        }
        
        .tax-disclaimer p,
        .planning-disclaimer p {
          color: #7f8c8d;
          font-size: 14px;
          margin: 0;
        }
        
        .export-options {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
        
        .harvesting-explanation {
          margin-bottom: 20px;
        }
        
        .harvesting-explanation h2 {
          font-size: 22px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .harvesting-explanation p {
          color: #7f8c8d;
          line-height: 1.6;
        }
        
        .opportunity-card {
          background: #f5f7fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }
        
        .opportunity-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        
        .opportunity-header h4 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0 0 5px 0;
        }
        
        .opportunity-header p {
          color: #7f8c8d;
          margin: 0;
        }
        
        .opportunity-value {
          font-size: 20px;
          font-weight: bold;
        }
        
        .opportunity-details {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 15px;
        }
        
        .detail-group {
          flex: 1;
          min-width: 200px;
        }
        
        .detail-group p {
          margin: 0 0 5px 0;
          color: #34495e;
        }
        
        .opportunity-recommendations {
          margin-bottom: 15px;
        }
        
        .opportunity-recommendations h5 {
          font-size: 16px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .opportunity-recommendations ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .opportunity-recommendations li {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 10px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .opportunity-recommendations li:last-child {
          border-bottom: none;
        }
        
        .alternative-symbol {
          font-weight: bold;
          color: #3498db;
          flex: 0 0 80px;
        }
        
        .alternative-name {
          flex: 1;
          min-width: 150px;
        }
        
        .alternative-reason {
          color: #7f8c8d;
          font-style: italic;
          flex: 2;
          min-width: 200px;
        }
        
        .opportunity-actions {
          display: flex;
          gap: 10px;
        }
        
        .rates-content h2 {
          font-size: 22px;
          color: #2c3e50;
          margin: 0 0 20px 0;
        }
        
        .rates-section {
          margin-bottom: 30px;
        }
        
        .rates-section h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .rates-section p {
          color: #34495e;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .rates-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
        }
        
        .rates-table th,
        .rates-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #eee;
        }
        
        .rates-table th {
          background: #f5f7fa;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .planning-results h2 {
          font-size: 22px;
          color: #2c3e50;
          margin: 0 0 20px 0;
        }
        
        .strategy-card {
          background: #f5f7fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }
        
        .strategy-card h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .strategy-card p {
          color: #34495e;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .strategy-details {
          background: white;
          border-radius: 5px;
          padding: 15px;
          margin-bottom: 15px;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          color: #34495e;
        }
        
        .detail-item:last-child {
          margin-bottom: 0;
        }
        
        .strategy-list {
          padding-left: 20px;
          color: #34495e;
        }
        
        .strategy-list li {
          margin-bottom: 10px;
        }
        
        .strategy-list li:last-child {
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .calculator-controls,
          .harvesting-controls,
          .rates-controls,
          .planning-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .results-summary {
            grid-template-columns: 1fr;
          }
          
          .control-group select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default TaxCompliance;