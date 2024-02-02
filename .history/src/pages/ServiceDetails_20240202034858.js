import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { HeaderOne, ServiceSingle, FooterOne } from "../containers";
import { useParams } from "react-router-dom";
import services from "../data/service.json";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = service.service.find(
    (service) => service.id === parseInt(id)
  );
  return (
    <Fragment>
      <Seo title="Services Details" />
      <HeaderOne />
      <Breadcrumb
        pageName="Services Details"
        bgImage="/images/service/serviced.jpg"
      />
      <ServiceSingle className="space-top space-extra-bottom" />
      {services && (
        <ServiceSingle
          className="space-top space-extra-bottom"
          service={service}
        />
      )}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
};
export default ServiceDetails;
