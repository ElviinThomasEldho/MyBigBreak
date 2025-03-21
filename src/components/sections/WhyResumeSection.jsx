import React from "react";
import { useModal } from "../../context/ModalContext.jsx";
import "../../styles.css";

const reasons = [
  {
    title: "Fast-Track YOUR CAREER",
  },
  {
    title: "Get NOTICED Instantly",
  },
  {
    title: "Win More INTERVIEWS",
  },
  {
    title: "Make a Lasting First IMPRESSION",
  },
  {
    title: "Maximize Your OPPORTUNITIES",
  },
];

const WhyResumeSection = () => {
  const { openModal } = useModal();

  return (
    <section className="why-resume-container">
      <h2 className="why-resume-title">
        Why do you need a <br />
        <span className="serif">
          Powerful Resume?
        </span>
      </h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <span className="serif" role="img" aria-label={reason.title}>
              {index + 1}
            </span>
            <h3>{reason.title}</h3>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <button className="cta-button" onClick={openModal}>
          UPGRADE YOUR RESUME TODAY!
        </button>
      </div>
    </section>
  );
};

export default WhyResumeSection;
