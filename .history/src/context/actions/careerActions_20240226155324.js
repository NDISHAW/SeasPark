// actions/careerActions.js
import axios from "axios";

export const FETCH_CAREERS_REQUEST = "FETCH_CAREERS_REQUEST";
export const FETCH_CAREERS_SUCCESS = "FETCH_CAREERS_SUCCESS";
export const FETCH_CAREERS_FAILURE = "FETCH_CAREERS_FAILURE";

export const fetchCareers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CAREERS_REQUEST });
    try {
      const response = await axios.get(
        "http://localhost:5000/api/careers"
      );
      dispatch({
        type: FETCH_CAREERS_SUCCESS,
        payload: response.data,
      });
      console.log(re);
    } catch (error) {
      dispatch({
        type: FETCH_CAREERS_FAILURE,
        payload: error.message,
      });
    }
  };
};
