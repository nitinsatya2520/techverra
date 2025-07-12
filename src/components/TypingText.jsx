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

  return (
    <span className="text-xl md:text-2xl font-semibold text-purple-600">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingText;
