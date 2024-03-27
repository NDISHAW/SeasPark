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
          <ImageBoxThree imageOne="images/about/about.jpg" />
          <i className="copyright-text">
            <a href="https://www.freepik.com/free-photo/diverse-business-colleagues-shoo_2861374.htm#query=soft%20skills&position=26&from_view=keyword&track=ais&uuid=5e1e4e53-3e5a-4e18-a285-4cf8b2ee2653">
              Image by rawpixel.com
            </a>{" "}
            on Freepik
          </i>
        </div>
        <div className=" col-xl-6 align-self-center text-inline-block text-xl-start">
          {/* <SecSubTitle>
            <i className="fas fa-bring-forward" />
            ABOUT OUR COMPANY
          </SecSubTitle> */}
          <SecTitle>About Our Company</SecTitle>
          <p className="content mb-6 pb-2 pe-xl-12 text-display-block">
            SeasPark Consultancy Ltd specializes in Business & Technology
            Consultancy having particular attention to Staffing & Recruiting,
            SAP Services such as SAP implementations, Roll-outs, Upgrades &
            Migrations, Expert Consultancy and SAP Licensed Sales, Digital
            Platforms, Training, Data & Analytics Solutions<br></br> <br></br>
            Our commitment is to deliver highly proficient services with
            cost-effectiveness on time. Our aim is to ensure that our services
            meet the highest standards, surpassing client expectations. Our
            dedicated team of professionals strives to deliver innovative and
            tailored solutions to meet the unique requirements of each client.
          </p>
          <div className="row gx-60 mb-4 pb-1 gy-2 text-start justify-content-center justify-content-xl-start">
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-1.png"
                info="Professional Services"
              />
            </div>
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-2.png"
                info="Client Support "
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