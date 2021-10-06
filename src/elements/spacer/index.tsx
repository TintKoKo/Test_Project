import React, { FC } from "react";
import { View } from "react-native";

import { scale } from "../../utils/scale";

interface SpacerProps {
  height?: number;
  width?: number;
}

export const Spacer: FC<SpacerProps> = ({ height = 0, width = 0 }) => {
  return <View style={{ height: scale(height), width: scale(width) }} />;
};
