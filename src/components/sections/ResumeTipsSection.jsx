import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";

// Enhanced CheckMark SVG Component with animation
const CheckMark = () => (
  <svg
    className="checkmark"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
  >
    <rect
      className="checkmark-bg"
      width="40"
      height="40"
      rx="6"
      fill="#00D971"
    />
    <path
      className="checkmark-path"
      d="M16 20L18.9995 23L24 18"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function EnhancedResumeTips() {
  const { openModal } = useModal();

  const [activeCard, setActiveCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize animation for cards entering the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".resume-tip-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const tips = [
    {
      title: "Craft a Strong Professional Summary",
      description:
        "Highlight key skills and industry keywords to make a great first impression.",
      icon: <CheckMark />,
      additionalInfo:
        "A good summary acts as your 'elevator pitch' and should capture attention in 5-7 seconds.",
    },
    {
      title: "Showcase Your Impact",
      description:
        "Use quantifiable achievements to demonstrate your contributions.",
      icon: <CheckMark />,
      additionalInfo:
        "Numbers speak louder than words. Include metrics like '45% increase in traffic' or '$100K in sales'.",
    },
    {
      title: "Certifications & Projects Matter",
      description:
        "Highlight relevant certifications, awards, and key projects.",
      icon: <CheckMark />,
      additionalInfo:
        "Employers value practical experience. Feature projects that demonstrate your skills in action.",
    },
    {
      title: "Differentiate Skills & Competencies",
      description:
        "List both technical skills and behavioral competencies clearly.",
      icon: <CheckMark />,
      additionalInfo:
        "Organize skills into categories (Technical, Soft Skills, Languages) for better readability.",
    },
    {
      title: "Make Career Trajectory Clear",
      description: "Use visual elements to showcase your professional growth.",
      icon: <CheckMark />,
      additionalInfo:
        "Use consistent formatting to highlight promotions and career progression within organizations.",
    },
    {
      title: "Focus on Work Experience",
      description:
        "Highlight results-driven experiences rather than just job duties.",
      icon: <CheckMark />,
      additionalInfo:
        "Use action verbs (Achieved, Led, Implemented) to start bullet points for greater impact.",
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className={`resume-tips-container ${isLoaded ? "loaded" : ""}`}>
      <div className="section-header">
        <h1 className="resume-tips-title">Essential Resume Tips for Success</h1>
        <div className="title-underline"></div>
      </div>

      <div className="resume-tips-grid">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={`resume-tip-card ${
              activeCard === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tip-header">
              <h2 className="tip-title">{tip.title}</h2>
            </div>
            <div className="tip-content">
              <div className="tip-icon">{tip.icon}</div>
              <p className="tip-description">{tip.description}</p>
            </div>
            <div className="tip-additional-info">
              <p>{tip.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="cta-button pulse" onClick={openModal}>
        Improve your Resume Now!
        <span className="button-arrow">→</span>
      </button>
    </div>
  );
}
