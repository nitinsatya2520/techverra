import React from 'react';
import './Clients.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';

const clients = [
  { name: 'KNS Bakery', logo: '/assets/bakery.png' },
  { name: 'KNS Bakery', logo: '/assets/admin.png' },
  { name: 'KNS Bakery', logo: '/assets/mobile.png' },
  { name: 'Daily Journal App', logo: '/assets/journal.png' },
  { name: 'QR Code Generator', logo: '/assets/qr.png' },
  { name: 'Daily Journal App', logo: '/assets/KNS-STUDIOS.png' },
  { name: 'Mini Arcade', logo: '/assets/mini-arcade.png' },
  { name: 'Country Advisor', logo: '/assets/country-advisor-logo.png' },
  { name: 'JAN Assistant', logo: '/assets/jan.png' },
];

const Clients = () => (
  <section className="page-section clients-section">
    <h2 className="clients-heading">🧑‍💼 Our Projects & Clients</h2>
    <p className="clients-subtitle">Real-world solutions delivered to our partners and users.</p>

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
      {clients.map((client) => (
        <SwiperSlide key={client.name}>
          <div className="client-card">
            <img src={client.logo} alt={client.name} className="client-logo" />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Clients;
