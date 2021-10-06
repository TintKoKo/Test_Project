import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { scale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: scale(4),
    padding: scale(8),
    width: scale(80),
    alignItems: "center",
  },
  active: {
    backgroundColor: colors.white,
  },
});
