import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favReducer from "./reducers/Favorites.js";
import msgReducer from "./reducers/Messages.js";

import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  favourites: [],
  toast: {
    message: "",
  },
};

const bigReducer = combineReducers({
  favourites: favReducer,
  message: msgReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
