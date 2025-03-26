import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Selected File:", selectedFile);
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
    } else {
      alert("Please upload a PDF or Word document");
      e.target.value = "";
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">
          Get UPTO <span className="highlight">40% OFF</span> on
          <br />
          your New Resume
        </h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              className="modal-input"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="modal-input"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="modal-input"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="modal-input"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Industry"
            className="modal-input"
            required
          />
          <div className="file-upload-container">
            <label htmlFor="resume-upload" className="file-upload-label">
              {selectedFile
                ? selectedFile.name
                : "Upload your current resume (PDF/Word)"}
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="file-upload-input"
                required
              />
            </label>
          </div>
          <button type="submit" className="modal-submit">
            GET STARTED NOW!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
