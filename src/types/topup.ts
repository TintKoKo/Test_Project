import { account } from "./account";

export interface topup {
  account?: account;
  mobileNumber?: string;
  mobileOperator?: string;
  amount?: number;
  description?: string;
  password?: string;
}

export interface topup_response {
  TransactionStatus: string;
  ErrorCode: string;
  ErrorMessage?: string;
  PartnerAmount: string;
  TransactionAmount: string;
  NetAmount: string;
  DisAmount: string;
  TotalAmount: string;
  ThirdPartyID: string;
  Detail: unknown;
  RespCode: string;
  RespDescription: string;
}

export interface topup_confirm_response {
  TransactionID: string;
  TransactionStatus: string;
  ErrorCode: string;
  ErrorMessage: string;
  PartnerAmount: string;
  TransactionAmount: string;
  Detail: unknown;
  EBARefNo: string;
  PartnerRefNo: string;
  RespCode: string;
  RespDescription: string;
}
