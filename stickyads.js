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
          <a href="https://www.sephora.com.tr/p/chance-eau-splendide---eau-de-parfum-P1000207324.html" target="_blank" rel="noopener noreferrer">
            <img src="https://media.sephora.eu/content/dam/digital/pim/published/C/CHANEL/764500/367602-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" alt="Sephora" />
          </a>
        </div>
      )}

      {rightVisible && (
        <div className="sticky-ad right-ad">
          <button className="close-btn" onClick={() => setRightVisible(false)}>X</button>
          <a href="https://www.sephora.com.tr/p/niasinamid-%2510-cinko-%251---kusursuzluk-giderici-serum-P3921091.html" target="_blank" rel="noopener noreferrer">
            <img src="https://media.sephora.eu/content/dam/digital/pim/published/T/THE%20ORDINARY/502450/161706-media_swatch.jpg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined" alt="Sephora" />
          </a>
        </div>
      )}
    </>
  );
};

export default StickyAds;
