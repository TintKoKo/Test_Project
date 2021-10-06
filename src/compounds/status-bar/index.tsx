import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Typography } from "../../elements";

import { colors } from "../../theme/color";

import styles from "./styles";

interface StatusBarProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const StatusBar: FC<StatusBarProps> = ({
  title,
  showBackButton,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={() => onBack?.()}>
          <FontAwesome5 name="chevron-left" size={24} color={colors.white} />
        </TouchableOpacity>
      )}
      <Typography varient="subheading">{title}</Typography>
    </View>
  );
};
