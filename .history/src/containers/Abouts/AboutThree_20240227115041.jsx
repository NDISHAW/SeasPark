import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  Button,
  InfoMedia,
  ImageBoxThree
} from '../../components';

const AboutThree = () => (
  <div
    className="about-wrap1 background-image"
    style={{ backgroundImage: "url(images/bg/ab-bg-2-1.jpg)" }}
  >
    <div className="container">
      <div className="row gx-60">
        <div className="col-xl-6 mb-50 mb-xl-0">
          <ImageBoxThree
            imageOne="images/about/ab-2-1.jpg"
            // imageTwo="images/about/ab-2-2.jpg"
            number="100+"
            title="Awards We won"
            icon="fal fa-award"
          />
        </div>
        <div className=" col-xl-6 align-self-center text-center text-xl-start">
          <SecSubTitle>
            <i className="fas fa-bring-forward" />
            ABOUT OUR COMPANY
          </SecSubTitle>
          <SecTitle>Connecting people & technology</SecTitle>
          <p className="mb-4 pb-2 pe-xl-5">
            The company was incorporated in December 2023 with a focus on
            Business & Technology Consultancy having particular attention to
            Staffing & Recruiting, SAP Services such as SAP implementations,
            Roll-outs, Upgrates & Migrations, Expert Consultancy and SAP
            Licensed Sales, while our SAP Business Solutions portfolio includes
            ERP Solutions (SAP ECC, S4HANA, SAP Business One, SAP Business
            ByDesign, SAP Business Planning & Consolidation, SAP EHS, GRC),
            Human Resource Solutions (Classic HR & SAP SuccessFactors), Data &
            Analytics Solutions (Business Intelligence - SAP BW on HANA &
            BW/4HANA, SAP HANA Data Warehouse Cloud, SAP Analytics Cloud).
          </p>
          <div className="row gx-60 mb-4 pb-1 gy-2 text-start justify-content-center justify-content-xl-start">
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-1.png"
                info="Provide Skills Services"
              />
            </div>
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-2.png"
                info="Urgent Support For Clients"
              />
            </div>
          </div>
          <Button path="/contact">
            Get A Quote
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutThree;