// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import { firestore } from "../utils/firebase.config";

// export const CareerContext = createContext();

// export const CareerProvider = ({ children }) => {
//   const [careers, setCareers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getDocs(query(collection(firestore, "careers")));
//         setCareers(response.docs.map((doc) => doc.data()));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching job openings:", error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//   console.log('====================================');
//   console.log("Careerprovider", careers);
//   console.log('====================================');

//   return (
//     <CareerContext.Provider value={{ careers, loading }}>
//       {children}
//     </CareerContext.Provider>
//   );
// };




import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../utils/firebase.config";

export const CareerContext = createContext();

export const CareerProvider = ({ children }) => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(firestore, "careers")));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCareers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching careers:", error);
      }
    };

    fetchCareers();
  }, []);

  return (
    <CareerContext.Provider value={{ careers, loading }}>
      {loading ? (
        <div className="container">
          {/* <NotFoundOne /> */}
          {/* <p className="h1 justify-items-center">Vacancies Not Available</p> */}
          <img src={NotFound} alt="img" className="img" />
        </div>
      ) : (
        children
      )}
    </CareerContext.Provider>
  );
};
