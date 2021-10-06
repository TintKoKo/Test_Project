import React, { FC, ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageURISource,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";

interface ImageBoxProps {
  image: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const ImageBox: FC<ImageBoxProps> = ({ image, active, onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick?.()}>
      {image}
      {active && <View style={styles.overlay} />}
    </TouchableOpacity>
  );
};
