import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import appReducers from "./app/reducers";
import authReducers from "./auth/reducers";
import topupReducers from "./topup/reducers";

//persist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 10000,
  whitelist: ["app"],
};

const rootReducer = combineReducers({
  app: appReducers,
  auth: authReducers,
  topup: topupReducers,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
