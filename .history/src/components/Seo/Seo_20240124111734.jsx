import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>SeaSpark Consultancy Ltd- {title}</title>
    </Helmet>
  );
};

export default SEO;
