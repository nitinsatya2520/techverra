import React, { useState, useEffect } from 'react';
import './TimeModule.css';

const TimeModule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  });

  return (
    <div className="time-module">
      <p>Current time: {formattedTime}</p>
    </div>
  );
};

export default TimeModule;
