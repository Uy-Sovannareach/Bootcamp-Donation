"use client";
import React, { useState } from 'react';
import { Upload } from 'lucide-react'; // Using a Lucide icon for the upload symbol

// The FileUploadPopup component, now a standalone button with its own state and popup
const FileUploadButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [alertMessage, setAlertMessage] = useState(''); // New state for the custom alert message

  // Handlers for the file upload area
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    console.log("Files dropped:", files);
    // Here you would handle the file upload logic, e.g., send to a server or process locally.
    setAlertMessage(`Dropped ${files.length} file(s). Upload not yet implemented.`);
  };

  const handleFileClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = (e) => {
      const files = e.target ? (e.target as HTMLInputElement).files : null;
      if (files) {
        console.log("Files selected:", files);
        // Here you would handle the file upload logic
        setAlertMessage(`Selected ${files.length} file(s). Upload not yet implemented.`);
      }
    };
    fileInput.click();
  };

  // Handler for the message input
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // Handler for the "upload" button
  const handleUpload = () => {
    console.log("Uploading with message:", message);
    // Here you would perform the final upload action
    setAlertMessage("Upload button clicked! Functionality not yet implemented.");
  };

  return (
    <>
      <button
        onClick={() => setIsPopupVisible(true)}
        className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-emerald-600 transition-colors"
      >
        Open Popup
      </button>

      {/* Custom Alert Message Box */}
      {alertMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-gray-800 text-white shadow-xl z-50 transition-all duration-300">
          <div className="flex items-center space-x-2">
            <span>{alertMessage}</span>
            <button onClick={() => setAlertMessage('')} className="text-sm font-semibold text-gray-400 hover:text-white">
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="w-full max-w-md p-6 bg-lime-50 rounded-3xl border-4 border-blue-400 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">File upload</h2>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* File Upload Area */}
            <div
              className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed transition-colors duration-200 cursor-pointer ${
                isDragOver ? 'bg-blue-100 border-blue-400' : 'bg-white border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleFileClick}
            >
              <Upload size={48} className="text-gray-500 mb-2" />
              <p className="text-gray-600 text-center font-medium">Click to upload or drag and drop</p>
            </div>

            {/* Message Textarea */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={handleMessageChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              className="mt-6 w-full py-3 bg-emerald-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-emerald-600 transition-colors duration-300"
            >
              upload
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Main App component for the immersive
function App() {
  return (
    <div className="font-sans antialiased text-gray-800 flex flex-col items-center justify-center p-8 min-h-screen">
      <FileUploadButton />
    </div>
  );
}

export default App;
