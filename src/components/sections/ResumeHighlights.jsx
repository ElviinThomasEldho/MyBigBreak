import React from "react";
const highlights = [
  "Build your <strong>success story</strong> to get the <strong>recruiters attention</strong>.",
  "<strong>Optimises your Keywords</strong> and making your Resume <strong>ATS Compliant</strong>.",
  "Presents your <strong>experience summary</strong> with <strong>key skills & competencies</strong>.",
  "Effectively <strong>structures & highlights</strong> your <strong>Responsibilities & achievements</strong>.",
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
                <span className="highlight-number">{index + 1}.</span>{" "}
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="highlight-image">
          <img src="/src/img/point.png" alt="Resume Preview" />
        </div>
      </div>
    </section>
  );
}