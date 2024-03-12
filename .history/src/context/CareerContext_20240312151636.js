import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CareerContext = createContext();

export const CareerProvider = ({ children }) => {
  const [careers, setCareers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/careers");
  //       setCareers(response.data);
  //     } catch (error) {
  //       console.error("Error fetching job openings:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <CareerContext.Provider value={{ careers }}>
      {children}
    </CareerContext.Provider>
  );
};
