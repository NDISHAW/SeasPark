import { combineReducers } from "redux";
import careerReducer from "./careerReducer"; // Import your career reducer
// import otherReducer from "./otherReducer"; // Import other reducers as needed

// Combine reducers
const rootReducer = combineReducers({
  careers: careerReducer,
  // Add other reducers here if needed
});

export default rootReducer;
