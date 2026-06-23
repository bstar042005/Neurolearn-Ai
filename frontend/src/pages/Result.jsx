import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();

  const mistakes = location.state?.mistakes || 0;

  let risk = "Low";

  if (mistakes >= 3 && mistakes <= 4) {
    risk = "Medium";
  }

  if (mistakes >= 5) {
    risk = "High";
  }

  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Assessment Result</h1>

      <h2>Total Mistakes: {mistakes}</h2>

      <h2>Dyslexia Risk Level: {risk}</h2>

      <p>
        This is a preliminary screening result and not a medical diagnosis.
      </p>

      <button
      onClick={() => navigate("/dashboard")}
      style={{
        padding: "10px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      View Dashboard
    </button>
    </div>
  );
}

export default Result;