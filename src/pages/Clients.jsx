import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';

const clients = [
  { name: 'KNS Bakery', logo: '/assets/bakery.png' },
  { name: 'KNS Admin', logo: '/assets/admin.png' },
  { name: 'KNS Mobile', logo: '/assets/mobile.png' },
  { name: 'Daily Journal App', logo: '/assets/journal.png' },
  { name: 'QR Code Generator', logo: '/assets/qr.png' },
  { name: 'KNS Studios', logo: '/assets/KNS-STUDIOS.png' },
  { name: 'Mini Arcade', logo: '/assets/mini-arcade.png' },
  { name: 'Country Advisor', logo: '/assets/country-advisor-logo.png' },
  { name: 'JAN Assistant', logo: '/assets/jan.png' },
  { name: 'Spice Garden', logo: 'https://imaginative-palmier-46a3d2.netlify.app/Spice%20Garden%20Logo.png' },
];

const Clients = () => (
  <section className="py-12 bg-transparent">
    <Helmet>
      <title>Our Projects & Clients - Techverra Solutions</title>
    </Helmet>

    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">🧑‍💼 Our Projects & Clients</h2>
      <p className="text-center text-gray-300 mb-8">Real-world solutions delivered to our partners and users.</p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-lg flex items-center justify-center p-4 transition-transform hover:scale-105 duration-300">
              <img src={client.logo} alt={client.name} className="max-h-24 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Clients;
