import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles.css";

const testimonials = [
  {
    author: "Gayatri Vidya",
    role: "Software Engineer",
    quote:
      "I am extremely happy with the resume writing service. My resume was given a complete makeover and I started getting more interview calls immediately.",
    rating: 5,
  },
  {
    author: "Jayant Vidya",
    role: "Marketing Manager",
    quote:
      "The team at MyBigBreak.in did an excellent job with my resume. Their attention to detail and professional approach really made my profile stand out.",
    rating: 5,
  },
  {
    author: "Sayansh Vidya",
    role: "Data Analyst",
    quote:
      "Best resume writing service I've used. They helped me highlight my achievements in a way that caught recruiters' attention. Highly recommended!",
    rating: 5,
  },
  {
    author: "Divyansh Vidya",
    role: "Product Manager",
    quote:
      "The resume makeover completely transformed my job search. I'm getting more responses and better opportunities. Worth every penny!",
    rating: 5,
  },
  {
    author: "Priya Sharma",
    role: "UX Designer",
    quote:
      "The professional approach and attention to detail in crafting my resume was impressive. Saw a significant increase in interview calls.",
    rating: 5,
  },
  {
    author: "Rahul Verma",
    role: "Business Analyst",
    quote:
      "MyBigBreak.in helped me present my skills in the best possible way. Their service is worth every penny spent!",
    rating: 5,
  },
  {
    author: "Neha Patel",
    role: "HR Manager",
    quote:
      "As someone who reviews resumes daily, I can say that MyBigBreak.in knows exactly what recruiters look for. Excellent service!",
    rating: 5,
  },
  {
    author: "Amit Kumar",
    role: "Sales Director",
    quote:
      "The team understood my requirements perfectly and delivered a resume that perfectly highlighted my sales achievements.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <h2 className="section-title">What customers say about us</h2>
      <div className="testimonials-carousel">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-item">
              <div className="testimonial-card">
                <div className="stars-container">
                  <div className="stars">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p>
                    <i className="fab fa-google" />
                    Reviews
                  </p>
                </div>
                <p className="quote">{testimonial.quote}</p>
                <div className="author">
                  <div className="avatar">{testimonial.author.charAt(0)}</div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
