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
} from "../../components";


const HeaderTwo = () => (
  <header className="vs-header header-layout1">
    <HeaderTop>
      <HeaderTop.Left className="container">
        <p className="note_style1">
          <span className="note_title" href="tel:+254780170536">
         +254 780 170 536
          </span>
          <a href="tel:+254780170536">+254 780 170 536</a>
        </p>
        <p className="note_style1">
          <a href="tel:+254780170536">+254 780 170 536</a>
        </p>
        {/* <p className="note_style1">
          <a href="mailto:info@seaspark.co.ke">info@seaspark.co.ke</a>
        </p> */}
        {/* <p className="note_style1">
          Sasio Rd,
          Off Lunga Lunga Rd, Nairobi-Kenya
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