import { account } from "../../types";
import actionTypes from "./types";

export const setAppTheme = (theme: string) => {
  return { type: actionTypes.SET_APP_THEME, data: theme };
};



export const setLanguage = (language: string | number) => {
  return { type: actionTypes.SET_LANGUAGE, data: language };
};
