import React, { Fragment, useEffect, useState } from "react";
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate fetching data
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is fetched
      }, 2000); // Example delay of 2 seconds
    }, []);
  return (
    <Fragment>
      <Seo title="Careers" />
      <HeaderTwo />
      <Breadcrumb pageName="Careers" bgImage="images/careers/career2.jpg" />
      <div>
        {loading ? (
          <div>Loading...</div> // Display loading indicator while data is being fetched
        ) : (
          <CareerProvider>
            <CareerOne
              className="space-top space-extra-bottom background-image"
              style={{
                backgroundImage: "url(images/bg/process-bg-1-1.jpg)",
              }}
            />
          </CareerProvider>
        )}
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
