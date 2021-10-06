import React, { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { Spacer, Typography } from "../../elements";

import styles from "./styles";

interface InputAreaProps extends TextInputProps {
  label?: string;
}

export const InputArea: FC<InputAreaProps> = (props) => {
  const { label, ...rest } = props;

  return (
    <>
      {label && (
        <>
          <Typography>{label}</Typography>
          <Spacer height={8} />
        </>
      )}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          multiline
          {...rest}
        />
      </View>
    </>
  );
};
