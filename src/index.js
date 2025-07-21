import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons

function Root() {
  const [selectedApp, setSelectedApp] = useState("App");

  const toggleApp = () => {
    setSelectedApp((prev) => (prev === "App" ? "Appp" : "App"));
  };

  return (
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
