import React, { Fragment } from "react";
import { ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../redux/rootReducer";
import { setTopUp, setTopUpError } from "../../../redux/topup/actions";

import { Spacer, Typography } from "../../../elements";
import { ImageBox } from "../../../compounds";

import { i18n } from "../../../utils/i18n";

const lists = [
  {
    key: "ooredoo",
    value: (
      <Image
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../../../assets/ooredoo_icon.png")}
      />
    ),
  },
  {
    key: "telenor",
    value: (
      <Image
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../../../assets/telenor_icon.png")}
      />
    ),
  },
  {
    key: "mytel",
    value: (
      <Image
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../../../assets/mytel_icon.png")}
      />
    ),
  },
  {
    key: "mpt",
    value: (
      <Image
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../../../assets/mpt_icon.png")}
      />
    ),
  },
  {
    key: "mec",
    value: (
      <Image
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../../../assets/mectel_icon.png")}
      />
    ),
  },
];

export const Operator = () => {
  const dispatch = useDispatch();

  const { topupData, errors } = useSelector((state: RootState) => state.topup);

  return (
    <Fragment>
      <Typography>{`${i18n.t("mobile")} ${i18n.t("operator")}`}</Typography>
      <Spacer height={8} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lists.map((list) => (
          <Fragment key={list.key}>
            <ImageBox
              active={list.key === topupData.mobileOperator ? true : false}
              onClick={() => {
                dispatch(setTopUp({ mobileOperator: list.key }));
                dispatch(setTopUpError({ mobileOperator: "" }));
              }}
              image={list.value}
            />
            <Spacer width={8} />
          </Fragment>
        ))}
      </ScrollView>
      <Typography type="error">{errors.mobileOperator}</Typography>
      <Spacer height={16} />
    </Fragment>
  );
};
