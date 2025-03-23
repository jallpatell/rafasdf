import React, { useState } from 'react';
import { FaUserCircle, FaBell, FaShieldAlt, FaPaintBrush, FaKey } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };
  
  return (
    <div className="settings-container">
      <h1>Account Settings</h1>
      
      <div className="settings-layout">
        <div className="settings-sidebar">
          <button 
            className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUserCircle />
            <span>Profile Information</span>
          </button>
          
          <button 
            className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <FaBell />
            <span>Notification Preferences</span>
          </button>
          
          <button 
            className={`settings-tab ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <FaShieldAlt />
            <span>Privacy & Security</span>
          </button>
          
          <button 
            className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            <FaPaintBrush />
            <span>Appearance</span>
          </button>
          
          <button 
            className={`settings-tab ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            <FaKey />
            <span>Change Password</span>
          </button>
        </div>
        
        <div className="settings-content">
          {formSubmitted && (
            <div className="settings-success">
              Settings updated successfully!
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div className="settings-section">
              <h2>Profile Information</h2>
              <p className="section-description">
                Manage your personal information and account preferences.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    defaultValue="John Doe" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    defaultValue="john.doe@example.com" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    defaultValue="(555) 123-4567" 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="dateFormat">Date Format</label>
                  <select id="dateFormat" defaultValue="mm-dd-yyyy">
                    <option value="mm-dd-yyyy">MM-DD-YYYY</option>
                    <option value="dd-mm-yyyy">DD-MM-YYYY</option>
                    <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="currency">Preferred Currency</label>
                  <select id="currency" defaultValue="usd">
                    <option value="usd">USD - US Dollar</option>
                    <option value="eur">EUR - Euro</option>
                    <option value="gbp">GBP - British Pound</option>
                    <option value="jpy">JPY - Japanese Yen</option>
                    <option value="cad">CAD - Canadian Dollar</option>
                    <option value="aud">AUD - Australian Dollar</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notification Preferences</h2>
              <p className="section-description">
                Control how and when you receive notifications about your investments, market events, and account activity.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="notification-section">
                  <h3>Email Notifications</h3>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="emailPortfolio" defaultChecked />
                    <label htmlFor="emailPortfolio">Portfolio Updates</label>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="emailMarket" defaultChecked />
                    <label htmlFor="emailMarket">Market Alerts</label>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="emailNews" defaultChecked />
                    <label htmlFor="emailNews">News Updates</label>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="emailTax" defaultChecked />
                    <label htmlFor="emailTax">Tax and Compliance Alerts</label>
                  </div>
                </div>
                
                <div className="notification-section">
                  <h3>Push Notifications</h3>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="pushPortfolio" defaultChecked />
                    <label htmlFor="pushPortfolio">Portfolio Updates</label>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="pushMarket" defaultChecked />
                    <label htmlFor="pushMarket">Market Alerts</label>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="pushNews" defaultChecked />
                    <label htmlFor="pushNews">News Updates</label>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="pushTax" defaultChecked />
                    <label htmlFor="pushTax">Tax and Compliance Alerts</label>
                  </div>
                </div>
                
                <div className="notification-section">
                  <h3>Price Alert Settings</h3>
                  
                  <div className="form-group">
                    <label htmlFor="priceAlertThreshold">Default Price Change Threshold</label>
                    <select id="priceAlertThreshold" defaultValue="5">
                      <option value="1">1% Change</option>
                      <option value="2">2% Change</option>
                      <option value="5">5% Change</option>
                      <option value="10">10% Change</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div className="settings-section">
              <h2>Privacy & Security</h2>
              <p className="section-description">
                Manage your privacy settings and control how your data is used.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="privacy-section">
                  <h3>Data Usage</h3>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="dataAnalytics" defaultChecked />
                    <label htmlFor="dataAnalytics">Allow usage data collection for analytics</label>
                    <p className="checkbox-description">
                      Helps us improve our services by analyzing how features are used
                    </p>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="dataPersonalization" defaultChecked />
                    <label htmlFor="dataPersonalization">Allow personalization</label>
                    <p className="checkbox-description">
                      Enables personalized investment recommendations and market insights based on your activity
                    </p>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="dataResearch" />
                    <label htmlFor="dataResearch">Participate in research</label>
                    <p className="checkbox-description">
                      Share anonymized data to help improve investment tools and services
                    </p>
                  </div>
                </div>
                
                <div className="privacy-section">
                  <h3>Account Visibility</h3>
                  
                  <div className="form-group">
                    <label htmlFor="accountVisibility">Who can see your investment activity</label>
                    <select id="accountVisibility" defaultValue="private">
                      <option value="private">Private - Only you</option>
                      <option value="advisors">Advisors - You and your financial advisors</option>
                      <option value="public">Public - Anyone can see your investment activity</option>
                    </select>
                  </div>
                </div>
                
                <div className="privacy-section">
                  <h3>Two-Factor Authentication</h3>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="twoFactor" />
                    <label htmlFor="twoFactor">Enable two-factor authentication</label>
                    <p className="checkbox-description">
                      Adds an extra layer of security when logging in
                    </p>
                  </div>
                  
                  <button type="button" className="btn btn-secondary">Set Up Two-Factor Authentication</button>
                </div>
                
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h2>Appearance</h2>
              <p className="section-description">
                Customize how the application looks.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="appearance-section">
                  <h3>Theme</h3>
                  
                  <div className="theme-options">
                    <div className="theme-option">
                      <input type="radio" id="themeLight" name="theme" value="light" defaultChecked />
                      <label htmlFor="themeLight">
                        <div className="theme-preview light"></div>
                        <span>Light</span>
                      </label>
                    </div>
                    
                    <div className="theme-option">
                      <input type="radio" id="themeDark" name="theme" value="dark" />
                      <label htmlFor="themeDark">
                        <div className="theme-preview dark"></div>
                        <span>Dark</span>
                      </label>
                    </div>
                    
                    <div className="theme-option">
                      <input type="radio" id="themeSystem" name="theme" value="system" />
                      <label htmlFor="themeSystem">
                        <div className="theme-preview system"></div>
                        <span>System Default</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="appearance-section">
                  <h3>Chart Preferences</h3>
                  
                  <div className="form-group">
                    <label htmlFor="defaultChartPeriod">Default Chart Period</label>
                    <select id="defaultChartPeriod" defaultValue="1m">
                      <option value="1d">1 Day</option>
                      <option value="1w">1 Week</option>
                      <option value="1m">1 Month</option>
                      <option value="3m">3 Months</option>
                      <option value="6m">6 Months</option>
                      <option value="1y">1 Year</option>
                      <option value="5y">5 Years</option>
                    </select>
                  </div>
                  
                  <div className="checkbox-group">
                    <input type="checkbox" id="showAfterHours" defaultChecked />
                    <label htmlFor="showAfterHours">Show after-hours trading in charts</label>
                  </div>
                </div>
                
                <div className="appearance-section">
                  <h3>Display Settings</h3>
                  
                  <div className="form-group">
                    <label htmlFor="defaultView">Default Dashboard View</label>
                    <select id="defaultView" defaultValue="portfolio">
                      <option value="portfolio">Portfolio Overview</option>
                      <option value="watchlist">Watchlist</option>
                      <option value="market">Market Overview</option>
                      <option value="news">Financial News</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}
          
          {activeTab === 'password' && (
            <div className="settings-section">
              <h2>Change Password</h2>
              <p className="section-description">
                Update your password to maintain account security.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input 
                    type="password" 
                    id="currentPassword" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input 
                    type="password" 
                    id="newPassword" 
                    required 
                  />
                  <p className="password-requirements">
                    Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
                  </p>
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    required 
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Update Password</button>
              </form>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .settings-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .settings-container h1 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #2c3e50;
        }
        
        .settings-layout {
          display: flex;
          gap: 20px;
          min-height: 600px;
        }
        
        .settings-sidebar {
          width: 250px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .settings-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 15px;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          border-left: 3px solid transparent;
          transition: all 0.2s;
        }
        
        .settings-tab:hover {
          background: #f5f7fa;
        }
        
        .settings-tab.active {
          background: #f5f7fa;
          border-left-color: #3498db;
          color: #3498db;
        }
        
        .settings-content {
          flex: 1;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 30px;
          position: relative;
        }
        
        .settings-success {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #2ecc71;
          color: white;
          padding: 10px 15px;
          border-radius: 4px;
          animation: fadeOut 3s forwards;
        }
        
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .settings-section h2 {
          font-size: 22px;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }
        
        .section-description {
          color: #7f8c8d;
          margin-bottom: 25px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          font-weight: 500;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="tel"],
        .form-group input[type="password"],
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .form-group select {
          background: white;
        }
        
        .notification-section,
        .privacy-section,
        .appearance-section {
          margin-bottom: 30px;
        }
        
        .notification-section h3,
        .privacy-section h3,
        .appearance-section h3 {
          font-size: 18px;
          color: #2c3e50;
          margin: 0 0 15px 0;
        }
        
        .checkbox-group {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        
        .checkbox-group input[type="checkbox"] {
          margin-top: 3px;
          margin-right: 10px;
        }
        
        .checkbox-group label {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .checkbox-description {
          color: #7f8c8d;
          font-size: 14px;
          margin: 5px 0 0 25px;
        }
        
        .theme-options {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .theme-option {
          text-align: center;
        }
        
        .theme-option input[type="radio"] {
          display: none;
        }
        
        .theme-option label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        
        .theme-preview {
          width: 100px;
          height: 60px;
          border-radius: 8px;
          border: 3px solid transparent;
          transition: border-color 0.2s;
        }
        
        .theme-preview.light {
          background: white;
          border: 1px solid #ddd;
        }
        
        .theme-preview.dark {
          background: #2c3e50;
        }
        
        .theme-preview.system {
          background: linear-gradient(to right, white 50%, #2c3e50 50%);
        }
        
        .theme-option input[type="radio"]:checked + label .theme-preview {
          border-color: #3498db;
        }
        
        .password-requirements {
          color: #7f8c8d;
          font-size: 14px;
          margin-top: 5px;
        }
        
        @media (max-width: 768px) {
          .settings-layout {
            flex-direction: column;
          }
          
          .settings-sidebar {
            width: 100%;
          }
          
          .theme-options {
            flex-direction: column;
            gap: 10px;
          }
          
          .theme-option label {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;