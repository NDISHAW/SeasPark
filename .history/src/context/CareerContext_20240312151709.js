import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getAllCareers } from "../utils/firebaseFunctions";
import { actionType } from "./reducer";

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

    const fetchData = async () => {
      await getAllCareers().then((data) => {
        // console.log(data);
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        });
      });
    };
  return (
    <CareerContext.Provider value={{ careers }}>
      {children}
    </CareerContext.Provider>
  );
};
