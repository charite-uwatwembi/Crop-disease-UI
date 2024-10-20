import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle the file submission logic here
    console.log('File uploaded:', file);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Upload Crop Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button 
        className="submit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" 
        onClick={handleSubmit}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
