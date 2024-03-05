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
import { ProjectSingle, FooterOne, HeaderTwo, NotFoundOne } from "../containers";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../containers/Loader";
import NotFound from './NotFound';

export default function CareersDetails() {
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/careers/${id}`
        );
        setCareer(response.data);
        setLoading(false); // Set loading to false after data is fetched
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching job opening:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Fragment>
      <Seo title="Career-details" />
      <HeaderTwo />
      <Breadcrumb
        pageName="Career Details"
        bgImage="/images/careers/careerbg.jpg"
      />
      {loading ? (
        <div className="w-full flex flex-col items-center justify-center">
          {/* <NotFoundOne /> */}

          <img src={NotFound} alt="img" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      ) : (
        // Display loader while data is being fetched
        // Display ProjectSingle component once data is fetched
        <ProjectSingle career={career} />
      )}
      {/* {career && <ProjectSingle career={career} />} */}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}