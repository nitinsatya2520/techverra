import React, { useState, useEffect } from 'react';

const MultiTypingText = ({ texts = [], speed = 100, pause = 1500 }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(texts[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === texts[index].length) {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(texts[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [texts, index, subIndex, isDeleting, speed]);

  return (
    <span className="text-xl md:text-2xl font-semibold text-purple-600">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default MultiTypingText;
