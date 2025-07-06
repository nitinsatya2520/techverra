// MultiTypingText.js
import React, { useEffect, useState } from 'react';

const MultiTypingText = ({ texts = [], speed = 100, pause = 1500 }) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0); // which text
  const [charIndex, setCharIndex] = useState(0); // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];

    let timeout;
    if (deleting) {
      timeout = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
        }
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [texts, index, charIndex, deleting, speed, pause]);

  return <span>{displayed}<span className="blinking-cursor">|</span></span>;
};

export default MultiTypingText;
