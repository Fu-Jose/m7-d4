import { initialState } from "../../store/index.js";

const favReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((f) => f.id !== action.payload.id),
          action.payload,
        ],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favourites: state.favourites.filter((f) => f.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default favReducer;
