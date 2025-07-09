import React, { useEffect, useState } from "react";
import "./PromoPopup.css";

const ads = [
  {
    title: "🔥 WEBSITE OFFER",
    description: "Get your dream website developed by experts — custom, responsive & blazing fast!",
    image: "/assets/promo-1.png",
  },
  {
    title: "🎯 DIGITAL MARKETING",
    description: "Boost your business reach with our SEO, SMM, and performance ads packages.",
    image: "/assets/promo-2.png",
  },
  {
    title: "🤖 CUSTOM AI TOOLS",
    description: "We build AI assistants, chatbots, and automation tailored to your needs.",
    image: "/assets/promo-3.png",
  },
  {
    title: "🌐 PERSONAL PORTFOLIO",
    description: "Showcase your skills online. Launch your own professional portfolio website today!",
    image: "/assets/promo-4.png",
  },
];

const PromoPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const skipDate = localStorage.getItem("skipPromo");
    if (!skipDate || new Date(skipDate) < new Date()) {
      setVisible(true);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 2000); // auto-change every 5s

    return () => clearInterval(interval);
  }, []);

  const closePopup = () => {
    if (dontShow) {
      const tomorrow = new Date();
      tomorrow.setHours(23, 59, 59, 999);
      localStorage.setItem("skipPromo", tomorrow.toISOString());
    }
    setVisible(false);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % ads.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);

  if (!visible) return null;

  const currentAd = ads[currentIndex];

  return (
  <div className="promo-overlay">
    <div className="promo-card">
      <button className="promo-close" onClick={closePopup}>×</button>
      <img src={currentAd.image} alt="Ad" className="promo-image" />
    </div>
  </div>
);

};

export default PromoPopup;
