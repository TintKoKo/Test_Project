import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { scale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: scale(4),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: scale(60),
    height: scale(60),
    position: "relative",
    padding: scale(10),
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.white,
    opacity: 0.3,
  },
});
