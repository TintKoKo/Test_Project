import actionTypes from "./types";

export const toggleIsAuth = (auth: boolean) => {
  return { type: actionTypes.TOGGLE_AUTH, data: auth };
};

export const toggleAuthLoading = (loading: boolean) => {
  return { type: actionTypes.TOGGLE_AUTH_LOADING, data: loading };
};
