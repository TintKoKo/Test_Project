import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";

import { setTopUp, setTopUpError } from "../redux/topup/actions";

import { Spacer, Typography } from "../elements";
import { Card } from "../compounds";
import { useContacts } from "../hooks";
import { MainLayout } from "../layouts";

import { contact } from "../types";

import { i18n } from "../utils/i18n";

export const Contact = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { data } = useContacts();

  if (!data) return <Typography>Loading...</Typography>;

  const goBack = () => navigation.goBack();

  const renderItem = ({ item }: { item: contact }) => (
    <Card
      title={item.name}
      description={item.phoneNumber}
      onClick={() => {
        dispatch(setTopUp({ mobileNumber: item.phoneNumber }));
        dispatch(setTopUpError({ mobileNumber: "" }));
        goBack();
      }}
    />
  );

  const separator = () => <Spacer height={8} />;

  return (
    <MainLayout
      title={`${i18n.t("mobile")} ${i18n.t("topup")}`}
      showBackButton
      onBack={goBack}
      content={
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={separator}
          ListFooterComponent={<Spacer height={100} />}
        />
      }
    />
  );
};
