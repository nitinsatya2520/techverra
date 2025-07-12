import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Appp from './App.js';
import reportWebVitals from './reportWebVitals';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons

function Root() {
  const [selectedApp, setSelectedApp] = useState("App");

  const toggleApp = () => {
    setSelectedApp((prev) => (prev === "App" ? "Appp" : "App"));
  };

  return (
    <React.StrictMode>
      <div className="fixed left-2 top-1/2 -translate-y-1/2 z-[1100]">
        <button
          onClick={toggleApp}
          className="p-3 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
        >
          {selectedApp === "App" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

      {selectedApp === "App" ? <App /> : <Appp />}
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
