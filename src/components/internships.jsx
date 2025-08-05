import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const internshipsRoles = [
   {
    id: 1,
    title: "Python Programming",
    description: "A 2-week basic internship focused on Python fundamentals.",
    details: `This internship covers Python basics, data structures, OOP, file handling, and hands-on mini projects. Ideal for beginners who want to understand real-world scripting.`,
    cost: "₹499 (Currently Free)",
    formLink: "https://forms.gle/Y5ZbKqXHkCjpWbYEA",
    detailsLink: "https://internship.techverrasolutions.in"
  },
  {
    id: 2,
    title: "AI & ML",
    description: "Learn Artificial Intelligence & Machine Learning basics in a hands-on internship.",
    details: `Understand core AI/ML concepts, supervised vs unsupervised learning, and build basic models using Python. Includes projects with datasets like Iris, MNIST, and Titanic.`,
    cost: "₹799 ",
    formLink: "https://forms.gle/your-ai-ml-form",
    detailsLink: "https://internship.techverrasolutions.in"
  },
  {
    id: 3,
    title: "Blockchain",
    description: "Get started with blockchain development and decentralization principles.",
    details: `Dive into blockchain fundamentals, Ethereum, smart contracts with Solidity, and use tools like Remix and MetaMask. Perfect for understanding Web3 basics.`,
    cost: "₹799 ",
    formLink: "https://forms.gle/your-blockchain-form",
    detailsLink: "https://internship.techverrasolutions.in"
  },
  {
    id: 4,
    title: "Web Development",
    description: "A practical internship on HTML, CSS, JavaScript, and web application building.",
    details: `Build responsive websites using HTML5, CSS3, and JavaScript. Learn GitHub deployment, basic React, and make a final personal portfolio project.`,
    cost: "₹499 ",
    formLink: "https://forms.gle/your-webdev-form",
    detailsLink: "https://internship.techverrasolutions.in"
  },
];

const Internships = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Internship cum Training Opportunities at Techverra 🚀
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Learn real-world skills with hands-on experience and earn a certificate of completion.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        {internshipsRoles.map((role) => (
          <div
            key={role.id}
            className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <button
              onClick={() => toggle(role.id)}
              className="flex justify-between items-center w-full p-6 bg-white dark:bg-gray-900 focus:outline-none"
            >
              <div className="text-left">
                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                  {role.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{role.description}</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Cost: {role.cost}</p>
              </div>
              <ChevronDownIcon
                className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                  activeId === role.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeId === role.id ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 px-6'
              } bg-white dark:bg-gray-950 text-sm text-gray-700 dark:text-gray-300`}
            >
              <div className="space-y-3">
                <p>{role.details}</p>
                <div className="space-x-4 mt-2">
                  <a
                    href={role.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Apply via Google Form 📝
                  </a>
                  <a
                    href={role.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sky-600 hover:text-sky-800 font-medium"
                  >
                    More Details 📄
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
