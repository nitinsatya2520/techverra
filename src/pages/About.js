import React from 'react';
import './About.css'; // Assuming the CSS is in a separate About.css file

function About() {
  return (
   <section className="page-section">
      <h2>About Us</h2>
      <p>Techverra Solutions Private Ltd. is a very innovative and dynamic technology company focused on 
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
      <h3>Mission Statement</h3>
      <p>It aims at energizing businesses through technology, creativity, and innovation while bridging the gap 
        between simple software solutions, compelling designs, and impactful media content in order to 
        fulfill and surpass clients' desires.
      </p>
      <h3>Vision</h3>
      <p>A technological-driven leader with innovative and creative content in ways to produce growth, 
        innovation, and change for different industries. We would want a future in which business ventures 
        are fully tapped into their greatest potentials of leading-edge software, digital marketing, and visual 
        storytelling as a medium in which they reach their customers and prosper in the virtual realm.
      </p>

      <h3>Core Values</h3>
      <ul className="core-values-list">
        <li>Innovation: We never stop innovating in the pursuit of continually delivering new and better 
          solutions for our clients.</li>
        <li>Excellence: Ensuring quality work in every project, ensuring customer satisfaction at every step.</li>
        <li>Integrity: Maintaining transparency, honesty, and ethical practices in all our business dealings.</li>
        <li>Collaboration: Working closely with clients, partners, and employees to create value and achieve shared success.</li>
        <li>Creativity: Combining technology with creative solutions, especially in film production, design, and marketing.</li>
      </ul>
    </section>  );
}

export default About;
