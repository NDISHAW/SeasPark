import React from 'react';

const Logomedia = ({ image, className }) => (
  <div className={`logo-media ${className || ''}`}>
      {image && <img src={image} alt="logoicon"/>}

  </div>
);

export default Logomedia;