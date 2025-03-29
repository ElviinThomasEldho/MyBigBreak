import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles.css";
import { useModal } from "../../context/ModalContext";

const samples = [
  {
    path: "/src/img/sample2.jpg",
  },
  {
    path: "/src/img/sample3.png",
  },
  {
    path: "/src/img/sample4.png",
  },
  {
    path: "/src/img/sample5.png",
  },
  {
    path: "/src/img/sample6.png",
  },
  {
    path: "/src/img/sample7.png",
  },
  {
    path: "/src/img/sample8.png",
  },
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
    <section className="section-container">
      <h2 className="section-title">Our Resume Templates</h2>
      <div className="samples-carousel">
        <Slider {...settings}>
          {samples.map((sample, index) => (
            <div key={index} className="carousel-item">
              <img src={sample.path} />
            </div>
          ))}
        </Slider>
      </div>

      <button className="cta-button" onClick={openModal}>
        {" "}
        Choose your template now!
      </button>
    </section>
  );
};

export default SamplesSection;
