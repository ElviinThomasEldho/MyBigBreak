import React from 'react';
import '../../styles.css';

const mistakes = [
  {
    icon: "❌",
    title: "A resume that is either too long for CV, synopsis or too short doesn't stand out",
    description: "Your resume should be concise yet comprehensive, typically 1-2 pages for most professionals."
  },
  {
    icon: "❌",
    title: "Word formatting, bad Numbering/wrong bullet points without proper spacing",
    description: "Professional formatting ensures your resume is easy to read and looks polished."
  },
  {
    icon: "❌",
    title: "Outdated layouts, no mistakes family, or too many colors used",
    description: "Modern, clean designs with appropriate font choices make your resume stand out positively."
  },
  {
    icon: "❌",
    title: "Typos, incorrect punctuation marks, and grammatical mistakes",
    description: "Error-free content is crucial for making a strong first impression."
  },
  {
    icon: "❌",
    title: "Not providing an email phone number",
    description: "Clear contact information is essential for potential employers to reach you."
  },
  {
    icon: "❌",
    title: "Writing salary job instead of managing job successfully",
    description: "Focus on achievements and impact rather than basic job responsibilities."
  }
];

const CommonMistakesSection = () => {
  return (
    <section className="common-mistakes-container">
      <h2 className="common-mistakes-title">Common Resume Mistakes to Avoid</h2>
      <div className="mistakes-grid">
        {mistakes.map((mistake, index) => (
          <div key={index} className="mistake-card">
            <div className="mistake-icon">
              <span role="img" aria-label="mistake">{mistake.icon}</span>
            </div>
            <div className="mistake-content">
              <h3 className="mistake-title">{mistake.title}</h3>
              <p className="mistake-description">{mistake.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonMistakesSection; 