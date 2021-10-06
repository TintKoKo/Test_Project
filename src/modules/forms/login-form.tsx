import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

import { Button, Spacer, Typography } from "../../elements";
import { Input, CheckBox } from "../../compounds";

import { scale } from "../../utils/scale";
import { i18n } from "../../utils/i18n";

const loginFormSchema = yup.object({
  username: yup
    .string()
    .required("Required User Name")
    .min(4, "Username must be at least 4 characters"),
  password: yup
    .string()
    .required("Required Password")
    .min(4, "Password must be at least 4 characters"),
  rememberMe: yup.boolean().optional(),
});

const initialValues = {
  username: "",
  password: "",
  rememberMe: false,
};

interface LoginFormProps {
  onSubmitForm?: (values: any) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmitForm }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={(values) => {
        onSubmitForm?.(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
      }) => (
        <>
          <Input
            label={i18n.t("username")}
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            error={touched.username ? errors.username : undefined}
          />
          <Spacer height={24} />
          <Input
            label={i18n.t("password")}
            secureTextEntry={showPassword}
            right={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <MaterialCommunityIcons
                    name="eye-off"
                    size={scale(24)}
                    color={"#4B0082"}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="eye"
                    size={scale(24)}
                    color={"#4B0082"}
                  />
                )}
              </TouchableOpacity>
            }
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={touched.password ? errors.password : undefined}
          />
          <Spacer height={24} />
          <CheckBox
            checked={values.rememberMe}
            onValueChange={(v) => setFieldValue("rememberMe", v)}
            label={i18n.t("remember-me")}
          />
          <Spacer height={10} />
          <Button onPress={() => handleSubmit()}>
            <Typography>{i18n.t("login")}</Typography>
          </Button>
        </>
      )}
    </Formik>
  );
};
