import React from 'react';
import {Link} from 'react-router-dom';
import {
  InfoMedia, 
  Widget, 
  AboutWidget, 
  CategoryWidget, 
  RecentPostWidget, 
  IconLink
} from '../../components/';

// Widget Datas
import widgetsdata from '../../data/widgets.json';

const {pageList, exploreLinks, recentPosts} = widgetsdata;


const FooterOne = () => (
  <footer
    className="footer-wrapper footer-layout1 background-image"
    style={{ backgroundImage: "url(images/shape/bg-footer-1-1-2.jpg)" }}
  >
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-map-marker-alt"
              title="Office Address"
              info="Sasio Rd, Off Lunga Lunga Rd, Nairobi-Kenya"
            />
          </div>
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-clock"
              title="Working Hours"
              info="Weekdays 8am - 5pm Sartuday 8am - 12pm"
            />
          </div>
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-phone-volume"
              title="Contact Us"
              info={
                <>
                  <a href="mailto:info@seaspark.co.ke">info@seaspark.co.ke</a>
                  <br />
                  <a href="tel:+254780 170 536">(+254) 780 170 536</a>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="copyright-wrap">
      <div className="container">
        <p className="copyright-text">
          Copyright <i className="fal fa-copyright" /> 2024{" "}
          <Link className="text-white" to="/">
            SeasPark
          </Link>
          . All rights reserved by{" "}
          <a className="text-white" href="https://seaspark.co.ke">
            SeasPark Consultancy Ltd
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);

export default FooterOne;