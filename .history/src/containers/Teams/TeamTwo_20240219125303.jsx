import React from 'react';
import Slider from 'react-slick';
import {TitleWrap, SecSubTitle, SecTitle, TeamBoxTwo} from '../../components';
import teamMembers from "../../data/team.json";


const TeamTwo = ({...restProps})=> {     

  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    arrows: true,
    // dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          <SecTitle>Meet SeasPark</SecTitle>
          <SecSubTitle className="h1 text-capitalize">
            Our Team Of Experts
          </SecSubTitle>

          <Slider {...settings}>
            {teamMembers.teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
                <TeamBoxTwo
                  path={`/team-details/${member.id}`}
                  name={member.name}
                  desgination={member.desgination}
                  image={member.image}
                />
              </div>
            ))}
           
          </Slider>
        </TitleWrap>
      </div>
    </div>
  );
}

export default TeamTwo;