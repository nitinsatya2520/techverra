import React, { useState } from 'react';
import './New.css';

function New() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`new ${isOpen ? 'active' : ''}`}>
      <button className="menu-toggle" onClick={handleToggle}>
        {isOpen ? '×' : '☰'}
      </button>
      <div className="content">
        <h3 className="new-heading">Latest News</h3>
        <p className="new-message">No new updates</p>
      </div>
    </div>
  );
}

export default New;
