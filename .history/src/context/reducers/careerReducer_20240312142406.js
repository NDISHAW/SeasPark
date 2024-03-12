// reducers/careerReducer.js
import {
  FETCH_CAREERS_REQUEST,
  FETCH_CAREERS_SUCCESS,
  FETCH_CAREERS_FAILURE,
} from "../actions/careerActions";

const initialState = {
  careers: [],
  loading: true,
  error: null,
};

const careerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAREERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CAREERS_SUCCESS:
      return {
        ...state,
        loading: false,
        careers: action.payload,
        error: null,
      };
    case FETCH_CAREERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default careerReducer;
