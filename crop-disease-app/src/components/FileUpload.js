import React, { useState } from 'react';

const FileUpload = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    if (onImageUpload) {
      onImageUpload(e.target.files[0]);
    }
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
      {selectedFile && <p className="text-sm text-gray-600">File selected: {selectedFile.name}</p>}
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
        Upload Image
      </button>
    </div>
  );
};

export default FileUpload;
