import React from 'react';
import './Portfolio.css';
import { Helmet } from 'react-helmet';

const Portfolio = () => (
  <> 
      <Helmet>
  <title>Portfolio | Techverra Solutions</title>
  <meta name="description" content="Explore our successful projects and custom-built software solutions delivered for clients worldwide." />
  <meta name="keywords" content="Techverra Solutions portfolio, projects, software development, digital marketing, web apps, mobile apps" />
  <meta name="author" content="Techverra Solutions Pvt. Ltd." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Our Work | Techverra Solutions" />
  <meta property="og:description" content="See the innovative web, AI, and mobile projects built by Techverra Solutions." />
  <meta property="og:image" content="https://www.techverrasolutions.in/preview.jpg" />
  <meta property="og:url" content="https://www.techverrasolutions.in/portfolio" />
  <meta property="og:site_name" content="Techverra Solutions" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Techverra Portfolio" />
  <meta name="twitter:description" content="Browse the creative and impactful projects delivered by Techverra Solutions." />
  <meta name="twitter:image" content="https://www.techverrasolutions.in/preview.jpg" />
</Helmet>


  <section className="page-section">
    <h2 className="text-2xl font-bold mb-6" style={{ color: '#bb86fc' }}>🚀 Portfolio</h2>
    <p className="mb-6" style={{ color: '#ddd' }}>
      A glimpse into our recent projects and creative solutions. More case studies coming soon!
    </p>

    <div className="portfolio-grid">

      <div className="portfolio-card">
        <img src="/assets/bakery.png" alt="Bakery Web App" className="portfolio-logo" />
        <h3>Bakery Web App</h3>
        <p>A full-stack app for managing orders and showcasing bakery products, built with React and Flask, integrated with Google Sheets as a backend database.</p>
      </div>

      <div className="portfolio-card">
        <img src="/assets/admin.png" alt="Bakery Admin Panel" className="portfolio-logo" />
        <h3>Bakery Admin Panel</h3>
        <p>Custom dashboard to manage orders, product inventory, pricing, and analytics for the Techverra Bakery. Features advanced UI, PDF invoices, and email notifications.</p>
      </div>

      <div className="portfolio-card">
        <img src="/assets/mobile.png" alt="Bakery Mobile Layout" className="portfolio-logo" />
        <h3>Bakery Mobile Layout</h3>
        <p>A responsive mobile-first interface for seamless browsing and ordering experience optimized for phones and tablets.</p>
      </div>

      <div className="portfolio-card">
        <img src="/assets/journal.png" alt="Daily Journal App" className="portfolio-logo" />
        <h3>Daily Journal App</h3>
        <p>A modern journal web app built using React, Flask, and Google Sheets. It features responsive design, user authentication, advanced styling, and full CRUD capabilities.</p>
      </div>
      <div className="portfolio-card">
         <img src="/assets/qr.png" alt="QR Code Generator" className="portfolio-logo" />
        <h3>QR Code Generator</h3>
       <p>
        A fast, customizable QR code generator built with React. Users can input text or URLs and instantly download QR codes. Lightweight, responsive, and supports dark mode.
         </p>
        </div>
        <div className="portfolio-card">
  <img src="/assets/mini-arcade.png" alt="Mini Arcade Project" className="portfolio-logo" />
  <h3>Mini Arcade</h3>
  <p>
    A collection of classic web-based games like Snake, Tic-Tac-Toe, and Memory Flip, built with React. Designed for speed, fun, and responsive gameplay on both desktop and mobile devices.
  </p>
</div>
<div className="portfolio-card">
  <img src="/assets/country-advisor-logo.png" alt="Country Advisor Logo" className="portfolio-logo" />
  <h3>Country Advisor App</h3>
  <p>
    A smart education planning tool to help students compare countries for studying abroad. Features include country comparison, tuition/job/PR analysis, and a recommendation engine. Built using React and intelligent data visualization.
  </p>
</div>

<div className="portfolio-card">
  <img src="/assets/jan.png" alt="JAN Assistant Logo" className="portfolio-logo" />
  <h3>JAN – AI Voice Assistant</h3>
  <p>
    JAN is a powerful voice assistant built using React and Python. It supports hotword detection using Porcupine, real-time voice commands, weather updates, web search, reminders, jokes, fun facts, and integrates OpenAI’s GPT for intelligent responses. Designed with a sleek dashboard UI.
  </p>
</div>






      <div className="portfolio-card">
        <img src="/assets/logistics.png" alt="Logistics Project" className="portfolio-logo" />
        <h3>Project 1</h3>
        <p>A custom software solution for a logistics startup.</p>
      </div>

      <div className="portfolio-card">
        <img src="/assets/fashion.png" alt="Fashion SEO Project" className="portfolio-logo" />
        <h3>Project 2</h3>
        <p>End-to-end branding and SEO for a fashion brand.</p>
      </div>

      <div className="portfolio-card">
        <img src="/assets/comingsoon.png" alt="Coming Soon" className="portfolio-logo" />
        <h3>Coming Soon</h3>
        <p>New exciting case studies are on the way!</p>
      </div>

    </div>
  </section>
  </>
);

export default Portfolio;
