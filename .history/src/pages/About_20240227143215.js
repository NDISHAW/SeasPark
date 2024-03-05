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
    <div className="col-sm-auto">
      <InfoMedia
        className="about-call"
        icon="fas fa-phone-alt"
        title="MISSION"
        info={<a href="tel:+25821562154">+(254) 780 170 536</a>}
      />
    </div>
    <div className="col-sm-auto">
      <InfoMedia
        className="about-call"
        icon="fas fa-phone-alt"
        title="MISSION"
        info={<a href="tel:+25821562154">+(254) 780 170 536</a>}
      />
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