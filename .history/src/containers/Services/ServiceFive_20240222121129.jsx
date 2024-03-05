import React from 'react';
import {ServiceBoxOne} from '../../components';


// Service Data
import services from '../../data/service.json';

const ServiceFive = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row">
        .about-shape1 {
  height: 90vh;
  font-size: 150px;
  font-weight: 400;
  font-family: $title-font;
  line-height: 1;
  display: inline-block;
  writing-mode: tb-rl;
  text-transform: uppercase;
  transform: rotate(180deg);
  position: absolute;
  right: 95px;
  bottom: 100px;
  top: 0;
  color: rgba(14, 89, 242, 0.07);
}
        {services.services.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <ServiceBoxOne
              className="layout3"
              path={`/service-details/${item.id}`}
              bgImage={item.bgShape}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default ServiceFive;














