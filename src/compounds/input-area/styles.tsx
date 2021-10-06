import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { scale, verticalScale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(4),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(8),
    minHeight: verticalScale(80),
  },
  input: {
    fontSize: scale(16),
    minHeight: verticalScale(20),
  },
});
