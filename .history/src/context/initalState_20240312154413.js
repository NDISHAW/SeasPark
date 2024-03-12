import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";
import { getAllCareers } from "../utils/firebaseFunctions";

const userInfo = fetchUser();
const careersinfo = getAllCareers();
// const LabReagents = fetchCart();
// const popup = fetchCart();
export const initialState = {
  user: userInfo,
  careers: careersinfo,

};
