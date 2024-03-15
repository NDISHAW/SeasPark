import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getDocs, orderBy } from "firebase/firestore";
import { firestore } from "../utils/firebase.config";

export const CareerContext = createContext();

export const CareerProvider = ({ children }) => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDocs(
          query(collectio(firestore, "careers"), orderBy("id", "desc"))
        );
        setCareers(response.data);
      } catch (error) {
        console.error("Error fetching job openings:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <CareerContext.Provider value={{ careers }}>
      {children}
    </CareerContext.Provider>
  );
};
