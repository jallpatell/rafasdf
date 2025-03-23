import React, { useState } from 'react';
import { FaSearch, FaFileAlt, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const MarketRegulations = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState('');
  
  return (
    <div className="regulations-container">
      <div className="regulations-header">
        <h1>Market Regulations</h1>
        <p>Stay compliant with investment regulations and access important regulatory information.</p>
      </div>
      
      <div className="regulations-tabs">
        <button 
          className={`tab ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          <FaSearch />
          <span>Regulation Search</span>
        </button>
        <button 
          className={`tab ${activeTab === 'sec' ? 'active' : ''}`}
          onClick={() => setActiveTab('sec')}
        >
          <FaFileAlt />
          <span>SEC Filings</span>
        </button>
        <button 
          className={`tab ${activeTab === 'compliance' ? 'active' : ''}`}
          onClick={() => setActiveTab('compliance')}
        >
          <FaCheckCircle />
          <span>Compliance Check</span>
        </button>
        <button 
          className={`tab ${activeTab === 'country' ? 'active' : ''}`}
          onClick={() => setActiveTab('country')}
        >
          <FaGlobe />
          <span>Country Restrictions</span>
        </button>
      </div>
      
      <div className="regulations-content">
        {activeTab === 'search' && (
          <div className="regulations-search">
            <div className="search-form">
              <label htmlFor="reg-search">Search for regulations:</label>
              <div className="search-input-group">
                <input 
                  type="text" 
                  id="reg-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. insider trading, short selling, Regulation T, etc."
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
            
            <div className="search-results">
              <h2>Results for "insider trading"</h2>
              
              <div className="result-card">
                <h3>Insider Trading Regulations</h3>
                <p>
                  Insider trading is regulated primarily under the Securities Exchange Act of 1934 and subsequent amendments. 
                  The SEC enforces regulations against illegal insider trading, which involves trading securities based on material, 
                  non-public information in breach of a fiduciary duty or other relationship of trust.
                </p>
                <h4>Key Regulations:</h4>
                <ul>
                  <li><strong>Rule 10b5-1:</strong> Provides an affirmative defense for corporate insiders to trade securities when they have a pre-arranged trading plan.</li>
                  <li><strong>Rule 10b5-2:</strong> Defines duties of trust or confidence in insider trading cases.</li>
                  <li><strong>Section 16:</strong> Requires corporate insiders to report their trades and prohibits short-swing profits.</li>
                </ul>
                <button className="btn btn-secondary">Read More</button>
              </div>
              
              <div className="result-card">
                <h3>Form 4 Filing Requirements</h3>
                <p>
                  Corporate insiders (officers, directors, and beneficial owners of more than 10% of a company's securities) 
                  must file Form 4 with the SEC within two business days of a transaction in the company's securities.
                </p>
                <h4>Filing Details:</h4>
                <ul>
                  <li>Must be filed electronically through the SEC's EDGAR system</li>
                  <li>Discloses the date of transaction, number of securities, price, and nature of transaction</li>
                  <li>Late filings may result in SEC penalties</li>
                </ul>
                <button className="btn btn-secondary">Read More</button>
              </div>
              
              <div className="result-card">
                <h3>Penalties for Insider Trading Violations</h3>
                <p>
                  Insider trading violations can result in civil and criminal penalties for individuals and entities.
                </p>
                <h4>Potential Penalties:</h4>
                <ul>
                  <li><strong>Civil Penalties:</strong> Up to three times the profit gained or loss avoided</li>
                  <li><strong>Criminal Fines:</strong> Up to $5 million for individuals</li>
                  <li><strong>Prison:</strong> Up to 20 years for criminal violations</li>
                  <li><strong>Professional Consequences:</strong> Industry bars, officer and director bars</li>
                </ul>
                <button className="btn btn-secondary">Read More</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'sec' && (
          <div className="sec-filings">
            <div className="sec-search">
              <label htmlFor="stock-symbol">Enter stock symbol:</label>
              <div className="search-input-group">
                <input 
                  type="text" 
                  id="stock-symbol"
                  value={selectedStock}
                  onChange={(e) => setSelectedStock(e.target.value.toUpperCase())}
                  placeholder="e.g. AAPL"
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
            
            <div className="sec-results">
              <h2>SEC Filings for AAPL (Apple Inc.)</h2>
              
              <div className="filing-types-explanation">
                <h3>Important SEC Filing Types</h3>
                <div className="filing-type-grid">
                  <div className="filing-type-card">
                    <h4>10-K (Annual Report)</h4>
                    <p>Comprehensive overview of the company's business and financial condition, including audited financial statements.</p>
                    <p><strong>When Filed:</strong> Annually, within 60-90 days after fiscal year end</p>
                    <button className="btn btn-sm btn-secondary">Latest 10-K</button>
                  </div>
                  
                  <div className="filing-type-card">
                    <h4>10-Q (Quarterly Report)</h4>
                    <p>Unaudited financial statements and provides a continuing view of the company's financial position during the year.</p>
                    <p><strong>When Filed:</strong> Quarterly, within 40-45 days after quarter end</p>
                    <button className="btn btn-sm btn-secondary">Latest 10-Q</button>
                  </div>
                  
                  <div className="filing-type-card">
                    <h4>8-K (Current Report)</h4>
                    <p>Discloses major events shareholders should know about, such as acquisitions, bankruptcies, departures of executives, etc.</p>
                    <p><strong>When Filed:</strong> Within 4 business days after the event</p>
                    <button className="btn btn-sm btn-secondary">Latest 8-K</button>
                  </div>
                  
                  <div className="filing-type-card">
                    <h4>Proxy Statement (DEF 14A)</h4>
                    <p>Information required when soliciting shareholder votes, including executive compensation and matters to be voted on.</p>
                    <p><strong>When Filed:</strong> Prior to annual or special shareholder meetings</p>
                    <button className="btn btn-sm btn-secondary">Latest Proxy</button>
                  </div>
                </div>
              </div>
              
              <div className="recent-filings">
                <h3>Recent Filings</h3>
                <table className="filings-table">
                  <thead>
                    <tr>
                      <th>Filing Date</th>
                      <th>Form Type</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-02-02</td>
                      <td>10-Q</td>
                      <td>Quarterly Report for period ending December 31, 2022</td>
                      <td><button className="btn btn-sm btn-secondary">View</button></td>
                    </tr>
                    <tr>
                      <td>2023-01-15</td>
                      <td>8-K</td>
                      <td>Results of Operations and Financial Condition</td>
                      <td><button className="btn btn-sm btn-secondary">View</button></td>
                    </tr>
                    <tr>
                      <td>2022-12-28</td>
                      <td>4</td>
                      <td>Statement of Changes in Beneficial Ownership</td>
                      <td><button className="btn btn-sm btn-secondary">View</button></td>
                    </tr>
                    <tr>
                      <td>2022-11-04</td>
                      <td>10-K</td>
                      <td>Annual Report for fiscal year ending September 24, 2022</td>
                      <td><button className="btn btn-sm btn-secondary">View</button></td>
                    </tr>
                    <tr>
                      <td>2022-10-20</td>
                      <td>8-K</td>
                      <td>Changes in Directors or Principal Officers</td>
                      <td><button className="btn btn-sm btn-secondary">View</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="filing-resources">
                <h3>Resources</h3>
                <div className="resources-links">
                  <a href="#" className="resource-link">
                    <FaFileAlt />
                    <span>SEC EDGAR Database</span>
                  </a>
                  <a href="#" className="resource-link">
                    <FaFileAlt />
                    <span>How to Read SEC Filings</span>
                  </a>
                  <a href="#" className="resource-link">
                    <FaFileAlt />
                    <span>Investor Relations Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'compliance' && (
          <div className="compliance-check">
            <div className="compliance-explanation">
              <h2>Portfolio Compliance Check</h2>
              <p>
                Analyze your portfolio for potential regulatory concerns or compliance issues. 
                This tool helps identify investments that may have regulatory restrictions or require additional reporting.
              </p>
            </div>
            
            <div className="compliance-controls">
              <div className="control-group">
                <label htmlFor="compliance-portfolio">Select Portfolio:</label>
                <select id="compliance-portfolio">
                  <option value="default">Main Portfolio</option>
                  <option value="retirement">Retirement Fund</option>
                </select>
              </div>
              
              <button className="btn btn-primary">Check Compliance</button>
            </div>
            
            <div className="compliance-results">
              <h3>Compliance Analysis</h3>
              
              <div className="compliance-summary">
                <div className="summary-card">
                  <div className="summary-icon green">
                    <FaCheckCircle />
                  </div>
                  <div className="summary-content">
                    <h4>No Major Compliance Issues</h4>
                    <p>Your portfolio does not have any major regulatory compliance issues.</p>
                  </div>
                </div>
              </div>
              
              <div className="notice-cards">
                <div className="notice-card">
                  <h4>Insider Trading Information</h4>
                  <p>
                    Your portfolio contains securities from companies where recent insider trading activity has been reported.
                    This is for informational purposes only and does not indicate any compliance issues.
                  </p>
                  <div className="notice-details">
                    <table>
                      <thead>
                        <tr>
                          <th>Symbol</th>
                          <th>Recent Insider Activity</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AAPL</td>
                          <td>Multiple insider sales in past 30 days</td>
                          <td><button className="btn btn-sm btn-secondary">View Details</button></td>
                        </tr>
                        <tr>
                          <td>MSFT</td>
                          <td>Director purchase on Feb 15, 2023</td>
                          <td><button className="btn btn-sm btn-secondary">View Details</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="notice-card">
                  <h4>Dividend Tax Considerations</h4>
                  <p>
                    Several of your investments pay dividends that may have special tax treatment.
                  </p>
                  <div className="notice-details">
                    <table>
                      <thead>
                        <tr>
                          <th>Symbol</th>
                          <th>Dividend Type</th>
                          <th>Tax Consideration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>JNJ</td>
                          <td>Qualified Dividend</td>
                          <td>Eligible for reduced tax rates</td>
                        </tr>
                        <tr>
                          <td>VTI</td>
                          <td>Qualified Dividend</td>
                          <td>Eligible for reduced tax rates</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'country' && (
          <div className="country-restrictions">
            <div className="country-explanation">
              <h2>Country-Specific Investment Restrictions</h2>
              <p>
                Investment regulations vary by country. This tool provides information about investment restrictions, 
                reporting requirements, and tax considerations for investors in different countries.
              </p>
            </div>
            
            <div className="country-selector">
              <label htmlFor="country-select">Select Country:</label>
              <select id="country-select">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="jp">Japan</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="ch">Switzerland</option>
                <option value="sg">Singapore</option>
                <option value="hk">Hong Kong</option>
              </select>
              <button className="btn btn-primary">Get Information</button>
            </div>
            
            <div className="country-info">
              <h3>Investment Regulations: United States</h3>
              
              <div className="info-section">
                <h4>Regulatory Bodies</h4>
                <ul>
                  <li><strong>Securities and Exchange Commission (SEC):</strong> Primary regulator of securities markets</li>
                  <li><strong>Financial Industry Regulatory Authority (FINRA):</strong> Self-regulatory organization for broker-dealers</li>
                  <li><strong>Commodity Futures Trading Commission (CFTC):</strong> Regulates futures and options markets</li>
                  <li><strong>Federal Reserve:</strong> Oversees banking institutions and stability of financial system</li>
                </ul>
              </div>
              
              <div className="info-section">
                <h4>Key Regulations for Retail Investors</h4>
                <ul>
                  <li>
                    <strong>Pattern Day Trader Rule:</strong> Accounts with less than $25,000 are limited to no more than three day trades in a five business day period.
                  </li>
                  <li>
                    <strong>Margin Requirements:</strong> Initial margin requirement of 50% and maintenance margin requirement of 25% for most securities.
                  </li>
                  <li>
                    <strong>Accredited Investor Rules:</strong> Certain investments like private placements are limited to accredited investors who meet income or net worth requirements.
                  </li>
                  <li>
                    <strong>Foreign Account Reporting:</strong> U.S. persons with foreign financial accounts exceeding $10,000 must file an FBAR (FinCEN Form 114).
                  </li>
                </ul>
              </div>
              
              <div className="info-section">
                <h4>Tax Considerations</h4>
                <ul>
                  <li>
                    <strong>Capital Gains Tax:</strong> Short-term gains (assets held for one year or less) are taxed as ordinary income. Long-term gains are taxed at preferential rates (0%, 15%, or 20% depending on income).
                  </li>
                  <li>
                    <strong>Dividend Taxation:</strong> Qualified dividends are taxed at long-term capital gains rates. Non-qualified dividends are taxed as ordinary income.
                  </li>
                  <li>
                    <strong>Net Investment Income Tax:</strong> Additional 3.8% tax on investment income for individuals with modified adjusted gross income exceeding $200,000 (single) or $250,000 (married filing jointly).
                  </li>
                  <li>
                    <strong>Wash Sale Rule:</strong> Prevents claiming a loss on a security if a "substantially identical" security is purchased within 30 days before or after the sale.
                  </li>
                </ul>
              </div>
              
              <div className="info-section">
                <h4>Account Types and Contribution Limits (2023)</h4>
                <ul>
                  <li>
                    <strong>401(k):</strong> $22,500 annual contribution limit ($30,000 if age 50 or older)
                  </li>
                  <li>
                    <strong>IRA (Traditional and Roth):</strong> $6,500 annual contribution limit ($7,500 if age 50 or older)
                  </li>
                  <li>
                    <strong>HSA:</strong> $3,850 individual / $7,750 family annual contribution limit ($1,000 additional if age 55 or older)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .regulations-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .regulations-header {
          margin-bottom: 20px;
        }
        
        .regulations-header h1 {
          font-size: 28px;
          margin-bottom: 8px;
          color: #2c3e50;
        }
        
        .regulations-header p {
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .regulations-tabs {
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
        
        .regulations-content {
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 20px;
        }
        
        .search-form {
          margin-bottom: 20px;
        }
        
        .search-form label {
          display: block;
          font-weight: 500;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        .search-input-group {
          display: flex;
          gap: 10px;
        }
        
        .search-input-group input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .search-results h2 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0 0 20px 0;
        }
        
        .result-card {
          padding: 20px;
          background: #f5f7fa;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        
        .result-card h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .result-card p {
          color: #34495e;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .result-card h4 {
          font-size: 16px;
          color: #2c3e50;
          margin: 0 0 8px 0;
        }
        
        .result-card ul {
          margin: 0 0 15px 0;
          padding-left: 20px;
          color: #34495e;
        }
        
        .result-card li {
          margin-bottom: 8px;
        }
        
        .sec-search {
          margin-bottom: 20px;
        }
        
        .sec-search label {
          display: block;
          font-weight: 500;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        .sec-results h2 {
          font-size: 22px;
          color: #2c3e50;
          margin: 0 0 20px 0;
        }
        
        .filing-types-explanation {
          margin-bottom: 30px;
        }
        
        .filing-types-explanation h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .filing-type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
        }
        
        .filing-type-card {
          padding: 15px;
          background: #f5f7fa;
          border-radius: 8px;
        }
        
        .filing-type-card h4 {
          font-size: 16px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .filing-type-card p {
          font-size: 14px;
          color: #34495e;
          margin: 0 0 10px 0;
          line-height: 1.5;
        }
        
        .recent-filings {
          margin-bottom: 30px;
        }
        
        .recent-filings h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .filings-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .filings-table th,
        .filings-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        
        .filings-table th {
          background: #f5f7fa;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .filing-resources h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .resources-links {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .resource-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          background: #f5f7fa;
          border-radius: 5px;
          color: #3498db;
          text-decoration: none;
          transition: background 0.2s;
        }
        
        .resource-link:hover {
          background: #e0e0e0;
        }
        
        .compliance-explanation,
        .country-explanation,
        .harvesting-explanation {
          margin-bottom: 20px;
        }
        
        .compliance-explanation h2,
        .country-explanation h2 {
          font-size: 22px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .compliance-explanation p,
        .country-explanation p {
          color: #34495e;
          line-height: 1.6;
        }
        
        .compliance-controls,
        .country-selector {
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
        
        .control-group select,
        #country-select {
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-size: 16px;
          min-width: 200px;
        }
        
        .compliance-results h3,
        .country-info h3 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .compliance-summary {
          margin-bottom: 20px;
        }
        
        .summary-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f5f7fa;
          border-radius: 8px;
        }
        
        .summary-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        
        .summary-icon.green {
          background: #e0f7e6;
          color: #2ecc71;
        }
        
        .summary-icon.yellow {
          background: #fcf8e3;
          color: #f39c12;
        }
        
        .summary-icon.red {
          background: #f9e4e4;
          color: #e74c3c;
        }
        
        .summary-content h4 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 5px 0;
        }
        
        .summary-content p {
          color: #34495e;
          margin: 0;
        }
        
        .notice-cards {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .notice-card {
          padding: 15px;
          background: #f5f7fa;
          border-radius: 8px;
        }
        
        .notice-card h4 {
          font-size: 16px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .notice-card p {
          color: #34495e;
          margin: 0 0 15px 0;
        }
        
        .notice-details table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        
        .notice-details th,
        .notice-details td {
          padding: 8px 10px;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        
        .notice-details th {
          background: #fff;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .info-section {
          margin-bottom: 20px;
        }
        
        .info-section h4 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .info-section ul {
          padding-left: 20px;
          margin: 0;
          color: #34495e;
        }
        
        .info-section li {
          margin-bottom: 10px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .compliance-controls,
          .country-selector {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .search-input-group {
            flex-direction: column;
          }
          
          .filing-type-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default MarketRegulations;