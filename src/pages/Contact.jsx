import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

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
        () => {
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
    <section className="px-4 py-10 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p className="mb-2">
        📧 Email:{" "}
        <a
          href="mailto:techverrasolutions@gmail.com"
          className="text-blue-400 hover:underline"
        >
          techverrasolutions@gmail.com
        </a>
      </p>

      <p className="mb-2">
        📞 WhatsApp:{" "}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          +91-99999-99999
        </a>
      </p>

      <p className="mb-6">
        📍 Location:{" "}
        <a
          href="https://maps.app.goo.gl/kETcNp1dRJsepWP79"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          Kankipadu, Vijayawada, Andhra Pradesh, India
        </a>
      </p>

      <div className="w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="TechVerra Location"
          src="https://maps.google.com/maps?q=16.444680,80.769076,+Punadipadu,+Vijayawada,+Andhra+Pradesh,+India&output=embed"
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            What service are you looking for?
          </h3>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 rounded bg-slate-900 text-white border border-gray-600"
          >
            <option value="">-- Select --</option>
            <option value="Website Development">Website Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Branding">Branding</option>
          </select>
          <button
            onClick={() => setStep(2)}
            disabled={!service}
            className="mt-4 px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            What is your budget range?
          </h3>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-3 rounded bg-slate-900 text-white border border-gray-600"
          >
            <option value="">-- Select --</option>
            <option value="₹5,000 - ₹20,000">₹5,000 - ₹20,000</option>
            <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
          </select>
          <button
            onClick={() => setStep(3)}
            disabled={!budget}
            className="mt-4 px-6 py-2 rounded bg-green-600 hover:bg-green-700 disabled:opacity-50"
          >
            Continue to Form
          </button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white text-black p-6 mt-6 rounded-lg shadow-md space-y-4 max-w-xl"
        >
          <h3 className="text-2xl font-bold mb-2 text-center">
            Send Us a Message
          </h3>

          <input type="hidden" name="selected_service" value={service} />
          <input type="hidden" name="budget_range" value={budget} />

          <div>
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Full Name"
              className="w-full mt-1 p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="your@email.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full mt-1 p-3 border border-gray-300 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
