import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.2); // Adjust 0.2 for more/less parallax effect
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        transform: `translateY(${offsetY}px)`, // parallax effect
        transition: 'transform 0.1s linear',
      }}
      options={{
        background: {
          color: { value: "#0f172a" },
        },
        fullScreen: { enable: false },
        particles: {
          color: { value: "#bb86fc" },
          links: {
            color: "#bb86fc",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
  enable: true,
  speed: 1.2,           // Smooth downward speed
  direction: "bottom",  // Scrolls particles down
  random: false,
  straight: true,       // Moves in straight lines
  outModes: { default: "wrap" }, // Wrap when leaving screen (gives infinity effect)
},
          number: {
            value: 100,
            density: { enable: true, area: 800 },
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
