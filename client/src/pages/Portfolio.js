import React, { useState } from 'react';
import { 
  FaPlus, 
  FaSync, 
  FaChartLine, 
  FaSortAmountDown, 
  FaSortAmountUp, 
  FaEdit, 
  FaTrash 
} from 'react-icons/fa';

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState('default');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showAddStock, setShowAddStock] = useState(false);
  
  // Sample portfolios data
  const portfolios = {
    default: {
      id: 'default',
      name: 'Main Portfolio',
      description: 'My primary investment portfolio',
      totalValue: 124589.32,
      totalCost: 110370.57,
      return: 14218.75,
      returnPercentage: 12.9,
      lastUpdated: '2023-03-22T14:30:00Z',
      investments: [
        {
          id: 1,
          symbol: 'AAPL',
          name: 'Apple Inc.',
          shares: 50,
          purchasePrice: 145.32,
          currentPrice: 172.48,
          purchaseDate: '2021-11-15',
          sector: 'Technology',
          unrealizedGain: 1358.00,
          unrealizedGainPercentage: 18.69
        },
        {
          id: 2,
          symbol: 'MSFT',
          name: 'Microsoft Corp.',
          shares: 25,
          purchasePrice: 240.75,
          currentPrice: 287.18,
          purchaseDate: '2022-01-20',
          sector: 'Technology',
          unrealizedGain: 1160.75,
          unrealizedGainPercentage: 19.29
        },
        {
          id: 3,
          symbol: 'AMZN',
          name: 'Amazon.com Inc.',
          shares: 10,
          purchasePrice: 3250.00,
          currentPrice: 3112.71,
          purchaseDate: '2021-09-05',
          sector: 'Consumer Cyclical',
          unrealizedGain: -1372.90,
          unrealizedGainPercentage: -4.23
        },
        {
          id: 4,
          symbol: 'GOOGL',
          name: 'Alphabet Inc.',
          shares: 15,
          purchasePrice: 2638.00,
          currentPrice: 2695.65,
          purchaseDate: '2022-02-10',
          sector: 'Communication Services',
          unrealizedGain: 864.75,
          unrealizedGainPercentage: 2.18
        },
        {
          id: 5,
          symbol: 'JNJ',
          name: 'Johnson & Johnson',
          shares: 30,
          purchasePrice: 165.48,
          currentPrice: 176.92,
          purchaseDate: '2021-10-01',
          sector: 'Healthcare',
          unrealizedGain: 343.20,
          unrealizedGainPercentage: 6.91
        },
        {
          id: 6,
          symbol: 'JPM',
          name: 'JPMorgan Chase & Co.',
          shares: 40,
          purchasePrice: 154.32,
          currentPrice: 143.01,
          purchaseDate: '2022-01-10',
          sector: 'Financial Services',
          unrealizedGain: -452.40,
          unrealizedGainPercentage: -7.33
        }
      ]
    },
    retirement: {
      id: 'retirement',
      name: 'Retirement Fund',
      description: 'Long-term retirement investments',
      totalValue: 275690.45,
      totalCost: 248210.30,
      return: 27480.15,
      returnPercentage: 11.07,
      lastUpdated: '2023-03-22T14:30:00Z',
      investments: [
        {
          id: 7,
          symbol: 'VTI',
          name: 'Vanguard Total Stock Market ETF',
          shares: 250,
          purchasePrice: 205.42,
          currentPrice: 227.36,
          purchaseDate: '2020-05-15',
          sector: 'ETF',
          unrealizedGain: 5485.00,
          unrealizedGainPercentage: 10.68
        },
        {
          id: 8,
          symbol: 'VXUS',
          name: 'Vanguard Total International Stock ETF',
          shares: 200,
          purchasePrice: 65.28,
          currentPrice: 69.45,
          purchaseDate: '2020-07-20',
          sector: 'ETF',
          unrealizedGain: 834.00,
          unrealizedGainPercentage: 6.39
        }
      ]
    }
  };
  
  const portfolio = portfolios[activePortfolio];
  
  // Sort investments
  const sortedInvestments = [...portfolio.investments].sort((a, b) => {
    let comparison = 0;
    
    switch (sortField) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'symbol':
        comparison = a.symbol.localeCompare(b.symbol);
        break;
      case 'shares':
        comparison = a.shares - b.shares;
        break;
      case 'value':
        const valueA = a.shares * a.currentPrice;
        const valueB = b.shares * b.currentPrice;
        comparison = valueA - valueB;
        break;
      case 'gain':
        comparison = a.unrealizedGain - b.unrealizedGain;
        break;
      case 'gainPct':
        comparison = a.unrealizedGainPercentage - b.unrealizedGainPercentage;
        break;
      default:
        break;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  // Toggle sort
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Calculate sector allocations for pie chart
  const sectorAllocations = portfolio.investments.reduce((acc, inv) => {
    const value = inv.shares * inv.currentPrice;
    acc[inv.sector] = (acc[inv.sector] || 0) + value;
    return acc;
  }, {});
  
  // Format as percentage of total
  const totalValue = Object.values(sectorAllocations).reduce((sum, val) => sum + val, 0);
  const formattedAllocations = Object.entries(sectorAllocations).map(([sector, value]) => ({
    sector,
    value,
    percentage: ((value / totalValue) * 100).toFixed(1)
  }));
  
  // Sort by percentage (descending)
  formattedAllocations.sort((a, b) => b.percentage - a.percentage);
  
  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };
  
  // Format percentage values
  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
  };
  
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Portfolio Management</h1>
        <div className="portfolio-actions">
          <button className="btn btn-primary" onClick={() => setShowAddStock(true)}>
            <FaPlus /> Add Stock
          </button>
          <button className="btn btn-secondary">
            <FaSync /> Refresh Prices
          </button>
        </div>
      </div>
      
      <div className="portfolio-selector">
        <label htmlFor="portfolio-select">Select Portfolio:</label>
        <select 
          id="portfolio-select" 
          value={activePortfolio}
          onChange={(e) => setActivePortfolio(e.target.value)}
        >
          <option value="default">Main Portfolio</option>
          <option value="retirement">Retirement Fund</option>
        </select>
        <button className="btn btn-sm btn-secondary">Create New</button>
      </div>
      
      <div className="portfolio-summary">
        <div className="summary-card">
          <h3>Total Value</h3>
          <p className="card-value">{formatCurrency(portfolio.totalValue)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Cost</h3>
          <p className="card-value">{formatCurrency(portfolio.totalCost)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Return</h3>
          <p className={`card-value ${portfolio.return >= 0 ? 'positive' : 'negative'}`}>
            {formatCurrency(portfolio.return)}
            <span className="return-percentage">
              {formatPercentage(portfolio.returnPercentage)}
            </span>
          </p>
        </div>
      </div>
      
      <div className="portfolio-content">
        <div className="investments-section">
          <h2>Investments</h2>
          <div className="investments-table-container">
            <table className="investments-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('symbol')} className="sortable">
                    Symbol
                    {sortField === 'symbol' && (
                      sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />
                    )}
                  </th>
                  <th onClick={() => handleSort('name')} className="sortable">
                    Name
                    {sortField === 'name' && (
                      sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />
                    )}
                  </th>
                  <th onClick={() => handleSort('shares')} className="sortable">
                    Shares
                    {sortField === 'shares' && (
                      sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />
                    )}
                  </th>
                  <th>Price</th>
                  <th onClick={() => handleSort('value')} className="sortable">
                    Value
                    {sortField === 'value' && (
                      sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />
                    )}
                  </th>
                  <th onClick={() => handleSort('gain')} className="sortable">
                    Gain/Loss
                    {sortField === 'gain' && (
                      sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />
                    )}
                  </th>
                  <th onClick={() => handleSort('gainPct')} className="sortable">
                    Gain/Loss %
                    {sortField === 'gainPct' && (
                      sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />
                    )}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedInvestments.map((investment) => (
                  <tr key={investment.id}>
                    <td className="symbol">{investment.symbol}</td>
                    <td>{investment.name}</td>
                    <td>{investment.shares}</td>
                    <td>{formatCurrency(investment.currentPrice)}</td>
                    <td>{formatCurrency(investment.shares * investment.currentPrice)}</td>
                    <td className={investment.unrealizedGain >= 0 ? 'positive' : 'negative'}>
                      {formatCurrency(investment.unrealizedGain)}
                    </td>
                    <td className={investment.unrealizedGainPercentage >= 0 ? 'positive' : 'negative'}>
                      {formatPercentage(investment.unrealizedGainPercentage)}
                    </td>
                    <td className="actions">
                      <button className="btn-icon" title="Edit">
                        <FaEdit />
                      </button>
                      <button className="btn-icon" title="Delete">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="portfolio-analysis">
          <div className="analysis-section">
            <h2>Sector Allocation</h2>
            <div className="pie-chart-container">
              <div className="pie-chart">
                {formattedAllocations.map((allocation, index) => (
                  <div 
                    key={allocation.sector}
                    className="pie-segment" 
                    style={{ 
                      '--percentage': `${allocation.percentage}%`,
                      '--rotation': `${index > 0 
                        ? formattedAllocations
                            .slice(0, index)
                            .reduce((sum, a) => sum + parseFloat(a.percentage), 0) 
                        : 0}%`,
                      '--color': `var(--color-${index + 1})`
                    }}
                  />
                ))}
              </div>
              <div className="pie-legend">
                {formattedAllocations.map((allocation, index) => (
                  <div key={allocation.sector} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: `var(--color-${index + 1})` }}
                    />
                    <div className="legend-label">
                      <span>{allocation.sector}</span>
                      <span className="legend-percentage">{allocation.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="analysis-section">
            <h2>Performance Metrics</h2>
            <div className="metrics-container">
              <div className="metric-card">
                <h3>Annual Return</h3>
                <p className="metric-value positive">+15.7%</p>
              </div>
              <div className="metric-card">
                <h3>Dividend Yield</h3>
                <p className="metric-value">2.1%</p>
              </div>
              <div className="metric-card">
                <h3>Risk Level</h3>
                <p className="metric-value">Moderate</p>
              </div>
              <div className="metric-card">
                <h3>Beta</h3>
                <p className="metric-value">1.15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showAddStock && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Stock</h2>
              <button className="close-button" onClick={() => setShowAddStock(false)}>×</button>
            </div>
            <div className="modal-body">
              <form className="add-stock-form">
                <div className="form-group">
                  <label htmlFor="symbol">Symbol</label>
                  <input type="text" id="symbol" name="symbol" placeholder="e.g. AAPL" />
                </div>
                <div className="form-group">
                  <label htmlFor="shares">Shares</label>
                  <input type="number" id="shares" name="shares" placeholder="Number of shares" min="0.01" step="0.01" />
                </div>
                <div className="form-group">
                  <label htmlFor="purchasePrice">Purchase Price</label>
                  <input type="number" id="purchasePrice" name="purchasePrice" placeholder="Price per share" min="0.01" step="0.01" />
                </div>
                <div className="form-group">
                  <label htmlFor="purchaseDate">Purchase Date</label>
                  <input type="date" id="purchaseDate" name="purchaseDate" />
                </div>
                <div className="form-group">
                  <label htmlFor="sector">Sector</label>
                  <select id="sector" name="sector">
                    <option value="">Select Sector</option>
                    <option value="Technology">Technology</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Consumer Cyclical">Consumer Cyclical</option>
                    <option value="Communication Services">Communication Services</option>
                    <option value="Industrials">Industrials</option>
                    <option value="Consumer Defensive">Consumer Defensive</option>
                    <option value="Energy">Energy</option>
                    <option value="Basic Materials">Basic Materials</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Utilities">Utilities</option>
                    <option value="ETF">ETF</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea id="notes" name="notes" placeholder="Additional notes (optional)"></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowAddStock(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Add Stock</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .portfolio-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        
        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .portfolio-header h1 {
          font-size: 28px;
          color: #2c3e50;
          margin: 0;
        }
        
        .portfolio-actions {
          display: flex;
          gap: 10px;
        }
        
        .portfolio-selector {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        
        .portfolio-selector label {
          font-weight: bold;
          color: #2c3e50;
        }
        
        .portfolio-selector select {
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-size: 16px;
          min-width: 200px;
        }
        
        .portfolio-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .summary-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
        }
        
        .summary-card h3 {
          font-size: 16px;
          color: #7f8c8d;
          margin: 0 0 10px 0;
        }
        
        .card-value {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
        }
        
        .positive {
          color: #2ecc71;
        }
        
        .negative {
          color: #e74c3c;
        }
        
        .return-percentage {
          display: block;
          font-size: 16px;
          margin-top: 5px;
        }
        
        .portfolio-content {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .investments-section {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        
        .investments-section h2 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .investments-table-container {
          overflow-x: auto;
        }
        
        .investments-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .investments-table th {
          background: #f5f7fa;
          padding: 12px 15px;
          text-align: left;
          font-weight: bold;
          color: #2c3e50;
          border-bottom: 2px solid #ddd;
        }
        
        .investments-table th.sortable {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .investments-table th svg {
          font-size: 12px;
        }
        
        .investments-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #eee;
        }
        
        .investments-table tr:last-child td {
          border-bottom: none;
        }
        
        .investments-table .symbol {
          font-weight: bold;
          color: #3498db;
        }
        
        .actions {
          display: flex;
          gap: 10px;
        }
        
        .btn-icon {
          background: none;
          border: none;
          font-size: 16px;
          color: #7f8c8d;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        .btn-icon:hover {
          color: #2c3e50;
          background: #f5f7fa;
        }
        
        .portfolio-analysis {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .analysis-section {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        
        .analysis-section h2 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .pie-chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .pie-chart {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: #ecf0f1;
          overflow: hidden;
        }
        
        .pie-segment {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 50%, 50% 0, calc(50% + 50% * sin(var(--rotation) * 0.01deg + var(--percentage) * 0.01deg)) calc(50% - 50% * cos(var(--rotation) * 0.01deg + var(--percentage) * 0.01deg)), calc(50% + 50% * sin(var(--rotation) * 0.01deg)) calc(50% - 50% * cos(var(--rotation) * 0.01deg)));
          background: var(--color);
        }
        
        .pie-legend {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          width: 100%;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        
        .legend-label {
          display: flex;
          flex-direction: column;
          font-size: 14px;
        }
        
        .legend-percentage {
          font-weight: bold;
        }
        
        .metrics-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        
        .metric-card {
          background: #f5f7fa;
          border-radius: 6px;
          padding: 15px;
          text-align: center;
        }
        
        .metric-card h3 {
          font-size: 14px;
          color: #7f8c8d;
          margin: 0 0 8px 0;
        }
        
        .metric-value {
          font-size: 18px;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }
        
        .modal {
          background: white;
          border-radius: 8px;
          width: 500px;
          max-width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }
        
        .modal-header h2 {
          font-size: 20px;
          color: #2c3e50;
          margin: 0;
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #7f8c8d;
        }
        
        .modal-body {
          padding: 20px;
        }
        
        .add-stock-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .form-group label {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .form-group textarea {
          min-height: 80px;
        }
        
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 10px;
        }
        
        @media (max-width: 992px) {
          .portfolio-content {
            grid-template-columns: 1fr;
          }
          
          .portfolio-summary {
            grid-template-columns: 1fr;
          }
        }
        
        :root {
          --color-1: #3498db;
          --color-2: #2ecc71;
          --color-3: #9b59b6;
          --color-4: #f1c40f;
          --color-5: #e74c3c;
          --color-6: #1abc9c;
          --color-7: #d35400;
          --color-8: #34495e;
          --color-9: #95a5a6;
          --color-10: #7f8c8d;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;