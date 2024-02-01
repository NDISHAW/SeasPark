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

const HomeOne = () => {
  const contactArea = useRef(null);

  return (
    <Fragment>
      <Seo title="Home One" />
      <Heade
  {
    "id": "8",
    "path": "/career-details",
    "image": "images/service/sr-d-1-1.jpg",
    "icon": "images/icon/sr-icon-1-6.png",
    "bgShape": "images/bg/sr-box-bg-1.jpg",
    "bgShape2": "images/shape/sr-bg-shape-2-1.png",
    "title": "Data Scientist",
    "text": "Explore our RPO's Three Pillars—People, Process, and Platform—optimized to meet your requirements, ensuring top-tier human resources despite short timelines and complex needs."
  }rTwo />
      <HeroOne />
      <div
        className="background-image"
        style={{ backgroundImage: "url(images/bg/ab-bg-1-1.jpg)" }}
      >
        <FeatureOne className="space-top space-extra-bottom" />
        <AboutOne className="space-bottom" />
      </div>
      <ServiceThree className="space-top space-extra-bottom" />
      {/* <CounterOne/> */}
      <TeamTwo className="space-top space-extra-bottom" />
      <FaqOne />
      <AboutTwo className="space-top space-extra-bottom" />
      <CtaOne className="space" />
      <ProcessOne className="space-top space-extra-bottom" />
      <TestimonialOne className="space-top space-extra-bottom" />
      {/* <BrandOne className="space-bottom" /> */}
      {/* <BlogTwo className="space-top space-extra-bottom"/> */}
      {/* <ContactTwo/> */}

      <div
        className="container background-image"
        ref={contactArea}
        style={{ backgroundImage: "url(images/shape/process-bg-1-1.jpg)" }}
      >
        <TitleWrap className="text-center">
          <SecTitle className="text-capitalize h1">
            Feel Free To Write To Us
          </SecTitle>
          <SecSubTitle>Send Us An Email</SecSubTitle>
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