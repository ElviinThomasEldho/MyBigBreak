import React from "react";
import { useModal } from "../../context/ModalContext.jsx";
import { motion } from "framer-motion";
import "../../styles.css";

const services = [
  {
    img: "/src/img/service1.svg",
    name: "Resume Enhancement",
    desc: "We optimize your resume by highlighting key skills, achievements, and industry-relevant keywords to improve visibility and impact.",
  },
  {
    img: "/src/img/service2.svg",
    name: "Job Portal Optimization",
    desc: "We update your profile and resume on your chosen job site, ensuring better visibility and higher ranking in recruiter searches.",
  },
  {
    img: "/src/img/service3.svg",
    name: "LinkedIn Optimization",
    desc: "We refine your LinkedIn profile with strategic keywords and detailed professional experience to boost your chances of getting noticed.",
  },
];

const HeroSection = () => {
  const { openModal } = useModal();

  return (
    <>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="left-container"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="offer-text">
              UPTO <span className="discount-text">40% OFF</span> ON
              <br />
              <span className="serif">Professional Resume Writing</span>
            </h1>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              GET STARTED NOW
            </motion.button>
          </motion.div>

          <motion.div
            className="right-container"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src="/src/img/resumes.png"
              className="hero-image"
              alt="hero-image"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="services-overview">
        <h4>Our Services</h4>
        <div className="services-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                className="service-image"
                src={service.img}
                alt={service.name}
              />
              <p className="service-name">{service.name}</p>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
