import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";
import { fetchCareers } from "./actions/careerActions";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const careersinfo = fetchCareers();
// const LabReagents = fetchCart();
// const popup = fetchCart();
export const initialState = {
  user: userInfo,
  careers: careersinfo
  foodItems: null,
  LabReagents: null,
  cartShow: false,
  cartItems: cartInfo,
  vete:null,
};
