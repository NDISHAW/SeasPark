// import React, { Fragment } from "react";
// import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
// import { HeaderOne, ServiceSingle, FooterOne } from "../containers";
// import { useParams } from "react-router-dom";
// import services from "../data/service.json";

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const service = services.services.find(
//     (service) => service.id === parseInt(id)
//   );
//   return (
//     <Fragment>
//       <Seo title="Services Details" />
//       <HeaderOne />
//       <Breadcrumb
//         pageName="Services Details"
//         bgImage="/images/service/serviced.jpg"
//       />
//       <ServiceSingle className="space-top space-extra-bottom" />
//       {service && (
//         <ServiceSingle
//           className="space-top space-extra-bottom"
//           service={service}
//         />
//       )}
//       <FooterOne />
//       <ScrollTopBtn />
//     </Fragment>
//   );
// };
// export default ServiceDetails;



import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn, HeaderTop, List, IconLink, HeaderSticky } from "../components";
import { HeaderOne, ServiceSingle, FooterOne, HeaderTwo } from "../containers";
import { useParams } from "react-router-dom";
import services from "../data/service.json";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.services.find(
    (service) => service.id === id.toString()
  );

  return (
    <Fragment>
      <Seo title="Services Details" />
      {/* <HeaderTwo /> */}
      <header className="vs-header header-layout1">
        <HeaderTop>
          <HeaderTop.Left>
            <List className="header-links style-white">
              <List.Item>
                <i className="far fa-phone-alt" />
                <a href="tel:+254780170536">(+254) 780 170 536</a>
              </List.Item>
              <List.Item>
                <i className="far fa-envelope" />
                <a href="mailto:info@seaspark.co.ke">info@seaspark.co.ke</a>
              </List.Item>
              <List.Item className="d-none d-xxl-inline-block">
                <i className="far fa-map-marker-alt" />
                Sasio Rd, Off Lunga Lunga Rd, Nairobi-Kenya
              </List.Item>
            </List>
            {/* <p className="note_style1">
          <span className="note_title">Now Hiring:</span>Are you a motivated IT
          Support Engineer?
        </p> */}
          </HeaderTop.Left>
          <HeaderTop.Right>
            {/* <p className="d-none d-xxl-inline-block">
          <i className="fal fa-clock" />
          <span className="header-social style-white">Office Hours:</span>{" "}
          08:00am-5:00pm
        </p> */}
            <List className="header-links style-white">
              <List.Item className="d-none d-xxl-inline-block">
                <span className="header-social style-white">Office Hours:</span>{" "}
                08:00am-5:00pm
              </List.Item>
            </List>
          </HeaderTop.Right>
          <HeaderTop.Right>
            <IconLink
              className="header-social style-white"
              title="Follow Us On:"
            >
              <IconLink.Item icon="fab fa-facebook-f" path="/" />
              <IconLink.Item icon="fab fa-twitter" path="/" />
              <IconLink.Item icon="fab fa-linkedin" path="/" />
            </IconLink>
          </HeaderTop.Right>
        </HeaderTop>

        <HeaderSticky>
          <div className="container">
            <div className="menu-area">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <Logo
                    image="images/logo21.png"
                    className="header-logo "
                    style={{ height: "10px" }}
                  />
                </div>
                <div className="col-auto">
                  <MainMenu className="menu-style3 d-none d-lg-block" />
                  <MobileMenu />
                </div>
                <div className="col-auto d-none d-lg-block">
                  {/* <div className="header-btns">
                <Button path="/contact" className="d-none d-xxl-inline-block">
                  Contact Us
                  <i className="far fa-arrow-right" />
                </Button>
                <IconButton className="style3 sideMenuToggler">
                  <i className="far fa-bars" />
                </IconButton>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </HeaderSticky>
      </header>
      <Breadcrumb
        pageName="Services Details"
        bgImage={"/images/service/serviced.jpg"}
      />
      {service && (
        <ServiceSingle
          className="space-top space-extra-bottom"
          service={service}
        />
      )}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
};
export default ServiceDetails;