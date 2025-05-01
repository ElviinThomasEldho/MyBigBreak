import React, { useState } from "react";
import emailjs from "emailjs-com";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    industry: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Create form data for email
      const templateParams = {
        to_email: "resume@mybigbreak.in",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city,
        industry: formData.industry,
        message: `New Resume Submission from ${formData.name}\n\nContact Details:\nPhone: ${formData.phone}\nCity: ${formData.city}\nIndustry: ${formData.industry}`,
      };

      // Send email with attachment if file exists
      if (selectedFile) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = async () => {
          const base64File = reader.result.split(',')[1];
          const fileName = selectedFile.name;
          
          await emailjs.send(
            "service_wmcml7v",
            "template_ag4ybq8",
            {
              ...templateParams,
              attachment: {
                name: fileName,
                data: base64File
              }
            },
            "WJtCNy6AFtWaQHk0N"
          );

          setSubmitStatus("success");
          setTimeout(() => {
            onClose();
          }, 2000);
        };
      } else {
        // Send email without attachment
        await emailjs.send(
          "service_wmcml7v",
          "template_ag4ybq8",
          templateParams,
          "WJtCNy6AFtWaQHk0N"
        );

        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
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
          Get <span className="highlight">UPTO 40% OFF</span> OFF on
          Professional Resume Writing Services<br />Upload Your Resume for a Call
          Back
        </h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="modal-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="modal-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              className="modal-input"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="modal-input"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="text"
            name="industry"
            placeholder="Industry"
            className="modal-input"
            value={formData.industry}
            onChange={handleInputChange}
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
          {submitStatus === "success" && (
            <div className="success-message">
              Thank you! We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="error-message">
              Something went wrong. Please try again.
            </div>
          )}
          <button
            type="submit"
            className="modal-submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "GET STARTED NOW!"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
