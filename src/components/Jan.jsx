import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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
      const res = await axios.post('https://techverra-bot.onrender.com/chat', { message: command });

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
   <div className="fixed bottom-4 right-4 z-[9999]">
  {isOpen ? (
    <div className="w-80 sm:w-96 bg-white shadow-xl rounded-xl border border-gray-300 flex flex-col">
      <div className="bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
        <span className="font-semibold">JAN Assistant (testing)</span>
        <button
          className="text-white text-xl font-bold hover:text-gray-100"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-80 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-3 py-2 rounded-lg text-sm w-fit ${
              msg.sender === 'user'
                ? 'bg-indigo-100 self-end ml-auto'
                : 'bg-gray-200 self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-2 border-t border-gray-300 flex items-center gap-2 bg-white">
        <input
          type="text"
          placeholder="Ask JAN anything..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
        />
        <button
          onClick={sendCommand}
          disabled={!command.trim()}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  ) : (
    <button
      className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 z-[9999]"
      onClick={() => setIsOpen(true)}
    >
      💬 Chat
    </button>
  )}
</div>


  );
}

export default Jan;
