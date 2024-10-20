import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import FileUpload from './components/FileUpload';
import PredictionResult from './components/PredictionResult';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
    // You can add the logic to send the image to your backend for prediction here.
    // Once the prediction is received, set it using `setPrediction` and `setConfidence`.
  };

  return (
    <div className="App">
      <LandingPage />
      <FileUpload onImageUpload={handleImageUpload} />
      <PredictionResult result={prediction} confidence={confidence} />
    </div>
  );
}

export default App;
