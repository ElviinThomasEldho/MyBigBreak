import React from "react";
import { motion } from "framer-motion";
import "../../styles.css";
import { useModal } from "../../context/ModalContext";

const steps = [
  {
    img: "/src/img/steps/step1.jpg",
    title: "Step 1",
    description: "One on One call between You and the Writer",
  },
  {
    img: "/src/img/steps/step2.jpg",
    title: "Step 2",
    description: "Writer will take input on your experience, achievements, and skills",
  },
  {
    img: "/src/img/steps/step3.jpg",
    title: "Step 3",
    description: "Get your First Draft of the Resume",
  },
  {
    img: "/src/img/steps/step4.jpg",
    title: "Step 4",
    description: "Revert on the draft with your suggestions",
  },
  {
    img: "/src/img/steps/step5.jpg",
    title: "Step 5",
    description: "Receive your Final Resume",
  },
];

const HowItWorksSection = () => {
  const { openModal } = useModal();

  return (
    <motion.section
      className="how-it-works-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="title-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="how-it-works-title">HOW IT WORKS</h2>
        <div className="separator"></div>
        <p>
          Getting an Interview Call Starts with <br/><strong>Creating a Professional Resume</strong>
        </p>
      </motion.div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img className="step-icon" src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="cta-button-dark"
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="offer-subtext">Get UPTO 40% OFF on your New Resume</p>
        Improve your Resume Now!
      </motion.button>
    </motion.section>
  );
};

export default HowItWorksSection;
