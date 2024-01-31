import React, { Fragment, useRef } from "react";
import {
  Seo,
  ScrollTopBtn,
  SecSubTitle,
  SecTitle,
  TitleWrap,
  FormT,
} from "../components";
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

const HomeOne = () => {
  const contactArea = useRef(null);

  return (
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

      <div
        className="container background-image"
        ref={contactArea}
        bgImage="/images/shape/bg-footer-1-1.jpg"
      >
        <TitleWrap className="text-center">
          <SecTitle className="text-capitalize h1">
            Feel Free To Write To Us
          </SecTitle>
          <SecSubTitle>Send Us An Email</SecSubTitle>
        </TitleWrap>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <FormT />
          </div>
        </div>
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}

export default HomeOne;