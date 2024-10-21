from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from io import BytesIO
from PIL import Image
import numpy as np
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update to match the port of your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy model prediction function (replace with actual model)
def predict_image(image: Image.Image):
    # Example prediction logic
    return "Disease X"
@app.get("/")
def read_root():
    return {"message": "Welcome to the Crop Disease Detection API"}
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(BytesIO(contents))
    # Perform prediction using your model
    prediction = predict_image(image)
    return JSONResponse({"prediction": prediction})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
