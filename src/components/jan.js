import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Jan.css';

function Jan() {
  const [command, setCommand] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendCommand = async () => {
    if (!command.trim()) return;

    const userMessage = { sender: 'user', text: command };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post('https://jan-l9jg.onrender.com/api/command', {
        command,
      });

      const janMessage = { sender: 'jan', text: res.data.response };
      setMessages((prev) => [...prev, janMessage]);
    } catch (err) {
      const errorMessage = { sender: 'jan', text: 'Error contacting JAN backend.' };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setCommand('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendCommand();
  };

  return (
    <div className="jan-wrapper">
      {isOpen && (
        <div className="chat-box">
          <div className="headerr">
            JAN Assistant (testing)
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.sender === 'user' ? 'user' : 'jan'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder="Ask JAN anything..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={sendCommand} disabled={!command.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          💬 Chat
        </button>
      )}
    </div>
  );
}

export default Jan;
