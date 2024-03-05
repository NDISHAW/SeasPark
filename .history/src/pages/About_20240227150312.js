import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn, InfoMedia, ServiceBoxThree, ServiceBoxTwo, SecSubTitle, SecTitle} from '../components';
import {
  HeaderOne,
  ServiceFour, 
  AboutSeven,
  TeamTwo,
  TestimonialThree,
  CtaOne,
  BlogFour,
  FooterOne,
  HeaderTwo,
  // AboutFive,
  // AboutOne,
  // AboutTwo,
  AboutThree,
  // AboutFour
} from '../containers';

const About = () => (
  <Fragment>
    <Seo title="About Us" />
    <HeaderTwo />
    <Breadcrumb pageName="About Us" bgImage="images/breadcumb/about.jpg" />
    {/* <ServiceFour className="space-top space-extra-bottom" /> */}
    <AboutThree />
    <div className="row gx-0 align-items-center flex-row-reverse justify-content-center mt-sm-3 pt-sm-3 mb-30 pb-10">
      <div className="col-md-4 col-lg-3">
        <div className="service-style1">
          <div className="service-content">
            <div
              className="service-shape background-image"
              // style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <SecSubTitle>MISSION</SecSubTitle>
            <p className="service-text">
              To become a tusted business partner for our clients in Business
              consulting and process through technology.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="service-style1">
          <div className="service-content">
            <div
              className="service-shape background-image"
              // style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <SecSubTitle> VISION</SecSubTitle>
            <p className="service-text">
              To build trust in our customers by providing them tailor-made
              solutions to their unique problems.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <AboutSeven /> */}
    {/* <AboutFour /> */}
    {/* <AboutFive /> */}

    {/* <TeamTwo className="space-top space-extra-bottom" /> */}

    {/* <CtaOne className="space" /> */}
    {/* <BlogFour className="space-top space-extra-bottom"/> */}
    <TestimonialThree className="space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default About;