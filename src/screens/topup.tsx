import React from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/rootReducer";
import {
  setTopUpError,
  setTopUpRequestData,
  toggleTopUpLoading,
} from "../redux/topup/actions";

import { Button, Typography } from "../elements";
import { Account, Amount, Contact, Description, Operator } from "../modules";
import { MainLayout } from "../layouts";

import { topup_response } from "../types";

import { i18n } from "../utils/i18n";
import httpService from "../utils/http-service";

import endpoints from "../configs/api";
import { colors } from "../theme/color";

export const Topup = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { topupData, errors, topUpLoading } = useSelector(
    (state: RootState) => state.topup
  );

  const onSubmit = async () => {
    const isValid = validate();

    if (!isValid) return;

    dispatch(toggleTopUpLoading(true));

    try {
      const response = await httpService.get(endpoints.topup);

      const data = response.data as topup_response;

      if (data.RespDescription === "Success.") {
        dispatch(setTopUpRequestData(data));
        dispatch(toggleTopUpLoading(false));
        navigation.navigate("TopupDetail" as never);
      }
    } catch (err) {
      alert("Failed to top up.");
    }
  };

  const validate = () => {
    let isError = 0;

    if (!topupData.account) {
      dispatch(setTopUpError({ account: "Required Account" }));
      isError += 1;
    }
    if (!topupData.mobileNumber) {
      dispatch(setTopUpError({ mobileNumber: "Required Mobile Number" }));
      isError += 1;
    }
    if (!topupData.mobileOperator) {
      dispatch(setTopUpError({ mobileOperator: "Required Mobile Operator" }));
      isError += 1;
    }
    if (!topupData.amount) {
      dispatch(setTopUpError({ amount: "Required Amount" }));
      isError += 1;
    }

    return isError > 0 ? false : true;
  };

  return (
    <MainLayout
      title={`${i18n.t("mobile")} ${i18n.t("topup")}`}
      content={
        <>
          <Typography>{errors.account}</Typography>
          <Account />
          <Contact />
          <Operator />
          <Amount />
          <Description />
          {topUpLoading && <ActivityIndicator color={colors.white} />}
          <Button onPress={onSubmit}>
            <Typography>{`${i18n.t("mobile")} ${i18n.t("topup")}`}</Typography>
          </Button>
        </>
      }
    />
  );
};
