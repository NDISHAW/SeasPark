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
          <SecSubTitle className="h1">
            Elevate Your Vision with Our Trusted Business Solutions & Consulting
            – Where Trust Transforms!
          </SecSubTitle>
          <p className="mb-4 mt-1 pb-3">
            SeasPark Consultancy Ltd specializes in Business & Technology
            Consultancy having particular attention to Staffing & Recruiting,
            SAP Services such as SAP implementations, Roll-outs, Upgrates &
            Migrations, Expert Consultancy and SAP Licensed Sales, while our SAP
            Business Solutions portfolio includes ERP Solutions (S4HANA, SAP
            Business One, SAP Business ByDesign, SAP Business Planning &
            Consolidation, SAP EHS), Human Resource Solutions (Classic HR & SAP
            SuccessFactors), Data & Analytics Solutions (Business Intelligence -
            SAP BW on HANA & BW/4HANA, SAP HANA Data Warehouse Cloud, SAP
            Analytics Cloud) Our commitment is to deliver highly proficient
            services with cost-effectiveness on time. Our aim is to ensure that
            our services meet the highest standards, surpassing client
            expectations. Our dedicated team of professionals strives to deliver
            innovative and tailored solutions to meet the unique requirements of
            each project.
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