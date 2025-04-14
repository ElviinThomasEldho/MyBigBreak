import React from "react";

const highlights = [
  "Build your success story to get the recruiters attention.",
  "Optimises your Keywords and making your Resume ATS Compliant.",
  "Presents your experience summary with key skills & competencies.",
  "Effectively structures & highlights your Responsibilities & achievements.",
];

export default function ResumeHighlights() {
  return (
    <section className="resume-highlights white-bg">
      <div className="highlight-content">
        <div className="highlight-text">
          <h2 className="highlights-title">We Build Resumes that</h2>
          <ul className="highlights-list">
            {highlights.map((item, index) => (
              <li key={index} className="highlight-item">
                <span className="highlight-number">{index + 1}.</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="highlight-image">
          {/* <img src={resumeImg} alt="Resume Preview" /> */}
        </div>
      </div>
    </section>
  );
}
