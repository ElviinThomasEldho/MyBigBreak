import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles.css";
import { useModal } from "../../context/ModalContext";

const samples = [
  { path: "/src/img/sample2.jpg" },
  { path: "/src/img/sample3.png" },
  { path: "/src/img/sample4.png" },
  { path: "/src/img/sample6.png" },
  { path: "/src/img/sample7.png" },
  // { path: "/src/img/sample5.png" },
  { path: "/src/img/sample8.png" },
];

const SamplesSection = () => {
  const { openModal } = useModal();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Resume Templates
      </motion.h2>

      <motion.div
        className="samples-carousel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {samples.map((sample, index) => (
            <motion.div
              key={index}
              className="carousel-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={sample.path} alt={`Resume Template ${index + 1}`} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      <motion.button
        className="cta-button"
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Choose your template now!
      </motion.button>
    </motion.section>
  );
};

export default SamplesSection;
