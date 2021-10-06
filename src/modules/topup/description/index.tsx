import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../redux/rootReducer";
import { setTopUp } from "../../../redux/topup/actions";

import { Spacer, Typography } from "../../../elements";
import { InputArea } from "../../../compounds";

import { i18n } from "../../../utils/i18n";

import styles from "./styles";

export const Description = () => {
  const dispatch = useDispatch();

  const { topupData } = useSelector((state: RootState) => state.topup);

  return (
    <>
      <InputArea
        label={i18n.t("description")}
        placeholder={i18n.t("description")}
        maxLength={70}
        value={topupData.description}
        onChangeText={(description) => dispatch(setTopUp({ description }))}
      />
      <View style={styles.container}>
        <Typography varient="caption">{`${topupData.description.length}/70`}</Typography>
      </View>
      <Spacer height={16} />
    </>
  );
};
