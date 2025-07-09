import React, { useState, useEffect } from 'react';
import './Popup.css'; // Optional: for custom styling

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Delay before showing popup (1 second)

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>🚀 Elevate Your Business</h2>
        <p>We offer cutting-edge software, stunning designs, digital marketing, and creative media production. Let's build something extraordinary!</p>
        <a href="/services" className="popup-cta">Explore Services</a>
      </div>
    </div>
  );
};

export default Popup;
