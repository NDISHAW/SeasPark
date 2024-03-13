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

// export default function CareersDetails() {
//   const [careers, setCareer] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchCareerDetails = async () => {
//       try {
//         const careerDocRef = doc(firestore, "careers", id);
//         const careerDocSnapshot = await getDoc(careerDocRef);
//         if (careerDocSnapshot.exists()) {
//           // Include the id in the career data
//           const careerData = {
//             id: careerDocSnapshot.id,
//             ...careerDocSnapshot.data(),
//           };
//           setCareer(careerData);
//         } else {
//           console.log("Career not found.");
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching career details:", error);
//       }
//     };
//     fetchCareerDetails();
//   }, [id]);

//   return (
//     <Fragment>
//       <Seo title="Career-details" />
//       <HeaderTwo />
//       <Breadcrumb
//         pageName="Career Details"
//         bgImage="/images/careers/careerbg.jpg"
//       />
//       {loading ? (
//         <div className="container">
//           {/* <NotFoundOne /> */}
//           <p className="h1 justify-items-center">Vacancies Not Available</p>
//           <img src={NotFound} alt="img" className="img" />
//         </div>
//       ) : (
//         // Display loader while data is being fetched
//         // Display ProjectSingle component once data is fetched
//         <ProjectSingle
//           key={careers.length > 0 && careers[0].id}
//           career={careers.length > 0 && careers[0]}
//         />
//       )}
//       {/* {career && <ProjectSingle career={career} />} */}
//       <FooterOne />
//       <ScrollTopBtn />
//     </Fragment>
//   );
// }

const { id } = useParams();
const fetchDataFromFirebase = async () => {
  try {
    const docRef = doc(firestore, "careers", "id");
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
};
const CareerDetails = () => {
  const [career, setCareer] = useState(null);

  useEffect(() => {
    const fetchCareerData = async () => {
      const data = await fetchDataFromFirebase();
      setCareer(data);
    };

    fetchCareerData();
  }, []);

  if (!career) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{career.title}</h2>
      <p>{career.address}</p>
      <p>{career.experience}</p>
      <h3>Descriptions:</h3>
      <ul>
        {career.descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <h3>Requirements:</h3>
      <ul>
        {career.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
};
export default  CareerDetails