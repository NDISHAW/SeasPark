import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderTwo, 
  ContactTwo, 
  FooterOne,
  FaqOne
} from '../containers';

const Contact = () => (
  <Fragment>
    <Seo title="Contact Us" />
    <HeaderTwo />
    <Breadcrumb pageName="Contact Us" bgImage="/images/contact/contact11.jpg" />
    <ContactTwo className="space-top space-extra-bottom" />
    <FaqOne
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Contact;