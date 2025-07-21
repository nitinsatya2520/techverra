import React, { useState, useEffect } from 'react';
import './New.css';

function New() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // Open on desktop, closed on mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <div className={`new ${isOpen ? 'active' : ''}`}>
      {isMobile && (
        <button className="menu-toggle" onClick={handleToggle}>
          {isOpen ? '×' : '☰'}
        </button>
      )}

      <div className="content">
        <h3>Latest News</h3>
        <p>
          Techverra Solutions Technical Training Program - 2025 starting from July 4th week.
        </p>
      </div>
    </div>
  );
}

export default New;
