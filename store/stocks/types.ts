import { AdminPanelProps } from "@Store/adminPanel/types";
import { ApiReturnType } from "@Store/api";
import { Order } from "@Store/orders/types";
import {
  Brand,
  LoadIndexes,
  SpeedRating,
  TyreDataProps,
  TyresDispatchProps,
  TyresStateProps,
} from "@Store/tyre/types";
import { User } from "@Store/users/types";

export const STOCK_UPDATE_INIT = "STOCK:UPDATE:INIT";
export const STOCK_UPDATE_SUCCESS = "STOCK:UPDATE:SUCCESS";
export const STOCK_UPDATE_FAIL = "STOCK:UPDATE:FAIL";
export const STOCK_BY_ID_FETCH_INIT = "STOCK_BY_ID:FETCH:INIT";
export const STOCK_BY_ID_FETCH_SUCCESS = "STOCK_BY_ID:FETCH:SUCCESS";
export const STOCK_BY_ID_FETCH_FAIL = "STOCK_BY_ID:FETCH:FAIL";
export const STOCK_DELETE_INIT = "STOCK:DELETE:INIT";
export const STOCK_DELETE_SUCCESS = "STOCK:DELETE:SUCCESS";
export const STOCK_DELETE_FAIL = "STOCK:DELETE:FAIL";
export const STOCK_CREATE_INIT = "STOCK:CREATE:INIT";
export const STOCK_CREATE_SUCCESS = "STOCK:CREATE:SUCCESS";
export const STOCK_CREATE_FAIL = "STOCK:CREATE:FAIL";
export const STOCKS_FETCH_INIT = "STOCKS:FETCH:INIT";
export const STOCKS_FETCH_SUCCESS = "STOCKS:FETCH:SUCCESS";
export const STOCKS_FETCH_FAIL = "STOCKS:FETCH:FAIL";

export type getStockByIdPayload = {
  id: number;
};
export type getStocksPayload = {
  search?: string;
  brandId?: number;
  tyreSize?: string;
};
export type deleteStockPayload = {
  id: number;
};

export type updateStockPayload = {
  id: number;
  dom: string;
  purchaseDate: Date;
  quantity: number;
  cost: number;
};

export type createStockPayload = {
  productLineId: number;
  tyreDetailId: number;
  dom: number;
  purchaseDate: Date;
  transportId: number;
  vendorId: number;
  locationId: number;
  quantity: number;
  cost: number;
  speedRatingId?: number;
  loadIndexId?: number;
};

export type Pattern = {
  id: number;
  name: string;
  brand: Brand;
};
export type TyreSize = {
  id: number;
  value: string;
};
export type TyreDetail = {
  id: number;
  tyreSizeId: string;
  patternId: string;
  stocks: Stock[];
  pattern: Pattern;
  tyreSize: TyreSize;
};
export type Transport = {
  id: number;
  mode: string;
  stocks: Stock[];
};
export type Vendor = {
  id: number;
  name: string;
  stocks: Stock[];
};

export type Location = {
  id: number;
  name: string;
  stocks: Stock[];
};

export type ProductLine = {
  id: number;
  name: string;
};

export type Stock = {
  id: number;
  productLine: ProductLine;
  dom: string;
  purchaseDate: Date;
  quantity: number;
  cost: number;
  soldOut: boolean;
  tyreDetail: TyreDetail;
  transport: Transport;
  vendor: Vendor;
  location: Location;
  loadIndex: LoadIndexes;
  speedRating: SpeedRating;
  user: User;
  orders: Order[];
};

export type StocksResponsePayload = {
  stocks: Stock[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
  };
};

export type Stocks = {
  loading: boolean;
  stocks: Stock[];
  total: number;
  page: number;
  lastPage: number;
  stock: Stock;
};

export type StocksPayload = Stock[];
export type deleteStockResponse = {};
export type createStockResponse = {};
export type StocksStateProps = {
  stocks: Stock[];
  total: number;
  page: number;
  lastPage: number;
  loading: boolean;
  user: User;
};
export type StocksDispatchProps = {
  deleteStock: (
    data: deleteStockPayload
  ) => Promise<ApiReturnType<deleteStockResponse>>;
  getStocks: (
    payload: getStocksPayload
  ) => Promise<ApiReturnType<StocksPayload[]>>;
  createStock: (
    data: createStockPayload
  ) => Promise<ApiReturnType<createStockResponse>>;
};

export type UpdateStockStateProps = {
  loading: boolean;
  stock: Stock;
};
export type UpdateStockDispatchProps = {
  getStockById: (payload: getStockByIdPayload) => Promise<ApiReturnType<Stock>>;
  updateStock: (
    data: updateStockPayload
  ) => Promise<ApiReturnType<createStockResponse>>;
};

export type UpdateProps = CreateStockProps &
  UpdateStockStateProps &
  UpdateStockDispatchProps;

export type StocksProps = StocksStateProps & StocksDispatchProps;
export type CreateStockProps = StocksProps & AdminPanelProps & TyreDataProps;

type stockUpdateInit = {
  type: typeof STOCK_UPDATE_INIT;
};
type stockUpdateSuccess = {
  type: typeof STOCK_UPDATE_SUCCESS;
  payload: ApiReturnType<createStockResponse>;
};
type stockUpdateFail = {
  type: typeof STOCK_UPDATE_FAIL;
};
type stockByIdFetchInit = {
  type: typeof STOCK_BY_ID_FETCH_INIT;
};
type stockByIdFetchSuccess = {
  type: typeof STOCK_BY_ID_FETCH_SUCCESS;
  payload: ApiReturnType<Stock>;
};
type stockByIdFetchFail = {
  type: typeof STOCK_BY_ID_FETCH_FAIL;
};
type stockDeleteInit = {
  type: typeof STOCK_DELETE_INIT;
};
type stockDeleteSuccess = {
  type: typeof STOCK_DELETE_SUCCESS;
  payload: ApiReturnType<deleteStockResponse>;
};
type stockDeleteFail = {
  type: typeof STOCK_DELETE_FAIL;
};
type stockCreateInit = {
  type: typeof STOCK_CREATE_INIT;
};
type stockCreateSuccess = {
  type: typeof STOCK_CREATE_SUCCESS;
  payload: ApiReturnType<createStockResponse>;
};
type stockCreateFail = {
  type: typeof STOCK_CREATE_FAIL;
};

type stocksFetchInit = {
  type: typeof STOCKS_FETCH_INIT;
};
type stocksFetchSuccess = {
  type: typeof STOCKS_FETCH_SUCCESS;
  payload: ApiReturnType<StocksResponsePayload>;
};
type stocksFetchFail = {
  type: typeof STOCKS_FETCH_FAIL;
};

export type StockActionTypes =
  | stockUpdateInit
  | stockUpdateSuccess
  | stockUpdateFail
  | stockByIdFetchInit
  | stockByIdFetchSuccess
  | stockByIdFetchFail
  | stockDeleteInit
  | stockDeleteSuccess
  | stockDeleteFail
  | stockCreateInit
  | stockCreateSuccess
  | stockCreateFail
  | stocksFetchInit
  | stocksFetchSuccess
  | stocksFetchFail;
