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
import { Helmet } from 'react-helmet';
import Popup from './components/PromoPopup.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import Portfolio from "./pages/Portfolio.jsx";
import CompanyPolicy from './pages/CompanyPolicy.jsx';
import OurStory from './pages/OurStory.jsx';
import Navbar from './components/Navbar.jsx';
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
  <><Helmet>
    <title>Services | Techverra Solutions</title>
    <meta name="description" content="Explore Techverra's range of services including custom software, marketing campaigns, SEO, and IT consulting." />
    <meta name="keywords" content="software services, digital marketing, SEO, app development, IT consulting" />
    <meta property="og:title" content="Our Services | Techverra Solutions" />
    <meta property="og:description" content="Explore software, marketing, and consulting services tailored to your business." />
    <meta property="og:url" content="https://www.techverrasolutions.in/services" />
  </Helmet>
  <section className="mt-28 px-4 md:px-8 text-center">
    <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-10">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

      {[
        {
          icon: <FaBullhorn />,
          title: "Digital Advertising & Marketing",
          description: "SEM, SEO, Social Media, Print, and Outdoor Marketing to boost your brand visibility.",
        },
        {
          icon: <FaCode />,
          title: "Software Development",
          description: "Custom apps and enterprise software tailored to your business goals.",
        },
        {
          icon: <FaShoppingCart />,
          title: "Web & E-Commerce Platforms",
          description: "Modern, scalable portals and online stores built with performance in mind.",
        },
        {
          icon: <FaMobileAlt />,
          title: "UI/UX & Mobile Apps",
          description: "Beautiful, user-centered design with seamless mobile app development.",
        },
        {
          icon: <FaChartBar />,
          title: "Data & Analytics",
          description: "Insightful dashboards and data-driven strategies to increase online visibility.",
        },
        {
          icon: <FaChalkboardTeacher />,
          title: "Tech Consulting & Training",
          description: "Strategic tech guidance and hands-on training for your internal teams.",
        },
        {
          icon: <FaPaintBrush />,
          title: "Graphic Design",
          description: "Creative branding, logos, brochures, and visual designs that make your business stand out.",
        },
        {
          icon: <FaTools />,
          title: "IT Support & Maintenance",
          description: "Ongoing tech support after deployment, ensuring your systems run smoothly. 24/7 monitoring, bug fixing and updates, and secure hosting & backups.",
        },
        {
          icon: <FaPenNib />,
          title: "Content Creation & Copywriting",
          description: "Professional content tailored for SEO, advertising, and branding. SEO blog writing, marketing copy, and product documentation to fuel growth.",
        },
      ].map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-gray-800 dark:text-gray-200"
        >
          <div className="text-blue-500 dark:text-blue-400 text-3xl mb-3 mx-auto">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      ))}

    </div>
  </section></>
);
const Testimonials = () => (
  <><Helmet>
    <title>Client Testimonials | Techverra Solutions</title>
    <meta name="description" content="Read reviews from our satisfied clients who trusted us with their digital journey." />
    <meta name="keywords" content="client feedback, testimonials, reviews, Techverra Solutions" />
    <meta property="og:title" content="Testimonials | Techverra Solutions" />
    <meta property="og:description" content="Hear what our customers say about working with Techverra." />
    <meta property="og:url" content="https://www.techverrasolutions.in/testimonials" />
  </Helmet>
  <section className="mt-28 px-4 md:px-8 text-center">
    <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-10">Client Testimonials</h2>

    <div className="space-y-6 max-w-3xl mx-auto">
      {[
        {
          text: "Techverra built our platform on time and exceeded our expectations!",
          author: "— Priya S., Startup Founder",
        },
        {
          text: "The UI/UX team transformed our user experience brilliantly.",
          author: "— Anil K., Product Manager",
        },
      ].map((testimonial, idx) => (
        <div
          key={idx}
          className="bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-md animate-fadeIn transition hover:scale-[1.02]"
        >
          <p className="text-gray-800 dark:text-gray-200 text-base">{testimonial.text}</p>
          <strong className="block mt-3 text-purple-700 dark:text-purple-300">{testimonial.author}</strong>
        </div>
      ))}
    </div>
  </section></>
);





const Careers = () => (
  <><Helmet>
    <title>Careers | Techverra Solutions</title>
    <meta name="description" content="Join Techverra Solutions and be part of a dynamic team shaping digital futures." />
    <meta name="keywords" content="Techverra careers, jobs, tech jobs, hiring" />
    <meta property="og:title" content="Careers | Techverra Solutions" />
    <meta property="og:description" content="Explore open positions and grow with Techverra." />
    <meta property="og:url" content="https://www.techverrasolutions.in/careers" />
  </Helmet>
  <section className="mt-28 px-4 md:px-8 text-center">
    <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-4">Careers</h2>
    <p className="text-gray-800 dark:text-gray-200 text-lg">
      We're hiring! Join our team of passionate innovators. Check back soon for job listings.
    </p>
  </section></>
);





const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) return <Loader />;

  return (
    <Router>
      <Helmet>
        <title>Techverra Solutions</title>
      </Helmet>

      
      <ParticleBackground />
      <New />
      <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
      <TimeModule />
      <Jan />
      <Navbar/>

      <div className="min-h-screen flex flex-col">

       

        <main className="flex-grow pt-20">
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
            <Route path="/company-policy" element={<CompanyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jan" element={<Jan />} />
            <Route path="/ourstory" element={<OurStory />} />
          </Routes>
        </main>

        <footer className="bg-white/80 dark:bg-gray-900/20 backdrop-blur-md py-4 text-center text-gray-900 dark:text-white">
  <p>&copy; 2025 Techverra Solutions Pvt. Ltd. All rights reserved.</p>
</footer>

      </div>
    </Router>
  );
};

export default App;
