import React from 'react';
import './About.css'; // Assuming the CSS is in a separate About.css file
import { Helmet } from 'react-helmet';
import OrgChart from "../components/OrgChart";
function About() {
  return (
    <> <Helmet>
  <title>About Us | Techverra Solutions</title>
  <meta name="description" content="Discover Techverra Solutions – a dynamic company delivering innovative software, digital marketing, and creative film production services." />
  <meta name="keywords" content="Techverra Solutions, about, mission, team, innovation, software, marketing, digital agency, film production" />
  <meta name="author" content="Techverra Solutions Pvt. Ltd." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="About Us | Techverra Solutions" />
  <meta property="og:description" content="Learn about our mission, vision, and values. Meet the team behind Techverra’s creative tech solutions." />
  <meta property="og:image" content="https://techverrasolutions.in/preview.jpg" />
  <meta property="og:url" content="https://techverrasolutions.in/about" />
  <meta property="og:site_name" content="Techverra Solutions" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Techverra Solutions" />
  <meta name="twitter:description" content="Get to know the vision, values, and innovative team behind Techverra Solutions." />
  <meta name="twitter:image" content="https://techverrasolutions.in/preview.jpg" />
</Helmet>


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

      
    </section> <h1>Techverra Org Structure</h1>
      <OrgChart /></> );
}

export default About;
