import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

 
  const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_ym4lsmv",
      "template_cg9anr2",
      form.current,
      "sYKOdtAOrjalTn-dk"
    )
    .then(
      (result) => {
        setLoading(false);
        alert("✅ Message sent successfully!");
        form.current.reset();
        navigate("/thank-you");
        setStep(1);
        setService("");
        setBudget("");
      },
      (error) => {
        setLoading(false);
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
};


  return (
     <>
      <Helmet>
        <title>Home | Techverra Solutions</title>
        <meta name="description" content="We provide software, marketing, and consulting services." />
        <meta name="keywords" content="software development, digital marketing, SEO, IT solutions" />
        <meta name="author" content="Techverra Solutions Pvt. Ltd." />
        <meta property="og:title" content="Home | Techverra Solutions" />
        <meta property="og:description" content="Empowering your business with software and marketing solutions." />
        <meta property="og:image" content="https://techverrasolutions.in/preview.jpg" />
        <meta property="og:url" content="https://techverrasolutions.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techverra Solutions Pvt. Ltd." />
        <meta name="twitter:description" content="Empowering your business with software and marketing solutions." />
        <meta name="twitter:image" content="https://techverrasolutions.in/preview.jpg" />
      </Helmet>
    <section className="page-section contact">
      <h2>Contact Us</h2>

      <p>
        📧 Email:{" "}
        <a href="mailto:techverrasolutions@gmail.com">
          techverrasolutions@gmail.com
        </a>
      </p>

      <p>
        📞 WhatsApp:{" "}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          +91-99999-99999
        </a>
      </p>

      <p>
        📍 Location:{" "}
        <a
          href="https://maps.app.goo.gl/kETcNp1dRJsepWP79"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kankipadu, Vijayawada, Andhra Pradesh, India
        </a>
      </p>

      <div className="map-container" style={{ marginTop: "20px", maxWidth: "100%" }}>
        <iframe
          title="TechVerra Location"
          src="https://maps.google.com/maps?q=16.444680,80.769076,+Punadipadu,+Vijayawada,+Andhra+Pradesh,+India&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Step 1 - Choose Service */}
      {step === 1 && (
        <div className="mini-quiz">
          <h3>What service are you looking for?</h3>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="Website Development">Website Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Branding">Branding</option>
          </select>
          <button
            style={{ marginTop: "10px" }}
            disabled={!service}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2 - Choose Budget */}
      {step === 2 && (
        <div className="mini-quiz">
          <h3>What is your budget range?</h3>
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="₹5,000 - ₹20,000">₹5,000 - ₹20,000</option>
            <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
          </select>
          <button
            style={{ marginTop: "10px" }}
            disabled={!budget}
            onClick={() => setStep(3)}
          >
            Continue to Form
          </button>
        </div>
      )}

      {/* Step 3 - Contact Form */}
      {step === 3 && (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "500px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ fontSize: "1.5rem", color: "#333" }}>Send Us a Message</h3>

          {/* Hidden fields */}
          <input type="hidden" name="selected_service" value={service} />
          <input type="hidden" name="budget_range" value={budget} />

          <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />

          <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />

          <label htmlFor="message" style={{ fontWeight: "bold" }}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              resize: "vertical"
            }}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: loading ? "#6c757d" : "#007BFF",
              color: "#fff",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.3s"
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
    </>
  );
};

export default Contact;
