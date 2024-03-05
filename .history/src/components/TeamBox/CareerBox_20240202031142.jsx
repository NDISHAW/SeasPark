import React from 'react'
import { Link } from "react-router-dom";

export default function CareerBox({ image, icon, title, text, path = "#" }) {
  return (
    <div className="service-style3">
      <div className="service-front">
        <div className="service-img">
          <img src={image} alt="serviceicon" className="w-100" />
        </div>
        <div className="service-content">
          <div className="service-icon">
            <img src={icon} alt="icon" />
          </div>
          <h3 className="service-title h6">{title}</h3>
        </div>
      </div>
      <div className="service-back">
        <div className="service-content">
          <div className="service-icon">
            <img src={icon} alt="icon" />
          </div>
          <h3 className="service-title h6">
            <Link className="text-inherit" to={path}>
              {title}
            </Link>
          </h3>
          <p className="service-text">{text}</p>
          <Link to={path} className="link-btn">
            <h3 >Read Details
            <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
