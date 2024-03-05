import React from 'react';
import Slider from 'react-slick';
import {
  TitleWrap,
  SecSubTitle,
  SecTitle,
  Button,
  ServiceBoxThree
} from '../../components';

// Service Data
import services from '../../data/service.json';


const ServiceThree = ({className})=> {

  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
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
    <div
      className={`background-image ${className || ""}`}
      style={{ backgroundImage: "url(images/bg/sr-bg-3-1.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center">
          <div className="col-md-8 col-lg-6 text-center text-lg-start">
            <TitleWrap>
              <SecTitle>Our Services</SecTitle>
              <SecSubTitle className="h1 text-capitalize">
                What Kind of Services We are Offering
              </SecSubTitle>
            </TitleWrap>
          </div>
          
        </div>
        <Slider className="row" {...settings}>
          {services.services.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <ServiceBoxThree
                path={`/service-details/${item.id}`}
                image={item.image}
                icon={item.icon}
                title={item.title}
                text={item.text.slice(0, 53)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ServiceThree;