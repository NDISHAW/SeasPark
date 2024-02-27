// import React, { useState, useEffect } from "react";
// import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
// import teamMembers from "../../data/team.json";
// import CareerBox from '../../components/TeamBox/CareerBox';
// // import careers from "../../data/careers.json";
// import axios from "axios";

// export default function CareerOne({ ...restProps }) {
//     const [careers, setCareers] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             "http://localhost:5000/api/careers"
//           );
//           setCareers(response.data);
//         } catch (error) {
//           console.error("Error fetching job openings:", error);
//         }
//       };
//       fetchData();
//     }, []);
//   return (
//     <div {...restProps}>
//       <div className="about-shape1 d-none d-xl-block">SeasPark</div>
//       <div className="container">
//         <div className="row">
//           {/* <div className="about-shape1 d-none d-xl-block">SeasPark</div> */}
//           <TitleWrap className="text-center">
//             <SecTitle className="h1 text-capitalize">
//               Job Openings <br />{" "}
//             </SecTitle>{" "}
//           </TitleWrap>
//           <br /> <br />
//           {careers.map((item) => (
//             <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
//               <CareerBox
//                 path={`/careers-details/${item.id}`}
//                 // image={item.image}
//                 image={`/images/icon/process-2-2.png`}
//                 icon={item.icon}
//                 title={item.title}
//                 text={item.descriptions.slice(0, 53)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <div className="about-shape1 d-none d-xl-block">SeasPark</div> */}
//     </div>
//   );
// }


// CareerOne.js
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCareers } from '../../context/actions/careerActions';
import CareerBox from '../../components/TeamBox/CareerBox';
import Loader from '../Loader';
import { useStateValue } from '../../context/StateProvider';
import { CareerContext } from '../../context/CareerContext';

export default function CareerOne({ ...restProps }) {
   const { careers } = useContext(CareerContext);

  return (
    <div {...restProps}>
      <div className="about-shape1 d-none d-xl-block">SeasPark</div>
      <div className="container">
        <div className="row">
          {careers.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
              <CareerBox
                path={`/careers-details/${item.id}`}
                image={`/images/icon/process-2-2.png`}
                icon={item.icon}
                title={item.title}
                text={item.text.slice(0, 53)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
