import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderTwo,
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
} from "../containers";

const Team = ()=> (
  <Fragment>
    <Seo title="Team" />
    <HeaderTwo />
    <Breadcrumb pageName="Team" bgImage="images/team/team.jpg" />
    <TeamFour className="space-top space-extra-bottom"/>
    {/* <CtaOne className="space"/> */}
    {/* <AboutTwo className="space-top space-extra-bottom background-image" style={{backgroundImage: 'url(images/bg/skill-bg-2-1.jpg)'}} /> */}rhr ryr et4yrut fhrh 
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Team;


