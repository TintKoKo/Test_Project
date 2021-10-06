import initialState from "./initialState";
import actionTypes from "./types";

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_ACCOUNTS:
      return { ...state, accounts: action.data };
    case actionTypes.SET_TOPUP:
      return { ...state, topupData: { ...state.topupData, ...action.data } };
    case actionTypes.SET_TOPUP_ERROR:
      return { ...state, errors: { ...state.errors, ...action.data } };
    case actionTypes.TOGGLE_TOPUP_LOADING:
      return { ...state, topUpLoading: action.data };
    case actionTypes.SET_TOPUP_REQUEST_DATA:
      return { ...state, topUpRequestData: action.data };
    case actionTypes.SET_TOPUP_SUCCESS_DATA:
      return { ...state, topUpSuccessData: action.data };
    case actionTypes.TOGGLE_TOPUP_CONFIRM_MODAL:
      return { ...state, topupConfirmModalVisible: action.data };
    default:
      return state;
  }
};

export default reducers;
