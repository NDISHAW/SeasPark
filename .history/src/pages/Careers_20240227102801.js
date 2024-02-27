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
import { CareerProvider } from "../context/CareerContext";

export default function Careers() {
  return (
    <Fragment>
      <Seo title="Careers" />
      <HeaderTwo />
      <Breadcrumb pageName="Careers" bgImage="images/careers/career2.jpg" />
      <div>
        <CareerProvider>
          
      <CareerOne
        className="space-top space-extra-bottom background-image"
        style={{ backgroundImage: "url(images/bg/process-bg-1-1.jpg)" }}
      /></CareerProvider></div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
