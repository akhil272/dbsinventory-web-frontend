import { ApiReturnType } from "@Store/api";

export const QUOTATION_UPDATE_INIT = "QUOTATION:UPDATE:INIT";
export const QUOTATION_UPDATE_SUCCESS = "QUOTATION:UPDATE:SUCCESS";
export const QUOTATION_UPDATE_FAIL = "QUOTATION:UPDATE:FAIL";
export const QUOTATION_BY_ID_FETCH_INIT = "QUOTATION_BY_ID:FETCH:INIT";
export const QUOTATION_BY_ID_FETCH_SUCCESS = "QUOTATION_BY_ID:FETCH:SUCCESS";
export const QUOTATION_BY_ID_FETCH_FAIL = "QUOTATION_BY_ID:FETCH:FAIL";
export const QUOTATION_CREATE_INIT = "QUOTATION:CREATE:INIT";
export const QUOTATION_CREATE_SUCCESS = "QUOTATION:CREATE:SUCCESS";
export const QUOTATION_CREATE_FAIL = "QUOTATION:CREATE:FAIL";
export const QUOTATIONS_FETCH_INIT = "QUOTATIONS:FETCH:INIT";
export const QUOTATIONS_FETCH_SUCCESS = "QUOTATIONS:FETCH:SUCCESS";
export const QUOTATIONS_FETCH_FAIL = "QUOTATIONS:FETCH:FAIL";

export type getQuotationByIdPayload = {
  id: number;
};

export type userQuote = {
  brand: string;
  pattern?: string;
  tyre_size: string;
  speed_rating?: string;
  load_index?: number;
  notes?: string;
  quantity: number;
};

export type Quotation = {
  id: number;
  status: string;
  price: number;
  notes: string;
  created_at: Date;
  count: number;
  user: {
    fist_name: string;
    last_name: string;
  };
};

export type QuotationsPayload = {
  quotations: Quotation[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
};
export type userQuotes = {
  id: number;
  brand: string;
  pattern?: string;
  tyre_size: string;
  speed_rating?: string;
  load_index?: number;
  notes?: string;
  quantity: number;
  price: number;
};
export type QuotationPayload = {
  id: number;
  status: string;
  price: number;
  notes: string;
  created_at: Date;
  count: number;
  userQuotes: userQuotes[];
};
export type createQuotationPayload = userQuote[];

export type createQuotationResponse = {};
export type Quotations = {
  loading: boolean;
  quotations: QuotationsPayload[];
  total: number;
  page: number;
  last_page: number;
  quotation: QuotationPayload;
};

type quotationUpdateInit = {
  type: typeof QUOTATION_UPDATE_INIT;
};
type quotationUpdateSuccess = {
  type: typeof QUOTATION_UPDATE_SUCCESS;
  payload: ApiReturnType<createQuotationResponse>;
};
type quotationUpdateFail = {
  type: typeof QUOTATION_UPDATE_FAIL;
};
type quotationByIdFetchInit = {
  type: typeof QUOTATION_BY_ID_FETCH_INIT;
};
type quotationByIdFetchSuccess = {
  type: typeof QUOTATION_BY_ID_FETCH_SUCCESS;
  payload: ApiReturnType<QuotationPayload>;
};
type quotationByIdFetchFail = {
  type: typeof QUOTATION_BY_ID_FETCH_FAIL;
};
type quotationCreateInit = {
  type: typeof QUOTATION_CREATE_INIT;
};
type quotationCreateSuccess = {
  type: typeof QUOTATION_CREATE_SUCCESS;
  payload: ApiReturnType<createQuotationResponse>;
};
type quotationCreateFail = {
  type: typeof QUOTATION_CREATE_FAIL;
};

type quotationsFetchFail = {
  type: typeof QUOTATIONS_FETCH_INIT;
};
type quotationsFetchSuccess = {
  type: typeof QUOTATIONS_FETCH_SUCCESS;
  payload: ApiReturnType<QuotationsPayload>;
};
type quotationsFetchInit = {
  type: typeof QUOTATIONS_FETCH_FAIL;
};

export type QuotationActionTypes =
  | quotationUpdateInit
  | quotationUpdateSuccess
  | quotationUpdateFail
  | quotationByIdFetchInit
  | quotationByIdFetchSuccess
  | quotationByIdFetchFail
  | quotationCreateInit
  | quotationCreateSuccess
  | quotationCreateFail
  | quotationsFetchInit
  | quotationsFetchSuccess
  | quotationsFetchFail;
