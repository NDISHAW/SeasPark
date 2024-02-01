import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  HeaderOne,
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
} from "../containers";

export default function Careers() {
  return (
    <Fragment>
      <Seo title="Careers" />
      <HeaderOne />
      <Breadcrumb pageName="Team" bgImage="images/team/team.jpg" />
      
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
