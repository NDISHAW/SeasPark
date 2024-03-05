import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import {InfoMedia, FormFive} from '../../components';
import { TitleWrap, SecTitle, SecSubTitle } from "../../components";
import { Toaster } from 'react-hot-toast';
const ContactTwo = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <Tab.Container id="contactTab" defaultActiveKey="tabno1">
        {/* <Nav className="contact-tab-menu justify content-center">
          <Nav.Link eventKey="tabno1">
            <TitleWrap className="text-center">
              <SecTitle className="text-capitalize h1 text-color-white">
                We Would Like To Hear From You
              </SecTitle>
              <SecSubTitle>Send Us An Email</SecSubTitle>
            </TitleWrap>
          </Nav.Link>
        </Nav> */}

        <Tab.Content>
          <Tab.Pane eventKey="tabno1">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <TitleWrap className="">
                    <SecTitle className="text-capitalize h1">
                      Contact Information
                    </SecTitle>
                  </TitleWrap>
                  {/* <p className="contact-box__text">
                    Completely recaptiualize 24/7 communities via standards
                    compliant metrics whereas web-enabled content
                  </p> */}
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Phone Number"
                    info={<a href="tel:+254780170536">+254 780 170 536</a>}
                  />
                  <InfoMedia
                    icon="fas fa-envelope"
                    title="Email Address"
                    info={
                      <a href="mailto:info@seaspark.co.ke">
                        info@seaspark.co.ke
                      </a>
                    }
                  />

                  <InfoMedia
                    icon="far fa-clock"
                    title="Official Work Time"
                    info="8:00am - 5:00pm ( Mon - Fri ) 8:00am - 12:00p   (Saturday),      "
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Our Office Address"
                    info="Sasio Rd, Off Lunga Lunga Rd, Nairobi-Kenya"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <Toaster />
                  <TitleWrap className="">
                    <SecTitle className="text-capitalize h1">
                      GET IN TOUCH
                    </SecTitle>
                    <p>We would like to hear from you. Send us a message</p>
                  </TitleWrap>
                  {/* <h3 className="contact-box__title h4">Leave a Message</h3>
                  <p className="contact-box__text">We’re Ready To Help You</p> */}
                  <FormFive />
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.7754520982653!2d36.860516274965654!3d-1.3100420986775236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTgnMzYuMiJTIDM2wrA1MSc0Ny4xIkU!5e0!3m2!1sen!2ske!4v1708598896155!5m2!1sen!2ske"
                title='SeasPark'
                width="800"
                height="600"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  </div>
);

export default ContactTwo;