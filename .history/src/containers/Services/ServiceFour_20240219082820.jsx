import React from 'react';
import Slider from 'react-slick';
import {ServiceBoxOne} from '../../components';


// Service Data
import services from "../../data/service.json";

const ServiceFour = ({...restProps})=> {

  
  const settings = {
    autoplay: false,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div {...restProps}>
      <div className="container">
        <Slider className="row" {...settings}>
          {services.services.map((item) => (
            <ServiceBoxOne
              key={item.id}
              className="layout3"
              path={`/service-details/${item.id}`}
              bgImage={item.bgShape}
              icon={item.icon}
              title={item.title}
              text={item.text.slice(0, 250)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ServiceFour;