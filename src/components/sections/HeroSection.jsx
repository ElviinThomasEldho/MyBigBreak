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

const highlights = [
  "Build your <strong>success story</strong> to get the <strong>recruiters' attention</strong>.",
  "<strong>Optimise your Keywords</strong> and making your Resume <strong>ATS-Compliant</strong>.",
  "Presents your <strong>experience summary</strong> with <strong>key skills & competencies</strong>.",
  "Effectively <strong>structure & highlight</strong> your <strong>Responsibilities & achievements</strong>.",
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
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

            <div className="highlight-text">
              <motion.h2 className="highlights-title" variants={titleVariants}>
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
            {/* <img
              src="/src/img/point.png"
              className="hero-image"
              alt="Professional resume samples"
              loading="eager"
            /> */}

            <motion.div className="highlight-image" variants={imageVariants}>
              <img src="/src/img/point.png" alt="Resume Preview" />
            </motion.div>
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
