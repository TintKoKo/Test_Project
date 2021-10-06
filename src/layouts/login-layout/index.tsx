import React, { FC, ReactNode } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";

interface LoginLayoutProps {
  nav: ReactNode;
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export const LoginLayout: FC<LoginLayoutProps> = ({
  nav,
  header,
  content,
  footer,
}) => {
  return (
    <LinearGradient colors={["#00008B", "#4B0082"]} style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.nav}>{nav}</View>
        <View style={styles.header}>{header}</View>
        <View style={styles.content}>{content}</View>
        <View style={styles.footer}>{footer}</View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};
