import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { HeaderOne, ProjectSingle, FooterOne } from "../containers";
import { useParams } from "react-router-dom";
import careers from "../data/careers.json";

export default function CareersDetails() {
    const { id } = useParams();
  const careers = careers.careers.find(
    (careers) => careers.id === id.toString());
  return (
    <Fragment>
      <Seo title="Career-details" />
      <HeaderOne />
      <Breadcrumb
        pageName="Career Details"
        bgImage="/images/careers/careerbg.jpg"
      />
      <ProjectSingle className="space-top space-extra-bottom" />
      {service && (
        <ProjectSingle
          className="space-top space-extra-bottom"
          service={service}
        />
      )}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
