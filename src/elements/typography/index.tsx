import React, { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface TypographyProps {
  children: string | number;
  type?: "info" | "error" | "primary" | "warning";
  varient?: "heading" | "subheading" | "body" | "caption";
  weight?: "bold" | "semibold" | "regular" | "thin";
  align?: "left" | "center";
}

export const Typography: FC<TypographyProps> = (props) => {
  const {
    varient = "body",
    weight = "regular",
    align = "left",
    type,
    children,
  } = props;

  return (
    <Text
      style={[
        styles.base,
        styles[varient],
        styles[weight],
        styles[align],
        type && styles[type],
      ]}
    >
      {children}
    </Text>
  );
};
