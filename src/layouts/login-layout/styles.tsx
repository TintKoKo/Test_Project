import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "space-around",
    padding: scale(16),
  },
  nav: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: scale(16),
  },
  header: {
    alignItems: "center",
    paddingBottom: scale(16),
  },
  content: {
    paddingBottom: scale(16),
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
