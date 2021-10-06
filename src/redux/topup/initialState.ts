const initialState = {
  topupData: {
    account: undefined,
    mobileNumber: "",
    mobileOperator: "",
    amount: undefined,
    description: "",
    password: "",
  },
  errors: {
    account: "",
    mobileNumber: "",
    mobileOperator: "",
    amount: "",
    password: "",
  },
  accounts: [],
  topUpLoading: false,
  topupConfirmModalVisible: false,
  topUpRequestData: null,
  topUpSuccessData: null,
};

export default initialState;
