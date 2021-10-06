import React, { FC, ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { Spacer, Typography } from "../../elements";

import styles from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
  right?: ReactNode;
  error?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { label, error, right, ...rest } = props;

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
          {...rest}
        />
        {right && <View>{right}</View>}
      </View>
      {error && (
        <>
          <Spacer height={4} />
          <Typography type="error" varient="caption">
            {error}
          </Typography>
        </>
      )}
    </>
  );
};
