import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WritingAssessment() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    word1: "",
    word2: "",
    word3: "",
    word4: "",
    word5: "",
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const submitAssessment = () => {
    let mistakes = 0;

    if (answers.word1.toLowerCase() !== "ball") mistakes++;
    if (answers.word2.toLowerCase() !== "dog") mistakes++;
    if (answers.word3.toLowerCase() !== "book") mistakes++;
    if (answers.word4.toLowerCase() !== "school") mistakes++;
    if (answers.word5.toLowerCase() !== "friend") mistakes++;

    navigate("/result", {
      state: { mistakes },
    });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Writing Assessment</h1>

      <p>Type the following words correctly:</p>

      <input
        name="word1"
        placeholder="ball"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="word2"
        placeholder="dog"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="word3"
        placeholder="book"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="word4"
        placeholder="school"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="word5"
        placeholder="friend"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={submitAssessment}>
        Submit Assessment
      </button>
    </div>
  );
}

export default WritingAssessment;