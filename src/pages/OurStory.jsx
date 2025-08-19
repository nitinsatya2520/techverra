import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaLightbulb, FaRocket, FaCode, FaHandshake } from 'react-icons/fa';
import Lottie from 'lottie-react';
import founder1 from '../assets/NITIN.png';
import founder2 from '../assets/Jai.jpg';
import sparkAnim from '../assets/lottie/Sparkle.json';
import handshakeAnim from '../assets/lottie/Handshake Loop.json';
import codeAnim from '../assets/lottie/Coding.json';
import rocketAnim from '../assets/lottie/Rocket loader.json';
import beliefAnim from '../assets/lottie/Trust.json';
import { Helmet } from "react-helmet";

const timelineItems = [
  {
    year: 'The Spark',
    text: "In the final year of their B.Tech, two ordinary students — Kadavakollu Nitin Satya and Kukkala Jai Kishan — faced an extraordinary realization. The world didn't need another startup. It needed sincerity, empathy, and a spark of belief.",
    bgColor: '#f3e8ff',
    icon: <FaLightbulb />,
    animation: sparkAnim,
  },
  {
    year: 'The Call to Action',
    text: "Their journey didn’t begin with investors or blueprints. It began with compassion — for the unseen, the unheard, the small businesses longing for a voice in the digital noise.",
    bgColor: '#e0f7fa',
    icon: <FaHandshake />,
    animation: handshakeAnim,
  },
  {
    year: 'Igniting Change',
    text: "One website at a time, one brand at a time — they weren’t just coding, they were crafting stories, lighting paths, and transforming local dreams into global voices.",
    bgColor: '#fff3e0',
    icon: <FaCode />,
    animation: codeAnim,
  },
  {
    year: 'A Company Born from Purpose',
    text: "And then it happened. From the quiet determination of two friends rose a force — Techverra Solutions Private Limited. Not built in a boardroom, but born in the heartbeat of purpose.",
    bgColor: '#ede7f6',
    icon: <FaRocket />,
    animation: rocketAnim,
  },
  {
    year: 'A Living Belief',
    text: "Today, Techverra isn’t just a company. It’s a living belief — that two hearts and some code can rewrite destinies, reshape communities, and reignite hope in forgotten corners.",
    bgColor: '#e8f5e9',
    icon: <FaLightbulb />,
    animation: beliefAnim,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const OurStory = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Helmet>
        <title>Our Story | Techverra Solutions</title>
        <meta name="description" content="Explore the journey of Techverra Solutions — from vision to innovation. See how our founders built a company that transforms ideas into reality." />
        <meta name="keywords" content="Techverra, Techverra Solutions, Techverra Pvt. Ltd., Our Story, Founders, Innovation, Startup Journey" />
        <meta name="author" content="Techverra Solutions Pvt. Ltd." />
        <link rel="canonical" href="https://www.techverrasolutions.in/ourstory" />
        <meta property="og:title" content="Our Story | Techverra Solutions" />
        <meta property="og:description" content="From vision to reality — the story behind Techverra's growth and innovation." />
        <meta property="og:image" content="https://www.techverrasolutions.in/preview.jpg" />
        <meta property="og:url" content="https://www.techverrasolutions.in/ourstory" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-light-accent dark:bg-dark-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <div
        ref={containerRef}
        className="min-h-screen snap-y snap-mandatory overflow-y-scroll bg-light-background text-light-textPrimary dark:bg-gradient-to-br dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white py-10 px-6 transition-colors duration-700"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            {...fadeInUp}
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-6 text-light-accent dark:text-purple-400 drop-shadow-lg"
          >
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl mb-12 text-light-textSecondary dark:text-gray-300"
          >
            From a whisper of an idea to a movement of meaning.
          </motion.p>

          <div className="flex justify-center gap-10 mb-16 flex-wrap">
            {[{ src: founder1, name: "Kadavakollu Nitin Satya" }, { src: founder2, name: "Kukkala Jai Kishan" }].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={f.src}
                  alt={f.name}
                  className="rounded-full w-40 h-40 object-cover shadow-xl border-4 border-light-accent dark:border-purple-400"
                />
                <p className="font-semibold mt-2 text-lg">{f.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative ml-6 space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                className="snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="rounded-xl px-6 py-16 relative overflow-hidden transition-all duration-1000 dark:bg-opacity-10 backdrop-blur-md"
                  whileInView={{ backgroundColor: item.bgColor }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute w-4 h-4 bg-light-accent dark:bg-purple-400 rounded-full -left-8 top-6 shadow-md"></div>

                  <motion.div
                    className="absolute top-4 right-4 text-3xl text-light-accent dark:text-purple-300 opacity-20"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="mb-6">
                    <Lottie animationData={item.animation} loop={true} className="w-28 h-28 mx-auto" />
                  </div>

                  <div className="text-2xl font-bold text-light-accent dark:text-purple-300">
                    {item.year}
                  </div>
                  <p className="text-lg mt-2 leading-relaxed dark:text-gray-200">
                    {item.text}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-light-accent dark:text-purple-300">
            Be Part of the Story
          </h3>
          <p className="mb-6 text-light-textSecondary dark:text-gray-300 text-lg">
            Join us on our mission to uplift, empower, and transform — one dream at a time.
          </p>
          <a
            href="/contact"
            className="inline-block bg-light-accent text-white dark:bg-purple-500 px-6 py-3 rounded-full shadow-lg hover:opacity-90 hover:shadow-purple-500 transition"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto px-4"
        >
          <p className="italic text-lg text-light-textSecondary dark:text-gray-400">
            “Techverra isn't just a name. It's a testament to the power of belief, the fire of friendship,
            and the beauty of purpose-driven work.”
          </p>
          <p className="mt-4 font-semibold text-light-accent dark:text-purple-400">— Founders' Note</p>
        </motion.div>
      </div>
    </>
  );
};

export default OurStory;
