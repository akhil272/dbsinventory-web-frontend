import { ApiReturnType } from "@Store/api";

export const PRODUCT_LINE_CREATE_INIT = "PRODUCT_LINE:CREATE:INIT";
export const PRODUCT_LINE_CREATE_SUCCESS = "PRODUCT_LINE:CREATE:SUCCESS";
export const PRODUCT_LINE_CREATE_FAIL = "PRODUCT_LINE:CREATE:FAIL";
export const PRODUCT_LINES_FETCH_INIT = "PRODUCT_LINES:FETCH:INIT";
export const PRODUCT_LINES_FETCH_SUCCESS = "PRODUCT_LINES:FETCH:SUCCESS";
export const PRODUCT_LINES_FETCH_FAIL = "PRODUCT_LINES:FETCH:FAIL";

export const LOAD_INDEX_CREATE_INIT = "LOAD_INDEX:CREATE:INIT";
export const LOAD_INDEX_CREATE_SUCCESS = "LOAD_INDEX:CREATE:SUCCESS";
export const LOAD_INDEX_CREATE_FAIL = "LOAD_INDEX:CREATE:FAIL";
export const LOAD_INDEXES_FETCH_INIT = "LOAD_INDEXES:FETCH:INIT";
export const LOAD_INDEXES_FETCH_SUCCESS = "LOAD_INDEXES:FETCH:SUCCESS";
export const LOAD_INDEXES_FETCH_FAIL = "LOAD_INDEXES:FETCH:FAIL";

export const SPEED_RATING_CREATE_INIT = "SPEED_RATING:CREATE:INIT";
export const SPEED_RATING_CREATE_SUCCESS = "SPEED_RATING:CREATE:SUCCESS";
export const SPEED_RATING_CREATE_FAIL = "SPEED_RATING:CREATE:FAIL";
export const SPEED_RATINGS_FETCH_INIT = "SPEED_RATINGS:FETCH:INIT";
export const SPEED_RATINGS_FETCH_SUCCESS = "SPEED_RATINGS:FETCH:SUCCESS";
export const SPEED_RATINGS_FETCH_FAIL = "SPEED_RATINGS:FETCH:FAIL";

export const TYRE_DETAIL_SIZE_CREATE_INIT = "TYRE_DETAIL_SIZE:CREATE:INIT";
export const TYRE_DETAIL_SIZE_CREATE_SUCCESS =
  "TYRE_DETAIL_SIZE:CREATE:SUCCESS";
export const TYRE_DETAIL_SIZE_CREATE_FAIL = "TYRE_DETAIL_SIZES:CREATE:FAIL";
export const TYRE_DETAIL_SIZES_FETCH_INIT = "TYRE_DETAILS_SIZES:FETCH:INIT";
export const TYRE_DETAIL_SIZES_FETCH_SUCCESS =
  "TYRE_DETAILS_SIZE:FETCH:SUCCESS";
export const TYRE_DETAIL_SIZES_FETCH_FAIL = "TYRE_DETAILS_SIZES:FETCH:FAIL";

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

export const BRAND_DELETE_INIT = "BRAND:DELETE:INIT";
export const BRAND_DELETE_SUCCESS = "BRAND:DELETE:SUCCESS";
export const BRAND_DELETE_FAIL = "BRAND:DELETE:FAIL";
export const BRAND_UPDATE_INIT = "BRAND:UPDATE:INIT";
export const BRAND_UPDATE_SUCCESS = "BRAND:UPDATE:SUCCESS";
export const BRAND_UPDATE_FAIL = "BRAND:UPDATE:FAIL";
export const BRAND_CREATE_INIT = "BRAND:CREATE:INIT";
export const BRAND_CREATE_SUCCESS = "BRAND:CREATE:SUCCESS";
export const BRAND_CREATE_FAIL = "BRAND:CREATE:FAIL";
export const BRANDS_FETCH_INIT = "BRANDS:FETCH:INIT";
export const BRANDS_FETCH_SUCCESS = "BRANDS:FETCH:SUCCESS";
export const BRANDS_FETCH_FAIL = "BRANDS:FETCH:FAIL";

export type deleteBrandPayload = {
  id: number;
};

export type DeleteBrandProps = {
  deleteBrand: (
    data: deleteBrandPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
};

export type updateBrandPayload = {
  id: number;
  name: string;
};

export type CreateBrandProps = {
  createBrand: (
    data: createBrandPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
};

export type createTyreDetailResponse = {
  id: number;
  tyreSizeId: number;
  patternId: number;
  pattern: {
    id: number;
    name: string;
  };
  tyreSize: {
    id: number;
    value: string;
  };
};

export type createProductLinePayload = {
  name: string;
};

export type createTyreDetailSizePayload = {
  tyreSizeValue: string;
  patternId: number;
};
export type createTyreDetailPayload = {
  tyreSizeId: number;
  patternId: number;
};

export type TyreDetailSizePayload = {
  id: number;
  tyreSizeId: number;
  patternId: number;
  tyreSize: TyreSize;
  pattern: {
    id: number;
    name: string;
  };
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

export type getProductLinePayload = {
  search?: string;
};
export type getTyreDetailSizesPayload = {
  search?: string;
};
export type getTyreDetailsPayload = {
  search?: string;
};
export type getTyreSizePayload = {
  search?: string;
};

export type createTyreSizeResponse = {};
export type createTyreSizePayload = {
  tyreSizeValue: string;
};

export type TyreSizePayload = {
  id: number;
  value: string;
};

export type getTyreSizesPayload = {
  search?: string;
};

export type createPatternPayload = {
  name: string;
  brandId: number;
};

export type createPatternResponse = {
  id: number;
  name: string;
};

export type getLoadIndexesPayload = {
  search?: string;
};
export type getSpeedRatingPayload = {
  search?: string;
};
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
export type LoadIndexPayload = {
  id: number;
  value: number;
};
export type SpeedRatingPayload = {
  id: number;
  value: string;
};
export type ProductLinePayload = {
  id: number;
  name: string;
};
export type TyreDetail = TyreDetailPayload;
export type Brand = BrandsPayload;
export type TyreSize = TyreSizePayload;
export type SpeedRating = SpeedRatingPayload;
export type LoadIndexes = LoadIndexPayload;
export type ProductLine = {
  id: number;
  name: string;
};
export type TyreData = {
  loading: boolean;
  brands: Brand[];
  tyreSizes: TyreSize[];
  tyreDetails: TyreDetail[];
  speedRatings: SpeedRating[];
  loadIndexes: LoadIndexes[];
  productLines: ProductLine[];
};

export type createLoadIndexPayload = {
  value: number;
};
export type createSpeedRatingPayload = {
  value: string;
};

export type createBrandPayload = {
  name: string;
};

export type UpdateBrandProps = {
  updateBrand: (
    payload: updateBrandPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
};

export type createBrandResponse = {};

export type TyresDispatchProps = {
  getProductLines: (
    payload: getProductLinePayload
  ) => Promise<ApiReturnType<ProductLinePayload[]>>;
  createProductLine: (
    data: createProductLinePayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
  getLoadIndexes: (
    payload: getLoadIndexesPayload
  ) => Promise<ApiReturnType<LoadIndexPayload[]>>;
  createLoadIndex: (
    data: createLoadIndexPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
  getSpeedRatings: (
    payload: getSpeedRatingPayload
  ) => Promise<ApiReturnType<SpeedRatingPayload[]>>;
  createSpeedRating: (
    data: createSpeedRatingPayload
  ) => Promise<ApiReturnType<createBrandResponse>>;
  createTyreDetailSize: (
    data: createTyreDetailSizePayload
  ) => Promise<ApiReturnType<createTyreDetailResponse>>;
  getTyreDetailSizes: (
    payload: getTyreDetailSizesPayload
  ) => Promise<ApiReturnType<TyreDetailSizePayload[]>>;
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
  speedRatings: SpeedRating[];
  loadIndexes: LoadIndexes[];
  productLines: ProductLine[];
};

export type TyreDataProps = TyresStateProps & TyresDispatchProps;

type productLineCreateInit = {
  type: typeof PRODUCT_LINE_CREATE_INIT;
};
type productLineCreateSuccess = {
  type: typeof PRODUCT_LINE_CREATE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type productLineCreateFail = {
  type: typeof PRODUCT_LINE_CREATE_FAIL;
};
type productLinesFetchInit = {
  type: typeof PRODUCT_LINES_FETCH_INIT;
};
type productLinesFetchSuccess = {
  type: typeof PRODUCT_LINES_FETCH_SUCCESS;
  payload: ApiReturnType<ProductLinePayload[]>;
};
type productLinesFetchFail = {
  type: typeof PRODUCT_LINES_FETCH_FAIL;
};

type loadIndexCreateInit = {
  type: typeof LOAD_INDEX_CREATE_INIT;
};
type loadIndexCreateSuccess = {
  type: typeof LOAD_INDEX_CREATE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type loadIndexCreateFail = {
  type: typeof LOAD_INDEX_CREATE_FAIL;
};
type loadIndexesFetchInit = {
  type: typeof LOAD_INDEXES_FETCH_INIT;
};
type loadIndexesFetchSuccess = {
  type: typeof LOAD_INDEXES_FETCH_SUCCESS;
  payload: ApiReturnType<LoadIndexPayload[]>;
};
type loadIndexesFetchFail = {
  type: typeof LOAD_INDEXES_FETCH_FAIL;
};
type speedRatingCreateInit = {
  type: typeof SPEED_RATING_CREATE_INIT;
};
type speedRatingCreateSuccess = {
  type: typeof SPEED_RATING_CREATE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type speedRatingCreateFail = {
  type: typeof SPEED_RATING_CREATE_FAIL;
};
type speedRatingsFetchInit = {
  type: typeof SPEED_RATINGS_FETCH_INIT;
};
type speedRatingsFetchSuccess = {
  type: typeof SPEED_RATINGS_FETCH_SUCCESS;
  payload: ApiReturnType<SpeedRatingPayload[]>;
};
type speedRatingsFetchFail = {
  type: typeof SPEED_RATINGS_FETCH_FAIL;
};

type tyreDetailSizeCreateInit = {
  type: typeof TYRE_DETAIL_SIZE_CREATE_INIT;
};
type tyreDetailSizeCreateSuccess = {
  type: typeof TYRE_DETAIL_SIZE_CREATE_SUCCESS;
  payload: ApiReturnType<createTyreDetailResponse>;
};
type tyreDetailSizeCreateFail = {
  type: typeof TYRE_DETAIL_SIZE_CREATE_FAIL;
};

type tyreDetailSizesFetchInit = {
  type: typeof TYRE_DETAIL_SIZES_FETCH_INIT;
};
type tyreDetailSizesFetchSuccess = {
  type: typeof TYRE_DETAIL_SIZES_FETCH_SUCCESS;
  payload: ApiReturnType<TyreDetailSizePayload[]>;
};
type tyreDetailSizesFetchFail = {
  type: typeof TYRE_DETAIL_SIZES_FETCH_FAIL;
};

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

type brandDeleteInit = {
  type: typeof BRAND_DELETE_INIT;
};
type brandDeleteSuccess = {
  type: typeof BRAND_DELETE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type brandDeleteFail = {
  type: typeof BRAND_DELETE_FAIL;
};
type brandUpdateInit = {
  type: typeof BRAND_UPDATE_INIT;
};
type brandUpdateSuccess = {
  type: typeof BRAND_UPDATE_SUCCESS;
  payload: ApiReturnType<createBrandResponse>;
};
type brandUpdateFail = {
  type: typeof BRAND_UPDATE_FAIL;
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
  | productLineCreateInit
  | productLineCreateSuccess
  | productLineCreateFail
  | productLinesFetchInit
  | productLinesFetchSuccess
  | productLinesFetchFail
  | loadIndexCreateInit
  | loadIndexCreateSuccess
  | loadIndexCreateFail
  | loadIndexesFetchInit
  | loadIndexesFetchSuccess
  | loadIndexesFetchFail
  | speedRatingCreateInit
  | speedRatingCreateSuccess
  | speedRatingCreateFail
  | speedRatingsFetchInit
  | speedRatingsFetchSuccess
  | speedRatingsFetchFail
  | tyreDetailSizeCreateInit
  | tyreDetailSizeCreateSuccess
  | tyreDetailSizeCreateFail
  | tyreDetailSizesFetchInit
  | tyreDetailSizesFetchSuccess
  | tyreDetailSizesFetchFail
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
  | brandDeleteInit
  | brandDeleteSuccess
  | brandDeleteFail
  | brandUpdateInit
  | brandUpdateSuccess
  | brandUpdateFail
  | brandCreateInit
  | brandCreateSuccess
  | brandCreateFail
  | brandsFetchInit
  | brandsFetchSuccess
  | brandsFetchFail;
