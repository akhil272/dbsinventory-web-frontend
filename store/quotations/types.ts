import { ApiReturnType } from "@Store/api";
import { registerPayload } from "@Store/auth/types";
import {
  CustomerCategoryPayload,
  getCustomersCategories,
} from "@Store/customers/types";
import { Stock } from "@Store/stocks/types";
import {
  Brand,
  BrandsPayload,
  getBrandsPayload,
  getLoadIndexesPayload,
  getSpeedRatingPayload,
  getTyreSizesPayload,
  LoadIndexPayload,
  SpeedRatingPayload,
  TyreSize,
  TyreSizePayload,
} from "@Store/tyre/types";
import { getUsersPayload } from "@Store/users/types";

export const QUOTATION_SERVICE_COST_UPDATE_INIT =
  "QUOTATION_SERVICE_COST:UPDATE:INIT";
export const QUOTATION_SERVICE_COST_UPDATE_SUCCESS =
  "QUOTATION_SERVICE_COST:UPDATE:SUCCESS";
export const QUOTATION_SERVICE_COST_UPDATE_FAIL =
  "QUOTATION_SERVICE_COST:UPDATE:FAIL";

export const USER_AND_QUOTATION_CREATE_INIT = "USER:AND:QUOTATION:CREATE:INIT";
export const USER_AND_QUOTATION_CREATE_SUCCESS =
  "USER:AND:QUOTATION:CREATE:SUCCESS";
export const USER_AND_QUOTATION_CREATE_FAIL = "USER:AND:QUOTATION:CREATE:FAIL";

export const SERVICE_DELETE_INIT = "SERVICE:DELETE:INIT";
export const SERVICE_DELETE_SUCCESS = "SERVICE:DELETE:SUCCESS";
export const SERVICE_DELETE_FAIL = "SERVICE:DELETE:FAIL";
export const SERVICE_UPDATE_INIT = "SERVICE:UPDATE:INIT";
export const SERVICE_UPDATE_SUCCESS = "SERVICE:UPDATE:SUCCESS";
export const SERVICE_UPDATE_FAIL = "SERVICE:UPDATE:FAIL";
export const SERVICE_CREATE_INIT = "SERVICE:CREATE:INIT";
export const SERVICE_CREATE_SUCCESS = "SERVICE:CREATE:SUCCESS";
export const SERVICE_CREATE_FAIL = "SERVICE:CREATE:FAIL";
export const SERVICES_FETCH_INIT = "SERVICES:FETCH:INIT";
export const SERVICES_FETCH_SUCCESS = "SERVICES:FETCH:SUCCESS";
export const SERVICES_FETCH_FAIL = "SERVICES:FETCH:FAIL";

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

export type UserQuotationProps = ViewQuotationProps &
  QuotationStatusUpdateProps;

export type updateQuotationServiceCostPayload = {
  id: number;
  price: number;
  serviceNote: string | null;
};

export type deleteServicePayload = {
  id: number;
};
export type updateServicePayload = {
  id: number;
  name: string;
};

export type QuotationStatusUpdateProps = {
  loading: boolean;
  updateQuotationById: (
    payload: updateQuotation
  ) => Promise<ApiReturnType<QuotationPayload>>;
};

export type QuotationServiceProps = {
  quotation: QuotationPayload;
  loading: boolean;
  getQuotationById: (
    data: getQuotationByIdPayload
  ) => Promise<ApiReturnType<QuotationPayload>>;
  updateQuotationServiceCostById: (
    data: updateQuotationServiceCostPayload
  ) => Promise<ApiReturnType<{}>>;
};
export type UpdateServiceProps = {
  updateService: (data: updateServicePayload) => Promise<ApiReturnType<{}>>;
};
export type DeleteServiceProps = {
  deleteService: (data: deleteServicePayload) => Promise<ApiReturnType<{}>>;
};
export type CreateServiceProps = {
  createService: (data: createServicePayload) => Promise<ApiReturnType<{}>>;
};

export type ServiceProps = {
  services: ServicePayload[];
  getServices: (
    payload: getServicesPayload
  ) => Promise<ApiReturnType<ServicePayload[]>>;
};

export type createUserAndQuotationPayload = {
  user?: registerPayload;
  userQuotes: {
    brandName: string;
    patternName?: string;
    tyreSizeValue: string;
    tyreSpeedRating?: string;
    tyreLoadIndex?: number;
    userNotes?: string;
    quantity: number;
  }[];
  serviceIds?: {
    id: number;
  }[];
  userId?: number;
};

export type ServicePayload = {
  id: number;
  name: string;
};

export type createServicePayload = {
  name: string;
};

export type getServicesPayload = {
  search?: string;
};

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
  customerCategory?: string;
  isUserDeleted?: boolean;
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
    tyreSpeedRating?: string;
    tyreLoadIndex?: number;
    userNotes?: string;
    quantity: number;
  }[];
  serviceIds: {
    id: number;
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
  brandName: string;
  patternName: string;
  tyreSizeValue: string;
  tyreSpeedRating: string;
  tyreLoadIndex: number;
  quantity: number;
  quotePrice: number;
  userNotes: string;
  adminComments: string;
};
export type userQuotePayload = {
  userQuote: userQuote;
  stocks: Stock[];
  exactStock: Stock;
};
export type QuotationService = {
  id: number;
  serviceId: number;
  quotationId: number;
  price: number;
  serviceNote: string;
  service: {
    id: number;
    name: string;
  };
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
  customer: {
    id: number;
    customerCategory: {
      name: string;
    };
    user: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      deletedAt: Date;
    };
    quotationsCount: number;
  };
  quotationServices: QuotationService[];
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
  services: ServicePayload[];
};
export type GetQuoteStateProps = {
  brands: Brand[];
  tyreSizes: TyreSize[];
  patterns: { id: number; name: string }[];
  services: ServicePayload[];
  loadIndexes: LoadIndexPayload[];
  speedRatings: SpeedRatingPayload[];
  loadingTyreData: boolean;
  loadingQuotationState: boolean;
};

export type UserQuoteStateProps = {
  userQuoteDetails: userQuotePayload;
  loading: boolean;
};
export type updateQuotation = {
  validity?: number;
  notes?: string;
  id: number;
  status?: string;
};
export type updateUserQuoteData = {
  quotePrice: number;
  id: number;
  adminComments?: string;
};

export type UpdateQuotationStateProps = {
  loading: boolean;
  quotation: QuotationPayload;
};
export type ViewQuotationDispatchProps = {
  getQuotationById: (
    data: getQuotationByIdPayload
  ) => Promise<ApiReturnType<QuotationPayload>>;
};
export type ViewQuotationStateProps = {
  loading: boolean;
  quotation: QuotationPayload;
};
export type ViewQuotationProps = ViewQuotationDispatchProps &
  ViewQuotationStateProps;
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

export type UserPayload = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
};

export type CreateUserAndQuotationDispatchProps = {
  getUsers: (payload: getUsersPayload) => Promise<ApiReturnType<UserPayload[]>>;
  getBrands: (
    payload: getBrandsPayload
  ) => Promise<ApiReturnType<BrandsPayload[]>>;
  getTyreSizes: (
    payload: getTyreSizesPayload
  ) => Promise<ApiReturnType<TyreSizePayload[]>>;
  getServices: (
    payload: getServicesPayload
  ) => Promise<ApiReturnType<ServicePayload[]>>;
  getLoadIndexes: (
    payload: getLoadIndexesPayload
  ) => Promise<ApiReturnType<LoadIndexPayload[]>>;
  getSpeedRatings: (
    payload: getSpeedRatingPayload
  ) => Promise<ApiReturnType<SpeedRatingPayload[]>>;
  createUserAndQuotation: (
    data: createUserAndQuotationPayload
  ) => Promise<ApiReturnType<createQuotationResponse>>;
};
export type CreateUserAndQuotationStateProps = {
  users: UserPayload[];
  loadingUsers: boolean;
  loadingTyreData: boolean;
  brands: Brand[];
  tyreSizes: TyreSize[];
  patterns: { id: number; name: string }[];
  services: ServicePayload[];
  loadIndexes: LoadIndexPayload[];
  speedRatings: SpeedRatingPayload[];
  loadingQuotationState: boolean;
};
export type CreateUserAndQuotationProps = CreateUserAndQuotationDispatchProps &
  CreateUserAndQuotationStateProps;

export type UserQuoteProps = UserQuoteStateProps & UserQuoteDispatchProps;
export type GetQuoteDispatchProps = {
  getBrands: (
    payload: getBrandsPayload
  ) => Promise<ApiReturnType<BrandsPayload[]>>;
  getServices: (
    payload: getServicesPayload
  ) => Promise<ApiReturnType<ServicePayload[]>>;
  getTyreSizes: (
    payload: getTyreSizesPayload
  ) => Promise<ApiReturnType<TyreSizePayload[]>>;
  getLoadIndexes: (
    payload: getLoadIndexesPayload
  ) => Promise<ApiReturnType<LoadIndexPayload[]>>;
  getSpeedRatings: (
    payload: getSpeedRatingPayload
  ) => Promise<ApiReturnType<SpeedRatingPayload[]>>;
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
  customerCategories: CustomerCategoryPayload[];
};
export type QuotationsDispatchProps = {
  getQuotations: (
    payload: getQuotationsPayload
  ) => Promise<ApiReturnType<QuotationPayload[]>>;
  getCustomerCategories: (
    data: getCustomersCategories
  ) => Promise<ApiReturnType<CustomerCategoryPayload[]>>;
};
export type QuotationProps = QuotationsStateProps & QuotationsDispatchProps;

type quotationServiceCostUpdateInit = {
  type: typeof QUOTATION_SERVICE_COST_UPDATE_INIT;
};
type quotationServiceCostUpdateSuccess = {
  type: typeof QUOTATION_SERVICE_COST_UPDATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type quotationServiceCostUpdateFail = {
  type: typeof QUOTATION_SERVICE_COST_UPDATE_FAIL;
};

type userAndQuotationCreateInit = {
  type: typeof USER_AND_QUOTATION_CREATE_INIT;
};
type userAndQuotationCreateSuccess = {
  type: typeof USER_AND_QUOTATION_CREATE_SUCCESS;
  payload: ApiReturnType<createQuotationResponse>;
};
type userAndQuotationCreateFail = {
  type: typeof USER_AND_QUOTATION_CREATE_FAIL;
};

type serviceDeleteInit = {
  type: typeof SERVICE_DELETE_INIT;
};
type serviceDeleteSuccess = {
  type: typeof SERVICE_DELETE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type serviceDeleteFail = {
  type: typeof SERVICE_DELETE_FAIL;
};
type serviceUpdateInit = {
  type: typeof SERVICE_UPDATE_INIT;
};
type serviceUpdateSuccess = {
  type: typeof SERVICE_UPDATE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type serviceUpdateFail = {
  type: typeof SERVICE_UPDATE_FAIL;
};
type serviceCreateInit = {
  type: typeof SERVICE_CREATE_INIT;
};
type serviceCreateSuccess = {
  type: typeof SERVICE_CREATE_SUCCESS;
  payload: ApiReturnType<createQuotationResponse>;
};
type serviceCreateFail = {
  type: typeof SERVICE_CREATE_FAIL;
};

type servicesFetchFail = {
  type: typeof SERVICES_FETCH_INIT;
};
type servicesFetchSuccess = {
  type: typeof SERVICES_FETCH_SUCCESS;
  payload: ApiReturnType<ServicePayload[]>;
};
type servicesFetchInit = {
  type: typeof SERVICES_FETCH_FAIL;
};

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
  | quotationServiceCostUpdateInit
  | quotationServiceCostUpdateSuccess
  | quotationServiceCostUpdateFail
  | userAndQuotationCreateInit
  | userAndQuotationCreateSuccess
  | userAndQuotationCreateFail
  | serviceDeleteInit
  | serviceDeleteSuccess
  | serviceDeleteFail
  | serviceUpdateInit
  | serviceUpdateSuccess
  | serviceUpdateFail
  | serviceCreateInit
  | serviceCreateSuccess
  | serviceCreateFail
  | servicesFetchInit
  | servicesFetchSuccess
  | servicesFetchFail
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
