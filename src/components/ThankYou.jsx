import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const ThankYou = () => {
  const [width, height] = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative bg-white text-slate-900">
  <Confetti width={width} height={height} />

  <img
   src={`https://source.unsplash.com/random/300x300?team,office,people`}
   alt="Contact Team"
    className="w-64 mb-6 rounded-lg shadow-lg"
  />

  <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-4">
    Thank You! 🎉
  </h1>
  <p className="text-lg text-center max-w-xl mb-6">
    We received your message and will get back to you within 24 hours.
  </p>

  <a
    href="/"
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
  >
    Back to Home
  </a>
</div>

  );
};

export default ThankYou;
