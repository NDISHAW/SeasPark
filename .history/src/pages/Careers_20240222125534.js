import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  HeaderTwo,
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
} from "../containers";
import CareerOne from "../containers/Careers/CareerOne";

export default function Careers() {
  return (
    <Fragment>
      <Seo title="Careers" />
      <HeaderTwo />
      <Breadcrumb pageName="Careers" bgImage="images/careers/career2.jpg" />
      <CareerOne
        careersclassName="space-top space-extra-bottombackground-image"
        style={{ backgroundImage: "url(images/bg/process-bg-1-1.jpg)" }}
      /><div className="about-shape1 d-none d-xl-block">SeasPark</div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
