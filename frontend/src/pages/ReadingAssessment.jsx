import { useNavigate } from "react-router-dom";
import "../styles/ReadingAssessment.css";
import ProgressBar from "../components/common/ProgressBar";
import Button from "../components/common/Button";

function ReadingAssessment() {
  const navigate = useNavigate();

  const paragraph = `
The little rabbit ran through the green forest looking for its friends.
It jumped over small rocks, crossed a tiny stream, and finally found
everyone playing happily under a big tree.
`;

  return (
    <div className="reading-page">
      <div className="reading-container">

        <ProgressBar
          step={2}
          totalSteps={4}
        />

        <h1>Reading Assessment</h1>

        <p className="instruction">
          Read the paragraph below clearly and confidently.
        </p>

        <div className="reading-card">
          <p>{paragraph}</p>
        </div>

        <div className="record-buttons">

          <Button
            text="🎤 Start Recording"
            variant="primary"
            onClick={() => alert("Recording feature will be added later")}
          />

          <Button
            text="📁 Upload Audio"
            variant="secondary"
            onClick={() => alert("Upload feature will be added later")}
          />

        </div>

        <div className="navigation">

          <Button
            text="← Back"
            variant="secondary"
            onClick={() => navigate("/assessment")}
          />

          <Button
            text="Next →"
            variant="primary"
            onClick={() => navigate("/writing")}
          />

        </div>

      </div>
    </div>
  );
}

export default ReadingAssessment;