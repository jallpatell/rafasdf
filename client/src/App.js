import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import InvestmentAdvice from './pages/InvestmentAdvice';
import TaxCompliance from './pages/TaxCompliance';
import MarketRegulations from './pages/MarketRegulations';
import Settings from './pages/Settings';
import { FaBars } from 'react-icons/fa';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="top-bar">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <div className="user-info">
              <span>John Doe</span>
              <div className="user-avatar">JD</div>
            </div>
          </div>
          
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/investment-advice" element={<InvestmentAdvice />} />
              <Route path="/tax-compliance" element={<TaxCompliance />} />
              <Route path="/market-regulations" element={<MarketRegulations />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
        
        <style jsx>{`
          .app-container {
            display: flex;
            height: 100vh;
            overflow: hidden;
          }
          
          .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            transition: margin-left 0.3s ease;
            background-color: #f5f7fa;
            overflow: hidden;
          }
          
          .main-content.sidebar-open {
            margin-left: 0;
          }
          
          .main-content.sidebar-closed {
            margin-left: -180px;
          }
          
          .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            z-index: 10;
          }
          
          .menu-toggle {
            background: none;
            border: none;
            font-size: 20px;
            color: #2c3e50;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            border-radius: 5px;
            transition: background 0.2s;
          }
          
          .menu-toggle:hover {
            background: #f5f5f5;
          }
          
          .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
          }
          
          .page-content {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
          }
          
          @media (max-width: 768px) {
            .main-content {
              margin-left: 0 !important;
            }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;