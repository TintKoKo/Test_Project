import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
