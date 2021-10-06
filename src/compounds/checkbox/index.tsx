import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Spacer, Typography } from "../../elements";

import { colors } from "../../theme/color";

import styles from "./styles";

interface CheckBoxProps {
  checked?: boolean;
  size?: number;
  color?: string;
  label?: string;
  onValueChange?: (checked: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = (props) => {
  const {
    checked = false,
    size = 24,
    color = colors.white,
    label,
    onValueChange,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onValueChange?.(!checked)}>
        {checked ? (
          <Ionicons name="ios-checkbox-outline" size={size} color={color} />
        ) : (
          <Ionicons name="ios-square-outline" size={size} color={color} />
        )}
      </TouchableOpacity>
      {label && (
        <>
          <Spacer width={8} />
          <Typography>{label}</Typography>
        </>
      )}
    </View>
  );
};
