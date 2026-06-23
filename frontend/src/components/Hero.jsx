import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#2563eb" }}>
        NeuroLearn AI
      </h1>

      <h2>
        Early Dyslexia Screening & Personalized Learning
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
        }}
      >
        Helping Indian school children identify dyslexia
        through AI-powered reading and writing assessments.
      </p>

      <Link to="/register">
    <button
        style={{
        padding: "12px 24px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        }}
    >
        Start Assessment
    </button>
</Link>
    </section>
  );
}

export default Hero;