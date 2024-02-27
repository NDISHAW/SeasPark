export const actionType = {
  SET_USER: "SET_USER",
  SET_CAREERS: "SET_CAREERS",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_LAB_REAGENTS: "SET_LAB_REAGENTS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_VETE: "SET_VETE",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_CAREERS:
      return {
        ...state,
        careers: action.careers,
      };

    case actionType.SET_LAB_REAGENTS:
      return {
        ...state,
        LabReagents: action.LabReagents,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case actionType.SET_VETE:
      return {
        ...state,
        vete: action.vete,
      };

    default:
      return state;
  }
};

export default reducer;
