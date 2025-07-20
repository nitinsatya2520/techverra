import React from 'react';

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
  <meta property="og:image" content="https://www.techverrasolutions.in/preview.jpg" />
  <meta property="og:url" content="https://www.techverrasolutions.in/about" />
  <meta property="og:site_name" content="Techverra Solutions" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Techverra Solutions" />
  <meta name="twitter:description" content="Get to know the vision, values, and innovative team behind Techverra Solutions." />
  <meta name="twitter:image" content="https://www.techverrasolutions.in/preview.jpg" />
</Helmet>
    <section className="bg-transparent px-4 py-10 max-w-5xl mx-auto rounded-2xl font-sans">
      <h2 className="text-4xl text-purple-700 dark:text-purple-400 font-bold text-center mb-6">About Us</h2>
      <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed text-justify mb-6">
        Techverra Solutions Private Ltd. is a very innovative and dynamic technology company focused on 
        cutting-edge solutions in software development, digital marketing, design, and creative film 
        production. This diversified firm serves a wide range of industries by helping companies optimize 
        their operations, build out their digital presences, and create innovative media content with custom 
        solutions and technical acumen at its heart of operation.
        We focus on end-to-end services from custom software development and management of an 
        online marketing campaign to short movie production and creative consulting. Be it a startup 
        looking for customized applications, a company seeking streamlined processes, or an entity requiring 
        innovative marketing solutions, Techverra Solutions is here to precisely achieve set goals with 
        creativity and perfect technology.
      </p>

      <h3 className="text-2xl text-purple-700 dark:text-purple-400 font-bold text-center mt-10 mb-4">Mission Statement</h3>
      <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed text-justify mb-6">
        We aim at energizing businesses through technology, creativity, and innovation while bridging the gap 
        between simple software solutions, compelling designs, and impactful media content in order to 
        fulfill and surpass clients' desires.
      </p>

      <h3 className="text-2xl text-purple-700 dark:text-purple-400 font-bold text-center mt-10 mb-4">Vision</h3>
      <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed text-justify mb-6">
        A technology-driven leader with innovative and creative content in ways to produce growth, 
        innovation, and change for different industries. We envision a future where business ventures 
        fully tap into their greatest potentials through cutting-edge software, digital marketing, and visual 
        storytelling as mediums to reach their customers and prosper in the virtual realm.
      </p>

      <h3 className="text-2xl text-purple-700 dark:text-purple-400 font-bold text-center mt-10 mb-4">Core Values</h3>
      <ul className="list-none pl-0 space-y-4">
        {[
          { label: 'Innovation', detail: 'We never stop innovating in the pursuit of continually delivering new and better solutions for our clients.' },
          { label: 'Excellence', detail: 'Ensuring quality work in every project, ensuring customer satisfaction at every step.' },
          { label: 'Integrity', detail: 'Maintaining transparency, honesty, and ethical practices in all our business dealings.' },
          { label: 'Collaboration', detail: 'Working closely with clients, partners, and employees to create value and achieve shared success.' },
          { label: 'Creativity', detail: 'Combining technology with creative solutions, especially in film production, design, and marketing.' },
        ].map((value, idx) => (
          <li key={idx} className="text-gray-800 dark:text-gray-200 text-lg flex items-start">
            <span className="mr-2 text-green-600 dark:text-green-400">✔️</span>
            <span>
              <strong>{value.label}:</strong> {value.detail}
            </span>
          </li>
        ))}
      </ul>
    </section></>
  );
}

export default About;
