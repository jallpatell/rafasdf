import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import axios from 'axios';

const AIDialog = ({ context, initialPrompt }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Add initial system message if provided
  useEffect(() => {
    if (initialPrompt) {
      setMessages([
        {
          role: 'system',
          content: initialPrompt
        }
      ]);
    }
  }, [initialPrompt]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = {
      role: 'user',
      content: input
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await axios.post('/api/advisor/chat', {
        messages: [...messages, userMessage]
      });
      
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'assistant',
          content: response.data.message.content
        }
      ]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error while processing your request. Please try again later.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="ai-dialog-container">
      <div className="ai-dialog-header">
        <h3>{context || 'AI Investment Assistant'}</h3>
      </div>
      
      <div className="ai-dialog-messages">
        {messages.filter(msg => msg.role !== 'system').map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-icon">
              {message.role === 'user' ? <FaUser /> : <FaRobot />}
            </div>
            <div className="message-content">
              {formatMessage(message.content)}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message assistant-message">
            <div className="message-icon">
              <FaRobot />
            </div>
            <div className="message-content loading">
              <FaSpinner className="spinner" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="ai-dialog-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about investing, portfolio strategies, or market insights..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          {isLoading ? <FaSpinner className="spinner" /> : <FaPaperPlane />}
        </button>
      </form>
      
      <div className="ai-dialog-disclaimer">
        <p>
          This AI assistant provides general information and insights. 
          Investment decisions should be made after consulting with a financial advisor.
        </p>
      </div>
      
      <style jsx>{`
        .ai-dialog-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .ai-dialog-header {
          padding: 15px 20px;
          background: #2c3e50;
          color: white;
        }
        
        .ai-dialog-header h3 {
          margin: 0;
          font-size: 18px;
        }
        
        .ai-dialog-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: #f9f9f9;
        }
        
        .message {
          display: flex;
          gap: 12px;
          max-width: 85%;
        }
        
        .user-message {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .assistant-message {
          align-self: flex-start;
        }
        
        .message-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .user-message .message-icon {
          background: #3498db;
          color: white;
        }
        
        .assistant-message .message-icon {
          background: #2ecc71;
          color: white;
        }
        
        .message-content {
          padding: 12px 15px;
          border-radius: 10px;
          font-size: 16px;
          line-height: 1.5;
        }
        
        .user-message .message-content {
          background: #3498db;
          color: white;
          border-top-right-radius: 0;
        }
        
        .assistant-message .message-content {
          background: white;
          border: 1px solid #e0e0e0;
          border-top-left-radius: 0;
        }
        
        .loading {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .ai-dialog-input {
          display: flex;
          padding: 15px;
          background: white;
          border-top: 1px solid #e0e0e0;
        }
        
        .ai-dialog-input input {
          flex: 1;
          padding: 12px 15px;
          border: 1px solid #e0e0e0;
          border-radius: 30px;
          font-size: 16px;
          outline: none;
        }
        
        .ai-dialog-input input:focus {
          border-color: #3498db;
        }
        
        .ai-dialog-input button {
          margin-left: 10px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .ai-dialog-input button:hover {
          background: #2980b9;
        }
        
        .ai-dialog-input button:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }
        
        .ai-dialog-disclaimer {
          padding: 10px 15px;
          background: #f5f5f5;
          border-top: 1px solid #e0e0e0;
          font-size: 12px;
          color: #7f8c8d;
        }
      `}</style>
    </div>
  );
};

export default AIDialog;