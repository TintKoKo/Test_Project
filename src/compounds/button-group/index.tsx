import React, { FC, ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { Typography } from "../../elements";

import styles from "./styles";

type item = {
  key: string | number;
  value: string | ReactNode;
};

interface ButtonGroupProps {
  items: item[];
  active?: string | number;
  onChange?: (key: string | number) => void;
}

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { items, active, onChange } = props;

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[styles.item, item.key === active && styles.active]}
          onPress={() => onChange?.(item.key)}
        >
          {typeof item.value === "string" ? (
            <Typography>{item.value}</Typography>
          ) : (
            item.value
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
