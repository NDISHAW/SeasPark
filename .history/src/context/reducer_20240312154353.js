export const actionType = {
  SET_USER: "SET_USER",
  SET_CAREERS: "SET_CAREERS",
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

    

    default:
      return state;
  }
};

export default reducer;
