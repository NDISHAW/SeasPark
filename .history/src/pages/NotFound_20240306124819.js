import React, {Fragment} from 'react';
import {
  Seo,
  Breadcrumb,
  ScrollTopBtn
} from '../components';
import {
  NotFoundOne,
  FooterOne,
  HeaderTwo
} from '../containers';

const NotFound = ()=> (
  <Fragment>
    <Seo title="Error Page" />
    <HeaderTwo />
    <Breadcrumb pageName="Error Page" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <NotFoundOne />
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default NotFound;