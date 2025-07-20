import React from 'react';
import { Helmet } from 'react-helmet';

const portfolioItems = [
  {
    image: "/assets/bakery.png",
    title: "Bakery Web App",
    description: "A full-stack app for managing orders and showcasing bakery products, built with React and Flask, integrated with Google Sheets as a backend database.",
  },
  {
    image: "/assets/admin.png",
    title: "Bakery Admin Panel",
    description: "Custom dashboard to manage orders, product inventory, pricing, and analytics for the Techverra Bakery. Features advanced UI, PDF invoices, and email notifications.",
  },
  {
    image: "/assets/mobile.png",
    title: "Bakery Mobile Layout",
    description: "A responsive mobile-first interface for seamless browsing and ordering experience optimized for phones and tablets.",
  },
  {
    image: "/assets/journal.png",
    title: "Daily Journal App",
    description: "A modern journal web app built using React, Flask, and Google Sheets. It features responsive design, user authentication, advanced styling, and full CRUD capabilities.",
  },
  {
    image: "/assets/qr.png",
    title: "QR Code Generator",
    description: "A fast, customizable QR code generator built with React. Users can input text or URLs and instantly download QR codes. Lightweight, responsive, and supports dark mode.",
  },
  {
    image: "/assets/mini-arcade.png",
    title: "Mini Arcade",
    description: "A collection of classic web-based games like Snake, Tic-Tac-Toe, and Memory Flip, built with React. Designed for speed, fun, and responsive gameplay on both desktop and mobile devices.",
  },
  {
    image: "/assets/country-advisor-logo.png",
    title: "Country Advisor App",
    description: "A smart education planning tool to help students compare countries for studying abroad. Features include country comparison, tuition/job/PR analysis, and a recommendation engine.",
  },
  {
    image: "/assets/jan.png",
    title: "JAN – AI Voice Assistant",
    description: "JAN is a powerful voice assistant built using React and Python. It supports hotword detection using Porcupine, real-time voice commands, weather updates, web search, reminders, jokes, fun facts, and integrates OpenAI’s GPT for intelligent responses.",
  },
  {
    image: "/assets/logistics.png",
    title: "Project 1",
    description: "A custom software solution for a logistics startup.",
  },
  {
    image: "/assets/fashion.png",
    title: "Project 2",
    description: "End-to-end branding and SEO for a fashion brand.",
  },
  {
    image: "/assets/comingsoon.png",
    title: "Coming Soon",
    description: "New exciting case studies are on the way!",
  },
];

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

    <section className="mt-28 px-4 md:px-8 text-center">
      <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-4">🚀 Portfolio</h2>
      <p className="text-gray-800 dark:text-gray-300 mb-8">
        A glimpse into our recent projects and creative solutions. More case studies coming soon!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-xl border border-purple-500/20 shadow-xl flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Portfolio;
