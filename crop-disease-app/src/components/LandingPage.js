import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Crop Disease Detection</h1>
      <p className="text-lg text-gray-700 mb-6">Upload an image of your crop and let our AI detect potential diseases.</p>
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
