import React, { useState } from 'react';
function New() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
  className={`fixed right-2 top-[200px] h-[450px] w-[200px] bg-slate-900/70 text-white p-5 rounded-lg shadow-lg z-[1000] transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
  }`}
>
  <button
    className="absolute top-2 left-2 text-xl text-white bg-transparent border-none cursor-pointer"
    onClick={handleToggle}
  >
    {isOpen ? '×' : '☰'}
  </button>

  <div className="mt-10 block">
    <h3 className="text-lg font-semibold mb-2">Latest News</h3>
    <p className="text-sm">
      Techverra Solutions Technical Training Program - 2025 starting from June 2nd week
    </p>
  </div>
</div>

  );
}

export default New;
