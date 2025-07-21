import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.1);
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    // Initial theme check
    setIsDark(document.documentElement.classList.contains('dark'));

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full z-[-999] pointer-events-none"
      style={{
        transform: `translateY(${offsetY}px) scale(${1 + offsetY * 0.0002})`,
        transition: 'transform 0.2s linear',
      }}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: isDark ? '#0f172a' : '#f9fafb' } },
        particles: {
          color: { value: isDark ? ['#bb86fc', '#12ecec'] : ['#7c3aed', '#4b5563'] },
          links: {
            color: isDark ? '#bb86fc' : '#7c3aed',
            distance: 180,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            outModes: { default: 'bounce' },
          },
          number: {
            value: 60,
            density: { enable: true, area: 900 },
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: { enable: true, speed: 0.4, minimumValue: 0.1 },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          shape: { type: 'circle' },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
