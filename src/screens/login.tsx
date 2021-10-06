import React from "react";
import { ActivityIndicator, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/rootReducer";
import { toggleIsAuth, toggleAuthLoading } from "../redux/auth/actions";
import { setLanguage } from "../redux/app/actions";
import { setAccounts } from "../redux/topup/actions";

import { Button, Typography } from "../elements";
import { ButtonGroup } from "../compounds";
import { LoginForm } from "../modules";
import { LoginLayout } from "../layouts";

import httpService from "../utils/http-service";
import { i18n } from "../utils/i18n";

import endpoints from "../configs/api";
import { login_response } from "../types";
import { colors } from "../theme/color";
import { scale } from "../utils/scale";

export const Login = () => {
  const dispatch = useDispatch();

  const { authLoading } = useSelector((state: RootState) => state.auth);
  const { language } = useSelector((state: RootState) => state.app);

  const onSubmit = async () => {
    dispatch(toggleAuthLoading(true));

    const response = await httpService.get(endpoints.login);

    const data = response.data as login_response;

    if (data) {
      dispatch(setAccounts(data.lstAccount));
      dispatch(toggleIsAuth(true));
    }
  };

  return (
    <LoginLayout
      nav={
        <ButtonGroup
          items={[
            {
              key: "en",
              value: (
                <Image
                  source={require("../../assets/lang_en.png")}
                  resizeMode="contain"
                  style={{ width: undefined, height: undefined, flex: 1 }}
                />
              ),
            },
            {
              key: "my",
              value: (
                <Image
                  source={require("../../assets/lang_my.png")}
                  resizeMode="contain"
                  style={{ width: undefined, height: undefined, flex: 1 }}
                />
              ),
            },
          ]}
          active={language}
          onChange={(v) => dispatch(setLanguage(v))}
        />
      }
      header={
        <Typography varient="heading" weight="bold">
          {i18n.t("login")}
        </Typography>
      }
      content={<LoginForm onSubmitForm={onSubmit} />}
      footer={
        <>
          {authLoading ? (
            <ActivityIndicator color={colors.white} size={scale(30)} />
          ) : (
            <Typography>{i18n.t("dont-have-account")}</Typography>
          )}
          <Button varient="regular">
            <Typography type="warning" weight="thin">
              {i18n.t("signup-now")}
            </Typography>
          </Button>
        </>
      }
    />
  );
};
