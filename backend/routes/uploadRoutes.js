const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

// Upload Image
router.post("/image", upload.single("image"), (req, res) => {
  res.status(200).json({
    message: "Image uploaded successfully",
    file: req.file,
  });
});

// Upload Audio
router.post("/audio", upload.single("audio"), (req, res) => {
  res.status(200).json({
    message: "Audio uploaded successfully",
    file: req.file,
  });
});

module.exports = router;