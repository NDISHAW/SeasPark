// import React, { Fragment } from "react";
// import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
// import { HeaderOne, ServiceSingle, FooterOne } from "../containers";
// import { useParams } from "react-router-dom";
// import services from "../data/service.json";

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const service = services.services.find(
//     (service) => service.id === parseInt(id)
//   );
//   return (
//     <Fragment>
//       <Seo title="Services Details" />
//       <HeaderOne />
//       <Breadcrumb
//         pageName="Services Details"
//         bgImage="/images/service/serviced.jpg"
//       />
//       <ServiceSingle className="space-top space-extra-bottom" />
//       {service && (
//         <ServiceSingle
//           className="space-top space-extra-bottom"
//           service={service}
//         />
//       )}
//       <FooterOne />
//       <ScrollTopBtn />
//     </Fragment>
//   );
// };
// export default ServiceDetails;



// ServiceDetails.jsx
import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { HeaderOne, ServiceSingle, FooterOne } from "../containers";
import { useParams } from "react-router-dom";
import services from "../data/service.json";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.services.find(
    (service) => service.id === id.toString()
  );

  return (
    <Fragment>
      <Seo title="Services Details" />
      <HeaderOne />
      <Breadcrumb
        pageName="Services Details"
        bgImage={service ? service.image : "/images/service/serviced.jpg"}
      />
      {service && <ServiceSingle className="space-top space-extra-bottom" service={service} />}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
};
export default ServiceDetails;

// ServiceSingle.jsx
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {List} from '../../components';
import {SidebarTwo} from '../';

const ServiceSingle = ({ service, className, ...restProps }) => (
  <div {...restProps} className={className || ''}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-8">
          <div className="mb-3 pb-3">
            <img
              src={service ? service.image : "/images/team/default-image.jpg"}
              alt="Project"
              className="w-100"
            />
          </div>
          <h2 className="h4">{service && service.title}</h2>
          <p>{service && service.text}</p>
          {/* ... (rest of the content) */}
        </div>
        <div className="col-lg-4">
          <SidebarTwo />
        </div>
      </div>
    </div>
  </div>
);

export default ServiceSingle;
