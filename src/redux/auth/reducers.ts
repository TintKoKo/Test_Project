import initialState from "./initialState";
import actionTypes from "./types";

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_AUTH:
      return { ...state, isAuth: action.data };
    case actionTypes.TOGGLE_AUTH_LOADING:
      return { ...state, authLoading: action.data };
    default:
      return state;
  }
};

export default reducers;
