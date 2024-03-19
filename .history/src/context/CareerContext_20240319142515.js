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
    const fetchData = async () => {
      try {
        const careersData = localStorage.getItem("careers");
        if (careersData) {
          setCareers(JSON.parse(careersData));
          setLoading(false);
        } else {
          const response = await getDocs(
            query(collection(firestore, "careers"))
          );
          const fetchedCareers = response.docs.map((doc) => doc.data());
          setCareers(fetchedCareers);
          setLoading(false);
          localStorage.setItem("careers", JSON.stringify(fetchedCareers));
        }
      } catch (error) {
        console.error("Error fetching job openings:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <CareerContext.Provider value={{ careers, loading }}>
      {children}
    </CareerContext.Provider>
  );
};
