import React, { FC, ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { StatusBar } from "../../compounds";

import styles from "./styles";

interface MainLayoutProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
  content: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  title,
  showBackButton,
  onBack,
  content,
}) => {
  return (
    <LinearGradient colors={["#00008B", "#4B0082"]} style={styles.container}>
      <StatusBar
        title={title}
        showBackButton={showBackButton}
        onBack={onBack}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.content}>
        {content}
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};
