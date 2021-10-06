import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/rootReducer";
import {
  setTopUpSuccessData,
  toggleTopUpConfirmModal,
} from "../redux/topup/actions";

import { Button, Spacer, Typography } from "../elements";
import { TopupDetailConfirmModal } from "../modules";
import { MainLayout } from "../layouts";

import { topup_confirm_response } from "../types";

import { i18n } from "../utils/i18n";
import httpService from "../utils/http-service";

import endpoints from "../configs/api";

export const TopupDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { topUpRequestData, topupData, topupConfirmModalVisible } = useSelector(
    (state: RootState) => state.topup
  );

  const closeModal = () => {
    dispatch(toggleTopUpConfirmModal(false));
  };

  const openModal = () => {
    dispatch(toggleTopUpConfirmModal(true));
  };

  const onSubmit = async () => {
    try {
      const response = await httpService.get(endpoints.topup_confirm);

      const data = response.data as topup_confirm_response;

      if (!data.ErrorMessage) {
        dispatch(setTopUpSuccessData(data));
        closeModal();
        navigation.navigate("TopupSuccess" as never);
      }
    } catch (error) {
      alert("Failed to top up.");
    }
  };

  return (
    <>
      <MainLayout
        title={`${i18n.t("mobile")} ${i18n.t("topup")}`}
        showBackButton
        onBack={() => navigation.goBack()}
        content={
          <>
            <Typography>{`${i18n.t("from")} ${i18n.t("account")}`}</Typography>
            <Spacer height={8} />
            <Typography>{topupData.account.AccountID}</Typography>
            <Spacer height={16} />

            <Typography>{`${i18n.t("mobile")} ${i18n.t("number")}`}</Typography>
            <Spacer height={8} />
            <Typography>{topupData.mobileNumber}</Typography>
            <Spacer height={16} />

            <Typography>{`${i18n.t("mobile")} ${i18n.t(
              "operator"
            )}`}</Typography>
            <Spacer height={8} />
            <Typography>{topupData.mobileOperator}</Typography>
            <Spacer height={16} />

            <Typography>{i18n.t("amount")}</Typography>
            <Spacer height={8} />
            <Typography>{topupData.amount}</Typography>
            <Spacer height={16} />

            <Typography>{i18n.t("amount")}</Typography>
            <Spacer height={8} />
            <Typography>{topupData.amount}</Typography>
            <Spacer height={16} />

            <Typography>{i18n.t("discount")}</Typography>
            <Spacer height={8} />
            <Typography>{topUpRequestData.DisAmount}</Typography>
            <Spacer height={16} />

            <Typography>{`${i18n.t("net")} ${i18n.t("amount")}`}</Typography>
            <Spacer height={8} />
            <Typography>{topUpRequestData.NetAmount}</Typography>
            <Spacer height={16} />

            <Typography>{i18n.t("description")}</Typography>
            <Spacer height={8} />
            <Typography>{topupData.description}</Typography>
            <Spacer height={32} />

            <Button onPress={openModal}>
              <Typography>{i18n.t("confirm")}</Typography>
            </Button>

            <TopupDetailConfirmModal
              visible={topupConfirmModalVisible}
              onClose={closeModal}
              onSubmit={onSubmit}
            />
          </>
        }
      />
    </>
  );
};
