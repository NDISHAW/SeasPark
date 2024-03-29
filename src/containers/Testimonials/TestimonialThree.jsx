import React from 'react';
import Slider from "react-slick";
import {
  TitleWrap,
  SecTitle,
  SecSubTitle,
  Button,
  TestimonialBoxTwo
} from '../../components';


// Testimonial Data
import testimonialData from '../../data/testimonial.json';


const TestimonialThree = ({className})=> {

  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: true,
    // dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };   
  
  return (
    // <div
    //   className={`background-image ${className || ""}`}
    //   style={{ backgroundImage: "url(images/bg/testi-bg-4-1.jpg)" }}
    // >
    <div
      className={`background-image ${className || ""}`}
      
    >
      <div className="container">
        {/* <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 text-center text-lg-start">
            
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="sec-btns2">
              <Button path="/project">Latest Projects<i className="far fa-long-arrow-right"/></Button>
            </div>
          </div>
        </div> */}

        <TitleWrap className="text-center">
          <SecTitle>
            {/* <i className="fas fa-bring-forward"/> */}
            Our Best Review’s
          </SecTitle>
          <SecSubTitle className="text-capitalize h1">
            Customer’s Feedback
          </SecSubTitle>
        </TitleWrap>
        <Slider className="row testi-style2-slide" {...settings}>
          {testimonialData.map((item, index) => (
            <div key={index}>
              <TestimonialBoxTwo
                avater={item.avater}
                title={item.title}
                text={`“${item.text.slice(0, 130)}”`}
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

export default TestimonialThree;