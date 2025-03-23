import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaChartLine, 
  FaLightbulb, 
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const navItems = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <FaHome />
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      icon: <FaChartLine />
    },
    {
      name: 'Investment Advice',
      path: '/investment-advice',
      icon: <FaLightbulb />
    },
    {
      name: 'Tax Compliance',
      path: '/tax-compliance',
      icon: <FaFileInvoiceDollar />
    },
    {
      name: 'Market Regulations',
      path: '/market-regulations',
      icon: <FaBalanceScale />
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: <FaCog />
    }
  ];
  
  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log('Logging out...');
  };
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>Invest AI</h2>
        <button className="close-button" onClick={toggleSidebar}>
          ×
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li 
              key={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
            >
              <Link to={item.path}>
                <span className="icon">{item.icon}</span>
                <span className="text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>
          <span className="icon"><FaSignOutAlt /></span>
          <span className="text">Logout</span>
        </button>
      </div>
      
      <style jsx>{`
        .sidebar {
          display: flex;
          flex-direction: column;
          background: #2c3e50;
          color: white;
          height: 100vh;
          transition: width 0.3s ease;
          position: relative;
        }
        
        .sidebar.open {
          width: 250px;
        }
        
        .sidebar.closed {
          width: 70px;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid #34495e;
        }
        
        .sidebar-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
        }
        
        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          display: none;
        }
        
        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 15px 0;
        }
        
        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .sidebar-nav li {
          margin-bottom: 5px;
        }
        
        .sidebar-nav li a {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          color: #ecf0f1;
          text-decoration: none;
          transition: background 0.2s;
          white-space: nowrap;
        }
        
        .sidebar-nav li a:hover, 
        .sidebar-nav li.active a {
          background: #34495e;
        }
        
        .sidebar-nav li.active a {
          border-left: 4px solid #3498db;
        }
        
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-right: 15px;
          font-size: 18px;
        }
        
        .sidebar.closed .text {
          display: none;
        }
        
        .sidebar-footer {
          padding: 15px 20px;
          border-top: 1px solid #34495e;
        }
        
        .logout-button {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 12px;
          background: none;
          border: none;
          color: #ecf0f1;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .logout-button:hover {
          background: #34495e;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 100;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          
          .sidebar.open {
            transform: translateX(0);
            width: 250px;
          }
          
          .close-button {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;