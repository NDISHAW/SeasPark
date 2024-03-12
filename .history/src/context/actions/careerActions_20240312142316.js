// // actions/careerActions.js
// import axios from "axios";

// export const FETCH_CAREERS_REQUEST = "FETCH_CAREERS_REQUEST";
// export const FETCH_CAREERS_SUCCESS = "FETCH_CAREERS_SUCCESS";
// export const FETCH_CAREERS_FAILURE = "FETCH_CAREERS_FAILURE";

// export const fetchCareers = () => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_CAREERS_REQUEST });
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/careers"
        
//       );
//       dispatch({
//         type: FETCH_CAREERS_SUCCESS,
//         payload: response.data,
//       });
      
//     } catch (error) {
//       dispatch({
//         type: FETCH_CAREERS_FAILURE,
//         payload: error.message,
//       });
//     }
//   };
// };




import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "career"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};