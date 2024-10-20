import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FileUpload from './components/FileUpload';
import PredictionResult from './components/PredictionResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/result" element={<PredictionResult />} />
      </Routes>
    </Router>
  );
}

export default App;
