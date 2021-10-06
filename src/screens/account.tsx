import React from "react";
import { Alert, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import { setTopUp, setTopUpError } from "../redux/topup/actions";

import { Spacer, Typography } from "../elements";
import { Card } from "../compounds";
import { MainLayout } from "../layouts";

import { account } from "../types";

import { i18n } from "../utils/i18n";
import { RootState } from "../redux/rootReducer";

export const Account = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { accounts } = useSelector((state: RootState) => state.topup);

  const goBack = () => navigation.goBack();

  const renderItem = ({ item }: { item: account }) => (
    <Card
      title={item.AccountDesc}
      description={`${item.AccountID} (${item.Currency})`}
      onClick={() => {
        if (item.AccountType === "TDA") {
          Alert.alert(
            "",
            "Term Deposit Account can not make Mobile Topup!",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        } else {
          dispatch(setTopUp({ account: item }));
          dispatch(setTopUpError({ account: "" }));
          goBack();
        }
      }}
    />
  );

  const separator = () => <Spacer height={8} />;

  return (
    <MainLayout
      title={`${i18n.t("mobile")} ${i18n.t("topup")}`}
      showBackButton
      onBack={goBack}
      content={
        <View>
          {!accounts ? (
            <Typography>Loading...</Typography>
          ) : (
            <FlatList
              data={accounts}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.AccountID}
              ItemSeparatorComponent={separator}
              ListFooterComponent={<Spacer height={100} />}
            />
          )}
        </View>
      }
    />
  );
};
