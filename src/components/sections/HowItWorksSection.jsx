import React from "react";
import "../../styles.css";

const steps = [
  {
    img: "/src/img/works1.png",
    title: "Step 1",
    description: "Get Started with Creating a Professional Resume",
  },
  {
    img: "/src/img/works2.png",
    title: "Step 2",
    description: "Call to Screen Your Profile with Expert",
  },
  {
    img: "/src/img/works3.png",
    title: "Step 3",
    description: "Get Your Profile Writing Process",
  },
  {
    img: "/src/img/works4.png",
    title: "Step 4",
    description: "Receive the Delivery of Final Resume",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-container">
      <div className="title-container">
        <h2 className="how-it-works-title">HOW IT WORKS</h2>
        <div className="separator"></div>
        <p>
          Getting an Interview Call Starts with Creating a Professional Resume
        </p>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <img className="step-icon" src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
