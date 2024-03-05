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
        style={{ backgroundImage: "url(images/bg/skill-bg-2-1.jpg)" }}
      />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
