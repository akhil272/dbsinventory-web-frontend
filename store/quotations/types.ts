import { ApiReturnType } from "@Store/api";
import { Stock } from "@Store/stocks/types";
import {
  Brand,
  BrandsPayload,
  getBrandsPayload,
  getTyreSizesPayload,
  TyreSize,
  TyreSizePayload,
} from "@Store/tyre/types";

export const QUOTATION_SEND_INIT = "QUOTATION:SEND:INIT";
export const QUOTATION_SEND_SUCCESS = "QUOTATION:SEND:SUCCESS";
export const QUOTATION_SEND_FAIL = "QUOTATION:SEND:FAIL";

export const USER_QUOTE_BY_ID_UPDATE_INIT = "USER_QUOTE_BY_ID:UPDATE:INIT";
export const USER_QUOTE_BY_ID_UPDATE_SUCCESS =
  "USER_QUOTE_BY_ID:UPDATE:SUCCESS";
export const USER_QUOTE_BY_ID_UPDATE_FAIL = "USER_QUOTE_BY_ID:UPDATE:FAIL";
export const USER_QUOTE_BY_ID_FETCH_INIT = "USER_QUOTE_BY_ID:FETCH:INIT";
export const USER_QUOTE_BY_ID_FETCH_SUCCESS = "USER_QUOTE_BY_ID:FETCH:SUCCESS";
export const USER_QUOTE_BY_ID_FETCH_FAIL = "USER_QUOTE_BY_ID:FETCH:FAIL";

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

export type sendQuotationToUserPayload = {
  quotationId: number;
  whatsApp: boolean;
  email: boolean;
  sms: boolean;
  callback: boolean;
};

export type getQuotationsPayload = {
  search?: string;
  status?: string;
  take?: string;
  page?: string;
  sortBy?: string;
};

export type getUserQuoteByIdPayload = {
  id: number;
};
export type getQuotationByIdPayload = {
  id: number;
};

export type createQuotationPayload = {
  userQuotes: {
    brandName: string;
    patternName?: string;
    tyreSizeValue: string;
    speedRating?: string;
    loadIndex?: number;
    notes?: string;
    quantity: number;
  }[];
};

export type Quotation = {
  id: number;
  status: string;
  price: number;
  notes: string;
  createdAt: Date;
  count: number;
  validity: number;
  user: {
    firstName: string;
    lastName: string;
  };
};

export type QuotationsFetchResponse = {
  quotations: Quotation[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
  };
};

export type userQuote = {
  id: number;
  brand: string;
  pattern: string;
  tyreSize: string;
  speedRating: string;
  loadIndex: number;
  quantity: number;
  price: number;
  notes: string;
  adminComments: string;
};
export type userQuotePayload = {
  userQuote: userQuote;
  stocks: Stock[];
  exactStock: Stock;
};
export type QuotationPayload = {
  id: number;
  status: string;
  price: number;
  notes: string;
  createdAt: Date;
  validity: number;
  count: number;
  userQuotes: userQuote[];
  user: {
    firstName: string;
    lastName: string;
  };
};

export type createQuotationResponse = {};

export type Quotations = {
  loading: boolean;
  quotations: QuotationPayload[];
  total: number;
  page: number;
  lastPage: number;
  quotation: QuotationPayload;
  userQuoteDetails: userQuotePayload;
};
export type GetQuoteStateProps = {
  brands: Brand[];
  tyreSizes: TyreSize[];
  patterns: { id: number; name: string }[];
};

export type UserQuoteStateProps = {
  userQuoteDetails: userQuotePayload;
  loading: boolean;
};
export type updateQuotation = {
  validity: number;
  notes?: string;
  id: number;
};
export type updateUserQuoteData = {
  price: number;
  id: number;
  adminComments?: string;
};

export type UpdateQuotationStateProps = {
  loading: boolean;
  quotation: QuotationPayload;
};

export type UpdateQuotationDispatchProps = {
  getQuotationById: (
    payload: getQuotationByIdPayload
  ) => Promise<ApiReturnType<QuotationPayload>>;
  updateQuotationById: (
    payload: updateQuotation
  ) => Promise<ApiReturnType<QuotationPayload>>;
  sendQuotationToUser: (
    data: sendQuotationToUserPayload
  ) => Promise<ApiReturnType<createQuotationResponse>>;
};

export type UpdateQuotationProps = UpdateQuotationDispatchProps &
  UpdateQuotationStateProps;

export type UserQuoteDispatchProps = {
  getUserQuoteById: (
    payload: getUserQuoteByIdPayload
  ) => Promise<ApiReturnType<userQuotePayload>>;
  updateUserQuoteById: (
    data: updateUserQuoteData
  ) => Promise<ApiReturnType<userQuote>>;
};

export type UserQuoteProps = UserQuoteStateProps & UserQuoteDispatchProps;
export type GetQuoteDispatchProps = {
  getBrands: (
    payload: getBrandsPayload
  ) => Promise<ApiReturnType<BrandsPayload[]>>;
  getTyreSizes: (
    payload: getTyreSizesPayload
  ) => Promise<ApiReturnType<TyreSizePayload[]>>;
  createQuotation: (
    data: createQuotationPayload
  ) => Promise<ApiReturnType<createQuotationResponse>>;
};
export type GetQuoteProps = GetQuoteStateProps & GetQuoteDispatchProps;

export type QuotationsStateProps = {
  quotations: QuotationPayload[];
  loading: boolean;
  total: number;
  page: number;
  lastPage: number;
};
export type QuotationsDispatchProps = {
  getQuotations: (
    payload: getQuotationsPayload
  ) => Promise<ApiReturnType<QuotationPayload[]>>;
};
export type QuotationProps = QuotationsStateProps & QuotationsDispatchProps;

type quotationSendInit = {
  type: typeof QUOTATION_SEND_INIT;
};
type quotationSendSuccess = {
  type: typeof QUOTATION_SEND_SUCCESS;
  payload: ApiReturnType<createQuotationResponse>;
};
type quotationSendFail = {
  type: typeof QUOTATION_SEND_FAIL;
};

type userQuoteByIdUpdateInit = {
  type: typeof USER_QUOTE_BY_ID_UPDATE_INIT;
};
type userQuoteByIdUpdateSuccess = {
  type: typeof USER_QUOTE_BY_ID_UPDATE_SUCCESS;
  payload: ApiReturnType<userQuotePayload>;
};
type userQuoteByIdUpdateFail = {
  type: typeof USER_QUOTE_BY_ID_UPDATE_FAIL;
};
type userQuoteByIdFetchInit = {
  type: typeof USER_QUOTE_BY_ID_FETCH_INIT;
};
type userQuoteByIdFetchSuccess = {
  type: typeof USER_QUOTE_BY_ID_FETCH_SUCCESS;
  payload: ApiReturnType<userQuotePayload>;
};
type userQuoteByIdFetchFail = {
  type: typeof USER_QUOTE_BY_ID_FETCH_FAIL;
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
  payload: ApiReturnType<QuotationsFetchResponse>;
};
type quotationsFetchInit = {
  type: typeof QUOTATIONS_FETCH_FAIL;
};

export type QuotationActionTypes =
  | quotationSendInit
  | quotationSendSuccess
  | quotationSendFail
  | userQuoteByIdUpdateInit
  | userQuoteByIdUpdateSuccess
  | userQuoteByIdUpdateFail
  | userQuoteByIdFetchInit
  | userQuoteByIdFetchSuccess
  | userQuoteByIdFetchFail
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
