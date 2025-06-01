import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const ThankYou = () => {
  const [width, height] = useWindowSize();

  return (
    <div style={{ marginTop: "100px", textAlign: "center", padding: "60px 20px" }}>
      <Confetti width={width} height={height} />

      <img
        src="/team.png" // Replace with your image path
        alt="Contact Team"
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />

      <h1 style={{ fontSize: "2.5rem", color: "#007BFF" }}>Thank You! 🎉</h1>
      <p style={{ fontSize: "1.2rem", color: "#ffffff", marginTop: "10px" }}>
        We received your message and will get back to you within 24 hours.
      </p>

      <a href="/" style={{
        marginTop: "30px",
        display: "inline-block",
        padding: "10px 20px",
        background: "#007BFF",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none"
      }}>
        Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
