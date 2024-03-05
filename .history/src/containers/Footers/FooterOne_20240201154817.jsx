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

<div className="widget-area">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-md-6 col-xl-auto">
        <Widget widgetTitle="About Us" className="footer-widget">
          <AboutWidget>
            <AboutWidget.Text>
              Established in December 2023, our company specializes in Business
              & Technology Consultancy, with a core focus on Staffing &
              Recruiting and comprehensive SAP Services. Our SAP Business
              Solutions portfolio includes ERP Solutions, Human Resource
              Solutions, and Data & Analytics Solutions, covering a wide range
              of applications and services.
            </AboutWidget.Text>
          </AboutWidget>
        </Widget>
      </div>
      <div className="col-6 col-xl-auto">
        <Widget widgetTitle="Links" className="widget_nav_menu footer-widget">
          <CategoryWidget>
            {pageList.map((cat) => (
              <CategoryWidget.Item key={cat.name} path={cat.path}>
                {cat.name}
              </CategoryWidget.Item>
            ))}
          </CategoryWidget>
        </Widget>
        <IconLink className="footer-social">
          <IconLink.Item icon="fab fa-facebook-f" path="/" />
          <IconLink.Item icon="fab fa-twitter" path="/" />
          {/* <IconLink.Item icon="fab fa-behance" path="/" /> */}
          <IconLink.Item icon="fab fa-linkedin" path="/" />
          {/* <IconLink.Item icon="fab fa-instagram" path="/" /> */}
        </IconLink>
      </div>
      <div className="col-6 col-xl-auto">
        <Widget widgetTitle="Explore" className="widget_nav_menu footer-widget">
          <CategoryWidget>
            {exploreLinks.map((cat) => (
              <CategoryWidget.Item key={cat.name} path={cat.path}>
                {cat.name}
              </CategoryWidget.Item>
            ))}
          </CategoryWidget>
        </Widget>
      </div>
      {/* <div className="col-md-6 col-xl-auto">
            <Widget widgetTitle="Lastest Post" className="footer-widget">
              {recentPosts.slice(0, 2).map((post) => (
                <RecentPostWidget
                  key={post.id}
                  title={post.title}
                  image={post.image}
                  date={post.date}
                />
              ))}
            </Widget>
          </div> */}
    </div>
  </div>
</div>;