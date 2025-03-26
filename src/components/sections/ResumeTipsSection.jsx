import React from "react";
import "../../styles.css";
import { useModal } from "../../context/ModalContext";

const resumeTips = [
  {
    icon: "✅",
    title: "Craft a Strong Professional Summary",
    description:
      "Highlight key skills and industry keywords to make a great first impression.",
  },
  {
    icon: "✅",
    title: "Showcase Your Impact",
    description:
      "Use quantifiable achievements to demonstrate your contributions.",
  },
  {
    icon: "✅",
    title: "Certifications & Projects Matter",
    description: "Highlight relevant certifications, awards, and key projects.",
  },
  {
    icon: "✅",
    title: "Differentiate Skills & Competencies",
    description:
      "List both technical skills and behavioral competencies clearly.",
  },
  {
    icon: "✅",
    title: "Make Career Trajectory Clear",
    description: "Use visual elements to showcase your professional growth.",
  },
  {
    icon: "✅",
    title: "Focus on Work Experience",
    description:
      "Highlight results-driven experiences rather than just job duties.",
  },
];

const ResumeTipsSection = () => {
  const { openModal } = useModal();

  return (
    <section className="resume-tips-container">
      <h2 className="resume-tips-title">
        Essential Resume Tips for Success
        <button className="cta-button" onClick={openModal}>
          {" "}
          Improve your Resume Now!
        </button>
      </h2>

      <div className="tips-grid">
        {resumeTips.map((tip, index) => (
          <div key={index} className="tip-card">
            <div className="tip-icon">
              <span role="img" aria-label="tip">
                {tip.icon}
              </span>
            </div>
            <div className="tip-content">
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-description">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeTipsSection;
