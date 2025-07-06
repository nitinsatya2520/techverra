import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Internships from './components/internships';
import New from './components/New';
import About from './pages/About';
import TimeModule from './components/TimeModule';
import WeatherModule from './components/WeatherModule';
import FullEstimator from './pages/FullEstimator';
import Contact from "./pages/Contact"; // adjust the path if needed
import Leadership from './components/Leadership';
import ThankYou from "./components/ThankYou";
import Jan from './components/jan';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import ParticleBackground from './components/ParticleBackground';
import {
  FaBullhorn,
  FaCode,
  FaShoppingCart,
  FaMobileAlt,
  FaChartBar,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaTools,
  FaPenNib
} from 'react-icons/fa';




const Services = () => (
  <section className="services-section">
  <h2>Our Services</h2>
  <div className="services-grid">
    <div className="service-card">
      <FaBullhorn className="service-icon" />
      <h3>Digital Advertising & Marketing</h3>
      <p>SEM, SEO, Social Media, Print, and Outdoor Marketing to boost your brand visibility.</p>
    </div>
    <div className="service-card">
      <FaCode className="service-icon" />
      <h3>Software Development</h3>
      <p>Custom apps and enterprise software tailored to your business goals.</p>
    </div>
    <div className="service-card">
      <FaShoppingCart className="service-icon" />
      <h3>Web & E-Commerce Platforms</h3>
      <p>Modern, scalable portals and online stores built with performance in mind.</p>
    </div>
    <div className="service-card">
      <FaMobileAlt className="service-icon" />
      <h3>UI/UX & Mobile Apps</h3>
      <p>Beautiful, user-centered design with seamless mobile app development.</p>
    </div>
    <div className="service-card">
      <FaChartBar className="service-icon" />
      <h3>Data & Analytics</h3>
      <p>Insightful dashboards and data-driven strategies to increase online visibility.</p>
    </div>
    <div className="service-card">
      <FaChalkboardTeacher className="service-icon" />
      <h3>Tech Consulting & Training</h3>
      <p>Strategic tech guidance and hands-on training for your internal teams.</p>
    </div>
    <div className="service-card">
      <FaPaintBrush className="service-icon" />
      <h3>Graphic Design</h3>
      <p>Creative branding, logos, brochures, and visual designs that make your business stand out.</p>
    </div>
    <div className="service-card">
      <FaTools className="service-icon" />
      <h3>IT Support & Maintenance</h3>
      <p>
        Ongoing tech support after deployment, ensuring your systems run smoothly.<br />
        <strong>24/7 monitoring</strong>, <strong>bug fixing and updates</strong>, and <strong>secure hosting & backups</strong>.
      </p>
    </div>
    <div className="service-card">
      <FaPenNib className="service-icon" />
      <h3>Content Creation & Copywriting</h3>
      <p>
        Professional content tailored for SEO, advertising, and branding.<br />
        <strong>SEO blog writing</strong>, <strong>marketing copy</strong>, and <strong>product documentation</strong> to fuel growth.
      </p>
    </div>
  </div>
</section>

);

const Testimonials = () => (
  <section className="page-section testimonials">
    <h2>Client Testimonials</h2>
    <div className="testimonial-card">
      <p>"Techverra built our platform on time and exceeded our expectations!"</p>
      <strong>— Priya S., Startup Founder</strong>
    </div>
    <div className="testimonial-card">
      <p>"The UI/UX team transformed our user experience brilliantly."</p>
      <strong>— Anil K., Product Manager</strong>
    </div>
  </section>
);




const Careers = () => (
  <section className="page-section">
    <h2>Careers</h2>
    <p>We're hiring! Join our team of passionate innovators. Check back soon for job listings.</p>
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
      <ParticleBackground />
      <New/>
      <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
      <TimeModule/>
       <Jan />
      <div>
        <div className="top-bar">
          <Link to="/">
  <img src="/logon.png" alt="Techverra Logo" className="top-logo" loading="lazy"/>
</Link>

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
            <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
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
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jan" element={<Jan />} />
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
