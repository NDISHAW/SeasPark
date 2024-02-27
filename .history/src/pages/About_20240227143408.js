import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn, InfoMedia} from '../components';
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
    <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
      <div className="col-sm-auto">
        <InfoMedia
          className="about-call"
          icon="fas fa-phone-alt"
          title="MISSION"
          info="To build trust in our customers by providing them tailor-made solutions to their unique problems"
        />
      </div>
      <div className="col-sm-auto">
        <InfoMedia
          className="about-call"
          icon="fas fa-phone-alt"
          title="VISIO"
          info="To build trust in our customers by providing them tailor-made solutions to their unique problems"
        />
      </div>
    </div>
    <AboutSeven />
    {/* <AboutFour /> */}
    {/* <AboutFive /> */}

    {/* <TeamTwo className="space-top space-extra-bottom" /> */}

    {/* <CtaOne className="space" /> */}
    {/* <BlogFour className="space-top space-extra-bottom"/> */}
    <TestimonialThree className="space-top space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default About;