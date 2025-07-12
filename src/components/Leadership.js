import React from 'react';
import './Leadership.css'; // Optional custom styles

const leaders = [
  {
    name: 'Kukkala Jai Kishan (COO)',
    role: 'Co-Founder & Director – COO',
    image: '/team/jane.jpg',
    bio: 'Tech strategist with deep expertise in software architecture and team leadership. Focused on delivering high-quality, future-ready tech solutions.',
  },
  {
    name: 'Kadavakollu Nitin Saya (MD)',
    role: 'Founder & Managing Director',
    image: '/team/nitin.jpg',
    bio: 'Visionary leader driving innovation in software and digital services. Passionate about AI, cybersecurity, and scalable solutions.',
  },
  {
    name: 'Ponnapureddy Naga Sivareddy (CBO)',
    role: 'Chief Of Business Operations – CBO',
    image: '/team/jane.jpg',
    bio: 'Strategic leader focused on business growth, client success, and operational excellence across all departments.',
  },
];

const Leadership = () => (
  <section className="leadership-section py-10 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Founders & Directors</h2>

    <div className="leaders-grid grid grid-cols-1 md:grid-cols-3 gap-8">
      {leaders.map((leader, index) => (
        <div className="leader-card bg-white shadow-lg rounded-lg p-4 text-center" key={index}>
          <img
            src={leader.image}
            alt={`${leader.name} - ${leader.role}`}
            className="leader-image w-40 h-40 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">{leader.name}</h3>
          <p className="role text-indigo-600">{leader.role}</p>
          <p className="bio text-gray-600 mt-2">{leader.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;
