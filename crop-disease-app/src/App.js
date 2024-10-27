import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FileUpload from './components/FileUpload';
import axios from 'axios';
import PredictionResult from './components/PredictionResult';

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const handleUpload = async (fileInput) => {
    try {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('file', file);
  
      console.log('Sending request to:', 'http://localhost:8000/predict');
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Response received:', response);
      const predictedDisease = response.data.prediction;
      const confidenceLevel = response.data.confidence;
      setResult(predictedDisease);
      setConfidence(confidenceLevel);
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert('Error uploading file: ' + error.response.data.message);
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('Error uploading file: Network error');
      } else {
        console.error('Error:', error.message);
        alert('Error uploading file: ' + error.message);
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<FileUpload handleUpload={handleUpload} />} />
        <Route path="/result" element={<PredictionResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;