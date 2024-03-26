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
import { Seo, Breadcrumb, ScrollTopBtn, HeaderTop, List, IconLink, HeaderSticky, Logo, MainMenu, MobileMenu } from "../components";
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
      <HeaderTwo />
      
      <Breadcrumb
        pageName="Services Details"
        bgImage={"/images/service/service.jpg"}
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






{/*  {/* Iterate through sub-services */}
                <List className="list-style3">
                  {/* <p>{subService.text}</p> */}
                  {subService.subServices &&
                    subService.subServices.map((subSubService, subIndex) => (
                      <>
                        <div className="row gx-60 space-top">
                          {subService && subService.img ? (
                            <>
                              <div className="col-xl-6 align-self-center text-center text-xl-start">
                                <SecTitle className="text-capitalize">
                                  {subService.title}
                                </SecTitle>
                                <p className="mb-6 pb-2 pe-xl-12">
                                  {subService.text}
                                </p>
                              </div>
                              <div className="col-xl-6 mb-50 mb-xl-0">
                                <ImageBoxThree
                                  imageOne={subService.img}
                                  alt="Project"
                                  className="w-100"
                                />
                              </div>
                            </>
                          ) : (
                            <div className="col-xl-12 align-self-center text-center text-xl-start">
                              <SecTitle className="text-capitalize">
                                {subService.title}
                              </SecTitle>
                              <p className="mb-6 pb-2 pe-xl-12">
                                {subService.text}
                              </p>
                            </div>
                          )}
                        </div>

                        
                      </>
                    ))}
                </List>*/}