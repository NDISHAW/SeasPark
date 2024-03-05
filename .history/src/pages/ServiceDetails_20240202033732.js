import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ServiceSingle,
  FooterOne
} from '../containers';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = service.find(
    (service) => service.id === parseInt(id)
  );
  <Fragment>
    <Seo title="Services Details" />
    <HeaderOne />
    <Breadcrumb
      pageName="Services Details"
      bgImage="images/service/serviced.jpg"
    />
    <ServiceSingle className="space-top space-extra-bottom" />
    {service && (
      <ServiceSingle
        className="space-top space-extra-bottom"
        service={service}
      />
    )}
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default ServiceDetails;