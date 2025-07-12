import React, { useState } from 'react';

const Internships = () => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted by ${formData.name}`);
    window.location.href = 'https://forms.gle/qtHwp9xuys2eoYqw9';
  };

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
        🚀 Internship Opportunities
      </h2>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { title: 'Frontend Developer', desc: 'Work with React and JavaScript to build dynamic UI components.' },
          { title: 'UI/UX Designer', desc: 'Design intuitive interfaces and user journeys using Figma/Sketch.' },
          { title: 'Digital Marketing', desc: 'Plan and execute marketing campaigns across social platforms.' },
          { title: 'Data Analyst', desc: 'Analyze user behavior and deliver insights to improve performance.' },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-white/5 p-6 shadow rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Application Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-white/5 shadow-lg p-8 rounded-lg space-y-4"
      >
        <h3 className="text-2xl font-semibold text-center text-blue-700 dark:text-blue-400">
          Apply Now
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 rounded p-3 focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 rounded p-3 focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="text"
          name="role"
          placeholder="Internship Role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 rounded p-3 focus:outline-none focus:ring focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Why should we consider you?"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 rounded p-3 resize-none focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
};

export default Internships;
