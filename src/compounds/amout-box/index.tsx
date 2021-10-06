import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { Spacer, Typography } from "../../elements";

import styles from "./styles";

interface AmountBoxProps {
  amount: string | number;
  active?: boolean;
  onClick?: () => void;
}

export const AmountBox: FC<AmountBoxProps> = ({ amount, active, onClick }) => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.active]}
      onPress={() => onClick?.()}
    >
      <Typography type={active ? "primary" : undefined}>{amount}</Typography>
    </TouchableOpacity>
  );
};
