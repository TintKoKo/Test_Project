import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export default StyleSheet.create({
  base: {
    color: colors.text,
  },
  heading: {
    fontSize: 32,
  },
  subheading: {
    fontSize: 22,
  },
  body: {
    fontSize: 18,
  },
  caption: {
    fontSize: 14,
  },
  bold: {
    fontWeight: "800",
  },
  semibold: {
    fontWeight: "600",
  },
  regular: {
    fontWeight: "500",
  },
  thin: {
    fontWeight: "300",
  },
  info: {
    color: colors.info,
  },
  warning: {
    color: colors.warning,
  },
  error: {
    color: colors.error,
  },
  primary: {
    color: colors.primary,
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
});
