import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { scale, verticalScale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  item: {
    marginLeft: scale(8),
    width: scale(40),
    height: verticalScale(25),
    overflow: "hidden",
  },
  active: {
    borderRadius: scale(4),
    borderWidth: 2,
    borderColor: colors.white,
  },
});
