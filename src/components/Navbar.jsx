import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Briefcase, Star, FileText, Users, BookOpen, Building2, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenCareers, setDropdownOpenCareers] = useState(false);
  const [dropdownOpenCompany, setDropdownOpenCompany] = useState(false);
  const [dropdownOpenShowcase, setDropdownOpenShowcase] = useState(false);
  const [mobileDropdownCompany, setMobileDropdownCompany] = useState(false);
  const [mobileDropdownShowcase, setMobileDropdownShowcase] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const careersRef = useRef(null);
  const companyRef = useRef(null);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpenCareers(false);
    setDropdownOpenCompany(false);
    setDropdownOpenShowcase(false);
    setMobileDropdownCompany(false);
    setMobileDropdownShowcase(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (!careersRef.current || !careersRef.current.contains(e.target)) &&
        (!companyRef.current || !companyRef.current.contains(e.target)) &&
        (!showcaseRef.current || !showcaseRef.current.contains(e.target))
      ) {
        setDropdownOpenCareers(false);
        setDropdownOpenCompany(false);
        setDropdownOpenShowcase(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownItemClasses = "flex items-center gap-2 px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-700";

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/20 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src="/logonn.png" alt="Techverra Logo" className="h-12 w-auto" />
        </Link>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            className="text-gray-900 dark:text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-gray-900 dark:text-white">
          <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">Home</Link>
          <Link to="/ourstory" className="hover:text-purple-600 dark:hover:text-purple-400">Our Story</Link>
          <Link to="/services" className="hover:text-purple-600 dark:hover:text-purple-400">Services</Link>

          {/* Showcase Dropdown */}
          <div ref={showcaseRef} className="relative">
            <button
              onClick={() => {
                setDropdownOpenShowcase(!dropdownOpenShowcase);
                setDropdownOpenCareers(false);
                setDropdownOpenCompany(false);
              }}
              className="hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              Our Work ▾
            </button>
            {dropdownOpenShowcase && (
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                <Link to="/portfolio" className={dropdownItemClasses} onClick={closeAllMenus}><Briefcase size={16} /> Portfolio</Link>
                <Link to="/testimonials" className={dropdownItemClasses} onClick={closeAllMenus}><Star size={16} /> Testimonials</Link>
              </div>
            )}
          </div>

          {/* Careers Dropdown */}
          <div ref={careersRef} className="relative">
            <button
              onClick={() => {
                setDropdownOpenCareers(!dropdownOpenCareers);
                setDropdownOpenCompany(false);
                setDropdownOpenShowcase(false);
              }}
              className="hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              Careers ▾
            </button>
            {dropdownOpenCareers && (
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                <Link to="/careers" className={dropdownItemClasses} onClick={closeAllMenus}><Users size={16} /> Jobs</Link>
                <Link to="/internships" className={dropdownItemClasses} onClick={closeAllMenus}><BookOpen size={16} /> Internships</Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div ref={companyRef} className="relative">
            <button
              onClick={() => {
                setDropdownOpenCompany(!dropdownOpenCompany);
                setDropdownOpenCareers(false);
                setDropdownOpenShowcase(false);
              }}
              className="hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              Company ▾
            </button>
            {dropdownOpenCompany && (
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                <Link to="/company-policy" className={dropdownItemClasses} onClick={closeAllMenus}><FileText size={16} /> Policy</Link>
                <Link to="/about" className={dropdownItemClasses} onClick={closeAllMenus}><Building2 size={16} /> About</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-4 text-gray-900 dark:text-white font-medium">
          <Link to="/" onClick={closeAllMenus}>Home</Link>
          <Link to="/ourstory" onClick={closeAllMenus}>Our Story</Link>
          <Link to="/services" onClick={closeAllMenus}>Services</Link>

          {/* Showcase Mobile Dropdown */}
          <div>
            <button
              onClick={() => setMobileDropdownShowcase(!mobileDropdownShowcase)}
              className="w-full flex items-center justify-between"
            >
              <span>Our Work </span>
              <span>{mobileDropdownShowcase ? '▴' : '▾'}</span>
            </button>
            {mobileDropdownShowcase && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <Link to="/portfolio" className="flex items-center gap-2" onClick={closeAllMenus}><Briefcase size={16} /> Portfolio</Link>
                <Link to="/testimonials" className="flex items-center gap-2" onClick={closeAllMenus}><Star size={16} /> Testimonials</Link>
              </div>
            )}
          </div>

          <Link to="/careers" onClick={closeAllMenus}>Careers</Link>
          <Link to="/internships" onClick={closeAllMenus}>Internships</Link>

          {/* Company Mobile Dropdown */}
          <div>
            <button
              onClick={() => setMobileDropdownCompany(!mobileDropdownCompany)}
              className="w-full flex items-center justify-between"
            >
              <span>Company</span>
              <span>{mobileDropdownCompany ? '▴' : '▾'}</span>
            </button>
            {mobileDropdownCompany && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/company-policy" className="flex items-center gap-2" onClick={closeAllMenus}><FileText size={16} /> Policy</Link>
                <Link to="/about" className="flex items-center gap-2" onClick={closeAllMenus}><Building2 size={16} /> About</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeAllMenus}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
