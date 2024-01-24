import React from 'react';
import Slider from 'react-slick';
import {Button} from '../../components';

const HeroOne = ()=> {   

  const HEROCONTENT = [
    {
      image: "images/hero/hero-1-1.jpg",
      title: (
        <>
          Navigating{" "}
          <span className="hero-innertext">Get Best It Recruitment 2024</span>{" "}
          <br /> Talent Tides
        </>
      ),
      text: "SeasPark Consultancy Ltd excels in Staffing & Recruitment, helping businesses find their ideal workforce amidst the ever-changing talent landscape..",
      btn1: { text: "About Us", path: "/about" },
      btn2: { text: "READ MORE", path: "/about" },
    },
    {
      image: "images/hero/hero-1-2.jpg",
      title: (
        <>
          SAP Solutions,
          <span className="hero-innertext">PROVIDE FREE CONSULTATION</span>{" "}
          <br /> SUPPORT &amp; MANAGEMNT
        </>
      ),
      text: "Professionally repurpose intuitive total linkage after timely mindshare. Credibly coordinate reliable collaboration and idea-sharing after turnkey catalysts for change.",
      btn1: { text: "About Us", path: "/about" },
      btn2: { text: "READ MORE", path: "/about" },
    },
    // {
    //   image: "images/hero/hero-1-3.jpg",
    //   title: (
    //     <>
    //       TEAM OF{" "}
    //       <span className="hero-innertext">HIGHLY QUALIFIYED ENGINERS</span>{" "}
    //       <br /> LEGENDS &amp; Professionals
    //     </>
    //   ),
    //   text: "Professionally repurpose intuitive total linkage after timely mindshare. Credibly coordinate reliable collaboration and idea-sharing after turnkey catalysts for change.",
    //   btn1: { text: "About Us", path: "/about" },
    //   btn2: { text: "READ MORE", path: "/about" },
    // },
  ];
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          arrows: false,
        }
      }
    ]
  };
  
  
  return (
    <Slider className="hero-layout1" {...settings}>
      {HEROCONTENT.map((slide, index) => (
        <div key={index}>
          <div className="hero-inner">
            <div className="hero-shape1"></div>
            <div className="hero-shape2"></div>
            <div className="hero-bg background-image" style={{backgroundImage: `url(${slide.image})`}}></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-text">{slide.text}</p>
                <div className="hero-btns">
                  <Button path={slide.btn1.path}>{slide.btn1.text}<i className="far fa-arrow-right"/></Button>
                  <Button path={slide.btn2.path} className="style2">{slide.btn2.text}<i className="far fa-arrow-right"/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}    
    </Slider>
  );
}

export default HeroOne; 