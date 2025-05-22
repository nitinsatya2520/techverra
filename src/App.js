import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <>
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
  </>
);

const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <p>Email: contact@techverra.com</p>
    <p>Location: Andhra Pradesh, India</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2025 Techverra Solutions Pvt. Ltd. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
