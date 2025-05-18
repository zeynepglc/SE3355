import React, { useState } from "react";
import "./stickyads.css";

const StickyAds = () => {
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

  return (
    <>
      {leftVisible && (
        <div className="sticky-ad left-ad">
          <button className="close-btn" onClick={() => setLeftVisible(false)}>X</button>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/120x600?text=Ad+Left" alt="Ad Left" />
          </a>
        </div>
      )}

      {rightVisible && (
        <div className="sticky-ad right-ad">
          <button className="close-btn" onClick={() => setRightVisible(false)}>X</button>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/120x600?text=Ad+Right" alt="Ad Right" />
          </a>
        </div>
      )}
    </>
  );
};

export default StickyAds;