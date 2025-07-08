import React, { useState } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet-async';


const Internships = () => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted by ${formData.name}`);
    window.location.href = 'https://forms.gle/qtHwp9xuys2eoYqw9'; // ← Replace with your URL

  };

  return (
    <section className="page-section">
      <h2>Internships</h2>
      <div className="card-grid">
        <div className="intern-card">
          <h3>Frontend Developer</h3>
          <p>Work with React and JavaScript to build dynamic UI components.</p>
        </div>
        <div className="intern-card">
          <h3>UI/UX Designer</h3>
          <p>Design intuitive interfaces and user journeys using Figma/Sketch.</p>
        </div>
        <div className="intern-card">
          <h3>Digital Marketing</h3>
          <p>Plan and execute marketing campaigns across social platforms.</p>
        </div>
        <div className="intern-card">
          <h3>Data Analyst</h3>
          <p>Analyze user behavior and deliver insights to improve performance.</p>
        </div>
      </div>

      <form className="intern-form" onSubmit={handleSubmit}>
        <h3>Apply Now</h3>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="role" placeholder="Internship Role" value={formData.role} onChange={handleChange} required />
        <textarea name="message" placeholder="Why should we consider you?" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit Application</button>
      </form>
    </section>
  );
};

export default Internships;