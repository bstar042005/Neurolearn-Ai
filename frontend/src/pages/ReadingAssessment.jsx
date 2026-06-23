import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReadingAssessment() {
  const navigate = useNavigate();

  const words = [
    "Apple",
    "Teacher",
    "School",
    "Friend",
    "Butterfly",
  ];

  const [score, setScore] = useState(0);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Reading Assessment</h1>

      <h3>Read these words aloud:</h3>

      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>

      <br />

      <button onClick={() => setScore(score + 1)}>
        Mark Correct
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setScore(score - 1)}
      >
        Mark Incorrect
      </button>

      <h2>Score: {score}</h2>

      <br />

      <button
        onClick={() => navigate("/writing")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Next Assessment
      </button>
    </div>
  );
}

export default ReadingAssessment;