import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WritingAssessment.css";
import ProgressBar from "../components/common/ProgressBar";
import Button from "../components/common/Button";
import API from "../services/api";

function WritingAssessment() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Preview Image
    setImage(URL.createObjectURL(file));

    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("image", file);

      const response = await API.post(
        "/upload/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image Uploaded Successfully");

      console.log(response.data);

      // Store uploaded image filename
      localStorage.setItem(
        "handwritingImage",
        response.data.file.filename
      );

      alert("Image Uploaded Successfully!");

    } catch (error) {
      console.error(error);

      alert("Image Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="writing-page">
      <div className="writing-container">

        <ProgressBar
          step={3}
          totalSteps={4}
        />

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

          {uploading && (
            <p style={{ marginTop: "15px", color: "#2563eb" }}>
              Uploading image...
            </p>
          )}

        </div>

        {image && (
          <div className="preview">

            <h3>Preview</h3>

            <img
              src={image}
              alt="Handwriting Preview"
            />

          </div>
        )}

        <div className="navigation">

          <Button
            text="← Back"
            variant="secondary"
            onClick={() => navigate("/reading")}
          />

          <Button
            text="Analyze →"
            variant="primary"
            onClick={() => navigate("/processing")}
          />

        </div>

      </div>
    </div>
  );
}

export default WritingAssessment;