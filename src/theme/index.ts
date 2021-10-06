import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

import { colors } from "./color";

const customLightTheme = {
  ...NavigationDefaultTheme,

  colors: {
    ...NavigationDefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: colors.background,
    text: colors.text,
  },
};

const customDarkTheme = {
  ...NavigationDarkTheme,

  colors: {
    ...NavigationDarkTheme.colors,
  },
};

export { customLightTheme, customDarkTheme };
