import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>SeaSpark C- {title}</title>
    </Helmet>
  );
};

export default SEO;
