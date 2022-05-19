import { ApiReturnType } from "@Store/api";

export const TYRE_DETAIL_CREATE_INIT = "TYRE_DETAIL:CREATE:INIT";
export const TYRE_DETAIL_CREATE_SUCCESS = "TYRE_DETAIL:CREATE:SUCCESS";
export const TYRE_DETAIL_CREATE_FAIL = "TYRE_DETAIL:CREATE:FAIL";
export const TYRE_DETAILS_FETCH_INIT = "TYRE_DETAILS:FETCH:INIT";
export const TYRE_DETAILS_FETCH_SUCCESS = "TYRE_DETAILS:FETCH:SUCCESS";
export const TYRE_DETAILS_FETCH_FAIL = "TYRE_DETAILS:FETCH:FAIL";

export const TYRE_SIZE_CREATE_INIT = "TYRE_SIZE:CREATE:INIT";
export const TYRE_SIZE_CREATE_SUCCESS = "TYRE_SIZE:CREATE:SUCCESS";
export const TYRE_SIZE_CREATE_FAIL = "TYRE_SIZE:CREATE:FAIL";
export const TYRE_SIZES_FETCH_INIT = "TYRE_SIZES:FETCH:INIT";
export const TYRE_SIZES_FETCH_SUCCESS = "TYRE_SIZES:FETCH:SUCCESS";
export const TYRE_SIZES_FETCH_FAIL = "TYRE_SIZES:FETCH:FAIL";

export const PATTERN_CREATE_INIT = "PATTERN:CREATE:INIT";
export const PATTERN_CREATE_SUCCESS = "PATTERN:CREATE:SUCCESS";
export const PATTERN_CREATE_FAIL = "PATTERN:CREATE:FAIL";

export const BRAND_CREATE_INIT = "BRAND:CREATE:INIT";
export const BRAND_CREATE_SUCCESS = "BRAND:CREATE:SUCCESS";
export const BRAND_CREATE_FAIL = "BRAND:CREATE:FAIL";
export const BRANDS_FETCH_INIT = "BRANDS:FETCH:INIT";
export const BRANDS_FETCH_SUCCESS = "BRANDS:FETCH:SUCCESS";
export const BRANDS_FETCH_FAIL = "BRANDS:FETCH:FAIL";

export type createTyreDetailResponse = {};

export type createTyreDetailPayload = {
  tyre_size_id: number;
  pattern_id: number;
};

export type TyreDetailPayload = {
  id: number;
  tyreSizeId: number;
  patternId: number;
  tyreSize: TyreSize;
  pattern: {
    id: number;
    name: string;
    brand: {
      id: number;
      name: string;
    };
  };
};

export type getTyreDetailsPayload = {
  search?: string;
};
export type getTyreSizePayload = {
  search?: string;
};

export type createTyreSizeResponse = {};
export type createTyreSizePayload = {
  size: string;
};

export type TyreSizePayload = {
  id: number;
  size: string;
};

export type getTyreSizesPayload = {
  search?: string;
};

export type createPatternPayload = {
  name: string;
  brand_id: number;
};

export type createPatternResponse = {};

export type getBrandsPayload = {
  search?: string;
};
export type Pattern = {
  id: number;
  name: string;
};
export type BrandsPayload = {
  id: number;
  name: string;
  patterns: Pattern[];
};
export type TyreDetail = TyreDetailPayload;
export type Brand = BrandsPayload;
export type TyreSize = TyreSizePayload;
export type TyreData = {
  loading: boolean;
  brands: Brand[];
  tyreSizes: TyreSize[];
  tyreDetails: TyreDetail[];
};

export type createBrandPayload = {
  name: string;
};

export type createBrandResponse = {};

export type TyresDispatchProps = {
  createTyreDetail: (
    data: createTyreDetailPayload
  ) => Promise<ApiReturnType<createTyreDetailResponse>>;
  getTyreDetails: (
    payload: getTyreDetailsPayload
  ) => Promise<ApiReturnType<TyreDetailPayload[]>>;
  createTyreSize: (
    data: createTyreSizePayload
  ) => Promise<ApiReturnType<createTyreSizeResponse>>;
  getTyreSizes: (
    payload: getTyreSizesPayload
  ) => Promise<ApiReturnType<TyreSizePayload[]>>;
  getBrands: (
    payload: getBrandsPayload
  ) => Promise<ApiReturnType<BrandsPayload[]>>;
  createBrand: (
    data: createBrandPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
  createPattern: (
    data: createPatternPayload
  ) => Promise<ApiReturnType<createPatternResponse>>;
};

export type TyresStateProps = {
  brands: Brand[];
  tyreSizes: TyreSize[];
  tyreDetails: TyreDetail[];
};

export type TyresDataProps = TyresStateProps & TyresDispatchProps;

type tyreDetailCreateInit = {
  type: typeof TYRE_DETAIL_CREATE_INIT;
};
type tyreDetailCreateSuccess = {
  type: typeof TYRE_DETAIL_CREATE_SUCCESS;
  payload: ApiReturnType<createTyreDetailResponse>;
};
type tyreDetailCreateFail = {
  type: typeof TYRE_DETAIL_CREATE_FAIL;
};

type tyreDetailsFetchInit = {
  type: typeof TYRE_DETAILS_FETCH_INIT;
};
type tyreDetailsFetchSuccess = {
  type: typeof TYRE_DETAILS_FETCH_SUCCESS;
  payload: ApiReturnType<TyreDetailPayload[]>;
};
type tyreDetailsFetchFail = {
  type: typeof TYRE_DETAILS_FETCH_FAIL;
};

type tyreSizesFetchInit = {
  type: typeof TYRE_SIZES_FETCH_INIT;
};
type tyreSizesFetchSuccess = {
  type: typeof TYRE_SIZES_FETCH_SUCCESS;
  payload: ApiReturnType<TyreSizePayload[]>;
};
type tyreSizesFetchFail = {
  type: typeof TYRE_SIZES_FETCH_FAIL;
};
type tyreSizeCreateInit = {
  type: typeof TYRE_SIZE_CREATE_INIT;
};
type tyreSizeCreateSuccess = {
  type: typeof TYRE_SIZE_CREATE_SUCCESS;
  payload: ApiReturnType<createTyreSizeResponse>;
};
type tyreSizeCreateFail = {
  type: typeof TYRE_SIZE_CREATE_FAIL;
};

type patternCreateInit = {
  type: typeof PATTERN_CREATE_INIT;
};
type patternCreateSuccess = {
  type: typeof PATTERN_CREATE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type patternCreateFail = {
  type: typeof PATTERN_CREATE_FAIL;
};

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
  | tyreDetailCreateInit
  | tyreDetailCreateSuccess
  | tyreDetailCreateFail
  | tyreDetailsFetchInit
  | tyreDetailsFetchSuccess
  | tyreDetailsFetchFail
  | tyreSizeCreateInit
  | tyreSizeCreateSuccess
  | tyreSizeCreateFail
  | tyreSizesFetchInit
  | tyreSizesFetchSuccess
  | tyreSizesFetchFail
  | patternCreateInit
  | patternCreateSuccess
  | patternCreateFail
  | brandCreateInit
  | brandCreateSuccess
  | brandCreateFail
  | brandsFetchInit
  | brandsFetchSuccess
  | brandsFetchFail;
