import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Internships from './components/internships.jsx';
import New from './components/New.jsx';
import About from './pages/About.jsx';
import TimeModule from './components/TimeModule.jsx';
import WeatherModule from './components/WeatherModule.jsx';
import FullEstimator from './pages/FullEstimator.jsx';
import Contact from "./pages/Contact.jsx"; // adjust the path if needed
import Leadership from './components/Leadership.jsx';
import ThankYou from "./components/ThankYou.jsx";
import Jan from './components/Jan.jsx';
import Home from './pages/Home.jsx';

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
  <section className="mt-28 px-4 md:px-8 text-center">
  <h2 className="text-3xl text-purple-300 font-bold mb-10">Our Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    
    {/* Service 1 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaBullhorn className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Digital Advertising & Marketing</h3>
      <p className="text-white text-sm">SEM, SEO, Social Media, Print, and Outdoor Marketing to boost your brand visibility.</p>
    </div>

    {/* Service 2 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaCode className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Software Development</h3>
      <p className="text-white text-sm">Custom apps and enterprise software tailored to your business goals.</p>
    </div>

    {/* Service 3 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaShoppingCart className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Web & E-Commerce Platforms</h3>
      <p className="text-white text-sm">Modern, scalable portals and online stores built with performance in mind.</p>
    </div>

    {/* Service 4 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaMobileAlt className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">UI/UX & Mobile Apps</h3>
      <p className="text-white text-sm">Beautiful, user-centered design with seamless mobile app development.</p>
    </div>

    {/* Service 5 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaChartBar className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Data & Analytics</h3>
      <p className="text-white text-sm">Insightful dashboards and data-driven strategies to increase online visibility.</p>
    </div>

    {/* Service 6 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaChalkboardTeacher className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Tech Consulting & Training</h3>
      <p className="text-white text-sm">Strategic tech guidance and hands-on training for your internal teams.</p>
    </div>

    {/* Service 7 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaPaintBrush className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Graphic Design</h3>
      <p className="text-white text-sm">Creative branding, logos, brochures, and visual designs that make your business stand out.</p>
    </div>

    {/* Service 8 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaTools className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">IT Support & Maintenance</h3>
      <p className="text-white text-sm">
        Ongoing tech support after deployment, ensuring your systems run smoothly.
        <br /><strong className="text-purple-300">24/7 monitoring</strong>, <strong className="text-purple-300">bug fixing and updates</strong>, and <strong className="text-purple-300">secure hosting & backups</strong>.
      </p>
    </div>

    {/* Service 9 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <FaPenNib className="text-blue-400 text-3xl mb-3 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">Content Creation & Copywriting</h3>
      <p className="text-white text-sm">
        Professional content tailored for SEO, advertising, and branding.
        <br /><strong className="text-purple-300">SEO blog writing</strong>, <strong className="text-purple-300">marketing copy</strong>, and <strong className="text-purple-300">product documentation</strong> to fuel growth.
      </p>
    </div>

  </div>
</section>


);

const Testimonials = () => (
  <section className="mt-28 px-4 md:px-8 text-center">
  <h2 className="text-3xl font-bold text-purple-300 mb-10">Client Testimonials</h2>

  <div className="space-y-6 max-w-3xl mx-auto">
    {/* Testimonial 1 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md backdrop-blur-md animate-fadeIn">
      <p className="text-white text-base">"Techverra built our platform on time and exceeded our expectations!"</p>
      <strong className="block mt-3 text-purple-300">— Priya S., Startup Founder</strong>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white/5 p-6 rounded-xl shadow-md backdrop-blur-md animate-fadeIn">
      <p className="text-white text-base">"The UI/UX team transformed our user experience brilliantly."</p>
      <strong className="block mt-3 text-purple-300">— Anil K., Product Manager</strong>
    </div>
  </div>
</section>

);


const Portfolio = () => (
  <section className="mt-28 px-4 md:px-8 text-center">
  <h2 className="text-3xl font-bold text-purple-300 mb-4">Portfolio</h2>
  <p className="text-white text-lg">
    Coming soon! We'll showcase our latest projects and case studies here.
  </p>
</section>

);

const Careers = () => (
 <section className="mt-28 px-4 md:px-8 text-center">
  <h2 className="text-3xl font-bold text-purple-300 mb-4">Careers</h2>
  <p className="text-white text-lg">
    We're hiring! Join our team of passionate innovators. Check back soon for job listings.
  </p>
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
  <New />
  <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
  <TimeModule />
  <Jan />

  <div>
    {/* Header/Nav */}
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 bg-opacity-70 backdrop-blur-lg text-white px-6 py-4 rounded-b-2xl shadow-md flex flex-col md:flex-row justify-between items-center">
      <Link to="/">
        <img
          src="/logon.png"
          alt="Techverra Logo"
          className="h-20 object-contain"
          loading="lazy"
        />
      </Link>

      <button
        className="md:hidden text-purple-300 text-3xl mt-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav
        className={`flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:gap-6 items-center ${
          menuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/services', label: 'Services' },
          { to: '/portfolio', label: 'Portfolio' },
          { to: '/careers', label: 'Careers' },
          { to: '/internships', label: 'Internships' },
          { to: '/full-estimator', label: 'Estimator' },
          { to: '/testimonials', label: 'Testimonials' },
          { to: '/contact', label: 'Contact' },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-purple-300 hover:text-white text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>

    {/* Main Content */}
    <div className="pt-40 px-4 md:px-8">
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

      {/* Footer */}
      <footer className="text-center mt-12 p-4 bg-slate-900 text-slate-400 text-sm rounded-xl shadow-inner">
        &copy; 2025 Techverra Solutions Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  </div>
</Router>

  );
};

export default App;
