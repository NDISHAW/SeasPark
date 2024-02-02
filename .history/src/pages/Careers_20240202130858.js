import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  HeaderOne,
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
      <HeaderOne />
      <Breadcrumb pageName="Careers" bgImage="images/careera/careera.jpg" />
      <CareerOne careeraclassName="space-top space-extra-bottom" />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
