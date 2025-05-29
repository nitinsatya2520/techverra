import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Internships from './components/internships';
import New from './components/New';
import About from './pages/About';
import TimeModule from './components/TimeModule';
import WeatherModule from './components/WeatherModule';
import FullEstimator from './pages/FullEstimator';

const Home = () => (
  <section className="page-section">
    <header className="header">
       <img src="/logo.png" alt="Techverra Logo" className="logo" />
      <h1>Techverra Solutions Pvt. Ltd.</h1>
      <p>Innovating Digital Experiences</p>
    </header>

    <section className="about">
      <h2>About Us</h2>
      <p>Techverra Solutions is a dynamic IT and digital services company specializing in software development, digital marketing, web platform creation, and technology consulting. We aim to digitally transform businesses across industries with innovative, customized solutions.</p>
    </section>

    <section className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Digital Advertising & Marketing (SEM, SEO, Social Media, Print, Outdoor)</li>
        <li>Software Development (custom apps, enterprise software)</li>
        <li>Web Portals & E-Commerce Platforms</li>
        <li>UI/UX Design, API Integration, Mobile App Development</li>
        <li>Data Analytics & Online Visibility Enhancement</li>
        <li>Tech Consulting & Training</li>
      </ul>
    </section>
    
  </section>
);





const Services = () => (
  <section className="page-section">
    <h2>Our Services</h2>
    <ul>
      <li>Digital Advertising & Marketing (SEM, SEO, Social Media, Print, Outdoor)</li>
      <li>Software Development (custom apps, enterprise software)</li>
      <li>Web Portals & E-Commerce Platforms</li>
      <li>UI/UX Design, API Integration, Mobile App Development</li>
      <li>Data Analytics & Online Visibility Enhancement</li>
      <li>Tech Consulting & Training</li>
    </ul>
  </section>
);

const Portfolio = () => (
  <section className="page-section">
    <h2>Portfolio</h2>
    <p>Coming soon! We'll showcase our latest projects and case studies here.</p>
  </section>
);

const Careers = () => (
  <section className="page-section">
    <h2>Careers</h2>
    <p>We're hiring! Join our team of passionate innovators. Check back soon for job listings.</p>
  </section>
);

const Contact = () => (
  <section className="page-section contact">
    <h2>Contact Us</h2>
    <p>Email: techverrasolutions@gmail.com</p>
    <p>Location: Kankipadu, Vijayawada, Andhra Pradesh, India</p>
  </section>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 3000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) return <Loader />;
  return (
    <Router>
      <New/>
      <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
      <TimeModule/>
      <div>
        <div className="top-bar">
          <img src="/logon.png" alt="Techverra Logo" className="top-logo" />

           <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Nav Links */}
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link to="/internships" onClick={() => setMenuOpen(false)}>Internships</Link>
            <Link to="/full-estimator" onClick={() => setMenuOpen(false)}>Estimator</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
        <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/full-estimator" element={<FullEstimator />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="footer">
          <p>&copy; 2025 Techverra Solutions Pvt. Ltd. All rights reserved.</p>
        </footer>
      </div>
      </div>
    </Router>
  );
};

export default App;
