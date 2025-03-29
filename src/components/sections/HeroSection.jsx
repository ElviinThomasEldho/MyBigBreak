import React from "react";
import { useModal } from "../../context/ModalContext.jsx";
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
        <div className="hero-content">
          <div className="left-container">
            {/* <img
              src="/src/img/logo_full_color.png"
              className="logo-image"
              alt="logo-image"
            /> */}
            <h1 className="offer-text">
              UPTO <span className="discount-text">40% OFF</span> ON
              <br />
              <span className="serif">Professional Resume Writing</span>
            </h1>
            <button className="cta-button" onClick={openModal}>
              GET STARTED NOW
            </button>
          </div>
          <div className="right-container">
            <img
              src="/src/img/resumes.png"
              className="hero-image"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="services-overview">
        <h4>Our Services</h4>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img
                className="service-image"
                src={service.img}
                alt={service.name}
              />
              <p className="service-name">{service.name}</p>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
