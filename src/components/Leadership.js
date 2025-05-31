import React from 'react';
import './Leadership.css'; // Optional for custom styles

const leaders = [
  {
    name: 'Kadavakollu Nitin Saya',
    role: 'Founder & Director',
    image: '/team/nitin.jpg', // Ensure the image exists in public/team/
    bio: 'Visionary leader driving innovation in software and digital services. Passionate about AI, cybersecurity, and scalable solutions.',
    
  },
  {
    name: 'Kukkala Jai Kishan',
    role: 'Co-Founder & Director',
    image: '/team/jane.jpg',
    bio: 'Tech strategist with deep expertise in software architecture and team leadership. Focused on delivering high-quality, future-ready tech solutions.',
    
  },
  
];

const Leadership = () => (
  <section className="leadership-section">
    <h2>Founders & Directors</h2>
    <div className="leaders-grid">
      {leaders.map((leader, index) => (
        <div className="leader-card" key={index}>
        <img src={leader.image} alt={leader.name} className="leader-image" /> 
          <h3>{leader.name}</h3>
          <p className="role">{leader.role}</p>
          <p className="bio">{leader.bio}</p>
          
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;
