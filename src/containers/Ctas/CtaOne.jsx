import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  Button
} from '../../components';

const CtaOne = ({ className }) => (
  <div
    className={`z-index-common background-image ${className || ""}`}
    style={{ backgroundImage: "url(images/bg/consulting.jpg" }}
  >
    <div className="container">
      <div className="row text-center text-lg-start align-items-center justify-content-between">
        <div className="col-lg-auto">
          <SecTitle className="cta-title1 h1 ">Request For A Demo</SecTitle>
          <br />
          <SecSubTitle className="text-white">
            We are here to answer your questions 24/7
          </SecSubTitle>
        </div>
        <div className="col-lg-auto">
          <div className="sec-btns2">
            <Button path="/contact">
              BOOK A DEMO
              <i className="far fa-arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CtaOne;