import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { scale, verticalScale } from "../../utils/scale";

export default StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(8),
    padding: scale(8),
  },
  primary: {
    backgroundColor: "#4B0082",

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS

    elevation: 2, // Android
  },
  outlined: {
    borderStyle: "solid",
    borderColor: colors.white,
    borderWidth: 1,
  },
  regular: {},
  large: {
    paddingVertical: verticalScale(16),
  },
  medium: {
    paddingVertical: verticalScale(10),
  },
  small: {
    paddingVertical: verticalScale(8),
  },
});
