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
      <div>
      <CareerOne
        className="space-top space-extra-bottom background-image"
        style={{ backgroundImage: "url(images/bg/process-bg-1-1.jpg)" }}
      /></div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
