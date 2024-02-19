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
  TestimonialTwo,
  TestimonialThree,
} from '../containers';
import { Toaster } from "react-hot-toast";

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
        {/* <FeatureOne className="" /> */}
        <AboutOne className="space-top" />
      </div>
      <ServiceThree className="" />
      {/* <CounterOne/> */}
      <TeamTwo className="" />
      <FaqOne />
      <AboutTwo className="" />
      <CtaOne className="space-top" />
      <ProcessOne className="" />
      <TestimonialThree className="" />
      {/* <BrandOne className="space-bottom" /> */}
      {/* <BlogTwo className="space-top space-extra-bottom"/> */}
      {/* <ContactTwo/> */}

      <div className="container background-image" ref={contactArea}>
        <Toaster />
        
        {/* <div
          className="row justify-content-center"
          style={{ backgroundImage: "url(images/shape/process-bg-1-1.jpg)" }}
        >
          <div className="col-lg-10 col-xl-8"> */}
            <FormThree />
          {/* </div>
        </div> */}
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}

export default HomeOne;