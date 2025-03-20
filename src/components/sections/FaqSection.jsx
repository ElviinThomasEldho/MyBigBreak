import React, { useState } from "react";
import "../../styles.css";

const leftColumnFaqs = [
  {
    question: "What is My Big Break?",
    answer:
      "My Big Break is a professional resume writing service that helps job seekers create powerful, ATS-friendly resumes that stand out to employers.",
  },
  {
    question: "What does My Big Break do?",
    answer:
      "We provide professional resume writing, LinkedIn profile optimization, and job search coaching services to help you advance your career.",
  },
  {
    question: "Can you tell more about My Big Break Resume Writers?",
    answer:
      "Our resume writers are certified professionals with extensive experience in various industries. They work closely with you to highlight your achievements and skills effectively.",
  },
  {
    question: "Will I get a chance to have a discussion with your resume writers?",
    answer:
      "Yes, you'll have a detailed discussion with your assigned writer to ensure they understand your career goals and experience thoroughly.",
  },
];

const rightColumnFaqs = [
  {
    question: "How long does it take to complete the resume writing?",
    answer:
      "Typically, we deliver the first draft within 3-5 business days after our initial consultation.",
  },
  {
    question: "What happens if I do not enjoy the service? Can I get a refund?",
    answer:
      "We offer unlimited revisions within 7 days of delivery. If you're still not satisfied, we have a money-back guarantee policy.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, we use industry-standard encryption and secure payment gateways to protect your payment information.",
  },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggleFaq = (id) => {
    setOpenIndexes(prevIndexes => {
      const newIndexes = new Set(prevIndexes);
      if (newIndexes.has(id)) {
        newIndexes.delete(id);
      } else {
        newIndexes.add(id);
      }
      return newIndexes;
    });
  };

  const renderFaqColumn = (faqs, columnId) => (
    <div className="faq-column">
      {faqs.map((faq, index) => {
        const faqId = `${columnId}-${index}`;
        return (
          <div key={faqId} className="faq-item">
            <button
              className={`faq-question ${openIndexes.has(faqId) ? "open" : ""}`}
              onClick={() => toggleFaq(faqId)}
            >
              {faq.question}
            </button>
            <div className={`faq-answer ${openIndexes.has(faqId) ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="questions-container">
        {renderFaqColumn(leftColumnFaqs, 'left')}
        {renderFaqColumn(rightColumnFaqs, 'right')}
      </div>
    </section>
  );
};

export default FaqSection;
