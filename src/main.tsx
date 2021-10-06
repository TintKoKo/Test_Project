import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { RootState } from "./redux/rootReducer";
import { setLanguage } from "./redux/app/actions";

import { customDarkTheme, customLightTheme } from "./theme";

import { AuthStack, MainStack } from "./navigations";
import { localize } from "./utils/i18n";

const Main = () => {
  const dispatch = useDispatch();

  const { appTheme, language } = useSelector((state: RootState) => state.app);
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const customTheme = appTheme === "dark" ? customDarkTheme : customLightTheme;

  useEffect(() => {
    (() => {
      const lan = localize(language);
      dispatch(setLanguage(lan));
    })();
  }, [language]);

  return (
    <NavigationContainer theme={customTheme}>
      <LinearGradient
        colors={["#00008B", "#4B0082", "#4B0082"]}
        start={[0.1, 0]}
        end={[1, 1]}
        locations={[0.125, 0.4, 1]}
        style={{ flex: 1 }}
      >
        {isAuth ? <MainStack /> : <AuthStack />}
      </LinearGradient>
    </NavigationContainer>
  );
};

export default Main;
