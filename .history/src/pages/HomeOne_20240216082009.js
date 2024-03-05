import React, { Fragment, useRef } from "react";
import {
  Seo,
  ScrollTopBtn,
  SecSubTitle,
  SecTitle,
  TitleWrap,
  FormThree,
} from "../components";
import {
  HeaderTwo, 
  HeroOne, 
  FeatureOne, 
  AboutOne, 
  ServiceThree,
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
import { Toaster } from "react-hot-toast";

const HomeOne = () => {
  const contactArea = useRef(null);

  return (
    <Fragment>
      <Seo title="Home One" />
      {/* <HeaderTwo /> */}'
      
      <HeroOne />
      <div
        className="background-image"
        style={{ backgroundImage: "url(images/bg/ab-bg-1-1.jpg)" }}
      >
        {/* <FeatureOne className="space-top " /> */}
        <AboutOne className="space-top" />
      </div>
      <ServiceThree className="space-top " />
      {/* <CounterOne/> */}
      <TeamTwo className="space-top " />
      <FaqOne />
      <AboutTwo className="space-top " />
      <CtaOne className="space" />
      <ProcessOne className="" />
      <TestimonialOne className="" />
      {/* <BrandOne className="space-bottom" /> */}
      {/* <BlogTwo className="space-top space-extra-bottom"/> */}
      {/* <ContactTwo/> */}

      <div
        className="container background-image"
        ref={contactArea}
        style={{ backgroundImage: "url(images/shape/process-bg-1-1.jpg)" }}
      >
        <Toaster />
        <TitleWrap className="text-center">
          <SecTitle className="text-capitalize h1">GET IN TOUCH</SecTitle>
          <p>We would like to hear from you. Send us a message</p>
        </TitleWrap>
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
}

export default HomeOne;