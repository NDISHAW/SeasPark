import axios from "axios";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../../utils/firebase.config";

export const FETCH_CAREERS_REQUEST = "FETCH_CAREERS_REQUEST";
export const FETCH_CAREERS_SUCCESS = "FETCH_CAREERS_SUCCESS";
export const FETCH_CAREERS_FAILURE = "FETCH_CAREERS_FAILURE";

export const fetchCareers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CAREERS_REQUEST });
    try {
      const response = await getDocs(
        query(collection(firestore, "careers"), orderBy("id", "desc"))
      );
      dispatch({
        type: FETCH_CAREERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CAREERS_FAILURE,
        payload: error.message,
      });
    }
  };
};
