import React, { useRef } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ym4lsmv",       // Your EmailJS Service ID
        "template_cg9anr2",      // Your EmailJS Template ID
        form.current,
        "sYKOdtAOrjalTn-dk"  // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="page-section contact">
      <h2>Contact Us</h2>

      <p>
        📧 Email: <a href="mailto:techverrasolutions@gmail.com">techverrasolutions@gmail.com</a>
      </p>

      <p>
        📞 WhatsApp:{" "}
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
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
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "10px", fontSize: "1.5rem", color: "#333" }}>Send Us a Message</h3>

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
            resize: "vertical",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
