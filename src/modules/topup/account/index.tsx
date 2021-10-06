import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import { RootState } from "../../../redux/rootReducer";

import { Spacer, Typography } from "../../../elements";
import { Input } from "../../../compounds";

import { i18n } from "../../../utils/i18n";

import styles from "./styles";

export const Account = () => {
  const navigation = useNavigation();

  const { topupData, errors } = useSelector((state: RootState) => state.topup);

  return (
    <>
      <Input
        label={`${i18n.t("from")} ${i18n.t("account")}`}
        right={
          <TouchableOpacity
            onPress={() => navigation.navigate("Account" as never)}
          >
            <Image
              source={require("../../../../assets/select_account_number.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        }
        value={topupData?.account?.AccountID || ""}
        editable={false}
      />
      <Typography type="error">{errors.account}</Typography>
      {topupData?.account && (
        <>
          <Spacer height={8} />
          <Typography type="warning">
            {topupData?.account?.AccountDesc}
          </Typography>
          <Spacer height={8} />
          <Typography type="warning">
            {`${i18n.t("available-balance")} - ${
              topupData?.account?.AvailableBal
            }`}
          </Typography>
        </>
      )}
      <Spacer height={16} />
    </>
  );
};
