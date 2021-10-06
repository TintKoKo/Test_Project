import React, { FC } from "react";
import { Modal, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { setTopUp, setTopUpError } from "../../../redux/topup/actions";
import { RootState } from "../../../redux/rootReducer";

import { Button, Spacer, Typography } from "../../../elements";

import { i18n } from "../../../utils/i18n";

import styles from "./styles";

interface TopupDetailConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const TopupDetailConfirmModal: FC<TopupDetailConfirmModalProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const { topupData, errors } = useSelector((state: RootState) => state.topup);

  const onSubmitData = async () => {
    if (!topupData.password) {
      dispatch(setTopUpError({ password: "Required Password." }));
      return;
    }
    if (topupData?.password.length < 4) {
      dispatch(setTopUpError({ password: "Minimun 4 characters." }));
      return;
    }
    await onSubmit();
  };

  return (
    <View>
      <Modal visible={visible} onRequestClose={onClose} transparent={true}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Typography type="primary" varient="subheading" align="center">
              {i18n.t("please-fill-transaction-password")}
            </Typography>
            <TextInput
              secureTextEntry
              style={styles.input}
              value={topupData.password}
              onChangeText={(password) => {
                dispatch(setTopUp({ password }));
                dispatch(setTopUpError({ password: "" }));
              }}
            />
            {errors.password ? (
              <Typography type="error">{errors.password}</Typography>
            ) : null}
            <Spacer height={8} />
            <View style={styles.buttonWrapper}>
              <Button
                onPress={onClose}
                styles={[styles.button, styles.cancelButton]}
              >
                <Typography varient="caption">Cancel</Typography>
              </Button>
              <Button onPress={onSubmitData} styles={styles.button}>
                <Typography varient="caption">OK</Typography>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
