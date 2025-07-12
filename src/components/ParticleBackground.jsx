import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.1);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full z-[-9999]"

      style={{
        transform: `translateY(${offsetY}px) scale(${1 + offsetY * 0.0002})`,
        transition: 'transform 0.2s linear',
      }}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          color: { value: ['#a970f0ff', '#757171ff', '#12ececff'] },
          links: {
            color: '#9c59eeff',
            distance: 190,
            enable: true,
            opacity: 0.5,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: 'none',
            random: true,
            outModes: { default: 'bounce' },
          },
          number: {
            value: 70,
            density: { enable: true, area: 800 },
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
            animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
          },
          size: {
            value: { min: 1, max: 5 },
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
