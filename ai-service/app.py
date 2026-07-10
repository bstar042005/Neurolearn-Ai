from fastapi import FastAPI, UploadFile, File
import shutil
import os

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

    return {
        "success": True,
        "filename": file.filename,
        "prediction": {
            "riskLevel": "Low",
            "confidence": 92,
            "message": "AI model integration pending"
        }
    }