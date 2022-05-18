import { ApiReturnType } from "@Store/api";
import { SelectOption } from "@Store/common/types";

export const BRAND_CREATE_INIT = "BRAND:CREATE:INIT";
export const BRAND_CREATE_SUCCESS = "BRAND:CREATE:SUCCESS";
export const BRAND_CREATE_FAIL = "BRAND:CREATE:FAIL";
export const BRANDS_FETCH_INIT = "BRANDS:FETCH:INIT";
export const BRANDS_FETCH_SUCCESS = "BRANDS:FETCH:SUCCESS";
export const BRANDS_FETCH_FAIL = "BRANDS:FETCH:FAIL";

export type getBrandsPayload = {
  search?: string;
};
export type Pattern = {
  id: string;
  name: string;
};
export type BrandsPayload = {
  id: string;
  name: string;
  patterns: Pattern[];
};
export type Brand = BrandsPayload & SelectOption;

export type TyreData = {
  loading: boolean;
  brands: Brand[];
};

export type createBrandPayload = {
  name: string;
};

export type createBrandResponse = {};

export type TyresDispatchProps = {
  getBrands: (
    payload: getBrandsPayload
  ) => Promise<ApiReturnType<BrandsPayload[]>>;
  createBrand: (
    data: createBrandPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
};

export type TyresStateProps = {
  brands: Brand[];
};

export type TyresDataProps = TyresStateProps & TyresDispatchProps;

type brandCreateInit = {
  type: typeof BRAND_CREATE_INIT;
};
type brandCreateSuccess = {
  type: typeof BRAND_CREATE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type brandCreateFail = {
  type: typeof BRAND_CREATE_FAIL;
};
type brandsFetchInit = {
  type: typeof BRANDS_FETCH_INIT;
};
type brandsFetchSuccess = {
  type: typeof BRANDS_FETCH_SUCCESS;
  payload: ApiReturnType<BrandsPayload[]>;
};
type brandsFetchFail = {
  type: typeof BRANDS_FETCH_FAIL;
};

export type TyreDataActionTypes =
  | brandCreateInit
  | brandCreateSuccess
  | brandCreateFail
  | brandsFetchInit
  | brandsFetchSuccess
  | brandsFetchFail;
