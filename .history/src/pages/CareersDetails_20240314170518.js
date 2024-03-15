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

import React, { Fragment, useState, useEffect } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  ProjectSingle,
  FooterOne,
  HeaderTwo,
  NotFoundOne,
} from "../containers";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../containers/Loader";
import NotFound from "../containers/NotFound.svg";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../utils/firebase.config";
import { CareerContext, CareerProvider } from "../context/CareerContext";
export default function CareersDetails() {
  const { careers, loading } = useContext(CareerContext);
  const { id } = useParams();

  // Find the career with the matching id
  const selectedCareer = careers.find((career) => career.id === id);

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
        <ProjectSingle career={selectedCareer} />
      ) : (
        <NotFoundOne />
      )}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}


