import {
  account,
  topup,
  topup_confirm_response,
  topup_response,
} from "../../types";
import actionTypes from "./types";

export const setAccounts = (accounts: account[]) => {
  return { type: actionTypes.SET_ACCOUNTS, data: accounts };
};

export const setTopUp = (data: topup) => {
  return { type: actionTypes.SET_TOPUP, data: data };
};

export const setTopUpError = (data: any) => {
  return { type: actionTypes.SET_TOPUP_ERROR, data: data };
};

export const toggleTopUpLoading = (loading: boolean) => {
  return { type: actionTypes.TOGGLE_TOPUP_LOADING, data: loading };
};

export const setTopUpRequestData = (data: topup_response) => {
  return { type: actionTypes.SET_TOPUP_REQUEST_DATA, data: data };
};

export const setTopUpSuccessData = (data: topup_confirm_response) => {
  return { type: actionTypes.SET_TOPUP_SUCCESS_DATA, data: data };
};

export const toggleTopUpConfirmModal = (visible: boolean) => {
  return { type: actionTypes.TOGGLE_TOPUP_CONFIRM_MODAL, data: visible };
};
