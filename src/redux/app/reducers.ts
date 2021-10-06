import initialState from "./initialState";
import actionTypes from "./types";

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_APP_THEME:
      return { ...state, appTheme: action.data };
    case actionTypes.SET_LANGUAGE:
      return { ...state, language: action.data };
    default:
      return state;
  }
};

export default reducers;
