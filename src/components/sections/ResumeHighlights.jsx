import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Build your <strong>success story</strong> to get the <strong>recruiters attention</strong>.",
  "<strong>Optimises your Keywords</strong> and making your Resume <strong>ATS Compliant</strong>.",
  "Presents your <strong>experience summary</strong> with <strong>key skills & competencies</strong>.",
  "Effectively <strong>structures & highlights</strong> your <strong>Responsibilities & achievements</strong>.",
];

export default function ResumeHighlights() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.4 }
    }
  };

  return (
    <motion.section 
      className="resume-highlights white-bg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="highlight-content">
        <div className="highlight-text">
          <motion.h2 
            className="highlights-title"
            variants={titleVariants}
          >
            We Build Resumes that
          </motion.h2>
          
          <motion.ul 
            className="highlights-list"
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.li 
                key={index} 
                className="highlight-item"
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="highlight-number">{index + 1}.</span>{" "}
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
        <motion.div 
          className="highlight-image"
          variants={imageVariants}
        >
          <img src="/src/img/point.png" alt="Resume Preview" />
        </motion.div>
      </div>
    </motion.section>
  );
}