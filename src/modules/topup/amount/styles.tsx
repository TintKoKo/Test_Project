import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  item: {
    marginBottom: scale(16),
  },
});
