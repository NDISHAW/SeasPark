import React, { Fragment } from 'react';
import {Seo, ScrollTopBtn} from '../components';
import {
  HeaderTwo, 
  HeroOne, 
  FeatureOne, 
  AboutOne, 
  ServiceOne,
  CounterOne,
  TeamOne,
  FaqOne,
  AboutTwo,
  CtaOne,
  ProcessOne,
  TestimonialOne,
  BrandOne,
  BlogTwo,
  FooterOne,
  TeamTwo,
  ContactTwo,
} from '../containers';

const HomeOne = () => (
  <Fragment>
    <Seo title="Home One" />
    <HeaderTwo />
    <HeroOne />
    <div
      className="background-image"
      style={{ backgroundImage: "url(images/bg/ab-bg-1-1.jpg)" }}
    >
      <FeatureOne className="space-top space-extra-bottom" />
      <AboutOne className="space-bottom" />
    </div>
    <ServiceOne className="space-top space-extra-bottom" />
    {/* <CounterOne/> */}
    <TeamTwo className="space-top space-extra-bottom" />
    <FaqOne />
    <AboutTwo className="space-top space-extra-bottom" />
    <CtaOne className="space" />
    <ProcessOne className="space-top space-extra-bottom" />
    <TestimonialOne className="space-top space-extra-bottom" />
    <BrandOne className="space-bottom" />
    {/* <BlogTwo className="space-top space-extra-bottom"/> */}
    {/* <ContactTwo/> */}
    <TitleWrap className="text-center">
      <SecSubTitle>Send Us Email</SecSubTitle>
      <SecTitle className="text-capitalize h1">Feel Free To Write</SecTitle>
    </TitleWrap>
    <div className="container" ref={contactArea}>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <FormThree />
        </div>
      </div>
    </div>
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default HomeOne;