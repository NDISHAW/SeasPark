import React, {useRef}from 'react';
import Slider from "react-slick";
import {
  TitleWrap,
  SecTitle,
  SecSubTitle,
  SlideNavBtn,
  TestimonialBoxOne
} from '../../components';


// Testimonial Data
import testimonialData from '../../data/testimonial.json';


const TestimonialOne = ({...restProps})=> {

  const sliderWrap = useRef();   
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    dots: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };  
  
  return (
    <div {...restProps}>
      <div className="container">
        <TitleWrap className="text-center">
          <SecTitle>
            {/* <i className="fas fa-bring-forward" /> */}
            Our Best Review’s
          </SecTitle>
          <SecSubTitle className="h1 text-capitalize">
            Customer’s Feedback
          </SecSubTitle>
        </TitleWrap>

        {/* <div className="col-auto d-none d-lg-block">
            <SlideNavBtn slideParent={sliderWrap} />
          </div> */}

        <Slider ref={sliderWrap} className="row" {...settings}>
          {testimonialData.map((item, index) => (
            <div key={index}>
              <TestimonialBoxOne
                icon={item.icon}
                title={item.title}
                text={`“${item.text.slice(0, 400)}”`}
                name={item.name}
                designation={item.designation}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialOne;