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
        <TitleWrap className="text-center">
          <SecTitle>Our Services</SecTitle>
          <SecSubTitle className="h1 text-capitalize">
            What Kind of Services We are Offering
          </SecSubTitle>
        </TitleWrap>
        <Slider className="row" {...settings}>
          {services.services.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <ServiceBoxThree
                path={`/service-details/${item.id}`}
                image={item.image}
                icon={item.icon}
                title={item.title}
                text={item.text.slice(90, 53)}
              />
            </div>
          ))}{`“${item.text.slice(0, 130)}”`}
        </Slider>
        <div className="col-auto d-none d-lg-block text-center">
          <div className="sec-btns2">
            <Button path="/service">
              View All Our Services
              <i className="far fa-arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceThree;