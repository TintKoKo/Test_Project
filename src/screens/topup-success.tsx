import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/rootReducer";
import { setTopUp } from "../redux/topup/actions";
import topupInitialState from "../redux/topup/initialState";

import { Button, Spacer, Typography } from "../elements";
import { MainLayout } from "../layouts";

import { i18n } from "../utils/i18n";
import { verticalScale } from "../utils/scale";

export const TopupSuccess = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { topUpRequestData, topupData, topUpSuccessData } = useSelector(
    (state: RootState) => state.topup
  );

  const onSubmit = () => {
    dispatch(setTopUp({ ...topupInitialState.topupData }));
    navigation.navigate("Topup" as never);
  };

  return (
    <>
      <MainLayout
        title={`${i18n.t("mobile")} ${i18n.t("topup")}`}
        content={
          <>
            <View
              style={{
                alignItems: "center",
                paddingVertical: verticalScale(20),
              }}
            >
              <AntDesign name="checkcircleo" size={80} color="green" />
            </View>
            <Typography align="center" varient="subheading">
              {i18n.t("your-transaction-has-been-successfully-completed")}
            </Typography>
            <Spacer height={10} />
            <Typography align="center">
              {topUpSuccessData.TransactionAmount}
            </Typography>
            <Spacer height={32} />

            <Typography>{`${i18n.t("transaction-id")}  -  ${
              topUpSuccessData.TransactionID
            }`}</Typography>
            <Spacer height={20} />

            <Typography>{`${i18n.t("from")} ${i18n.t("account")}  -  ${
              topupData?.account?.AccountID
            }`}</Typography>
            <Spacer height={20} />

            <Typography>{`${i18n.t("mobile")} ${i18n.t("number")}  -  ${
              topupData.mobileNumber
            }`}</Typography>
            <Spacer height={20} />

            <Typography>{`${i18n.t("mobile")} ${i18n.t("operator")}  -  ${
              topupData.mobileOperator
            }`}</Typography>
            <Spacer height={20} />

            <Typography>{`${i18n.t("bill")} ${i18n.t("amount")}  -  ${
              topUpSuccessData.TransactionAmount
            }`}</Typography>
            <Spacer height={20} />

            <Typography>{`${i18n.t("discount")} ${i18n.t("amount")}  -  ${
              topUpRequestData.DisAmount
            }`}</Typography>
            <Spacer height={32} />

            <Button onPress={onSubmit}>
              <Typography>{i18n.t("ok")}</Typography>
            </Button>
          </>
        }
      />
    </>
  );
};
