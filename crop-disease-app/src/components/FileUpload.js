import React from 'react';

function FileUpload(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fileInput = event.target.elements.file;
    props.handleUpload(fileInput);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Upload Your File</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="file" name="file" className="w-full p-2 border border-gray-300 rounded-lg" />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Upload</button>
      </form>
      <p className="text-gray-600 text-sm mt-4">Please select a file to upload.</p>
    </div>
  );
}

export default FileUpload;