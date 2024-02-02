import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { HeaderOne, ProjectSingle, FooterOne } from "../containers";
export default function CareersDetails() {
  return (
    <Fragment>
      <Seo title="Career-details" />
      <HeaderOne />
      <Breadcrumb
        pageName="Career Details"
        bgImage="images/caree/careerbg.jpg"
      />
      <ProjectSingle className="space-top space-extra-bottom" />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
