import React from 'react';
import {FeatureBoxOne} from '../../components/';
import Slider from 'react-slick';

const FeatureOne = ({className})=> {

  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {          
          slidesToShow: 2,
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
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div className={`feature-wrap1 ${className || ""}`}>
      <div className="container">
        <Slider className="row" {...settings}>
          <FeatureBoxOne
            title="STAFFING & RECRUIT"
            text="We harness a diverse talent pool for impactful staffing solutions, expertly pairing exemplary skills and cultural fit to propel individuals and businesses toward growth and success."
            image="images/icon/fe-1-2.png"
            path="/service-details"
          />
          <FeatureBoxOne
            title="SAP Services"
            text="Our Digital Business Services is ready to help you build, succeed as an Intelligent Enterprise and accelerate faster value creation with greater visibility, focus and agility."
            image="images/icon/fe-1-1.png"
            path="/service-details"
          />
          <FeatureBoxOne
            title="Consulting Services"
            text="We believe that technology can greatly enhance customer service, boost sales and streamline all business practices.We offer a full range of services to guide your business in the right direction."
            image="images/icon/fe-1-3.png"
            path="/service-details"
          />
        </Slider>
      </div>
    </div>
  );
}

export default FeatureOne;