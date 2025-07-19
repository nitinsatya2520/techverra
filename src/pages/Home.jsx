import Leadership from '../components/Leadership.js';
import Clients from './Clients.js';
import MultiTypingText from '../components/MultiTypingText.jsx';
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
  <meta property="og:image" content="https://www.techverrasolutions.in/preview.jpg" />
  <meta property="og:url" content="https://www.techverrasolutions.in/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Techverra Solutions Pvt. Ltd." />
  <meta name="twitter:description" content="Empowering your business with software and marketing solutions." />
  <meta name="twitter:image" content="https://www.techverrasolutions.in/preview.jpg" />
</Helmet>
    <section className="min-h-screen text-gray-900 dark:text-gray-100 relative">

      <header className="text-center py-16">
        <div className="max-w-7xl mx-auto px-4">
          <img
            src="/logo.png"
            alt="Techverra Logo"
            className="mx-auto w-28 h-28 rounded-full shadow-lg border-4 border-purple-500/30"
          />
          <h1 className="text-4xl font-bold mt-6 text-purple-700 dark:text-purple-400">Techverra Solutions Pvt. Ltd.</h1>
          <div className="mt-4">
            <MultiTypingText
              texts={['We build apps', 'We design experiences', 'We deliver results', 'We are Techverra']}
              speed={100}
              pause={1500}
            />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8">
        {[
          {
            title: 'About Us',
            content:
              'Techverra Solutions is a dynamic IT and digital services company specializing in custom apps, marketing platforms, and full digital transformation consulting.',
          },
          {
            title: 'Why Choose Us',
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li>✅ Experienced Team</li>
                <li>✅ Custom Solutions</li>
                <li>✅ On-time Delivery</li>
                <li>✅ 24/7 Support</li>
              </ul>
            ),
          },
          {
            title: 'Our Services',
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li>Digital Advertising & Marketing</li>
                <li>Software Development</li>
                <li>Web Portals & E-Commerce Platforms</li>
                <li>UI/UX Design & Mobile Apps</li>
              </ul>
            ),
          },
          {
            title: 'Client Testimonials',
            content: (
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-purple-500/20 shadow bg-white/60 dark:bg-white/10 backdrop-blur-md">
                  <p className="text-gray-800 dark:text-gray-200">"Techverra built our platform on time and exceeded expectations."</p>
                  <strong className="block mt-2 text-purple-700 dark:text-purple-400">— Priya S., Startup Founder</strong>
                </div>
                <div className="p-4 rounded-lg border border-purple-500/20 shadow bg-white/60 dark:bg-white/10 backdrop-blur-md">
                  <p className="text-gray-800 dark:text-gray-200">"The UI/UX team transformed our user experience brilliantly."</p>
                  <strong className="block mt-2 text-purple-700 dark:text-purple-400">— Anil K., Product Manager</strong>
                </div>
              </div>
            ),
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-md border border-purple-500/20 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-400">{section.title}</h2>
            {section.content}
          </div>
        ))}

        <div className="text-center p-8 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-md border border-purple-500/20 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Let’s Build Your Project Together</h2>
          <p className="mb-6 text-gray-800 dark:text-gray-200">We’re ready to help your business grow with our digital expertise.</p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Leadership />
      <Clients />

    </section>
  </>
);

export default Home;
