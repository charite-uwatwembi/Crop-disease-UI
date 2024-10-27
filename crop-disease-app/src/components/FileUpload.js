import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Prediction: ${data.prediction}`);
      } else {
        setMessage("Error during file upload.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during file upload.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
    <h1 className="text-4xl font-bold text-green-700 mb-4">Upload a picture for prediction</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <input type="file" onChange={handleFileChange} className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
      <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Upload</button>
    </form>
    {message && <p className="text-lg text-gray-600 mt-4">{message}</p>}
  </div>
  );
};

export default UploadForm;
