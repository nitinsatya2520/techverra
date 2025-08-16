import React from 'react';

const teamSections = [
  
  {
    title: 'Our Executive Team',
    members: [
      
      {
        name: 'Kadavakollu Nitin Saya (MD)',
        role: 'Founder & Managing Director',
        image: '/assets/Nitin.jpg',
        bio: 'Visionary leader driving innovation in software and digital services. Passionate about AI, cybersecurity, and scalable solutions.',
      },
      {
        name: 'Kukkala Jai Kishan (COO)',
        role: 'Co-Founder & Director – COO',
        image: '/assets/Jai.jpg',
        bio: 'Tech strategist with deep expertise in software architecture and team leadership. Focused on delivering high-quality, future-ready tech solutions.',
      },
      {
        name: 'Ponnapureddy Naga Sivareddy (CBO)',
        role: 'Chief Of Business Operations – CBO',
        image: '/assets/Siva.jpg',
        bio: 'Strategic leader focused on business growth, client success, and operational excellence across all departments.',
      },
      {
        name: 'Kukkala Sarada (CLO)',
        role: 'Chief Of Legal Officer – CLO',
        image: '/assets/Sarada.png',
        bio: 'Kukkala Sarada serves as the Chief Legal Officer (CLO), bringing extensive expertise in corporate law, compliance, and risk management. With a deep understanding of legal frameworks and strategic decision-making, she ensures the organization operates within all regulatory boundaries while supporting its business objectives. Her leadership fosters ethical practices and robust governance across all departments.',
      },
    ],
  },
];

const Leadership = () => (
  <section className="py-12  transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-4">
      {teamSections.map((section, sIndex) => (
        <div key={sIndex} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--text-primary)]">
            {section.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {section.members.map((member, index) => (
              <div
                key={index}
                className="bg-[var(--card)] text-[var(--text-primary)] border border-[var(--border)] rounded-2xl shadow-card p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 backdrop-blur-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[var(--accent)]"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-[var(--accent)] font-medium">{member.role}</p>
                <p className="text-[var(--text-secondary)] mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;
