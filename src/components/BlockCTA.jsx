import React, { useState } from "react";
import { useModal } from "../context/ModalContext";
import pointerIcon from "/src/img/pointer.png"; // Import the image properly

const BlockCTA = () => {
  const { openModal } = useModal();
  const [isHovering, setIsHovering] = useState(false);
  
  // Create a CSS class for the custom cursor effect
  const cursorStyles = `
    .custom-cursor-container {
      position: relative;
    }
    .custom-cursor-container::after {
      content: '';
      position: fixed;
      width: ${isHovering ? '100px' : '20px'};
      height: ${isHovering ? '100px' : '20px'};
      background-image: url(${pointerIcon});
      background-size: contain;
      background-repeat: no-repeat;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: width 0.2s, height 0.2s;
      left: var(--mouse-x);
      top: var(--mouse-y);
      display: var(--cursor-display);
    }
  `;

  // Event handlers for mouse position tracking
  const handleMouseMove = (e) => {
    if (isHovering) {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.documentElement.style.setProperty('--cursor-display', 'block');
    document.body.style.cursor = 'none'; // Hide default cursor
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    document.documentElement.style.setProperty('--cursor-display', 'none');
    document.body.style.cursor = 'auto'; // Restore default cursor
  };

  return (
    <>
      <style>{cursorStyles}</style>
      <div 
        className="custom-cursor-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="block-cta-container" onClick={openModal}>
          <p className="action-text">Transform your resume now</p>
          <p className="offer-subtext">Get UPTO 40% OFF on your New Resume</p>
        </div>
      </div>
    </>
  );
};

export default BlockCTA;