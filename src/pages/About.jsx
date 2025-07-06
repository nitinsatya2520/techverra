import React from 'react';

function About() {
  return (
    <section className="bg-transparent px-4 py-10 max-w-5xl mx-auto rounded-2xl shadow-lg font-sans">
      <h2 className="text-4xl text-purple-400 font-bold text-center mb-6">About Us</h2>
      <p className="text-white text-lg leading-relaxed text-justify mb-6">
        Techverra Solutions Private Ltd. is a very innovative and dynamic technology company focused on 
        cutting-edge solutions in software development, digital marketing, design, and creative film 
        production. This diversified firm serves a wide range of industries by helping companies optimize 
        their operations, build out their digital presences, and create innovative media content with custom 
        solutions and technical acumen at its heart of operation.
        We focus on the end-to-end services from custom software development and management of an 
        online marketing campaign to the short movie production and creative consulting. Be it a startup 
        that looks for customized applications, a company seeking streamlined processes of certain 
        businesses, or an entity requiring innovative marketing solutions, BitCode Solutions is here to 
        precisely achieve set goals with creativity and perfect technology.
      </p>

      <h3 className="text-2xl text-purple-400 font-bold text-center mt-10 mb-4">Mission Statement</h3>
      <p className="text-white text-lg leading-relaxed text-justify mb-6">
        It aims at energizing businesses through technology, creativity, and innovation while bridging the gap 
        between simple software solutions, compelling designs, and impactful media content in order to 
        fulfill and surpass clients' desires.
      </p>

      <h3 className="text-2xl text-purple-400 font-bold text-center mt-10 mb-4">Vision</h3>
      <p className="text-white text-lg leading-relaxed text-justify mb-6">
        A technological-driven leader with innovative and creative content in ways to produce growth, 
        innovation, and change for different industries. We would want a future in which business ventures 
        are fully tapped into their greatest potentials of leading-edge software, digital marketing, and visual 
        storytelling as a medium in which they reach their customers and prosper in the virtual realm.
      </p>

      <h3 className="text-2xl text-purple-400 font-bold text-center mt-10 mb-4">Core Values</h3>
      <ul className="list-none pl-0 space-y-4">
        <li className="text-white text-lg flex items-start">
          <span className="mr-2 text-green-400">✔️</span>
          <span>
            <strong>Innovation:</strong> We never stop innovating in the pursuit of continually delivering new and better 
            solutions for our clients.
          </span>
        </li>
        <li className="text-white text-lg flex items-start">
          <span className="mr-2 text-green-400">✔️</span>
          <span>
            <strong>Excellence:</strong> Ensuring quality work in every project, ensuring customer satisfaction at every step.
          </span>
        </li>
        <li className="text-white text-lg flex items-start">
          <span className="mr-2 text-green-400">✔️</span>
          <span>
            <strong>Integrity:</strong> Maintaining transparency, honesty, and ethical practices in all our business dealings.
          </span>
        </li>
        <li className="text-white text-lg flex items-start">
          <span className="mr-2 text-green-400">✔️</span>
          <span>
            <strong>Collaboration:</strong> Working closely with clients, partners, and employees to create value and achieve shared success.
          </span>
        </li>
        <li className="text-white text-lg flex items-start">
          <span className="mr-2 text-green-400">✔️</span>
          <span>
            <strong>Creativity:</strong> Combining technology with creative solutions, especially in film production, design, and marketing.
          </span>
        </li>
      </ul>
    </section>
  );
}

export default About;
