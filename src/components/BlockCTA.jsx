import React from "react";
import { useModal } from "../context/ModalContext";

const BlockCTA = () => {
  const { openModal } = useModal();

  return (
    <div className="block-cta-container" onClick={openModal}>
      <p className="action-text">Transform your resume now</p>
      <p className="offer-subtext">Get UPTO 40% OFF on your New Resume</p>
    </div>
  );
};

export default BlockCTA;
