// import React, { Fragment, useState, useEffect } from "react";
// import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
// import {  ProjectSingle, FooterOne, HeaderTwo } from "../containers";
// import { useParams } from "react-router-dom";
// // import careers from "../data/careers.json";
// import axios from "axios";

// export default function CareersDetails() {
//       const [careers, setCareers] = useState([]);
//       const { id } = useParams();

//       useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(
//               `http://localhost:5000/api/careers/${id}`
//             );
//             setCareers(response.data);
//             console.log('====================================');
//             console.log(response.data);
//             console.log('====================================');
//           } catch (error) {
//             console.error("Error fetching job openings:", error);
//           }
//         };
//         fetchData();
//       }, []);
//   const career = careers.find(
//     (career) => career.id === id.toString());
//     console.log("====================================");
//     console.log(career);
//     console.log("====================================");
//   return (
//     <Fragment>
//       <Seo title="Career-details" />
//       <HeaderTwo />
//       <Breadcrumb
//         pageName="Career Details"
//         bgImage="/images/careers/careerbg.jpg"
//       />
//       {/* <ProjectSingle className="space-top space-extra-bottom" /> */}
//       {career && (
//         <ProjectSingle
//           className="space-top space-extra-bottom"
//           career={career}
//         />
//       )}
//       <FooterOne />
//       <ScrollTopBtn />
//     </Fragment>
//   );
// }
import React, { Fragment, useContext } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { FooterOne, HeaderTwo, NotFoundOne, ProjectSingle } from "../containers";
import { useParams } from "react-router-dom";
import { CareerContext } from "../context/CareerContext";
import Loader from "../containers/Loader";

export default function CareersDetails() {
  const { careers, loading } = useContext(CareerContext);
  const { title } = useParams();

  // Ensure careers is defined before attempting to find the selected career
  const selectedCareer = careers
    ? careers.find((career) => career.title === title)
    : null;

  return (
    <Fragment>
      <Seo title="Career-details" />
      <HeaderTwo />
      <Breadcrumb
        pageName="Career Details"
        bgImage="/images/careers/careerbg.jpg"
      />
      {loading ? (
        <Loader />
      ) : selectedCareer ? (
        <ProjectSingle career={careers} />
      ) : (
        <NotFoundOne />
      )}
      <ProjectSingle career={careers} />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}


