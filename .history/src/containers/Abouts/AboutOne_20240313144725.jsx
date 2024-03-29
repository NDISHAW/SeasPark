import React from 'react';
import {
  Button, 
  ImageBoxOne, 
  SecTitle, 
  SecSubTitle, 
  InfoMedia
} from '../../components';

const AboutOne = ({ className }) => (
  <div className={`position-relative ${className || ""}`}>
    <div className="about-shape1 d-none d-xl-block">SeasPark</div>
    <div className="container z-index-common">
      <div className="row gx-60">
        <div className="col-lg-6 col-xl-5 mb-0   mb-lg-0">
          <ImageBoxOne
            imageOne="images/about/solution.jpg"
            // imageTwo="images/about/trust.jpg"
            // video="https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1"
          />
        </div>
        <div className="col-lg-6 col-xl-7 align-self-center">
          <SecTitle className="">
            {/* <i className="fas fa-bring-forward" /> */}
            Get the best Business solutions
          </SecTitle>
          {/* <SecSubTitle className="h1">
            Elevate Your Vision with Our Trusted Business Solutions & Consulting
            – Where Trust Transforms!
          </SecSubTitle> */}
          <p className="mb-4 mt-1 pb-3">
            SeasPark Consultancy Ltd is a Kenyan based consultancy firm that
            offers Business and Technology Solutions. We provide advanced
            solutions to complex challenges experienced by Businesses. Our Key
            areas of focus include Staffing & Recruitment and Business Solutions
            & Consulting which involves SAP Services and SAP Business Solutions.
          </p>

          <InfoMedia
            image="images/icon/tel-1-1.png"
            // title="24 HOURS SERVICE AVAILABLE"
            info={
              <a href="tel:+254 780 170 536">Call Us: (+254) 780 170 536</a>
            }
            className="call-media"
          />
          <Button path="/about">
            About Us
            <i className="far fa-long-arrow-right" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutOne;