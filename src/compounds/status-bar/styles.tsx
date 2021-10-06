import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { scale, verticalScale } from "../../utils/scale";
import { colors } from "../../theme/color";

export default StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingTop:
      Platform.OS === "ios"
        ? Constants.statusBarHeight
        : Constants.statusBarHeight + verticalScale(4),
    paddingBottom: verticalScale(Platform.OS === "ios" ? 16 : 8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  backButton: {
    position: "absolute",
    left: scale(16),
    top:
      Platform.OS === "ios"
        ? Constants.statusBarHeight + verticalScale(4)
        : Constants.statusBarHeight + verticalScale(10),
  },
});
