import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../utils/scale";

export default StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: scale(20),
    height: verticalScale(20),
  },
});
