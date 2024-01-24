import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>TechBiz - IT Solution &#38; Service React Template - {title}</title>
    </Helmet>
  );
};

export default SEO;
