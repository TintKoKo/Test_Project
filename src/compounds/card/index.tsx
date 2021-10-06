import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { Spacer, Typography } from "../../elements";

import styles from "./styles";

interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick?.()}>
      <Typography>{title}</Typography>
      <Spacer height={16} />
      <Typography>{description}</Typography>
    </TouchableOpacity>
  );
};
