import React, { Fragment, useState } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  HeaderTwo,
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
  NotFoundOne,
} from "../containers";
import CareerOne from "../containers/Careers/CareerOne";
import { CareerProvider } from "../context/CareerContext";

export default function Careers() {
   const [loading, setLoading] = useState(true);
  return (
    <Fragment>
      <Seo title="Careers" />
      <HeaderTwo />
      <Breadcrumb pageName="Careers" bgImage="images/careers/career2.jpg" />
      <div>
        <CareerProvider>
          {loading ? (
             // Display loader while data is being fetched
             <CareerOne
            className="space-top space-extra-bottom background-image"
            style={{ backgroundImage: "url(images/bg/process-bg-1-1.jpg)" }}
          />
          ) : (
            // Display ProjectSingle component once data is fetched
           <NotFoundOne />
         
        </CareerProvider>
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
