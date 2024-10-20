import React from 'react';

const PredictionResult = ({ result, confidence }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Prediction Result</h2>
      {result ? (
        <>
          <p className="text-lg text-gray-700 mb-2">Disease: {result}</p>
          <p className="text-lg text-gray-700 mb-2">Confidence: {confidence}%</p>
        </>
      ) : (
        <p className="text-lg text-gray-700 mb-2">No prediction available yet.</p>
      )}
    </div>
  );
};

export default PredictionResult;
