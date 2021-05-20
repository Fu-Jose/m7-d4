export const addToFavouritesAction = (job) => ({
  type: "ADD_TO_FAV",
  payload: job,
});

export const removeFromFavouritesAction = (job) => ({
  type: "REMOVE_FROM_FAV",
  payload: job,
});

export const setToastAction = (message) => ({
  type: "SET_TOAST_MESSAGE",
  payload: message,
});

export const removeToastAction = (message) => ({
  type: "RESET_TOAST_MESSAGE",
  payload: message,
});
