import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderTwo,
  ServiceFive,
  CtaOne,
  ProcessThree,
  TestimonialOne,
  FooterOne,
} from "../containers";

const Service = () => (
  <Fragment>
    <Seo title="Services" />
    <HeaderTwo />
    <Breadcrumb pageName="Services" bgImage="images/service/service.jpg" />
    <div
      className="background-image"
      style={{ backgroundImage: "url(images/bg/ab-bg-1-1.jpg)" }}
    >
      <div className="about-shape1 d-none d-xl-block mt">SeasPark</div>
      <ServiceFive className="space-top space-extra-bottom" />
      <CtaOne className="space" />{" "}
    </div>
    {/* <ProcessThree className="space-top space-extra-bottom" /> */}
    <TestimonialOne className="space-top space-extra-bottom" />

    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Service;





