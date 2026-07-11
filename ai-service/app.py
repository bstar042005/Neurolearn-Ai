from fastapi import FastAPI, UploadFile, File
from utils.image_processing import preprocess_image
from utils.feature_extraction import extract_features
from utils.text_analysis import analyze_text
from utils.ocr import extract_text
import shutil
import os\


app = FastAPI(
    title="NeuroLearn AI Service",
    version="1.0.0",
)

UPLOAD_FOLDER = "temp_uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "NeuroLearn AI Service is running successfully"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    processed_image = preprocess_image(file_path)
    features = extract_features(processed_image)
    text = extract_text(file_path)
    analysis = analyze_text(text)

    print(analysis)

    print("Extracted Text:")
    print(text)

    print(features)

    print("✅ Image Processed Successfully")

    return {
    "success": True,
    "filename": file.filename,
    "ocrText": text,
    "analysis": analysis,
    "features": features
}