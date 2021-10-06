export interface account {
  AccountID: string;
  AccountType: string;
  AccountDesc: string;
  Currency: string;
  BranchCode: string;
  AvailableBal: string;
}

export interface login_response {
  RespCode: string;
  RespDescription: string;
  UserName: string;
  lstAccount: account[];
}
