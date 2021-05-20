import { initialState } from "../../store/index.js";

const msgReducer = (state = initialState.message, action) => {
  switch (action.type) {
    case "SET_TOAST_MESSAGE":
      return {
        ...state,
        toast: {
          message: action.payload,
        },
      };
    case "RESET_TOAST_MESSAGE":
      return {
        ...state,
        toast: {
          message: "",
        },
      };
    default:
      return state;
  }
};

export default msgReducer;
