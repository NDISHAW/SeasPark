import React from 'react';
import {
  HeaderTop,
  HeaderSticky,
  InfoMedia,
  Logo,
  MainMenu,
  FormFour,
  MobileMenu,
  IconLink,
  Logomedia,
  List,
} from "../../components";


const HeaderTwo = () => (
  <header className="vs-header header-layout3">
    <HeaderTop>
      <HeaderTop.Left>
        <List className="header-links style-white">
          <List.Item>
            <i className="far fa-phone-alt" />
            <a href="tel:+254780170536">(+254) 780 170 536</a>
          </List.Item>
          <List.Item className="d-none d-xxl-inline-block">
            <i className="far fa-map-marker-alt" />
            121 King St. Melbourne VIC 3000, Australia
          </List.Item>
          <List.Item>
            <i className="far fa-envelope" />
            <a href="mailto:info@example.com">info@example.com</a>
          </List.Item>
        </List>
        {/* <p className="note_style1">
          <span className="note_title">Now Hiring:</span>Are you a motivated IT
          Support Engineer?
        </p> */}
      </HeaderTop.Left>
      <HeaderTop.Right>
        <p className="note_style1">
          <i className="fal fa-clock" />
          <span className="note_title">Office Hours:</span> 08:00am-5:00pm
        </p>
      </HeaderTop.Right>
      <HeaderTop.Right>
        <IconLink className="header-social style-white" title="Follow Us On:">
          <IconLink.Item icon="fab fa-facebook-f" path="/" />
          <IconLink.Item icon="fab fa-twitter" path="/" />
          {/* <IconLink.Item icon="fab fa-instagram" path="/" /> */}
          <IconLink.Item icon="fab fa-linkedin" path="/" />
          {/* <IconLink.Item icon="fab fa-youtube" path="/" /> */}
        </IconLink>
      </HeaderTop.Right>
    </HeaderTop>
    {/* <div className="container">
      <div className="menu-top">
        <div className="row justify-content-between align-items-center gx-sm-0">
          

          <InfoMedia
            className="header-media col-auto d-none d-lg-flex "
            icon="fas fa-phone-alt"
            // title="Call Anytime 24/7"
            info={<a href="tel:+254780170536">+254 780 170 536</a>}
          />
          <InfoMedia
            className="header-media col-auto d-none d-lg-flex"
            icon="fas fa-envelope"
            // title="Mail Us For Support"
            info={<a href="mailto:info@seaspark.co.ke">info@seaspark.co.ke</a>}
          />
          <InfoMedia
            className="header-media col-auto d-none d-xl-flex "
            icon="fas fa-map-marker-alt"
            // title="Office Address"
            info="Sasio Rd, Off Lunga Lunga Rd, Nairobi-Kenya"
          />
        </div>
      </div>
    </div> */}
    <HeaderSticky>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            {/* <div className="col gx-sm-26 max-w-20vw">  */}
            {/* <Logo className="col gx-sm-" image="images/logo21.png" /> */}

            {/* </div>{" "}  */}
            <div className="col-auto">
              <Logo image="images/logo.png" className="header-logo" />
            </div>
            <div className="col-auto"> 
            <MainMenu className="menu-style1 d-none d-lg-block" />
            <MobileMenu />
          </div>
          {/* <div className="col-auto">
            <FormFour />
          </div> */}
        </div>
      </div>
    </HeaderSticky>
  </header>
);


export default HeaderTwo;