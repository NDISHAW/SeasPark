import React from 'react';
import Slider from 'react-slick';
import {TitleWrap, SecSubTitle, SecTitle, TeamBoxTwo} from '../../components';


const TeamTwo = ({...restProps})=> {     

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
          slidesToShow: 1,
        }
      }
    ]
  };  
  
  return (
    <div {...restProps}>
      <div className="container">
        <TitleWrap className="text-center">
          <SecTitle>Meet SeasPark</SecTitle>
          <SecSubTitle className="h1 text-capitalize">
            Our Team Of Experts
          </SecSubTitle>
        </TitleWrap>
        <Slider {...settings}>
          <TeamBoxTwo
            image="images/team/Dennis.jpg"
            name="Dennis Kibunja"
            desgination="Lead SAP Consultant"
            path="/team-details"
          />
          <TeamBoxTwo
            image="images/team/Timothy.jpg"
            name="Timothy Mbogo"
            desgination="Lead SAP Developer"
            path="/team-details"
          />
          <TeamBoxTwo
            image="images/team/Anne.jpg"
            name="Anne Nderi"
            desgination="ERP Consultant"
            path="/team-details"
          />
          <TeamBoxTwo
            image="images/team/t-2-4.jpg"
            name="Richard O. Ombogo"
            desgination="Software Engineer"
            path="/team-details"
          />
          <TeamBoxTwo
            image="images/team/t-2-4.jpg"
            name="Angela K. Thomas"
            desgination="Human Resource Officer"
            path="/team-details"
          />
          
        </Slider>
      </div>
    </div>
  );
}

export default TeamTwo;