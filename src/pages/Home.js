import Leadership from '../components/Leadership.js'; // ✅ adjust path if needed
import '../App.css';
import Clients from './Clients.js';
import TypingText from '../components/TypingText.js';
import MultiTypingText from '../components/MultiTypingText';
import { Helmet } from 'react-helmet';

const Home = () => (
  <> 
     

<Helmet>
  <title>Home | Techverra Solutions</title>
  <meta name="description" content="Techverra Solutions provides expert software, marketing, and consulting services to boost your business growth." />
  <meta name="keywords" content="Techverra, software development, digital marketing, SEO, IT consulting" />
  <meta name="author" content="Techverra Solutions Pvt. Ltd." />
  <meta property="og:title" content="Home | Techverra Solutions" />
  <meta property="og:description" content="Empowering your business with modern digital solutions." />
  <meta property="og:image" content="https://techverrasolutions.in/preview.jpg" />
  <meta property="og:url" content="https://techverrasolutions.in/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Techverra Solutions Pvt. Ltd." />
  <meta name="twitter:description" content="Empowering your business with software and marketing solutions." />
  <meta name="twitter:image" content="https://techverrasolutions.in/preview.jpg" />
</Helmet>


  <section className="page-section">
    <header className="header">
      <img 
  src="/logo.png" 
  alt="Techverra Logo" 
  className="w-24 h-auto mx-auto mb-4 animate-scaleIn" 
/>

      <h1>Techverra Solutions Pvt. Ltd.</h1>
      
      <MultiTypingText
  texts={[
    'We build apps',
    'We design experiences',
    'We deliver results',
    'We are Techverra'
  ]}
  speed={100}
  pause={1500}
/>


      
    </header>

    <section className="about">
      <h2>About Us</h2>
      <p>
        Techverra Solutions is a dynamic IT and digital services company
        specializing in software development, digital marketing, web platform
        creation, and technology consulting. We aim to digitally transform
        businesses across industries with innovative, customized solutions.
      </p>
    </section>

    <section className="services">
      <h2>Why Choose Us</h2>
      <ul>
        <li>✅ Experienced Team</li>
        <li>✅ Custom Solutions</li>
        <li>✅ On-time Delivery</li>
        <li>✅ 24/7 Support</li>
      </ul>
    </section>

    <section className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Digital Advertising & Marketing (SEM, SEO, Social Media, Print, Outdoor)</li>
        <li>Software Development (custom apps, enterprise software)</li>
        <li>Web Portals & E-Commerce Platforms</li>
        <li>UI/UX Design, API Integration, Mobile App Development</li>
        <li>Data Analytics & Online Visibility Enhancement</li>
        <li>Tech Consulting & Training</li>
      </ul>
    </section>

    <section className="about">
      <h2>Client Testimonials</h2>
      <div className="testimonial-card">
        <p>"Techverra built our platform on time and exceeded our expectations!"</p>
        <strong>— Priya S., Startup Founder</strong>
      </div>
      <div className="testimonial-card">
        <p>"The UI/UX team transformed our user experience brilliantly."</p>
        <strong>— Anil K., Product Manager</strong>
      </div>
    </section>

    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to build your project with TechVerra Solutions?</h2>
        <p>Let’s turn your idea into a powerful digital solution. Talk to our team today.</p>
        <a href="/contact" className="cta-button">Book a Free Consultation</a>
      </div>
    </section>

    <Leadership />
    <Clients />
  </section> </>
);

// ✅ Export the component so it can be used
export default Home;
