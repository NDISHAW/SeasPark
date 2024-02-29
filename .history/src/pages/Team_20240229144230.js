import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderTwo,
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
  TestimonialTwo,
} from "../containers";

const Team = () => (
  <Fragment>
    <Seo title="Team" />
    <HeaderTwo />
    <Breadcrumb pageName="Team" bgImage="images/team/team.jpg" />
    <TeamFour
      className="space-top space-extra-bottombackground-image"
      style={{ backgroundImage: "url(images/bg/skill-bg-2-1.jpg)" }}
    />
    <TestimonialTwo/>
    
    {/* <CtaOne className="space"/> */}
    {/* <AboutTwo className="space-top space-extra-bottom background-image" style={{backgroundImage: 'url(images/bg/skill-bg-2-1.jpg)'}} /> */}
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Team;


