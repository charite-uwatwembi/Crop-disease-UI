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
    <div className="file-upload-page">
      <h2>Upload an Image of Your Crop</h2>
      <input type="file" onChange={handleFileChange} />
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
