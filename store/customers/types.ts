import { ApiReturnType } from "@Store/api";
export const CUSTOMER_CATEGORY_UPDATE_INIT = "CUSTOMER_CATEGORY:UPDATE:INIT";
export const CUSTOMER_CATEGORY_UPDATE_SUCCESS =
  "CUSTOMER_CATEGORY:UPDATE:SUCCESS";
export const CUSTOMER_CATEGORY_UPDATE_FAIL = "CUSTOMER_CATEGORY:UPDATE:FAIL";
export const CUSTOMER_CATEGORY_CREATE_INIT = "CUSTOMER_CATEGORY:CREATE:INIT";
export const CUSTOMER_CATEGORY_CREATE_SUCCESS =
  "CUSTOMER_CATEGORY:CREATE:SUCCESS";
export const CUSTOMER_CATEGORY_CREATE_FAIL = "CUSTOMER_CATEGORY:CREATE:FAIL";
export const CUSTOMER_CATEGORIES_FETCH_INIT = "CUSTOMER_CATEGORIES:FETCH:INIT";
export const CUSTOMER_CATEGORIES_FETCH_SUCCESS =
  "CUSTOMER_CATEGORIES:FETCH:SUCCESS";
export const CUSTOMER_CATEGORIES_FETCH_FAIL = "CUSTOMER_CATEGORIES:FETCH:FAIL";

export type getCustomersCategories = {
  search?: string;
};

export type createCustomerCategoryResponse = {};
export type CustomerCategoryPayload = {
  id: number;
  name: string;
};

export type createCustomerCategoryPayload = {
  name: string;
};

export type Customer = {
  customerCategories: CustomerCategoryPayload[];
  loading: boolean;
};

export type updateCustomerCategoryPayload = {
  customerId: number;
  customerCategoryId: number;
};

export type UpdateCustomerCategoryProps = {
  loading: boolean;
  customerCategories: CustomerCategoryPayload[];
  getCustomerCategories: (
    data: getCustomersCategories
  ) => Promise<ApiReturnType<CustomerCategoryPayload[]>>;
  createCustomerCategory: (
    data: createCustomerCategoryPayload
  ) => Promise<ApiReturnType<createCustomerCategoryResponse>>;
  updateCustomerCategory: (
    data: updateCustomerCategoryPayload
  ) => Promise<ApiReturnType<createCustomerCategoryResponse>>;
};

type customerCategoryUpdateInit = {
  type: typeof CUSTOMER_CATEGORY_UPDATE_INIT;
};
type customerCategoryUpdateSuccess = {
  type: typeof CUSTOMER_CATEGORY_UPDATE_SUCCESS;
  payload: ApiReturnType<createCustomerCategoryResponse>;
};
type customerCategoryUpdateFail = {
  type: typeof CUSTOMER_CATEGORY_UPDATE_FAIL;
};

type customerCategoryCreateInit = {
  type: typeof CUSTOMER_CATEGORY_CREATE_INIT;
};
type customerCategoryCreateSuccess = {
  type: typeof CUSTOMER_CATEGORY_CREATE_SUCCESS;
  payload: ApiReturnType<createCustomerCategoryResponse>;
};
type customerCategoryCreateFail = {
  type: typeof CUSTOMER_CATEGORY_CREATE_FAIL;
};

type customerCategoriesFetchInit = {
  type: typeof CUSTOMER_CATEGORIES_FETCH_INIT;
};
type customerCategoriesFetchSuccess = {
  type: typeof CUSTOMER_CATEGORIES_FETCH_SUCCESS;
  payload: ApiReturnType<CustomerCategoryPayload[]>;
};
type customerCategoriesFetchFail = {
  type: typeof CUSTOMER_CATEGORIES_FETCH_FAIL;
};

export type CustomerActionTypes =
  | customerCategoryUpdateInit
  | customerCategoryUpdateSuccess
  | customerCategoryUpdateFail
  | customerCategoryCreateInit
  | customerCategoryCreateSuccess
  | customerCategoryCreateFail
  | customerCategoriesFetchInit
  | customerCategoriesFetchSuccess
  | customerCategoriesFetchFail;
