from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from io import BytesIO
from PIL import Image
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def preprocess_image(image: Image.Image):
    # Resize the image to the correct dimensions
    image = image.resize((224, 224))
    # Normalize the pixel values
    image = np.array(image) / 255.0
    return image

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    optimized_model = load_model('Crop-Disease-AI-Classification/saved_models/optimized_model.h5')
    contents = await file.read()
    image = Image.open(BytesIO(contents))
    image = preprocess_image(image)
    prediction = optimized_model.predict(image)
    predicted_disease = np.argmax(prediction)
    confidence_level = prediction[0][predicted_disease] * 100
    return JSONResponse(content={"prediction": predicted_disease, "confidence": confidence_level}, media_type="application/json")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)