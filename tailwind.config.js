/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f9fafb',
          card: '#ffffff',
          textPrimary: '#1f2937',
          textSecondary: '#4b5563',
          accent: '#7c3aed', // Purple shade
          border: '#e5e7eb',
        },
        dark: {
          background: '#0f172a',
          card: 'rgba(255, 255, 255, 0.05)',
          textPrimary: '#e5e7eb',
          textSecondary: '#9ca3af',
          accent: '#bb86fc',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
