import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderTwo,
  ServiceFive,
  CtaOne,
  ProcessThree,
  TestimonialOne,
  FooterOne,
  TestimonialTwo,
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
    <ServiceFive className="space-top space-extra-bottom" /></div>
    <CtaOne className="space" />
    {/* <ProcessThree className="space-top space-extra-bottom" /> */}
    <TestimonialTwo className="space-top space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Service;





