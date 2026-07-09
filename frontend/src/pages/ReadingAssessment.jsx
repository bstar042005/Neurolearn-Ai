import { useNavigate } from "react-router-dom";
import "../styles/ReadingAssessment.css";
import ProgressBar from "../components/common/ProgressBar";

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

                    <button className="record-btn">
                        🎤 Start Recording
                    </button>

                    <button className="upload-btn">
                        📁 Upload Audio
                    </button>

                </div>

                <div className="navigation">

                    <button
                        className="back-btn"
                        onClick={() => navigate("/assessment")}
                    >
                        ← Back
                    </button>

                    <button
                        className="next-btn"
                        onClick={() => navigate("/writing")}
                    >
                        Next →
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ReadingAssessment;