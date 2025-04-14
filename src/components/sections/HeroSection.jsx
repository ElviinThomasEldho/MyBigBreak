import React from "react";
import { useModal } from "../../context/ModalContext.jsx";
import { motion } from "framer-motion";
import "../../styles.css";

// Services data moved to a separate constant for better organization
const SERVICES = [
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

// Animation variants for cleaner animation definitions
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  const { openModal } = useModal();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="left-container"
            variants={fadeInLeft}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="offer-text">
              UP TO <span className="discount-text">40% OFF</span> ON
              <br />
              <span className="serif">Professional Resume Writing</span>
            </h1>
            <div className="sub-text">
              <h4 className="tagline">We Build Resumes that</h4>
              <ol className="benefits-list">
                <li>
                  <strong>Build your success story</strong> to get the
                  recruiters' attention
                </li>
                <li>
                  Optimize your{" "}
                  <strong>keywords making your resume ATS compliant</strong>
                </li>
                <li>
                  <strong>Presents your experience summary</strong> with key
                  skills & competencies
                </li>
                <li>
                  Effectively structures & highlights{" "}
                  <strong>your Responsibilities & achievements</strong>
                </li>
              </ol>
            </div>

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
            variants={fadeInRight}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src="/src/img/resumes.png"
              className="hero-image"
              alt="Professional resume samples"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="services-overview">
        <h4 className="services-title">Our Services</h4>
        <div className="services-container">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                className="service-image"
                src={service.img}
                alt={`${service.name} icon`}
              />
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
