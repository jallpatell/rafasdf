import React, { useState } from 'react';
import AIDialog from '../components/AIDialog';
import { FaLightbulb, FaChartLine, FaSearch, FaBalanceScale } from 'react-icons/fa';

const InvestmentAdvice = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const getPromptForTab = () => {
    switch (activeTab) {
      case 'portfolio':
        return 'You are an expert portfolio advisor. Provide professional advice on portfolio optimization, diversification strategies, asset allocation, and risk management. Tailor your advice to retail investors.';
      case 'stock':
        return 'You are an expert stock analyst. Provide thorough analysis and insights on specific stocks, sectors, and market trends. Consider fundamental and technical factors in your analysis for retail investors.';
      case 'strategy':
        return 'You are an expert investment strategist. Provide detailed advice on investment strategies, including value investing, growth investing, dividend investing, and other approaches. Explain the pros and cons of each strategy for retail investors.';
      default:
        return 'You are an expert financial advisor. Provide professional investment advice on a wide range of topics including stocks, bonds, ETFs, mutual funds, and other investment vehicles. Tailor your advice to retail investors.';
    }
  };
  
  return (
    <div className="investment-advice-container">
      <div className="advice-header">
        <h1>Investment Advice</h1>
        <p>Get personalized investment insights powered by AI</p>
      </div>
      
      <div className="advice-tabs">
        <button 
          className={`tab ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          <FaLightbulb />
          <span>General Advice</span>
        </button>
        <button 
          className={`tab ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          <FaChartLine />
          <span>Portfolio Optimization</span>
        </button>
        <button 
          className={`tab ${activeTab === 'stock' ? 'active' : ''}`}
          onClick={() => setActiveTab('stock')}
        >
          <FaSearch />
          <span>Stock Analysis</span>
        </button>
        <button 
          className={`tab ${activeTab === 'strategy' ? 'active' : ''}`}
          onClick={() => setActiveTab('strategy')}
        >
          <FaBalanceScale />
          <span>Investment Strategies</span>
        </button>
      </div>
      
      <div className="advice-content">
        <div className="advice-description">
          {activeTab === 'general' && (
            <div>
              <h2>AI-Powered Financial Advice</h2>
              <p>
                Ask any investment-related questions and get expert insights. Our AI assistant can help with market analysis, 
                investment recommendations, and financial planning advice.
              </p>
              <ul>
                <li>Market trends and analysis</li>
                <li>Investment recommendations</li>
                <li>Financial planning</li>
                <li>Risk assessment</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'portfolio' && (
            <div>
              <h2>Portfolio Optimization</h2>
              <p>
                Optimize your investment portfolio with AI-powered recommendations. Get insights on diversification, 
                asset allocation, and risk management tailored to your goals.
              </p>
              <ul>
                <li>Asset allocation strategies</li>
                <li>Diversification recommendations</li>
                <li>Risk assessment and management</li>
                <li>Portfolio rebalancing advice</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'stock' && (
            <div>
              <h2>Stock Analysis</h2>
              <p>
                Get detailed analysis on specific stocks or sectors. Our AI can help you understand 
                fundamental and technical indicators, company performance, and market position.
              </p>
              <ul>
                <li>Fundamental analysis of companies</li>
                <li>Technical indicator interpretation</li>
                <li>Industry and sector analysis</li>
                <li>Growth potential assessment</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'strategy' && (
            <div>
              <h2>Investment Strategies</h2>
              <p>
                Learn about different investment strategies and approaches. Our AI can help you understand 
                which strategies align with your financial goals, timeline, and risk tolerance.
              </p>
              <ul>
                <li>Value investing principles</li>
                <li>Growth investment strategies</li>
                <li>Income-focused approaches</li>
                <li>Passive vs. active investing</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="advice-dialog">
          <AIDialog 
            context={`AI ${activeTab === 'general' ? 'Investment' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Advisor`}
            initialPrompt={getPromptForTab()}
          />
        </div>
      </div>
      
      <div className="disclaimer">
        <p>
          <strong>Disclaimer:</strong> The advice provided is for informational purposes only and should not be considered as financial advice. 
          Always consult with a qualified financial advisor before making investment decisions.
        </p>
      </div>
      
      <style jsx>{`
        .investment-advice-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .advice-header {
          margin-bottom: 20px;
        }
        
        .advice-header h1 {
          font-size: 28px;
          margin-bottom: 8px;
          color: #2c3e50;
        }
        
        .advice-header p {
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .advice-tabs {
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
        
        .advice-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          min-height: 600px;
        }
        
        .advice-description {
          padding: 20px;
          border-right: 1px solid #f0f0f0;
        }
        
        .advice-description h2 {
          color: #2c3e50;
          font-size: 22px;
          margin-bottom: 15px;
        }
        
        .advice-description p {
          color: #34495e;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .advice-description ul {
          padding-left: 20px;
          color: #34495e;
        }
        
        .advice-description li {
          margin-bottom: 8px;
        }
        
        .advice-dialog {
          height: 600px;
        }
        
        .disclaimer {
          margin-top: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 5px;
          border-left: 4px solid #f39c12;
        }
        
        .disclaimer p {
          color: #7f8c8d;
          font-size: 14px;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .advice-content {
            grid-template-columns: 1fr;
          }
          
          .advice-description {
            border-right: none;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .advice-dialog {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default InvestmentAdvice;