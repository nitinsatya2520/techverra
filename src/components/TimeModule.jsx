import React, { useState, useEffect } from 'react';

const TimeModule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
   <div
  className="
    fixed bottom-0 left-0 z-[1000]
    w-[180px] p-8
    bg-white/80
    backdrop-blur-sm
    rounded-[25px]
    text-center
    font-sans
    transition-all duration-300
    hover:shadow-lg
    text-gray-900
    md:block hidden
  "
>
  <p className="text-lg m-0">{`Current time: ${formattedTime}`}</p>
</div>

  );
};

export default TimeModule;
