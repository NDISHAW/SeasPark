import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";
import { getAllCareers } from "../utils/firebaseFunctions";

const userInfo = fetchUser();
const careersinfo = getAllCareers();

export const initialState = {
  user: userInfo,
  careers: careersinfo,

};
