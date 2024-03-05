import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  InfoMedia,
  Button
} from '../../components';

const AboutSeven = () => (
  <div
    className="background-image"
    style={{ backgroundImage: "url(images/bg/about-bg-5-1.jpg)" }}
  >
    <div className="container container-style1">
      <div className="row flex-row-reverse align-items-center gx-70">
        {/* <div className="col-lg-6 col-xl">
          <img src="images/about/tech.jpg" alt="aboutthumb" />
        </div> */}
        <div className="col-lg-6 col-xl-auto">
          <div className="about-box2">
            <SecTitle>
              {/* <i className="fas fa-bring-forward" /> */}
              Get the best solution
            </SecTitle>
            <SecSubTitle className="text-capitalize h1">
              Inspiring Tech Needs for Business
            </SecSubTitle>
            <p>
              The company was incorporated in December 2023 with a focus on
              Business & Technology Consultancy having particular attention to
              Staffing & Recruiting, SAP Services such as SAP implementations,
              Roll-outs, Upgrates & Migrations, Expert Consultancy and SAP
              Licensed Sales, while our SAP Business Solutions portfolio
              includes ERP Solutions (SAP ECC, S4HANA, SAP Business One, SAP
              Business ByDesign, SAP Business Planning & Consolidation, SAP EHS,
              GRC), Human Resource Solutions (Classic HR & SAP SuccessFactors),
              Data & Analytics Solutions (Business Intelligence - SAP BW on HANA
              & BW/4HANA, SAP HANA Data Warehouse Cloud, SAP Analytics Cloud).
            </p>
            <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
              <div className="col-sm-auto">
                <p className="author-degi">Founder & CEO</p>
                <h3 className="h5 author-name">Rowland Simiyu</h3>
              </div>
              <div className="col-sm-auto">
                <InfoMedia
                  className="about-call"
                  icon="fas fa-phone-alt"
                  title="Call To Ask Any Queary"
                  info={<a href="tel:+25821562154">+(254) 780 170 536</a>}
                />
              </div>
            </div>
            <Button path="/service">
              Order Service
              <i className="far fa-long-arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSeven;