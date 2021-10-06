import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import { RootState } from "../../../redux/rootReducer";

import { Spacer, Typography } from "../../../elements";
import { Input } from "../../../compounds";

import { i18n } from "../../../utils/i18n";

import styles from "./styles";

export const Contact = () => {
  const navigation = useNavigation();

  const { topupData, errors } = useSelector((state: RootState) => state.topup);

  return (
    <>
      <Input
        label={`${i18n.t("mobile")} ${i18n.t("number")}`}
        placeholder="09..."
        right={
          <TouchableOpacity
            onPress={() => navigation.navigate("Contact" as never)}
          >
            <Image
              source={require("../../../../assets/select_phone_number.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
        }
        value={topupData.mobileNumber}
        editable={false}
      />
      <Typography type="error">{errors?.mobileNumber}</Typography>
      <Spacer height={16} />
    </>
  );
};
