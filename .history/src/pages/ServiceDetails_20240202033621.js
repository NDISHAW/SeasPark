import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ServiceSingle,
  FooterOne
} from '../containers';

const ServiceDetails = () => (
  <Fragment>
    <Seo title="Services Details" />
    <HeaderOne />
    <Breadcrumb
      pageName="Services Details"
      bgImage="images/service/serviced.jpg"
    />
    <ServiceSingle className="space-top space-extra-bottom" />
    {teamMember && (
      <ServiceSingle
        className="space-top space-extra-bottom"
        service={teamMember}
      />
    )}
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default ServiceDetails;