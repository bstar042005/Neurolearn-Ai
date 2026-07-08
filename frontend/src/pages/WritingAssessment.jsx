import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WritingAssessment.css";

function WritingAssessment() {

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const handleImage = (e) => {

    if (e.target.files[0]) {

      setImage(URL.createObjectURL(e.target.files[0]));

    }

  };

  return (

    <div className="writing-page">

      <div className="writing-container">

        <div className="progress">

          <span>Step 3 of 4</span>

          <div className="progress-bar">

            <div className="progress-fill"></div>

          </div>

        </div>

        <h1>Writing Assessment</h1>

        <p className="instruction">
          Write the sentence below on paper and upload a clear image.
        </p>

        <div className="sentence-box">

          The quick brown fox jumps over the lazy dog.

        </div>

        <div className="upload-box">

          <h3>Upload Handwriting Image</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        {image && (

          <div className="preview">

            <h3>Preview</h3>

            <img
              src={image}
              alt="Preview"
            />

          </div>

        )}

        <div className="navigation">

          <button
            className="back-btn"
            onClick={() => navigate("/reading")}
          >
            ← Back
          </button>

          <button
            className="next-btn"
            onClick={() => navigate("/processing")}
          >
            Analyze →
          </button>

        </div>

      </div>

    </div>

  );

}

export default WritingAssessment;