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
import NotFoun
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
            <div className="container">
              {/* <NotFoundOne /> */}
              <p className="h1 justify-items-center">Items Not Available</p>
              <img src={NotFound} alt="img" className="img" />
            </div>
          )}
        </CareerProvider>
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
