import React from "react";
import { useModal } from "../context/ModalContext";

const BlockCTA = () => {
  const { openModal } = useModal();

  return (
    <div className="block-cta-container">
      <div className="block-cta-content">
        <h2 className="block-cta-title">Ready to Transform Your Career?</h2>
        <p className="block-cta-text">
          Let us help you create a resume that opens doors to your dream job.
        </p>
        <button className="block-cta-button" onClick={openModal}>
          Transform your resume now
          <p className="offer-subtext">Get UPTO 40% OFF on your New Resume</p>
        </button>
      </div>
    </div>
  );
};

export default BlockCTA;
