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
          <SecSubTitle className="text-white">
            Need A Consultation? We are here to answer your questions 24/7
          </SecSubTitle>
          <SecTitle className="cta-title1 h1 text-capitalize">
            We are here to answer your questions 24/7
          </SecTitle>
        </div>
        <div className="col-lg-auto">
          <Button>
            Get A Quote
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CtaOne;