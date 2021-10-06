import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Topup, TopupDetail, TopupSuccess, Contact, Account } from "../screens";

type MainStackParamList = {
  Topup: undefined;
  TopupDetail: undefined;
  TopupSuccess: undefined;
  Contact: undefined;
  Account: { key: string };
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Topup" component={Topup} />
      <Stack.Screen name="TopupDetail" component={TopupDetail} />
      <Stack.Screen name="TopupSuccess" component={TopupSuccess} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};
