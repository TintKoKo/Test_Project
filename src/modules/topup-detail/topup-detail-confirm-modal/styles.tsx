import { StyleSheet } from "react-native";
import { colors } from "../../../theme/color";
import { scale, verticalScale } from "../../../utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000099",
  },
  content: {
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 20,
  },
  input: {
    backgroundColor: colors.lightgray,
    borderRadius: scale(4),
    padding: scale(12),
    fontSize: scale(16),
    textAlign: "center",
    marginTop: verticalScale(10),
  },
  buttonWrapper: {
    paddingHorizontal: scale(8),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: scale(100),
    height: verticalScale(40),
  },
  cancelButton: {
    backgroundColor: colors.gray,
  },
});
