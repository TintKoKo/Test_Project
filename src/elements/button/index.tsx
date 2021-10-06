import React, { FC, ReactNode } from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode | string | number;
  varient?: "outlined" | "primary" | "regular";
  size?: "large" | "medium" | "small";
  styles?: {};
}

export const Button: FC<ButtonProps> = (props) => {
  const { varient = "primary", size = "medium", children, ...rest } = props;
  return (
    <TouchableOpacity
      style={[styles.base, styles[varient], styles[size], props.styles]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};
