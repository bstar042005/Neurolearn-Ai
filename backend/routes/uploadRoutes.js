const express = require("express");
const router = express.Router();
const path = require("path");
const { predictHandwriting } = require("../services/aiService");
const upload = require("../middleware/upload");

// Upload Image
router.post("/image", upload.single("image"), async (req, res) => {
  try {

    const imagePath = path.join(__dirname, "..", req.file.path);

    console.log("Sending image to AI Service...");

    const prediction = await predictHandwriting(imagePath);

    console.log("Prediction Received:", prediction);

    res.status(200).json({
      success: true,
      message: "Image uploaded and analyzed successfully",
      file: req.file,
      prediction,
    });

  } catch (error) {

    console.error("Upload Error:", error.message);

    res.status(500).json({
      success: false,
      message: "AI Prediction Failed",
      error: error.message,
    });

  }
});

// Upload Audio
router.post("/audio", upload.single("audio"), (req, res) => {
  res.status(200).json({
    message: "Audio uploaded successfully",
    file: req.file,
  });
});

module.exports = router;