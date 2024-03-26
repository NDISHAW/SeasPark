// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import {List} from '../../components';
// import {SidebarTwo} from '../';

// // FAQ Data
// import faqData from '../../data/faq.json';

// const ServiceSingle = ({ service, ...restProps }) => (
//   <div {...restProps}>
//     <div className="container">
//       <div className="row flex-row-reverse">
//         <div className="col-lg-8">
//           <div className="mb-3 pb-3">
//             <img
//               src={
//                 service ? "/" + service.image : "/images/team/default-image.jpg"
//               }
//               alt="Project"
//             />
//           </div>
//           <h2 className="h4">{service.title}</h2>
//           <p>{service.text}</p>
//           <div className="row gx-0 mb-4 pb-2 pt-3">
//             <div className="col-xl-6">
//               <img
//                 src="images/service/sap.jpg"
//                 alt="project"
//                 className="w-100"
//               />
//             </div>
//             <div className="col-xl-6">
//               <div className="service-list-box">
//                 <h3 className="h5 title">{service.feature}</h3>
//                 <List className="list-style3">
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Implementation
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> SAP Upgrade &
//                     Migration
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Roll Out
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Expert Consultancy
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> focus and agility.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> License sale
//                   </List.Item>
//                 </List>
//               </div>
//             </div>
//           </div>
//           <h3 className="h5">
//             <i className="fal fa-check-circle" /> SAP Implementation - End to
//             End SAP Implementation Projects
//           </h3>
//           <p>
//             Our Implementation Services portfolio assists organizations in
//             business transformation initiatives. Services that will help you
//             align with your strategic business objectives, enhance productivity,
//             reduce Total Cost of Ownership (TCO) and increase ROI. The focus is
//             on leveraging our set of services using SAP technology to maximize
//             the benefits our services extend to the organization: from
//             intellectual capital, to meeting regulatory requirements and to
//             improving business relationships with clients. Our blend of industry
//             best practices, proven implementation methodologies, and modern
//             configuration tools can enable you to fast-track the deployment of
//             your SAP ERP solution.
//           </p>
//           <p>
//             Completely unleash frictionless data via end-to-end services.
//             Continually unleash virtual e-tailers through magnetic core
//             competencies. Interactively engage distributed alignments via
//             focused alignments.
//           </p>
//           <div className="row gx-0 mb-4 pb-2 pt-3">
//             <div className="col-xl-6">
//               <img
//                 src="images/service/sap.jpg"
//                 alt="project"
//                 className="w-100"
//               />
//             </div>
//             {/* Services Features */}
//             <div className="col-xl-6">
//               <div className="service-list-box">
//                 <h3 className="h5 title"> Features</h3>
//                 <List className="list-style3">
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Implementation Project
//                     Plan and monitor the execution.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Configure, set up and
//                     test the underlying technical infrastructure.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Define, design, map
//                     and configure business processes.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Customize business
//                     processes if needed.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Perform Change
//                     Management through effective Knowledge Transfer and end user
//                     education programs.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Successful 'Go Live'
//                     and support
//                   </List.Item>
//                 </List>
//               </div>
//             </div>
//           </div>
//           <div className="row pt-3 mb-30 pb-10 gy-30">
//             <div className="col-md-6">
//               <img src="images/service/sr-d-1-3.jpg" alt="project" />
//             </div>
//             <div className="col-md-6">
//               <img src="images/service/sr-d-1-4.jpg" alt="project" />
//             </div>
//           </div>
//           <Accordion
//             defaultActiveKey={faqData[0].questionId}
//             className="accordion-style1 layout2"
//           >
//             {faqData.map((item) => (
//               <Accordion.Item key={item.questionId} eventKey={item.questionId}>
//                 <Accordion.Header>{item.question}</Accordion.Header>
//                 <Accordion.Body>
//                   <p>{item.answer}</p>
//                 </Accordion.Body>
//               </Accordion.Item>
//             ))}
//           </Accordion>
//         </div>
//         <div className="col-lg-4">
//           <SidebarTwo />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default ServiceSingle;




// import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import { List } from "../../components";
// import { SidebarTwo } from "../";
//  import faqData from "../../data/faq.json";

// const ServiceSingle = ({ service, className, ...restProps }) => (
//   <div {...restProps}>
//     <div className="container">
//       <div className="row flex-row-reverse">
//         <div className="col-lg-12">
//           <div className="mb-3 pb-3">
//             {/* <img
//               src={service ? service.image : "/images/team/default-image.jpg"}
//               alt="Project"
//               className="w-100"
//             /> */}
//           </div>
//           <h2 className="h4">{service.title}</h2>
//           <p>{service.text}</p>
//           <div className="row gx-0 mb-4 pb-2 pt-3">
//             <div className="col-xl-6">
//               <img
//                 src="/images/service/sap.jpg"
//                 alt="project"
//                 className="w-100"
//               />
//             </div>
//             <div className="col-xl-6">
//               <div className="service-list-box">
//                 <h3 className="h5 title">{service.feature}</h3>
//                 <List className="list-style3">
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Implementation
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> SAP Upgrade &
//                     Migration
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Roll Out
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Expert Consultancy
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> focus and agility.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> License sale
//                   </List.Item>
//                 </List>
//               </div>
//             </div>
//           </div>
//           <h3 className="h5">
//             <i className="fal fa-check-circle" /> {service.title2}
//           </h3>
//           <p>
//             {service.text2}
//           </p>
//           <p>
//             Completely unleash frictionless data via end-to-end services.
//             Continually unleash virtual e-tailers through magnetic core
//             competencies. Interactively engage distributed alignments via
//             focused alignments.
//           </p>
//           <div className="row gx-0 mb-4 pb-2 pt-3">
//             <div className="col-xl-6">
//               <img
//                 src="/images/service/sap.jpg"
//                 alt="project"
//                 className="w-100"
//               />
//             </div>
//             {/* Services Features */}
//             <div className="col-xl-6">
//               <div className="service-list-box">
//                 <h3 className="h5 title"> Features</h3>
//                 <List className="list-style3">
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Implementation Project
//                     Plan and monitor the execution.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Configure, set up and
//                     test the underlying technical infrastructure.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Define, design, map
//                     and configure business processes.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Customize business
//                     processes if needed.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Perform Change
//                     Management through effective Knowledge Transfer and end user
//                     education programs.
//                   </List.Item>
//                   <List.Item>
//                     <i className="fal fa-check-circle" /> Successful 'Go Live'
//                     and support
//                   </List.Item>
//                 </List>
//               </div>
//             </div>
//           </div>
//           {/* <div className="row pt-3 mb-30 pb-10 gy-30">
//             <div className="col-md-6">
//               <img src="/images/service/sr-d-1-3.jpg" alt="project" />
//             </div>
//             <div className="col-md-6">
//               <img src="/images/service/sr-d-1-4.jpg" alt="project" />
//             </div>
//           </div> */}
//           <Accordion
//             defaultActiveKey={faqData[0].questionId}
//             className="accordion-style1 layout2"
//           >
//             {faqData.map((item) => (
//               <Accordion.Item key={item.questionId} eventKey={item.questionId}>
//                 <Accordion.Header>{item.question}</Accordion.Header>
//                 <Accordion.Body>
//                   <p>{item.answer}</p>
//                 </Accordion.Body>
//               </Accordion.Item>
//             ))}
//           </Accordion>
//         </div>
//         {/* <div className="col-lg-4">
//           <SidebarTwo />
//         </div> */}
//       </div>
//     </div>
//   </div>
// );

// export default ServiceSingle;


// import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import { List, SecSubTitle, SecTitle } from "../../components";
// import SidebarTwo from "../Sidebars/SidebarTwo";

// const ServiceSingle = ({ service, className, ...restProps }) => (
//   <div {...restProps}>
//     <div className="container">
//       <div className="row flex-row-reverse">
//         <div className="col-lg-9">
//           <div className="mb-3 pb-3">
//             {/* Image */}
//             {/* {service && service.image && (
//               <img src={service.image} alt="Project" className="w-100" />
//             )} */}
//           </div>
//           <SecTitle>{service && service.title}</SecTitle>

//           <p>{service && service.text}</p>
//           <div className="row gx-0 mb-4 pb-2 pt-3">
//             <div className="col-xl-6">
//               <img
//                 src="/images/service/sap.jpg"
//                 alt="project"
//                 className="w-100"
//               />
//             </div>
//             {/* Services Features */}
//             <div className="col-xl-6">
//               <div className="service-list-box">
//                 <SecTitle>Features</SecTitle>
//                 <List className="list-style3">
//                   {service &&
//                     service.services &&
//                     service.services.map((subService, index) => (
//                       <div key={index}>
//                         {/* Alphabetical Heading */}
//                         {String.fromCharCode(65 + index)}. {subService.title}
//                         {/* Iterate through sub-services */}
//                         <List className="list-style3">
//                           {subService.subServices &&
//                             subService.subServices.map(
//                               (subSubService, subIndex) => (
//                                 <List className="list-style3" key={subIndex}>
//                                   {/* Roman Numeral Heading */}
//                                   {toRoman(subIndex + 1)}. {subSubService.title}
//                                   {/* Iterate through sub-sub-services */}
//                                   {subSubService.subSubServices &&
//                                     subSubService.subSubServices.length > 0 && (
//                                       <List className="list-style3">
//                                         {subSubService.subSubServices.map(
//                                           (item, itemIndex) => (
//                                             <List.Item key={itemIndex}>
//                                               {toAlphabetic(itemIndex + 1)}.{" "}
//                                               {item}
//                                             </List.Item>
//                                           )
//                                         )}
//                                       </List>
//                                     )}
//                                 </List>
//                               )
//                             )}
//                         </List>
//                       </div>
//                     ))}
//                 </List>
//               </div>
//             </div>
//           </div>
//           {/* Iterate through services */}
//           {service &&
//             service.services &&
//             service.services.map((subService, index) => (
//               <div key={index}>
//                 {/* Alphabetical Heading */}
//                 <SecSubTitle className="h">
//                   <h3 className="h4">
//                     {String.fromCharCode(65 + index)}. {subService.title}
//                   </h3>
//                 </SecSubTitle>
//                 <p>{subService.text}</p>
//                 {/* Iterate through sub-services */}
//                 <List className="list-style3">
//                   {subService.subServices &&
//                     subService.subServices.map((subSubService, subIndex) => (
//                       <List className="list-style3" key={subIndex}>
//                         {/* Roman Numeral Heading */}
//                         <h6>
//                           {toRoman(subIndex + 1)}. {subSubService.title}
//                         </h6>
//                         <p>{subSubService.text}</p>
//                         {/* Iterate through sub-sub-services */}
//                         {subSubService.subSubServices &&
//                           subSubService.subSubServices.length > 0 && (
//                             <List className="list-style3">
//                               {subSubService.subSubServices.map(
//                                 (item, itemIndex) => (
//                                   <List.Item key={itemIndex}>
//                                     {toAlphabetic(itemIndex + 1)}. {item}
//                                   </List.Item>
//                                 )
//                               )}
//                             </List>
//                           )}
//                       </List>
//                     ))}
//                 </List>
//               </div>
//             ))}

//           {/* <Accordion
//             defaultActiveKey={faqData[0].questionId}
//             className="accordion-style1 layout2"
//           >
//             {faqData.map((item) => (
//               <Accordion.Item key={item.questionId} eventKey={item.questionId}>
//                 <Accordion.Header>{item.question}</Accordion.Header>
//                 <Accordion.Body>
//                   <p>{item.answer}</p>
//                 </Accordion.Body>
//               </Accordion.Item>
//             ))}
//           </Accordion> */}
//         </div>
//         <div className="col-lg-3">
//           <SidebarTwo />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Function to convert number to Roman numeral
// function toRoman(num) {
//   const romanNumerals = [
//     "I",
//     "II",
//     "III",
//     "IV",
//     "V",
//     "VI",
//     "VII",
//     "VIII",
//     "IX",
//     "X",
//   ];
//   return romanNumerals[num - 1] || num;
// }

// // Function to convert number to Alphabetic characters
// function toAlphabetic(num) {
//   return String.fromCharCode(65 + num - 1);
// }

// export default ServiceSingle;



import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, ImageBoxThree, InfoMedia, List, SecSubTitle, SecTitle } from "../../components";
import SidebarTwo from "../Sidebars/SidebarTwo";

const ServiceSingle = ({ service, className, ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row gx-60 space-top">
        <div className="col-xl-6 mb-50 mb-xl-0 ">
          {service && service.image && (
            <ImageBoxThree
              imageOne={service.imagg}
              alt="Project"
              className="w-100"
            />
          )}
        </div>
        <div className=" col-xl-6 align-self-center text-center text-xl-start ">
          <SecTitle>{service && service.title}</SecTitle>
          <p className="mb-6 pb-2 pe-xl-12">{service && service.text}</p>
          {/* <div className="row gx-60 mb-4 pb-1 gy-2 text-start justify-content-center justify-content-xl-start">
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-1.png"
                info="Provide Skills Services"
              />
            </div>
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-2.png"
                info="Urgent Support For Clients"
              />
            </div>
          </div> */}
          <Button className="justify-content-center" path="/contact">
            Get A Quote
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </div>
      <div className="row flex-row-reverse">
        <div className="col-lg-12">
          {/* Iterate through services */}
          {service &&
            service.services &&
            service.services.map((subService, index) => (
              <div key={index} className="row gx-60 space-top">
                {/* Alphabetical Heading */}

                {/* <div className="col-auto">
                  <InfoMedia
                    className="about-media"
                    // image={subService.img}
                    // title={subService.text}
                  />
                </div> */}
                <div className="col-xl-6 mb-50 mb-xl-0">
                  {subService.img && (
                    <ImageBoxThree
                      imageOne={subService.img}
                      alt="Project"
                      className="w-100"
                    />
                  )}
                </div>
                <div className="col-xl-6 align-self-center text-center text-xl-end">
                  <SecTitle className=" text-capitalize ">
                    {subService.title}
                  </SecTitle>
                  <p>
                    {subService.text && <i className="fal fa-check-circle" />}
                    {subService.text}
                  </p>
                </div>
                {/* Iterate through sub-services */}
                <List className="list-style3">
                  {/* <p>{subService.text}</p> */}
                  {subService.subServices &&
                    subService.subServices.map((subSubService, subIndex) => (
                      <>
                        <List className="list-style4" key={subIndex}>
                          {/* Roman Numeral Heading */}
                          <List.Item key={subIndex}>
                            <div className="col-xl-6 align-self-center text-center text-xl-start">
                            <h6>
                              {/* {toRoman(subIndex + 1)}. {subSubService.title} */}
                              {subSubService.title}
                            </h6>
                            {subSubService.img && (
                              <div className="col-xl-6 mb-50 mb-xl-0">                               
                                {/* <InfoMedia
                                  className="about-media"
                                  image={subSubService.img}
                                  // title={subService.text}
                                /> */}
                                <ImageBoxThree
                                  imageOne={subSubService.img}
                                  alt="Project"
                                  className="w-100"
                                />
                              </div>
                            )}

                            <p>
                              {subSubService.text && (
                                <i className="fal fa-check-circle" />
                              )}
                              {subSubService.text}
                            </p>
                          </List.Item>

                          {/* Iterate through sub-sub-services */}
                          {subSubService.subnServices &&
                            subSubService.subnServices.length > 0 && (
                              <List className="list-style3">
                                {subSubService.subnServices.map(
                                  (item, itemIndex) => (
                                    <List.Item key={itemIndex}>
                                      <SecSubTitle className="h6">
                                        {service && item.title}
                                      </SecSubTitle>
                                      {/* Conditionally render the <i> element */}

                                      {item.text && (
                                        <i className="fal fa-check-circle" />
                                      )}
                                      {item.text}
                                    </List.Item>
                                  )
                                )}
                              </List>
                            )}
                        </List>
                      </>
                    ))}
                </List>
              </div>
            ))}
        </div>
        {/* <div className="col-lg-3">
          <SidebarTwo />
        </div> */}
      </div>
    </div>
  </div>
);

// Function to convert number to Roman numeral
function toRoman(num) {
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  return romanNumerals[num - 1] || num;
}

// Function to convert number to Alphabetic characters
function toAlphabetic(num) {
  return String.fromCharCode(65 + num - 1);
}

export default ServiceSingle;





