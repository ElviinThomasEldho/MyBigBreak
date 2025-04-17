import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles.css";

const testimonials = [
  {
    author: "Gayatri Vidya",
    role: "",
    quote:
      "I can confidently say that interview coaching given by mentor at MY big Break was a game-changer in cracking my interview. Initially, I thought the pricing was on the higher side, but after seeing the results, I can definitely say it was worth it. I highly recommend MY Big Break for interview coaching",
    rating: 5,
    isGoogleReview: true,
  },
  {
    author: "Muhammad Tahir khan",
    role: "",
    quote:
      "I had the pleasure of working with Shruti for creating my resume, and I must say she exceeded my expectations. Shruti's professionalism, attention to detail, and ability to craft a tailored, impactful resume truly stood out. She took the time to understand my experience, skills, and goals, and delivered a resume that reflects my strengths perfectly. I’m impressed with her efficiency, dedication, and the quality of work she provides. I highly recommend Shruti to anyone looking to elevate their professional profile!",
    rating: 5,
    isGoogleReview: true,
  },
  {
    author: "Joyita Bhattacharya",
    role: "",
    quote:
      "Overall, It was a good experience with bigbreak, (though I was little concerned on cost side ofcourse which was pre agreed) Shruti at Bigbreak helped me. She was polite, creative and supportive. Thank you, Shruti. Thank you, Big break.",
    rating: 4,
    isGoogleReview: true,
  },
  {
    author: "Edwin William",
    role: "",
    quote:
      "I am pleased to have been assigned Niranjana to assist me in drafting my resume. She possesses the ability to offer valuable insights that enhance the quality of my resume. Her patience and understanding of what aligns with my profile are commendable. Thank you very much Niranjana.",
    rating: 5,
    isGoogleReview: true,
  },
  {
    author: "Deepu Singh",
    role: "",
    quote:
      "Great work team, special thanks to Niranjana superb work done captured all the points in my resume and able to deliver on time ,great job thanks ....",
    rating: 5,
    isGoogleReview: true,
  },
  {
    author: "LAKSHMI KRISHNA ANOOP",
    role: "",
    quote:
      "Excellent work. I really appreciate the quality and promptness of the service provided by Ms.Shruthi. She has incorporated our points and feedbacks a delivered a great Resume. Thank you.",
    rating: 5,
    isGoogleReview: true,
  },
  {
    author: "Sanjay Singh",
    role: "",
    quote: "Amazing Service",
    rating: 4,
    isGoogleReview: true,
  },
  {
    author: "Sabin",
    role: "Sales & Marketing, Dubai, UAE",
    quote:
      "Thank you for the amazing work you guys have done to enhance my CV. I must admit the whole transition from contacting the My Big Break team and executing the entire process was so smooth. The simple and engaging approach taken by the team is credible. I had always hesitated to contact a CV building firm. But I made the right decision by getting in touch with My Big Break. I will definitely refer you guys to all those who are seeking a professional CV and profile. Excellent job team",
    rating: 5,
    isGoogleReview: false,
  },
  {
    author: "FJ",
    role: "Accounts and Finance, United Kingdom",
    quote:
      "Extremely happy to say that post getting my resume done from you, I started applying with the same. I got a call within a week and I was able to crack the interview too. Not sure whether it was a coincidence but am really happy about the coincidence and thankful to all of you for the support. May you guys keep doing a wonderful job and keep changing lives, particularly in this difficult time for the whole world.",
    rating: 5,
    isGoogleReview: false,
  },
  {
    author: "Abhishek",
    role: "Banking Services, Hyderabad",
    quote:
      "Congratulations for the great work. I'm happy with the services and the final output. Instead of directly availing the services, I approached and asked for a call back to understand the way forward. We had a detailed discussion and all the questions were answered patiently. Secondly, there was no push for making payment. I am happy with final outcome. And also happy with getting associated with “MyBigbreak”.",
    rating: 5,
    isGoogleReview: false,
  },
  {
    author: "R. Kaarthik",
    role: "Healthcare, Chennai",
    quote:
      "Dear My Big Break Team, I am so fortunate to have associated with you and take your services. Your team is just fantastic, choice of words, patience to listen about my roles and responsibilities in my current and previous roles and ability to understand and put them in the form of words just eased my thoughts about my resume and made me more confident. Kudos to Team- My Big Break.",
    rating: 5,
    isGoogleReview: false,
  },
];

const TestimonialsSection = () => {
  const [expandedIndexes, setExpandedIndexes] = useState(new Set());

  const toggleReadMore = (index) => {
    const newSet = new Set(expandedIndexes);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedIndexes(newSet);
  };

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
    <motion.section
      className="section-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What customers say about us
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        550+ ★★★★★ {" "} <i className="fab fa-google" /> Reviews
      </motion.h3>

      <div className="testimonials-carousel">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndexes.has(index);
            const shouldShowReadMore = testimonial.quote.length > 200;
            const displayedQuote = isExpanded
              ? testimonial.quote
              : testimonial.quote.slice(0, 200);

            return (
              <motion.div
                key={index}
                className="carousel-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="testimonial-card">
                  <div className="stars-container">
                    <div className="stars">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                    {testimonial.isGoogleReview && (
                      <p className="google-review">
                        <i className="fab fa-google" /> Google Review
                      </p>
                    )}
                  </div>
                  <p className="quote">
                    {displayedQuote}
                    {shouldShowReadMore && (
                      <>
                        {!isExpanded && "... "}
                        <button
                          className="read-more-btn"
                          onClick={() => toggleReadMore(index)}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      </>
                    )}
                  </p>
                  <div className="author">
                    <div className="avatar">{testimonial.author.charAt(0)}</div>
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
