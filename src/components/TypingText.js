// TypingText.js
import React, { useEffect, useState } from 'react';

const TypingText = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className="typing-text">{displayed}<span className="blinking-cursor">|</span></h1>;

};

export default TypingText;
