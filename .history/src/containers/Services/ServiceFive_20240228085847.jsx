import React from 'react';
import {ServiceBoxOne} from '../../components';


// Service Data
import services from '../../data/service.json';

const truncateText = (text, maxLength, minWordsToShow) => {
  const words = text.trim().split(" ");
  if (words.length <= maxLength) {
    return text;
  }
  const truncated = words.slice(0, maxLength).join(" ") + "...";
  return truncated;
};
const ServiceFive = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row">
        {services.services.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <ServiceBoxOne
              className="layout3"
              path={`/service-details/${item.id}`}
              bgImage={item.bgShape}
              icon={item.icon}
              title={item.title}
              // text={truncateText(item.text, 80)}
              text={truncateText(item.text, 15, 5)}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default ServiceFive;














