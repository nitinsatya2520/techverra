import React from 'react';

const leaders = [
    {
  name: 'Ponnapureddy Naga Sivareddy (CBO)',
  role: 'Chief Of Business Operations – CBO',
  image: '/team/jane.jpg',
  bio: 'Strategic leader focused on business growth, client success, and operational excellence across all departments.',
},
    {
    name: 'Kadavakollu Nitin Saya (MD)',
    role: 'Founder & Managing Director',
    image: '/team/nitin.jpg',
    bio: 'Visionary leader driving innovation in software and digital services. Passionate about AI, cybersecurity, and scalable solutions.',
  },
  {
    name: 'Kukkala Jai Kishan (COO)',
    role: 'Co-Founder & Director – COO',
    image: '/team/jane.jpg',
    bio: 'Tech strategist with deep expertise in software architecture and team leadership. Focused on delivering high-quality, future-ready tech solutions.',
  },
];

const Leadership = () => (
  <section className="py-12 bg-transparent">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Founders & Directors</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-purple-500"
            />
            <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
            <p className="text-purple-300 font-medium">{leader.role}</p>
            <p className="text-gray-300 mt-2">{leader.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
