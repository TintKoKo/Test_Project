import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../redux/rootReducer";
import { setTopUp, setTopUpError } from "../../../redux/topup/actions";

import { Spacer, Typography } from "../../../elements";
import { AmountBox } from "../../../compounds";

import { i18n } from "../../../utils/i18n";

import styles from "./styles";

const lists = [1000, 2000, 3000, 4000, 5000, 10000];

export const Amount = () => {
  const dispatch = useDispatch();

  const { topupData, errors } = useSelector((state: RootState) => state.topup);

  return (
    <>
      <Typography>{i18n.t("amount")}</Typography>
      <Spacer height={8} />
      <View style={styles.container}>
        {lists.map((amount) => (
          <View key={amount} style={styles.item}>
            <AmountBox
              amount={amount}
              active={amount === topupData.amount}
              onClick={() => {
                dispatch(setTopUp({ amount }));
                dispatch(setTopUpError({ amount: "" }));
              }}
            />
          </View>
        ))}
      </View>
      <Typography type="error">{errors.amount}</Typography>
      <Spacer height={16} />
    </>
  );
};
